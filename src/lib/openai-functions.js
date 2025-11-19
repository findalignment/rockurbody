/**
 * OpenAI Function Definitions for Chatbot
 * 
 * These functions allow the chatbot to check availability and book appointments
 * through the Cal.com API integration.
 */

export const bookingFunctions = [
  {
    name: "check_availability",
    description: "Check if time slots are available in the fitness trainer's calendar. Use this when a user asks about availability or wants to see open times.",
    parameters: {
      type: "object",
      properties: {
        start_time: {
          type: "string",
          description: "Start of the date range to check in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). Example: 2025-11-20T14:00:00Z"
        },
        end_time: {
          type: "string",
          description: "End of the date range to check in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). Should be same day or a few days after start. Example: 2025-11-20T18:00:00Z"
        }
      },
      required: ["start_time", "end_time"]
    }
  },
  {
    name: "book_appointment",
    description: "Book a fitness training session. Only use this after confirming the client's name, email, and desired time slot.",
    parameters: {
      type: "object",
      properties: {
        name: {
          type: "string",
          description: "Client's full name"
        },
        email: {
          type: "string",
          description: "Client's email address"
        },
        start_time: {
          type: "string",
          description: "Appointment start time in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)"
        }
      },
      required: ["name", "email", "start_time"]
    }
  }
];

/**
 * Execute a function call from OpenAI
 * @param {string} functionName - Name of the function to call
 * @param {object} functionArgs - Arguments for the function
 * @returns {Promise<object>} - Function execution result
 */
export async function executeFunction(functionName, functionArgs) {
  try {
    if (functionName === 'check_availability') {
      const { start_time, end_time } = functionArgs;
      
      const response = await fetch(`/api/booking?action=checkAvailability`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          startTime: start_time,
          endTime: end_time
        })
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Unknown error' }));
        return {
          success: false,
          error: error.error || 'Failed to check availability'
        };
      }

      const data = await response.json();
      
      // Format slots for better readability
      let slotsMessage = '';
      if (data.available && data.slots) {
        const slotEntries = Object.entries(data.slots);
        if (slotEntries.length > 0) {
          slotsMessage = 'Available time slots:\n';
          slotEntries.forEach(([date, times]) => {
            if (Array.isArray(times) && times.length > 0) {
              slotsMessage += `\n${date}:\n`;
              times.forEach(time => {
                slotsMessage += `  - ${time}\n`;
              });
            }
          });
        }
      }
      
      return {
        success: true,
        available: data.available,
        slots: data.slots,
        slotsFormatted: slotsMessage,
        message: data.available 
          ? `Great news! I found available time slots:\n\n${slotsMessage}\n\nWhich time works best for you?`
          : 'I checked the calendar, but there are no available slots in that time range. Would you like me to check a different date range?'
      };
    }

    if (functionName === 'book_appointment') {
      const { name, email, start_time } = functionArgs;
      
      const response = await fetch(`/api/booking?action=bookAppointment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          startTime: start_time
        })
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Unknown error' }));
        return {
          success: false,
          error: error.error || 'Failed to book appointment'
        };
      }

      const data = await response.json();
      return {
        success: true,
        bookingId: data.bookingId,
        bookingUid: data.bookingUid,
        message: `Perfect! I've successfully booked your appointment for ${start_time}. Your booking ID is ${data.bookingId || data.bookingUid}. You should receive a confirmation email shortly.`
      };
    }

    return {
      success: false,
      error: `Unknown function: ${functionName}`
    };
  } catch (error) {
    console.error('Function execution error:', error);
    return {
      success: false,
      error: error.message || 'An error occurred while executing the function'
    };
  }
}

