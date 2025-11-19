/**
 * Booking utility functions for Cal.com integration
 * 
 * These functions can be used both in the browser (via API calls)
 * and in serverless functions (direct implementation)
 */

const TIMEZONE = "America/Los_Angeles";

/**
 * Check availability in Cal.com calendar
 * @param {string} startTime - Start time in ISO 8601 format
 * @param {string} endTime - End time in ISO 8601 format
 * @param {string} eventTypeId - Optional event type ID
 * @returns {Promise<object>} - Availability result
 */
export async function checkAvailability(startTime, endTime, eventTypeId = null) {
  try {
    const body = {
      startTime,
      endTime
    };
    
    if (eventTypeId) {
      body.eventTypeId = eventTypeId;
    }

    const response = await fetch(`/api/booking?action=checkAvailability`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(error.error || 'Failed to check availability');
    }

    const data = await response.json();
    return {
      available: data.available,
      slots: data.slots
    };
  } catch (error) {
    console.error('Error checking availability:', error);
    return { 
      error: error.message,
      available: false 
    };
  }
}

/**
 * Book an appointment in Cal.com
 * @param {string} name - Client's full name
 * @param {string} email - Client's email address
 * @param {string} startTime - Appointment start time in ISO 8601 format
 * @param {string} eventTypeId - Optional event type ID
 * @returns {Promise<object>} - Booking result
 */
export async function bookAppointment(name, email, startTime, eventTypeId = null) {
  try {
    const body = {
      name,
      email,
      startTime
    };
    
    if (eventTypeId) {
      body.eventTypeId = eventTypeId;
    }

    const response = await fetch(`/api/booking?action=bookAppointment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(error.error || 'Failed to book appointment');
    }

    const data = await response.json();
    return {
      success: true,
      bookingId: data.bookingId,
      bookingUid: data.bookingUid
    };
  } catch (error) {
    console.error('Error booking appointment:', error);
    return { 
      error: error.message,
      success: false 
    };
  }
}

