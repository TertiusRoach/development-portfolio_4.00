# `<table>` Usage Guide

## Canonical Rules for Data Display Components

This document defines the **strict and non-negotiable rules** for using HTML `<table>` elements and table-based React components in this codebase.

The goal is scalability, clarity, and long-term maintainability.

---

## Purpose of `<table>`

The `<table>` element is reserved **exclusively** for displaying structured, relational data that originates directly from a database or database-shaped source (MongoDB, MySQL, PostgreSQL, etc.).

A `<table>` communicates intent:

> “This view represents raw, inspectable data — not layout, not decoration, not interaction.”

Tables are **data surfaces**, not UI components.

---

## When `<table>` MUST Be Used

Use `<table>` **only** when **all** of the following conditions are met:

- Data maps cleanly to **rows (records)** and **columns (fields)**
- Each row represents a **single entity or document**
- Column meaning is **stable, named, and schema-driven**
- The primary purpose is:
  - reading
  - reviewing
  - auditing
  - inspecting
  - debugging
  - administration

### Valid Use Cases

- Admin panels
- CMS back offices
- Database previews
- Logs
- Reports
- Developer-facing dashboards

If the data could reasonably live in Excel or Google Sheets, `<table>` is appropriate.

---

## Semantic Contract

Using a `<table>` creates a semantic contract:

- Rows = records
- Columns = schema fields
- Cells = raw values

A table **does not represent**:

- layout
- navigation
- storytelling
- UI state
- animation flow

Breaking this contract makes the codebase harder to reason about.

---

## DOs

### ✅ DO use `<table>` for read-only data

Tables are optimized for **inspection**, not mutation.

Allowed operations:

- sorting
- pagination
- filtering
- row selection (highlighting)

These operations act **on** data, not **within** it.

---

### ✅ DO keep tables visually restrained

Tables should prioritize clarity over flair:

- minimal animation
- predictable column widths
- consistent alignment
- shallow DOM depth

Boring is good. Boring is stable.

---

### ✅ DO treat tables as “source of truth” views

Tables are the first place data appears and the place developers go to verify correctness.

They are allowed — and encouraged — to be utilitarian.

---

### ✅ DO delegate interaction to other components

If the user needs to:

- create
- edit
- delete
- configure
- confirm

The table should **hand off** to:

- modals
- drawers
- forms
- dedicated views

The table itself remains stable and passive.

---

## DON’Ts

### ❌ DON’T use `<table>` for layout

Never use `<table>` to:

- align UI elements
- simulate grids
- center content
- structure pages

This is semantic misuse.

---

### ❌ DON’T animate tables as UI components

Avoid:

- slide transitions
- carousels
- transform-based view switching
- opacity choreography

Tables are not built for fluid animation.

If animation is required, the abstraction is wrong.

---

### ❌ DON’T embed complex UI inside cells

Avoid placing inside table cells:

- deeply nested components
- drag-and-drop logic
- heavy interactive widgets
- stateful UI flows

Cells should remain readable and predictable.

---

### ❌ DON’T use tables for narrative or user-facing content

Tables are not suitable for:

- marketing pages
- storytelling layouts
- experience-driven dashboards
- decorative content

If the goal is delight, not inspection, use components instead.

---

## Mobile & Responsiveness

Tables are **desktop-first by definition**.

On smaller screens:

- hide non-critical columns
- stack rows vertically
- present summaries instead of full schemas

Do not force tables to behave like cards.

Adapt the presentation — not the semantics.

---

## React Component Design Guidelines

When building a React `<Table>` component:

- Treat it as **purely presentational**
- Accept data via props
- Avoid owning business logic
- Emit events upward (`onRowSelect`, `onSort`, etc.)
- Keep internal state minimal or non-existent

Think:

> “This component renders truth — it does not change it.”

---

## Final Rule (Non-Negotiable)

> `<table>` is for **reading and understanding data**,  
> **not** for manipulating it, animating it, or building UI flows inside it.

If working with a table feels painful, that pain is usually a signal that the data should be abstracted or the interaction belongs elsewhere.

---

## Conclusion

Yes — it is a **good and intentional design choice** to use `<table>` **strictly** for:

- database-backed data display
- schema-aligned previews
- structured inspection

And **not** for:

- UI animation
- layout
- interaction-heavy components

Used with discipline, `<table>` becomes a powerful architectural signal rather than a legacy relic.
