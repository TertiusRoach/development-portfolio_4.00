# Tables & Data

How `<table>` is used, how the `<Table>` components get their data from the database, how that database is written so it can move from MongoDB to MySQL, and how data survives offline. The rules for *who* may see or change data live in [GUIDELINES.md](../GUIDELINES.md); this page covers *how* the data travels.

---

## Contents

1. [When to Use `<table>`](#1-when-to-use-table)
2. [The `<Table>` Component](#2-the-table-component)
3. [Spreadsheet-Ready Class Names](#3-spreadsheet-ready-class-names)
4. [Navigation Weeks (ISO 8601)](#4-navigation-weeks-iso-8601)

---

## 1. When to Use `<table>`

A `<table>` is reserved for one thing: showing structured records that come from a database. Using one says _"this is raw, inspectable data"_, not layout, not decoration, not interaction.

**Use a `<table>` only when all of these are true:**

- Each row is one record (one document or database row).
- Each column is one named field that doesn't change meaning.
- The point is to read, review, audit or inspect.

If the data could live comfortably in a spreadsheet, a `<table>` is right. Logs, reports, timesheets, admin views and database previews all qualify.

### Do

- **Keep it read-only.** Sorting, filtering, paging and highlighting a row are fine, because they act _on_ the data, not _inside_ it.
- **Keep it plain.** Predictable column widths, consistent alignment, shallow markup, minimal animation. Boring is good. Boring is stable.
- **Hand off changes.** Creating, editing, deleting or confirming happens in a form, a dialog or the overlay, never inside a cell. The table stays passive.

### Don't

- **Don't use it for layout.** Never to align elements, fake a grid or centre content.
- **Don't animate it like a UI component.** No slides, carousels or opacity choreography. If a table needs animation, it shouldn't be a table.
- **Don't put complex UI in cells.** No nested components, drag-and-drop or stateful flows.
- **Don't use it for storytelling.** If the goal is delight rather than inspection, build components instead.

### Small Screens

Tables are desktop-first by nature. On smaller screens, hide the less important columns, stack rows vertically, or show a summary. Adapt the presentation, never the meaning, and don't force a table to behave like cards.

> **Final rule:** `<table>` is for reading and understanding data, not for changing it, animating it or building flows inside it. If a table feels painful to work with, the interaction belongs somewhere else.

---

## 2. The `<Table>` Component

The `<Table>` components (`clocking`, `tracking`, and those still to come) only show data. They never fetch it or decide what it means.

- **Data comes in through props.** The component doesn't know whether it came from MongoDB, MySQL or the offline cache.
- **Events go out through callbacks** (`onRowSelect`, `onSort`…). The parent decides what happens.
- **No business logic inside.** Permissions, totals and ghost hours are calculated before the data arrives.
- **Little or no internal state.** The table renders the truth; it doesn't change it.

They follow the same file pattern and [scaling rules](RULEBOOK.md#6-scaling-pattern) as every other component.

---

## 3. Spreadsheet-Ready Class Names

Every table should export cleanly to LibreOffice Calc, Excel or `.csv`. Semantic class names keep the structure and intent intact during export:

| Element         | Prefix    | Example                                     | Meaning in the spreadsheet       |
| --------------- | --------- | ------------------------------------------- | -------------------------------- |
| `<table>`       | `table-*` | `spreadsheet-table`                         | This table can be exported       |
| `<thead>`       | `table-*` | `table-head`                                | Header rows                      |
| `<tbody>`       | `table-*` | `table-body`                                | The data                         |
| `<tr>`          | `row-*`   | `row-header`, `row-week`, `row-total`       | What kind of row it is           |
| `<th>` / `<td>` | `cell-*`  | `cell-week`, `cell-date`, `cell-currency`   | How the value should be formatted |

Name classes after what the value **is**, never how it **looks**:

```html
<td class="cell-currency">$1,234.00</td>  <!--| ✅ Describes the value |-->
<td class="bold-green">$1,234.00</td>     <!--| 🚫 Describes the style |-->
```

---

## 4. Navigation Weeks (ISO 8601)

Track a Day navigates by week, so every week needs a number, a start and an end. TraLogFin uses the international standard, **ISO 8601**:

- A week runs from **Monday to Sunday**.
- **Week 1** is the week that contains the year's first Thursday (which is always the week containing 4 January).
- A year has **52 or 53 weeks**. It has 53 when 1 January is a Thursday, or when it's a leap year and 1 January is a Wednesday.
- Week 1 can start in December of the previous year, and the last week can end in January of the next. 2026 is an example: week 1 starts on Monday 29 December 2025, and week 53 ends on Sunday 3 January 2027.

### The Data

The week list is pure data, so any `<Table>` (or menu, or carousel) can display it. All dates are calculated in UTC so daylight-saving changes can never shift a day.

```ts
//--|🠊 Table_weeks.ts 🠈|--\\
//--|🠋 Types 🠋|--\\
export interface Week {
  week: number; //--|🠈 1 to 52 or 53 🠈|--\\
  start: string; //--|🠈 Monday, 'YYYY-MM-DD' 🠈|--\\
  end: string; //--|🠈 Sunday, 'YYYY-MM-DD' 🠈|--\\
}

//--|🠋 Functions 🠋|--\\
const DAY = 86400000; //--|🠈 Milliseconds in one day 🠈|--\\

function firstMonday(year: number): number {
  //--|🠊 Week 1 always contains 4 January, so step back to that week's Monday 🠈|--\\
  const fourth = Date.UTC(year, 0, 4);
  const weekday = (new Date(fourth).getUTCDay() + 6) % 7; //--|🠈 Monday = 0, Sunday = 6 🠈|--\\
  return fourth - weekday * DAY;
}
export function countWeeks(year: number): number {
  return Math.round((firstMonday(year + 1) - firstMonday(year)) / (7 * DAY));
}
export function listWeeks(year: number): Week[] {
  const start = firstMonday(year);
  return Array.from({ length: countWeeks(year) }, (_, index) => ({
    week: index + 1,
    start: new Date(start + index * 7 * DAY).toISOString().slice(0, 10),
    end: new Date(start + (index * 7 + 6) * DAY).toISOString().slice(0, 10),
  }));
}
```

Tested against known calendars: 2020 and 2026 have 53 weeks, 2021 and 2024 have 52, and 2020's week 1 starts on 30 December 2019.

### The Table

The component receives `listWeeks(year)` as rows and renders them with the class names from Section 3:

```html
<table class="spreadsheet-table">
  <thead class="table-head">
    <tr class="row-header">
      <th class="cell-header cell-week">Week</th>
      <th class="cell-header cell-date">Start Date</th>
      <th class="cell-header cell-date">End Date</th>
    </tr>
  </thead>
  <tbody class="table-body">
    <tr class="row-week">
      <td class="cell-week">1</td>
      <td class="cell-date">2025-12-29</td>
      <td class="cell-date">2026-01-04</td>
    </tr>
  </tbody>
</table>
```

When it's built, `Table_weeks.ts` will live in `source/layouts/components/Table/weeks/`, following the component [file pattern](RULEBOOK.md#4-component-anatomy).
