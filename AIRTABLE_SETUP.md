# Airtable Setup Guide

## Required Tables

### 1. Session Packages Table
Create a table called "Session Packages" with these fields:

| Field Name | Field Type | Description |
|------------|------------|-------------|
| User ID | Single line text | Firebase user ID |
| Package Type | Single line text | e.g., "The Reset", "Hip Series" |
| Total Sessions | Number | Total sessions in package |
| Sessions Used | Number | Sessions already used |
| Sessions Remaining | Number | Sessions left to use |
| Amount Paid | Currency | Amount paid for package |
| Purchase Date | Date | When package was purchased |
| Status | Single select | Active, Completed, Cancelled |
| Stripe Session ID | Single line text | Stripe checkout session ID (for receipt lookup) |
| Cal.com Link | URL | Link to book sessions |

**Note:** The Stripe Session ID is used to fetch payment receipts and card details from Stripe.

### 2. Individual Sessions Table
Create a table called "Individual Sessions" with these fields:

| Field Name | Field Type | Description |
|------------|------------|-------------|
| User ID | Single line text | Firebase user ID |
| Package ID | Single line text | ID of the session package (optional) |
| Session Date | Date | When session was held (include time) |
| Session Type | Single line text | e.g., "Movement Education", "Structural Integration" |
| Duration | Number | Session length in minutes (30, 60, 90, 120) |
| Status | Single select | Scheduled, Completed, Cancelled |
| Notes | Long text | Session notes and progress tracking |
| Cal.com Booking ID | Single line text | Cal.com booking reference |
| Cal.com Reschedule URL | URL | Link to reschedule the session |
| Cal.com Cancel URL | URL | Link to cancel the session |

## Environment Variables

Add these to your `.env` file:

```env
AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_base_id
```

## Getting Your Airtable Credentials

1. **API Key**: Go to https://airtable.com/account → Personal access tokens → Create new token
2. **Base ID**: Go to your base → Help → API documentation → Base ID is in the URL

## Cal.com Integration

Set up these event types in Cal.com (based on your existing setup):

### Session Types (Your Cal.com Setup):
- `consult` - Free consultations
- `move30` - 30-minute Movement sessions
- `move60` - 60-minute Movement sessions
- `move90` - 90-minute Movement sessions
- `move120` - 120-minute Movement sessions
- `si60` - 60-minute Structural Integration sessions
- `si90` - 90-minute Structural Integration sessions
- `si120` - 120-minute Structural Integration sessions

### Package Breakdown:
- **The Reset**: 3 move60 + 3 si60 = $990
- **Hip Freedom - Basic**: 4 si60 + 4 move60 = $1,320
- **Hip Freedom - Extended**: 4 si60 + 8 move60 = $1,920
- **Full Repatterning - Basic**: 12 si60 + 12 move60 = $3,720
- **Full Repatterning - Extended**: 12 si60 + 24 move60 = $5,400
- **Full Repatterning - Premium**: 12 si120 + 12 move60 = $5,400
- **Full Repatterning - Ultimate**: 12 si120 + 24 move60 = $7,200

## Testing the Flow

1. User purchases a package → Stripe webhook creates record in Airtable
2. User sees package in dashboard with "Book Session" button
3. Button links to Cal.com for booking
4. After session, manually update "Sessions Used" in Airtable
5. Dashboard automatically updates remaining sessions
