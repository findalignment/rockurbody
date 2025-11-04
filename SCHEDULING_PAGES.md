# Scheduling Pages Reference

This document lists all scheduling/booking pages in the Rock Your Body website. These pages contain embedded Cal.com calendars for booking specific services.

## Main Booking Pages

- **[Book](/book)** - Main booking page with full calendar
  - File: `src/pages/Book.jsx`
  - Route: `/book`
  
- **[Book Consultation](/consult)** - Free 15-minute consultation
  - File: `src/pages/BookConsult.jsx`
  - Route: `/consult`

## Single Session Booking Pages

### Movement Education Sessions

- **[Book 30-Minute Movement Session](/book/move30)**
  - File: `src/pages/BookMove30.jsx`
  - Route: `/book/move30`
  
- **[Book 60-Minute Movement Session](/book/move60)**
  - File: `src/pages/BookMove60.jsx`
  - Route: `/book/move60`
  
- **[Book 90-Minute Movement Session](/book/move90)**
  - File: `src/pages/BookMove90.jsx`
  - Route: `/book/move90`
  
- **[Book 120-Minute Movement Session](/book/move120)**
  - File: `src/pages/BookMove120.jsx`
  - Route: `/book/move120`

### Structural Integration Sessions

- **[Book 60-Minute SI Session](/book/si60)**
  - File: `src/pages/BookSI60.jsx`
  - Route: `/book/si60`
  
- **[Book 90-Minute SI Session](/book/si90)**
  - File: `src/pages/BookSI90.jsx`
  - Route: `/book/si90`
  
- **[Book 120-Minute SI Session](/book/si120)**
  - File: `src/pages/BookSI120.jsx`
  - Route: `/book/si120`

## Service Category Booking Pages

- **[Book Structural Integration](/book-structural-integration)**
  - File: `src/pages/BookStructuralIntegration.jsx`
  - Route: `/book-structural-integration`
  
- **[Book Movement Education](/book-movement-education)**
  - File: `src/pages/BookMovementEducation.jsx`
  - Route: `/book-movement-education`
  
- **[Book Combo Programs](/book-combo-programs)**
  - File: `src/pages/BookComboPrograms.jsx`
  - Route: `/book-combo-programs`

## Schedule Pages for Programs/Packages

### The 12-Series

- **[Schedule 12-Series](/schedule/12-series)**
  - File: `src/pages/Schedule12Series.jsx`
  - Route: `/schedule/12-series`

### Hip Series

- **[Schedule Hip Series](/schedule/hip-series)**
  - File: `src/pages/ScheduleHipSeries.jsx`
  - Route: `/schedule/hip-series`

### Movement Packages

- **[Schedule Movement 60](/schedule/movement60)**
  - File: `src/pages/ScheduleMovement60.jsx`
  - Route: `/schedule/movement60`
  
- **[Schedule Movement 5-Pack](/schedule/movement-5)**
  - File: `src/pages/ScheduleMovement5Pack.jsx`
  - Route: `/schedule/movement-5`
  
- **[Schedule Movement 10-Pack](/schedule/movement-10)**
  - File: `src/pages/ScheduleMovement10Pack.jsx`
  - Route: `/schedule/movement-10`
  
- **[Schedule Movement 20-Pack](/schedule/movement-20)**
  - File: `src/pages/ScheduleMovement20Pack.jsx`
  - Route: `/schedule/movement-20`

### Single Sessions (After Purchase)

- **[Schedule Single Move 30](/schedule/single-move30)**
  - File: `src/pages/ScheduleSingleMove30.jsx`
  - Route: `/schedule/single-move30`
  
- **[Schedule Single Move 60](/schedule/single-move60)**
  - File: `src/pages/ScheduleSingleMove60.jsx`
  - Route: `/schedule/single-move60`
  
- **[Schedule Single Move 90](/schedule/single-move90)**
  - File: `src/pages/ScheduleSingleMove90.jsx`
  - Route: `/schedule/single-move90`
  
- **[Schedule Single Move 120](/schedule/single-move120)**
  - File: `src/pages/ScheduleSingleMove120.jsx`
  - Route: `/schedule/single-move120`
  
- **[Schedule Single SI 60](/schedule/single-si60)**
  - File: `src/pages/ScheduleSingleSI60.jsx`
  - Route: `/schedule/single-si60`
  
- **[Schedule Single SI 90](/schedule/single-si90)**
  - File: `src/pages/ScheduleSingleSI90.jsx`
  - Route: `/schedule/single-si90`
  
- **[Schedule Single SI 120](/schedule/single-si120)**
  - File: `src/pages/ScheduleSingleSI120.jsx`
  - Route: `/schedule/single-si120`

### Smart Starts Packages

- **[Schedule The Reset](/schedule/the-reset)**
  - File: `src/pages/ScheduleTheReset.jsx`
  - Route: `/schedule/the-reset`
  
- **[Schedule Hip Freedom](/schedule/hip-freedom)**
  - File: `src/pages/ScheduleHipFreedom.jsx`
  - Route: `/schedule/hip-freedom`
  
- **[Schedule Full Repatterning](/schedule/full-repatterning)**
  - File: `src/pages/ScheduleFullRepatterning.jsx`
  - Route: `/schedule/full-repatterning`

### Combination Programs

- **[Schedule Combo Program](/schedule/combo)**
  - File: `src/pages/ScheduleCombo.jsx`
  - Route: `/schedule/combo`

---

## Summary

**Total Scheduling Pages:** 30

**Breakdown:**
- Main booking pages: 2
- Single session booking: 7
- Service category pages: 3
- Program/package scheduling: 18

**Note:** All scheduling pages use embedded Cal.com iframes with the `allow="payment"` attribute to enable booking and payment processing within the iframe. After successful bookings, the main `/book` page now auto-reloads to allow users to book additional sessions.

---

**Last Updated:** November 4, 2025

