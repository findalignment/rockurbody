# Booking Pages Reference

This document maps all booking and scheduling pages to their corresponding packages and services.

## Main Booking Pages

### General Booking
- **Route:** `/book`
- **File:** `src/pages/Book.jsx`
- **Purpose:** General booking page with Cal.com calendar for all session types
- **Full URL:** `https://rockurbody.com/book`
- **Cal.com Link:** `https://cal.com/rockyourbody`

### Free Consultation
- **Route:** `/consult`
- **File:** `src/pages/BookConsult.jsx`
- **Purpose:** Free 15-minute consultation call
- **Full URL:** `https://rockurbody.com/consult`
- **Cal.com Link:** `https://cal.com/rockyourbody/consult`

---

## Category Booking Pages

### Structural Integration Booking
- **Route:** `/book/structural-integration`
- **File:** `src/pages/BookStructuralIntegration.jsx`
- **Purpose:** Purchase and book Structural Integration sessions
- **Full URL:** `https://rockurbody.com/book/structural-integration`
- **Options:**
  - Single Sessions: 60min ($180), 90min ($270), 120min ($360)
  - Series: 12-Series ($3,000), Hip Series ($720)

### Movement Education Booking
- **Route:** `/book/movement-education`
- **File:** `src/pages/BookMovementEducation.jsx`
- **Purpose:** Purchase and book Movement Education sessions
- **Full URL:** `https://rockurbody.com/book/movement-education`
- **Options:**
  - Single Sessions: 30min ($100), 60min ($180), 90min ($270), 120min ($360)
  - Packages: 5-Pack ($810), 10-Pack ($1,530), 20-Pack ($2,880)

### Combination Programs Booking
- **Route:** `/book/combo-programs`
- **File:** `src/pages/BookComboPrograms.jsx`
- **Purpose:** Purchase combination programs (SI + Movement)
- **Full URL:** `https://rockurbody.com/book/combo-programs`
- **Options:**
  - The Reset: 6 sessions (3 SI + 3 Movement) - $990 → Redirects to: `https://rockurbody.com/schedule/the-reset`
  - Hip Freedom - Basic: 8 sessions (4 SI + 4 Movement) - $1,320 → Redirects to: `https://rockurbody.com/schedule/hip-freedom-basic`
  - Hip Freedom - Extended: 12 sessions (6 SI + 6 Movement) - $1,920 → Redirects to: `https://rockurbody.com/schedule/hip-freedom-extended`
  - Full Repatterning - Basic: 24 sessions (12 SI + 12 Movement) - $3,720 → Redirects to: `https://rockurbody.com/schedule/full-repatterning-basic`
  - Full Repatterning - Premium: 36 sessions (12 SI 90min + 24 Movement) - $5,400 → Redirects to: `https://rockurbody.com/schedule/full-repatterning-premium`
  - Full Repatterning - Ultimate: 48 sessions (12 SI 90min + 36 Movement) - $7,200 → Redirects to: `https://rockurbody.com/schedule/full-repatterning-ultimate`

---

## Individual Session Booking Pages

These pages are for direct booking of specific session types (typically used after purchase).

### Movement Education Single Sessions
- **Route:** `/book/move30`
- **File:** `src/pages/BookMove30.jsx`
- **Session:** 30-minute Movement Education
- **Price:** $100

- **Route:** `/book/move60`
- **File:** `src/pages/BookMove60.jsx`
- **Session:** 60-minute Movement Education
- **Price:** $180

- **Route:** `/book/move90`
- **File:** `src/pages/BookMove90.jsx`
- **Session:** 90-minute Movement Education
- **Price:** $270

- **Route:** `/book/move120`
- **File:** `src/pages/BookMove120.jsx`
- **Session:** 120-minute Movement Education
- **Price:** $360

### Structural Integration Single Sessions
- **Route:** `/book/si60`
- **File:** `src/pages/BookSI60.jsx`
- **Session:** 60-minute Structural Integration
- **Price:** $180

- **Route:** `/book/si90`
- **File:** `src/pages/BookSI90.jsx`
- **Session:** 90-minute Structural Integration
- **Price:** $270

- **Route:** `/book/si120`
- **File:** `src/pages/BookSI120.jsx`
- **Session:** 120-minute Structural Integration
- **Price:** $360

---

## Schedule Pages (Post-Purchase)

These pages are shown after a purchase is completed, allowing clients to schedule their sessions.

### Structural Integration Series

#### 12-Series
- **Route:** `/schedule/12-series`
- **File:** `src/pages/Schedule12Series.jsx`
- **Package:** 12-Series Complete Protocol ($3,000)
- **Sessions:** 12 sessions total
  - Sessions 1-7, 9-12: 90-minute sessions
  - Session 8: 2-hour session
- **Full URL:** `https://rockurbody.com/schedule/12-series`
- **Cal.com Links:**
  - Sessions 1-7, 9-12 (90 min) → `https://cal.com/rockyourbody/si90`
  - Session 8 (2 hours) → `https://cal.com/rockyourbody/si120`

#### Hip Series
- **Route:** `/schedule/hip-series`
- **File:** `src/pages/ScheduleHipSeries.jsx`
- **Package:** Hip Series ($720)
- **Sessions:** 3 sessions, 90 minutes each
- **Full URL:** `https://rockurbody.com/schedule/hip-series`
- **Cal.com Link:** `https://cal.com/rockyourbody/si90`

### Movement Education Packages

#### 5-Session Movement Package
- **Route:** `/schedule/movement-5`
- **File:** `src/pages/ScheduleMovement5Pack.jsx`
- **Package:** 5-Pack Movement Education ($810)
- **Sessions:** 5 sessions, 60 minutes each
- **Full URL:** `https://rockurbody.com/schedule/movement-5`
- **Cal.com Link:** `https://cal.com/rockyourbody/move60`

#### 10-Session Movement Package
- **Route:** `/schedule/movement-10`
- **File:** `src/pages/ScheduleMovement10Pack.jsx`
- **Package:** 10-Pack Movement Education ($1,530)
- **Sessions:** 10 sessions, 60 minutes each
- **Full URL:** `https://rockurbody.com/schedule/movement-10`
- **Cal.com Link:** `https://cal.com/rockyourbody/move60`

#### 20-Session Movement Package
- **Route:** `/schedule/movement-20`
- **File:** `src/pages/ScheduleMovement20Pack.jsx`
- **Package:** 20-Pack Movement Education ($2,880)
- **Sessions:** 20 sessions, 60 minutes each
- **Full URL:** `https://rockurbody.com/schedule/movement-20`
- **Cal.com Link:** `https://cal.com/rockyourbody/move60`

#### General Movement 60-Minute Sessions
- **Route:** `/schedule/movement-60`
- **File:** `src/pages/ScheduleMovement60.jsx`
- **Purpose:** Schedule 60-minute Movement Education sessions
- **Full URL:** `https://rockurbody.com/schedule/movement-60`
- **Cal.com Link:** `https://cal.com/rockyourbody/move60`

### Single Session Scheduling

#### Movement Education Single Sessions
- **Route:** `/schedule/single-move-30`
- **File:** `src/pages/ScheduleSingleMove30.jsx`
- **Session:** 30-minute Movement Education
- **Full URL:** `https://rockurbody.com/schedule/single-move-30`
- **Cal.com Link:** `https://cal.com/rockyourbody/move30`

- **Route:** `/schedule/single-move-60`
- **File:** `src/pages/ScheduleSingleMove60.jsx`
- **Session:** 60-minute Movement Education
- **Full URL:** `https://rockurbody.com/schedule/single-move-60`
- **Cal.com Link:** `https://cal.com/rockyourbody/move60`

- **Route:** `/schedule/single-move-90`
- **File:** `src/pages/ScheduleSingleMove90.jsx`
- **Session:** 90-minute Movement Education
- **Full URL:** `https://rockurbody.com/schedule/single-move-90`
- **Cal.com Link:** `https://cal.com/rockyourbody/move90`

- **Route:** `/schedule/single-move-120`
- **File:** `src/pages/ScheduleSingleMove120.jsx`
- **Session:** 120-minute Movement Education
- **Full URL:** `https://rockurbody.com/schedule/single-move-120`
- **Cal.com Link:** `https://cal.com/rockyourbody/move120`

#### Structural Integration Single Sessions
- **Route:** `/schedule/single-si-60`
- **File:** `src/pages/ScheduleSingleSI60.jsx`
- **Session:** 60-minute Structural Integration
- **Full URL:** `https://rockurbody.com/schedule/single-si-60`
- **Cal.com Link:** `https://cal.com/rockyourbody/si60`

- **Route:** `/schedule/single-si-90`
- **File:** `src/pages/ScheduleSingleSI90.jsx`
- **Session:** 90-minute Structural Integration
- **Full URL:** `https://rockurbody.com/schedule/single-si-90`
- **Cal.com Link:** `https://cal.com/rockyourbody/si90`

- **Route:** `/schedule/single-si-120`
- **File:** `src/pages/ScheduleSingleSI120.jsx`
- **Session:** 120-minute Structural Integration
- **Full URL:** `https://rockurbody.com/schedule/single-si-120`
- **Cal.com Link:** `https://cal.com/rockyourbody/si120`

### Combination Programs

#### The Reset
- **Route:** `/schedule/the-reset`
- **File:** `src/pages/ScheduleTheReset.jsx`
- **Package:** The Reset ($990)
- **Sessions:** 6 sessions total
  - 3 SI sessions (90 min)
  - 3 Movement sessions (60 min)
- **Full URL:** `https://rockurbody.com/schedule/the-reset`
- **Cal.com Links:**
  - SI sessions (90 min) → `https://cal.com/rockyourbody/si90`
  - Movement sessions (60 min) → `https://cal.com/rockyourbody/move60`

#### Hip Freedom - Basic
- **Route:** `/schedule/hip-freedom-basic`
- **File:** `src/pages/ScheduleHipFreedomBasic.jsx`
- **Package:** Hip Freedom - Basic ($1,320)
- **Sessions:** 8 sessions total
  - 4 SI sessions (60 min)
  - 4 Movement sessions (60 min)
- **Full URL:** `https://rockurbody.com/schedule/hip-freedom-basic`
- **Cal.com Links:**
  - SI sessions (60 min) → `https://cal.com/rockyourbody/si60`
  - Movement sessions (60 min) → `https://cal.com/rockyourbody/move60`

#### Hip Freedom - Extended
- **Route:** `/schedule/hip-freedom-extended`
- **File:** `src/pages/ScheduleHipFreedomExtended.jsx`
- **Package:** Hip Freedom - Extended ($1,920)
- **Sessions:** 12 sessions total
  - 6 SI sessions (60 min)
  - 6 Movement sessions (60 min)
- **Full URL:** `https://rockurbody.com/schedule/hip-freedom-extended`
- **Cal.com Links:**
  - SI sessions (60 min) → `https://cal.com/rockyourbody/si60`
  - Movement sessions (60 min) → `https://cal.com/rockyourbody/move60`

#### Full Repatterning - Basic
- **Route:** `/schedule/full-repatterning-basic`
- **File:** `src/pages/ScheduleFullRepatterningBasic.jsx`
- **Package:** Full Repatterning - Basic ($3,720)
- **Sessions:** 24 sessions total
  - 12 SI sessions (60 min)
  - 12 Movement sessions (60 min)
- **Full URL:** `https://rockurbody.com/schedule/full-repatterning-basic`
- **Cal.com Links:**
  - SI sessions (60 min) → `https://cal.com/rockyourbody/si60`
  - Movement sessions (60 min) → `https://cal.com/rockyourbody/move60`

#### Full Repatterning - Premium
- **Route:** `/schedule/full-repatterning-premium`
- **File:** `src/pages/ScheduleFullRepatterningPremium.jsx`
- **Package:** Full Repatterning - Premium ($5,400)
- **Sessions:** 36 sessions total
  - 12 SI sessions (eleven 90-min + one 2-hour)
  - 24 Movement sessions (60 min)
- **Full URL:** `https://rockurbody.com/schedule/full-repatterning-premium`
- **Cal.com Links:**
  - SI sessions 1-7, 9-12 (90 min) → `https://cal.com/rockyourbody/si90`
  - SI session 8 (2 hours) → `https://cal.com/rockyourbody/si120`
  - Movement sessions (60 min) → `https://cal.com/rockyourbody/move60`

#### Full Repatterning - Ultimate
- **Route:** `/schedule/full-repatterning-ultimate`
- **File:** `src/pages/ScheduleFullRepatterningUltimate.jsx`
- **Package:** Full Repatterning - Ultimate ($7,200)
- **Sessions:** 48 sessions total
  - 12 SI sessions (eleven 90-min + one 2-hour)
  - 36 Movement sessions (60 min)
- **Full URL:** `https://rockurbody.com/schedule/full-repatterning-ultimate`
- **Cal.com Links:**
  - SI sessions 1-7, 9-12 (90 min) → `https://cal.com/rockyourbody/si90`
  - SI session 8 (2 hours) → `https://cal.com/rockyourbody/si120`
  - Movement sessions (60 min) → `https://cal.com/rockyourbody/move60`

#### General Combo Program
- **Route:** `/schedule/combo`
- **File:** `src/pages/ScheduleCombo.jsx`
- **Purpose:** General scheduling page for combination programs
- **Full URL:** `https://rockurbody.com/schedule/combo`
- **Cal.com Links:**
  - SI sessions (90 min) → `https://cal.com/rockyourbody/si90`
  - Movement sessions (60 min) → `https://cal.com/rockyourbody/move60`

---

## Cal.com Calendar Links Reference

### Movement Education
- 30-minute: `https://cal.com/rockyourbody/move30`
- 60-minute: `https://cal.com/rockyourbody/move60`
- 90-minute: `https://cal.com/rockyourbody/move90`
- 120-minute: `https://cal.com/rockyourbody/move120`

### Structural Integration
- 60-minute: `https://cal.com/rockyourbody/si60`
- 90-minute: `https://cal.com/rockyourbody/si90`
- 120-minute: `https://cal.com/rockyourbody/si120`

### Other
- General booking: `https://cal.com/rockyourbody`
- Consultation: `https://cal.com/rockyourbody/consult`

---

## Package Summary

### Structural Integration Packages
1. **12-Series** - $3,000 (12 sessions)
2. **Hip Series** - $720 (3 sessions, 90 min each)

### Movement Education Packages
1. **5-Pack** - $810 (5 sessions, 60 min each) - 10% savings
2. **10-Pack** - $1,530 (10 sessions, 60 min each) - 15% savings
3. **20-Pack** - $2,880 (20 sessions, 60 min each) - 20% savings

### Combination Programs
1. **The Reset** - $990 (6 sessions: 3 SI + 3 Movement)
2. **Hip Freedom - Basic** - $1,320 (8 sessions: 4 SI + 4 Movement)
3. **Hip Freedom - Extended** - $1,920 (12 sessions: 6 SI + 6 Movement)
4. **Full Repatterning - Basic** - $3,720 (24 sessions: 12 SI + 12 Movement)
5. **Full Repatterning - Premium** - $5,400 (36 sessions: 12 SI 90min + 24 Movement)
6. **Full Repatterning - Ultimate** - $7,200 (48 sessions: 12 SI 90min + 36 Movement)

---

## Notes

- All schedule pages include a success message and instructions for clients
- Combination program schedule pages include both SI and Movement calendars
- Clients are encouraged to bookmark schedule pages for easy access
- Session spacing recommendations are provided on schedule pages
- All booking pages use the `PaymentButton` component for Stripe integration
- Schedule pages are accessed after successful payment completion

