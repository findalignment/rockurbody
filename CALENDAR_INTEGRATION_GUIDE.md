# Calendar Integration Guide

## Overview
Every purchase option now has its own dedicated scheduling page with embedded Cal.com calendars. This guide shows you exactly which Cal.com calendar link to use for each page.

---

## Calendar Links Reference

### Your Cal.com Calendar Links:
- **30 minutes:** `rockyourbody/30min`
- **60 minutes:** `rockyourbody/60min`
- **90 minutes:** `rockyourbody/90min`
- **2 hours (120 minutes):** `rockyourbody/2hr`

---

## Scheduling Pages and Their Required Calendars

### Movement Education Packages

#### ScheduleMovement5Pack.jsx
- **Calendar needed:** 60min
- **Current placeholder:** `data-cal-link="rockyourbody/60min"`
- **Purpose:** 5-session movement package scheduling

#### ScheduleMovement10Pack.jsx
- **Calendar needed:** 60min
- **Current placeholder:** `data-cal-link="rockyourbody/60min"`
- **Purpose:** 10-session movement package scheduling

#### ScheduleMovement20Pack.jsx
- **Calendar needed:** 60min
- **Current placeholder:** `data-cal-link="rockyourbody/60min"`
- **Purpose:** 20-session movement package scheduling

---

### Single Movement Sessions

#### ScheduleSingleMove30.jsx
- **Calendar needed:** 30min
- **Current placeholder:** `data-cal-link="rockyourbody/30min"`
- **Purpose:** Single 30-minute movement session

#### ScheduleSingleMove60.jsx
- **Calendar needed:** 60min
- **Current placeholder:** `data-cal-link="rockyourbody/60min"`
- **Purpose:** Single 60-minute movement session

#### ScheduleSingleMove90.jsx
- **Calendar needed:** 90min
- **Current placeholder:** `data-cal-link="rockyourbody/90min"`
- **Purpose:** Single 90-minute movement session

#### ScheduleSingleMove120.jsx
- **Calendar needed:** 2hr
- **Current placeholder:** `data-cal-link="rockyourbody/2hr"`
- **Purpose:** Single 2-hour movement session

---

### Single SI Sessions

#### ScheduleSingleSI60.jsx
- **Calendar needed:** 60min
- **Current placeholder:** `data-cal-link="rockyourbody/60min"`
- **Purpose:** Single 60-minute SI session

#### ScheduleSingleSI90.jsx
- **Calendar needed:** 90min
- **Current placeholder:** `data-cal-link="rockyourbody/90min"`
- **Purpose:** Single 90-minute SI session

#### ScheduleSingleSI120.jsx
- **Calendar needed:** 2hr
- **Current placeholder:** `data-cal-link="rockyourbody/2hr"`
- **Purpose:** Single 2-hour SI session

---

### Structural Integration Series

#### Schedule12Series.jsx
- **Calendars needed:** TWO calendars
  1. **90min** for sessions 1-7, 9-12: `data-cal-link="rockyourbody/90min"`
  2. **2hr** for session 8: `data-cal-link="rockyourbody/2hr"`
- **Purpose:** Complete 12-Series SI program

#### ScheduleHipSeries.jsx
- **Calendar needed:** 90min
- **Current placeholder:** `data-cal-link="rockyourbody/90min"`
- **Purpose:** 3-session Hip Series SI program

---

### Combination Programs

#### ScheduleTheReset.jsx
- **Calendars needed:** TWO calendars
  1. **90min** for 3 SI sessions: `data-cal-link="rockyourbody/90min"`
  2. **60min** for 3 Movement sessions: `data-cal-link="rockyourbody/60min"`
- **Purpose:** The Reset combo program

#### ScheduleHipFreedom.jsx
- **Calendars needed:** TWO calendars
  1. **90min** for 3 Hip Series SI sessions: `data-cal-link="rockyourbody/90min"`
  2. **60min** for 3 Movement sessions: `data-cal-link="rockyourbody/60min"`
- **Purpose:** Hip Freedom combo program

#### ScheduleFullRepatterning.jsx
- **Calendars needed:** THREE calendars
  1. **90min** for SI sessions 1-7, 9-12: `data-cal-link="rockyourbody/90min"`
  2. **2hr** for SI session 8: `data-cal-link="rockyourbody/2hr"`
  3. **60min** for 24 Movement sessions: `data-cal-link="rockyourbody/60min"`
- **Purpose:** Full Repatterning (12-Series + 24 Movement)

---

### Legacy Pages (Still Active)

#### ScheduleMovement60.jsx
- **Calendar needed:** 60min
- **Current placeholder:** `data-cal-link="rockyourbody/60min"`
- **Purpose:** Generic 60-minute movement scheduling

#### ScheduleCombo.jsx
- **Calendars needed:** TWO calendars
  1. **90min** for SI sessions: `data-cal-link="rockyourbody/90min"`
  2. **60min** for Movement sessions: `data-cal-link="rockyourbody/60min"`
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

1. **30-minute session** → URL: `rockyourbody/30min`
2. **60-minute session** → URL: `rockyourbody/60min`
3. **90-minute session** → URL: `rockyourbody/90min`
4. **2-hour session** → URL: `rockyourbody/2hr`

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
| 5-Session Movement | 60min | `src/pages/ScheduleMovement5Pack.jsx` |
| 10-Session Movement | 60min | `src/pages/ScheduleMovement10Pack.jsx` |
| 20-Session Movement | 60min | `src/pages/ScheduleMovement20Pack.jsx` |
| Single Move 30min | 30min | `src/pages/ScheduleSingleMove30.jsx` |
| Single Move 60min | 60min | `src/pages/ScheduleSingleMove60.jsx` |
| Single Move 90min | 90min | `src/pages/ScheduleSingleMove90.jsx` |
| Single Move 120min | 2hr | `src/pages/ScheduleSingleMove120.jsx` |
| Single SI 60min | 60min | `src/pages/ScheduleSingleSI60.jsx` |
| Single SI 90min | 90min | `src/pages/ScheduleSingleSI90.jsx` |
| Single SI 120min | 2hr | `src/pages/ScheduleSingleSI120.jsx` |
| 12-Series | 90min + 2hr | `src/pages/Schedule12Series.jsx` |
| Hip Series | 90min | `src/pages/ScheduleHipSeries.jsx` |
| The Reset | 90min + 60min | `src/pages/ScheduleTheReset.jsx` |
| Hip Freedom | 90min + 60min | `src/pages/ScheduleHipFreedom.jsx` |
| Full Repatterning | 90min + 2hr + 60min | `src/pages/ScheduleFullRepatterning.jsx` |

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

