//--|🠊 Table_weeks.ts 🠈|--//

import { get } from 'axios';

export function loadTime() {
  const has53Weeks = (year: number): boolean => {
    /**
     * Checks if a given year contains 53 ISO weeks.
     *
     * @param year - The year to check.
     * @returns True if the year has 53 weeks, false otherwise.
     */

    const dec31 = new Date(Date.UTC(year, 11, 31));
    const dayOfWeek = dec31.getUTCDay();

    return dayOfWeek === 4 || (dayOfWeek === 3 && isLeapYear(year));
  };
  const isLeapYear = (year: number): boolean => {
    /**
     * Determines if a year is a leap year.
     *
     * @param year - The year to test.
     * @returns True if leap year.
     */
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };
  const findWeek = (date: Date): number => {
    // Convert to UTC to neutralize local timezones
    const inputDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

    // Get weekday (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const day = inputDate.getUTCDay();

    // Move to Thursday of the current week (ISO trick)
    const thursday = new Date(inputDate);
    thursday.setUTCDate(inputDate.getUTCDate() + (4 - (day === 0 ? 7 : day)));

    // Find first day of the ISO year
    const yearStart = new Date(Date.UTC(thursday.getUTCFullYear(), 0, 1));

    // Calculate the number of days between the ISO year start and the target Thursday
    const dayDiff = (thursday.getTime() - yearStart.getTime()) / 86400000; // ms per day = 86400000

    // Convert to week number
    return Math.ceil((dayDiff + 1) / 7);
  };
  const presentDate = new Date();
  const defaultWeek = findWeek(new Date());
  const presentYear = new Date().getFullYear();
  const weeksInYear = has53Weeks(presentYear) ? 53 : 52;

  // Load the following HTML references for the entire year but split it into weeks.
  // The first week of the year is the one that contains the first Thursday of the year. (ISO Trick)
  // toggle the ID's up and down with id="previous-week", id="current-week", id="future-week" with the className of 'visible' always being in the center of the ID's.
  // Remember Safety Checks for the weeks and use the best practices for the code.
  // Please keep it readable and add easy to understand comments.
  // YYYY-01-01 always starts with the first week of the year.
}
export function showWeek(pageName: string) {
  const carousel = document.querySelector(`.${pageName}-carousel`) as HTMLElement;
  const container = carousel.querySelector(`div[class*="container"]`) as HTMLElement;
  const getView = (container: HTMLElement): number => {
    let match = container.style.transform.match(/translateY\((-?\d+(\.\d+)?)px\)/);
    if (match) {
      return parseFloat(match[1]);
    } else {
      return 0; //--|🠈 Default value if no match is found 🠈|--//
    }
  };
  container.style.transform = 'translateY(0px)';
  container.style.transform = `translateY(${getView(container) - carousel.offsetHeight}px)`;
}
export function styleTable(pageName: string, blockName: string) {
  const parent = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  const carousel = parent.querySelector('div[class*="carousel"]') as HTMLElement;

  if (parent) {
    let weekDays = carousel.querySelectorAll(`.weeks-table tbody tr td:nth-child(1)`) as NodeListOf<HTMLElement>;
    let clockIn = carousel.querySelectorAll(`.weeks-table tbody tr td:nth-child(2)`) as NodeListOf<HTMLElement>;
    let clockOut = carousel.querySelectorAll(`.weeks-table tbody tr td:nth-child(3)`) as NodeListOf<HTMLElement>;
    let dataRows = carousel.querySelectorAll(`.weeks-table tbody tr td`) as NodeListOf<HTMLElement>;
    let heightRows = carousel.offsetHeight / 7;
    let heightColumns = (carousel.offsetWidth - 128) / 2;

    dataRows.forEach((row) => {
      row.style.height = `${heightRows}px`;
    });
    clockIn.forEach((column) => {
      column.style.width = `${heightColumns}px`;
    });
    clockOut.forEach((column) => {
      column.style.width = `${heightColumns}px`;
    });
    weekDays.forEach((column) => {
      column.style.width = `8rem`;
    });
  } else {
    console.warn(`Carousel not found for #${pageName}-${blockName}`);
    return;
  }
}
