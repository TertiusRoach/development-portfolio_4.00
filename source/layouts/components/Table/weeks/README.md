# Navigation Weeks

A TypeScript utility designed to dynamically generate, label, and export an ISO week table for any given year, using semantic HTML class names for spreadsheet interoperability.

---

## 📌 Purpose

This module dynamically creates a week-by-week HTML table styled for seamless export to spreadsheet applications like **LibreOffice Calc** and **Microsoft Excel**. It applies semantic class names to maintain structure, roles, and data intent during export, following the conventions outlined in the [🧮 HTML to Spreadsheet Table Styling Guide](#🧮-html-to-spreadsheet-table-styling-guide).

---

## 🚀 Class Naming Convention

| HTML Element    | Class Prefix | Example Class                           | Spreadsheet Intent            |
| :-------------- | :----------- | :-------------------------------------- | :---------------------------- |
| `<table>`       | `table-*`    | `spreadsheet-table`                     | Declares exportable table     |
| `<thead>`       | `table-*`    | `table-head`                            | Contains header rows          |
| `<tbody>`       | `table-*`    | `table-body`                            | Main content area             |
| `<tr>`          | `row-*`      | `row-header`, `row-week`                | Row role: header, data, total |
| `<th>` / `<td>` | `cell-*`     | `cell-week`, `cell-date`, `cell-header` | Format/semantic info          |

---

## 📦 Usage Example

```ts
import { loadWeekdays } from './Table_weeks';

loadWeekdays('schedule-page', 'weeks-table-block');
```

- Generates a table for the current year’s weeks.
- Injects it into the DOM at `#schedule-page .weeks-table-block`.
- Ready for spreadsheet-friendly export.

---

## 💾 Full Code

```ts
// Table_weeks.ts

/**
 * Generates a spreadsheet-compatible week table for a given page and block.
 * Applies semantic classes for spreadsheet export using the HTML to Spreadsheet Table Styling Guide.
 * @param pageName - The ID of the containing page element.
 * @param blockName - The class name of the block to insert the table into.
 */
export function loadWeekdays(pageName: string, blockName: string) {
  const container = document.querySelector(`#${pageName} .${blockName}`);
  if (!container) return;

  const table = document.createElement('table');
  table.className = 'spreadsheet-table';

  const thead = document.createElement('thead');
  thead.className = 'table-head';

  const headerRow = document.createElement('tr');
  headerRow.className = 'row-header';

  const headers = ['Week', 'Start Date', 'End Date'];
  headers.forEach((text) => {
    const th = document.createElement('th');
    th.className = `cell-header cell-${text.toLowerCase().replace(' ', '-')}`;
    th.textContent = text;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  tbody.className = 'table-body';

  const startDate = new Date(new Date().getFullYear(), 0, 1);
  for (let i = 1; i <= 52; i++) {
    const row = document.createElement('tr');
    row.className = 'row-week';

    const weekCell = document.createElement('td');
    weekCell.className = 'cell-week';
    weekCell.textContent = `Week ${i}`;

    const startCell = document.createElement('td');
    startCell.className = 'cell-date';
    startCell.textContent = startDate.toDateString();

    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6);

    const endCell = document.createElement('td');
    endCell.className = 'cell-date';
    endCell.textContent = endDate.toDateString();

    row.appendChild(weekCell);
    row.appendChild(startCell);
    row.appendChild(endCell);

    tbody.appendChild(row);

    // Move to next week
    startDate.setDate(startDate.getDate() + 7);
  }

  table.appendChild(tbody);

  // Clear existing content and insert new table
  container.innerHTML = '';
  container.appendChild(table);
}
```

---

## 📌 Reference — HTML to Spreadsheet Table Styling Guide

Make your HTML tables _export-ready_ for LibreOffice Calc (and friends) with a clean class naming convention bridging the web and the spreadsheet.

### 📌 Purpose

Defines semantic, futureproof HTML class names for tables, rows, and cells to ensure consistent rendering when exporting to `.ods`, `.xlsx`, or `.csv`.

---

### 🚀 Class Naming Convention

| HTML Element    | Class Prefix | Example Class                               | Spreadsheet Intent            |
| :-------------- | :----------- | :------------------------------------------ | :---------------------------- |
| `<table>`       | `table-*`    | `spreadsheet-table`                         | Declares exportable table     |
| `<thead>`       | `table-*`    | `table-head`                                | Contains header rows          |
| `<tbody>`       | `table-*`    | `table-body`                                | Main content area             |
| `<tr>`          | `row-*`      | `row-header`, `row-week`                    | Row role: header, data, total |
| `<th>` / `<td>` | `cell-*`     | `cell-currency`, `cell-date`, `cell-header` | Format/semantic info          |

---

### 💡 Naming Logic

Stick to **semantic class names** describing purpose, not appearance.

✅ Good:

```html
<td class="cell-currency">$1,234.00</td>
<td class="cell-date">2025-05-09</td>
```

🚫 Avoid:

```html
<td class="bold-green">$1,234.00</td>
```

---

## 📖 Notes

- Adjust total week count for years where ISO-8601 calendars include 53 weeks.
- Customizable table headers and data cell types for other export scenarios.
- Integrates smoothly with vertical or horizontal carousel interfaces.
