# 🧮 HTML to Spreadsheet Table Styling Guide

Make your HTML tables _export-ready_ for LibreOffice Calc (and friends) with a clean class naming convention that bridges the gap between the web and the spreadsheet.

## 📌 Purpose

This guide defines semantic, futureproof HTML class names for tables, rows, and cells to ensure consistent rendering when exporting to spreadsheet formats like `.ods` or `.xlsx`. Whether you’re using a frontend library or a backend parser, these class names give you full control over formatting logic without relying on CSS (which spreadsheets ignore anyway).

---

## 🚀 Class Naming Convention

| HTML Element    | Class Prefix | Example Class                               | Spreadsheet Intent            |
| --------------- | ------------ | ------------------------------------------- | ----------------------------- |
| `<table>`       | `table-*`    | `spreadsheet-table`                         | Declares exportable table     |
| `<thead>`       | `table-*`    | `table-head`                                | Contains header rows          |
| `<tbody>`       | `table-*`    | `table-body`                                | Main content area             |
| `<tr>`          | `row-*`      | `row-header`                                | Row role: header, data, total |
| `<td>` / `<th>` | `cell-*`     | `cell-currency`, `cell-date`, `cell-header` | Format/semantic info          |

---

## 💡 Naming Logic

Stick to **semantic class names** that describe purpose, not appearance.

### ✅ Good:

```html
<td class="cell-currency">$1,234.00</td>
<td class="cell-date">2025-04-18</td>
```
