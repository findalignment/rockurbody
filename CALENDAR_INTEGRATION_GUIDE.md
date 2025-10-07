# Calendar Integration Guide

## Overview
Every purchase option now has its own dedicated scheduling page with embedded Cal.com calendars. This guide shows you exactly which Cal.com calendar link to use for each page.

---

## Calendar Links Reference

### Your Cal.com Calendar Links:
- **Consultation:** `rockyourbody/consult`
- **Movement 30 minutes:** `rockyourbody/move30`
- **Movement 60 minutes:** `rockyourbody/move60`
- **Movement 90 minutes:** `rockyourbody/move90`
- **Movement 120 minutes:** `rockyourbody/move120`
- **SI 60 minutes:** `rockyourbody/si60`
- **SI 90 minutes:** `rockyourbody/si90`
- **SI 120 minutes:** `rockyourbody/si120`
- **SI 180 minutes (3 hours):** `rockyourbody/si180`

---

## Scheduling Pages and Their Required Calendars

### Movement Education Packages

#### ScheduleMovement5Pack.jsx
- **Calendar needed:** move60
- **Current placeholder:** `data-cal-link="rockyourbody/move60"`
- **Purpose:** 5-session movement package scheduling

#### ScheduleMovement10Pack.jsx
- **Calendar needed:** move60
- **Current placeholder:** `data-cal-link="rockyourbody/move60"`
- **Purpose:** 10-session movement package scheduling

#### ScheduleMovement20Pack.jsx
- **Calendar needed:** move60
- **Current placeholder:** `data-cal-link="rockyourbody/move60"`
- **Purpose:** 20-session movement package scheduling

---

### Single Movement Sessions

#### ScheduleSingleMove30.jsx
- **Calendar needed:** move30
- **Current placeholder:** `data-cal-link="rockyourbody/move30"`
- **Purpose:** Single 30-minute movement session

#### ScheduleSingleMove60.jsx
- **Calendar needed:** move60
- **Current placeholder:** `data-cal-link="rockyourbody/move60"`
- **Purpose:** Single 60-minute movement session

#### ScheduleSingleMove90.jsx
- **Calendar needed:** move90
- **Current placeholder:** `data-cal-link="rockyourbody/move90"`
- **Purpose:** Single 90-minute movement session

#### ScheduleSingleMove120.jsx
- **Calendar needed:** move120
- **Current placeholder:** `data-cal-link="rockyourbody/move120"`
- **Purpose:** Single 2-hour movement session

---

### Single SI Sessions

#### ScheduleSingleSI60.jsx
- **Calendar needed:** si60
- **Current placeholder:** `data-cal-link="rockyourbody/si60"`
- **Purpose:** Single 60-minute SI session

#### ScheduleSingleSI90.jsx
- **Calendar needed:** si90
- **Current placeholder:** `data-cal-link="rockyourbody/si90"`
- **Purpose:** Single 90-minute SI session

#### ScheduleSingleSI120.jsx
- **Calendar needed:** si120
- **Current placeholder:** `data-cal-link="rockyourbody/si120"`
- **Purpose:** Single 2-hour SI session

---

### Structural Integration Series

#### Schedule12Series.jsx
- **Calendars needed:** TWO calendars
  1. **si90** for sessions 1-7, 9-12: `data-cal-link="rockyourbody/si90"`
  2. **si180** for session 8 (3 hours): `data-cal-link="rockyourbody/si180"`
- **Purpose:** Complete 12-Series SI program

#### ScheduleHipSeries.jsx
- **Calendar needed:** si90
- **Current placeholder:** `data-cal-link="rockyourbody/si90"`
- **Purpose:** 3-session Hip Series SI program

---

### Combination Programs

#### ScheduleTheReset.jsx
- **Calendars needed:** TWO calendars
  1. **si90** for 3 SI sessions: `data-cal-link="rockyourbody/si90"`
  2. **move60** for 3 Movement sessions: `data-cal-link="rockyourbody/move60"`
- **Purpose:** The Reset combo program

#### ScheduleHipFreedom.jsx
- **Calendars needed:** TWO calendars
  1. **si90** for 3 Hip Series SI sessions: `data-cal-link="rockyourbody/si90"`
  2. **move60** for 3 Movement sessions: `data-cal-link="rockyourbody/move60"`
- **Purpose:** Hip Freedom combo program

#### ScheduleFullRepatterning.jsx
- **Calendars needed:** THREE calendars
  1. **si90** for SI sessions 1-7, 9-12: `data-cal-link="rockyourbody/si90"`
  2. **si180** for SI session 8 (3 hours): `data-cal-link="rockyourbody/si180"`
  3. **move60** for 24 Movement sessions: `data-cal-link="rockyourbody/move60"`
- **Purpose:** Full Repatterning (12-Series + 24 Movement)

---

### Legacy Pages (Still Active)

#### ScheduleMovement60.jsx
- **Calendar needed:** move60
- **Current placeholder:** `data-cal-link="rockyourbody/move60"`
- **Purpose:** Generic 60-minute movement scheduling

#### ScheduleCombo.jsx
- **Calendars needed:** TWO calendars
  1. **si90** for SI sessions: `data-cal-link="rockyourbody/si90"`
  2. **move60** for Movement sessions: `data-cal-link="rockyourbody/move60"`
- **Purpose:** Generic combo program scheduling

---

## How to Update Calendar Links

Each scheduling page has one or more calendar embed sections that look like this:

```jsx
<div 
  className="cal-inline" 
  data-cal-link="rockyourbody/60min"
  data-cal-config='{"layout":"month_view"}'
  style={{ width: '100%', height: '700px', overflow: 'scroll' }}
/>
```

### To change the calendar:
1. Find the `data-cal-link` attribute
2. Replace `"rockyourbody/60min"` with the correct calendar link from the reference above
3. Make sure the link matches your actual Cal.com event type URLs

---

## Setting Up Cal.com Event Types

Make sure you have the following event types created in your Cal.com account:

1. **Consultation** → URL: `rockyourbody/consult`
2. **Movement 30-minute** → URL: `rockyourbody/move30`
3. **Movement 60-minute** → URL: `rockyourbody/move60`
4. **Movement 90-minute** → URL: `rockyourbody/move90`
5. **Movement 120-minute** → URL: `rockyourbody/move120`
6. **SI 60-minute** → URL: `rockyourbody/si60`
7. **SI 90-minute** → URL: `rockyourbody/si90`
8. **SI 120-minute** → URL: `rockyourbody/si120`
9. **SI 180-minute (3 hours)** → URL: `rockyourbody/si180`

### If your Cal.com URLs are different:
- Update the `data-cal-link` values in each scheduling page to match your actual event type URLs
- For example, if your 60-min link is `rockyourbody/movement-60`, update all instances of `"rockyourbody/60min"` to `"rockyourbody/movement-60"`

---

## Testing Checklist

After updating calendar links, test each scheduling page:

- [ ] Movement packages (5, 10, 20 sessions)
- [ ] Single movement sessions (30, 60, 90, 120 min)
- [ ] Single SI sessions (60, 90, 120 min)
- [ ] 12-Series (both 90min and 2hr calendars)
- [ ] Hip Series
- [ ] The Reset (both calendars)
- [ ] Hip Freedom (both calendars)
- [ ] Full Repatterning (all three calendars)

Verify that:
1. Calendar loads and displays correctly
2. Available time slots show up
3. Booking flow works end-to-end
4. Confirmation emails are sent

---

## Quick Reference Table

| Page | Calendar(s) Needed | File Location |
|------|-------------------|---------------|
| 5-Session Movement | move60 | `src/pages/ScheduleMovement5Pack.jsx` |
| 10-Session Movement | move60 | `src/pages/ScheduleMovement10Pack.jsx` |
| 20-Session Movement | move60 | `src/pages/ScheduleMovement20Pack.jsx` |
| Single Move 30min | move30 | `src/pages/ScheduleSingleMove30.jsx` |
| Single Move 60min | move60 | `src/pages/ScheduleSingleMove60.jsx` |
| Single Move 90min | move90 | `src/pages/ScheduleSingleMove90.jsx` |
| Single Move 120min | move120 | `src/pages/ScheduleSingleMove120.jsx` |
| Single SI 60min | si60 | `src/pages/ScheduleSingleSI60.jsx` |
| Single SI 90min | si90 | `src/pages/ScheduleSingleSI90.jsx` |
| Single SI 120min | si120 | `src/pages/ScheduleSingleSI120.jsx` |
| 12-Series | si90 + si180 | `src/pages/Schedule12Series.jsx` |
| Hip Series | si90 | `src/pages/ScheduleHipSeries.jsx` |
| The Reset | si90 + move60 | `src/pages/ScheduleTheReset.jsx` |
| Hip Freedom | si90 + move60 | `src/pages/ScheduleHipFreedom.jsx` |
| Full Repatterning | si90 + si180 + move60 | `src/pages/ScheduleFullRepatterning.jsx` |

---

## Notes

- All calendar links are already set to placeholders matching the expected Cal.com structure
- The Cal.com embed script is loaded on all scheduling pages
- Each page includes success messaging, booking instructions, and helpful CTAs
- Combo programs prominently remind users to bookmark the page for future scheduling
- The 12-Series and Full Repatterning pages clearly distinguish between the 90-minute and 2-hour sessions

---

## Next Steps

1. Verify all Cal.com event types are created and published
2. Update any calendar links that don't match your actual Cal.com URLs
3. Test the complete booking flow for each package type
4. Ensure Stripe redirects go to the correct scheduling page after purchase
5. Update confirmation emails to include links to the appropriate scheduling pages

