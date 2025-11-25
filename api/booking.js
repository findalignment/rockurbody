/**
 * Vercel Serverless Function for Cal.com booking integration
 * 
 * This function handles checking availability and booking appointments
 * through the Cal.com API.
 * 
 * Environment variables required:
 * - CAL_API_KEY: Your Cal.com API key
 * - CAL_EVENT_TYPE_ID: Your Cal.com event type ID (optional, can be passed in request)
 * 
 * Endpoints:
 * POST /api/booking?action=checkAvailability
 * POST /api/booking?action=bookAppointment
 */

const CAL_API_KEY = process.env.CAL_API_KEY;
const DEFAULT_EVENT_TYPE_ID = process.env.CAL_EVENT_TYPE_ID || '1234567'; // Replace with your actual default event type ID
const TIMEZONE = "America/Los_Angeles";

/**
 * Check availability in Cal.com calendar
 * Exported for use in serverless functions and can be imported elsewhere
 */
export async function checkAvailability(startTime, endTime, eventTypeId = DEFAULT_EVENT_TYPE_ID) {
  try {
    // Check if Cal.com API key is configured
    if (!CAL_API_KEY) {
      console.warn('[BOOKING] CAL_API_KEY not configured, returning fallback response');
      return {
        available: true,
        slots: {},
        message: "Cal.com integration is not configured. Please contact rock@rockurbody.com directly to check availability."
      };
    }

    const params = new URLSearchParams({
      apiKey: CAL_API_KEY,
      eventTypeId: eventTypeId,
      startTime: startTime,
      endTime: endTime,
      timeZone: TIMEZONE
    });

    const response = await fetch(
      `https://api.cal.com/v1/slots?${params.toString()}`
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[BOOKING] Cal.com API error:', response.status, errorText);
      // Return graceful error instead of throwing
      return {
        available: false,
        slots: {},
        error: `Unable to check availability at this time. Please contact rock@rockurbody.com or visit https://rockurbody.com/book to schedule directly.`,
        apiError: `Cal.com API error: ${response.status}`
      };
    }

    const data = await response.json();
    return {
      available: data.slots && Object.keys(data.slots).length > 0,
      slots: data.slots || {}
    };
  } catch (error) {
    console.error('[BOOKING] Error checking availability:', error);
    // Return graceful error instead of throwing
    return {
      available: false,
      slots: {},
      error: `Unable to check availability at this time. Please contact rock@rockurbody.com or visit https://rockurbody.com/book to schedule directly.`,
      apiError: error.message
    };
  }
}

/**
 * Book an appointment in Cal.com
 * Exported for use in serverless functions and can be imported elsewhere
 */
export async function bookAppointment(name, email, startTime, eventTypeId = DEFAULT_EVENT_TYPE_ID) {
  try {
    // Check if Cal.com API key is configured
    if (!CAL_API_KEY) {
      console.warn('[BOOKING] CAL_API_KEY not configured, returning fallback response');
      return {
        success: false,
        error: "Cal.com integration is not configured. Please visit https://rockurbody.com/book to schedule directly, or contact rock@rockurbody.com for assistance.",
        bookingLink: "https://rockurbody.com/book"
      };
    }

    const payload = {
      eventTypeId: eventTypeId,
      start: startTime,
      responses: {
        name: name,
        email: email
      },
      timeZone: TIMEZONE,
      language: "en"
    };

    const params = new URLSearchParams({ apiKey: CAL_API_KEY });

    const response = await fetch(
      `https://api.cal.com/v1/bookings?${params.toString()}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('[BOOKING] Cal.com booking API error:', response.status, errorData);
      // Return graceful error instead of throwing
      return {
        success: false,
        error: `Unable to complete booking at this time. Please visit https://rockurbody.com/book to schedule directly, or contact rock@rockurbody.com for assistance.`,
        apiError: `Cal.com API error: ${response.status}`,
        bookingLink: "https://rockurbody.com/book"
      };
    }

    const booking = await response.json();
    return {
      success: true,
      bookingId: booking.id,
      bookingUid: booking.uid
    };
  } catch (error) {
    console.error('[BOOKING] Error booking appointment:', error);
    // Return graceful error instead of throwing
    return {
      success: false,
      error: `Unable to complete booking at this time. Please visit https://rockurbody.com/book to schedule directly, or contact rock@rockurbody.com for assistance.`,
      apiError: error.message,
      bookingLink: "https://rockurbody.com/book"
    };
  }
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check for required environment variables
  if (!CAL_API_KEY) {
    console.error('Missing CAL_API_KEY environment variable');
    return res.status(500).json({ error: 'Server configuration error: Missing CAL_API_KEY' });
  }

  try {
    const { action } = req.query;
    const { startTime, endTime, name, email, eventTypeId } = req.body;

    if (action === 'checkAvailability') {
      if (!startTime || !endTime) {
        return res.status(400).json({ error: 'Missing required fields: startTime and endTime' });
      }

      const result = await checkAvailability(startTime, endTime, eventTypeId);
      
      if (result.error) {
        return res.status(500).json({ error: result.error });
      }

      return res.status(200).json(result);
    }

    if (action === 'bookAppointment') {
      if (!name || !email || !startTime) {
        return res.status(400).json({ error: 'Missing required fields: name, email, and startTime' });
      }

      const result = await bookAppointment(name, email, startTime, eventTypeId);
      
      if (result.error) {
        return res.status(500).json({ error: result.error });
      }

      return res.status(200).json(result);
    }

    return res.status(400).json({ error: 'Invalid action. Use "checkAvailability" or "bookAppointment"' });
  } catch (error) {
    console.error('Booking API error:', error);
    return res.status(500).json({ error: error.message });
  }
}

