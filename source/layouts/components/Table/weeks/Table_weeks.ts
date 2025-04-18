//--|🠊 Table_weeks.ts 🠈|--//

export function findWeek(date: Date = new Date()): number {
  /**
   * Returns the ISO 8601 week number for a given date.
   * Week 1 is the one that contains the first Thursday of the year.
   *
   * @param date - Optional Date object (defaults to now).
   * @returns Week number (1–53).
   */

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
}

export function loadYear() {
  // Load the entire year but split it into weeks.
}

export function styleTable(pageName: string, blockName: string) {
  const styleBody = (pageName: string, blockName: string) => {
    let carousel = document.querySelector(`#${pageName}-${blockName} div[class*="carousel"]`) as HTMLElement;
    if (!carousel) {
      console.warn(`Carousel not found for #${pageName}-${blockName}`);
      return;
    } else {
      var tableRows = carousel.querySelectorAll(`.weeks-table tbody tr td`) as NodeListOf<HTMLElement>;
      var dayHeight = carousel.offsetHeight / 7;
      var dayWidth = carousel.offsetWidth;
      var tableColumn = carousel.querySelectorAll(`.weeks-table tbody`) as NodeListOf<HTMLElement>;
      var weekdays = carousel.querySelector(`.weeks-table tbody`) as HTMLTableElement;
      tableRows.forEach((row) => {
        row.style.height = `${dayHeight}px`;
      });
      tableColumn.forEach((column) => {
        column.style.width = `${dayWidth}px`;
      });

      console.log(carousel.offsetWidth);
      console.log(weekdays);
      if (!carousel || !weekdays) {
        console.warn(`Table or carousel not found for #${pageName}-${blockName}`);
        return;
      }

      // Optional: Set table width to match carousel
      weekdays.style.width = `${carousel.offsetWidth}px`;

      // Optional: Set widths for 3 columns if you need to force sizing
      // const tdWidth = carousel.offsetWidth / 3;
      // const columns = weekdaysTable.querySelectorAll('td') as NodeListOf<HTMLElement>;
      // columns.forEach((td) => (td.style.width = `${tdWidth}px`));
    }
  };
  const styleData = (pageName: string, blockName: string) => {
    let carousel = document.querySelector(`#${pageName}-${blockName} div[class*="carousel"]`) as HTMLElement;
    if (!carousel) {
      console.warn(`Carousel not found for #${pageName}-${blockName}`);
      return;
    } else {
      var weekday = carousel.querySelectorAll(`.weeks-table tbody tr td:nth-child(1)`) as NodeListOf<HTMLElement>;
      var clockIn = carousel.querySelectorAll(`.weeks-table tbody tr td:nth-child(2)`) as NodeListOf<HTMLElement>;
      var clockOut = carousel.querySelectorAll(`.weeks-table tbody tr td:nth-child(3)`) as NodeListOf<HTMLElement>;

      console.log((carousel.offsetWidth - 128) / 2);

      weekday.forEach((column) => {
        column.style.width = `8rem`;
      });
      clockIn.forEach((column) => {
        column.style.width = `${(carousel.offsetWidth - 128) / 2}px`;
      });
      clockOut.forEach((column) => {
        column.style.width = `${(carousel.offsetWidth - 128) / 2}px`;
      });
      /*
      var dayHeight = carousel.offsetHeight / 7;
      var dayWidth = carousel.offsetWidth;
      var tableColumn = carousel.querySelectorAll(`.weeks-table tbody`) as NodeListOf<HTMLElement>;
      var weekdays = carousel.querySelector(`.weeks-table tbody`) as HTMLTableElement;
      tableRows.forEach((row) => {
        row.style.height = `${dayHeight}px`;
      });
      tableColumn.forEach((column) => {
        column.style.width = `${dayWidth}px`;
      });

      console.log(carousel.offsetWidth);
      console.log(weekdays);
      if (!carousel || !weekdays) {
        console.warn(`Table or carousel not found for #${pageName}-${blockName}`);
        return;
      }

      // Optional: Set table width to match carousel
      weekdays.style.width = `${carousel.offsetWidth}px`;

      // Optional: Set widths for 3 columns if you need to force sizing
      // const tdWidth = carousel.offsetWidth / 3;
      // const columns = weekdaysTable.querySelectorAll('td') as NodeListOf<HTMLElement>;
      // columns.forEach((td) => (td.style.width = `${tdWidth}px`));
      */
    }
  };
  styleBody(pageName, blockName);
  styleData(pageName, blockName);
  /*
  const setRows = (pageName: string, blockName: string) => {};

  const setColumns = (pageName: string, blockName: string) => {};

  setRows(pageName, blockName);
  setColumns(pageName, blockName);
  */
}
//---//

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
