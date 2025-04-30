//--|🠊 Table_weeks.ts 🠈|--//

import { get } from 'axios';

export function loadWeek(pageName: string, blockName: string) {
  // handleTablets();
  setTimeout(() => {
    showWeek(pageName, '<y>');
    scaleWeek(pageName, blockName);
  }, 1500);
}

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

export function showWeek(pageName: string, viewAxis: '<y>' | '<x>') {
  /**
   * Moves the carousel container by a certain distance on either the <x> or <y> axis.
   * The movement is based on the existing transform value, with an added offset.
   *
   * @param pageName - The base name used to target the specific carousel.
   * @param viewAxis - The axis to move along: '<x>' for horizontal, '<y>' for vertical.
   */

  const carousel = document.querySelector(`.${pageName}-carousel`) as HTMLElement; //--|🠈 Select the carousel element by its class name. 🠈|--//
  const container = carousel.querySelector(`div[class*="container"]`) as HTMLElement; //--|🠈 Select the container inside the carousel — assumed to have a class containing "container". 🠈|--//
  const updateValue = (element: HTMLElement): number => {
    /**
     * Helper function to get the current transform value on the specified axis,
     * then return a new value with a 16px adjustment.
     *
     * @param element - The container element whose transform will be read.
     * @returns The new transform value (number of pixels) after adjustment.
     */

    let transformStyle = element.style.transform; //--|🠈 Read the current transform value. 🠈|--//
    let match = transformStyle.match(regexExtract[viewAxis]); //--|🠈 Match the current value based on the axis. 🠈|--//
    let currentValue = match ? parseFloat(match[1]) : 0; //--|🠈 If a value exists, parse it; otherwise, start from 0. 🠈|--//

    //--|🠊 Determine the new value based on the axis. 🠈|--//
    //--|🠊 I might remove this if it doesn't clash with the styling 🠈|--//
    switch (viewAxis) {
      case '<x>':
        return currentValue; //--|🠈 Keep <x> axis value the same 🠈|--//
      case '<y>':
        return currentValue /* - 16 */; //--|🠈 Move 16px upwards for the <y> axis 🠈|--//
    }
  };
  const regexExtract = {
    //--|🠊 Regular expressions to extract current translateX or translateY value. 🠈|--//
    '<x>': /translateX\((-?\d+(\.\d+)?)px\)/,
    '<y>': /translateY\((-?\d+(\.\d+)?)px\)/,
  };

  if (carousel) {
    switch (viewAxis) {
      case '<x>':
        container.style.transform = `translateX(${updateValue(container)}px)`; //--|🠈 Apply the new transform value to the container. 🠈|--//
        break;
      case '<y>':
        container.style.transform = `translateY(${updateValue(container)}px)`; //--|🠈 Get the updated value by subtracting 16px for the <y> axis 🠈|--//
        break;
    }
  } else {
    console.warn(`Carousel with class "${pageName}-carousel" not found.`);
  }
}

/*
export function showWeek(pageName: string, viewAxis: '<y>' | '<x>') {
  const carousel = document.querySelector(`.${pageName}-carousel`) as HTMLElement;
  const container = carousel.querySelector(`div[class*="container"]`) as HTMLElement;
  container.style.transform = 'translateY(0px)';

  const getView = (container: HTMLElement): number => {
    let match, currentValue;
    switch (viewAxis) {
      case '<x>':
        match = container.style.transform.match(/translateX\((-?\d+(\.\d+)?)px\)/);
        if (match) {
          currentValue = parseFloat(match[1]);
          container.style.transform = `translateX(${currentValue + 16}px)`;
        } else {
          return 0;
        }
        break;
      case '<y>':
        match = container.style.transform.match(/translateY\((-?\d+(\.\d+)?)px\)/);
        if (match) {
          currentValue = parseFloat(match[1]);
          container.style.transform = `translateY(${currentValue - 16}px)`;
        } else {
          return 0;
        }
        break;
    }

    // if (match) {
    //   return parseFloat(match[1]);
    // } else {
    //   return 0; //--|🠈 Default value if no match is found 🠈|--//
    // }
  };

  container.style.transform = `translateY(${getView(container) - carousel.offsetHeight}px)`;
}
*/

export function giveWeek(year: number): number {
  const date = new Date(year, 11, 31); // Dec 31 of the year
  const week = Math.ceil(
    ((date.getTime() - new Date(year, 0, 1).getTime()) / 86400000 + new Date(year, 0, 1).getDay() + 1) / 7
  );
  return week;
}
export function scaleWeek(pageName: string, blockName: string) {
  const container = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;

  if (container) {
    let carousel = container.querySelector('div[class*="carousel"]') as HTMLElement;

    let weekDays = carousel.querySelectorAll(`.weeks-table tbody tr td:nth-child(1)`) as NodeListOf<HTMLElement>;
    let clockIn = carousel.querySelectorAll(`.weeks-table tbody tr td:nth-child(2)`) as NodeListOf<HTMLElement>;
    let clockOut = carousel.querySelectorAll(`.weeks-table tbody tr td:nth-child(3)`) as NodeListOf<HTMLElement>;
    let dataRows = carousel.querySelectorAll(`.weeks-table tbody tr td`) as NodeListOf<HTMLElement>;
    let heightRows = carousel.offsetHeight / 7; //--|🠈 1 Week is equal to 7 Days 🠈|--//
    let heightColumns = (carousel.offsetWidth - 128) / 2; //--|🠈 3 Divided is equal to 3 Columns etc. 🠈|--//

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
    console.warn(`//--|🠊 #${pageName}-${blockName} doesn't contain a Carousel 🠈|--//`);
    return;
  }
}

const handleTablets = () => {
  const tableData = document.querySelectorAll('td');
  if (window.innerWidth < 1366) {
    tableData.forEach((td) => {
      td.style.lineHeight = '1.2';
      td.style.padding = '0.25rem';
      td.style.fontSize = '0.75rem';
      // td.classList.remove('h1', 'display-6');
    });
  } else {
    tableData.forEach((td) => {
      td.style.padding = '';
      td.style.fontSize = '';
      td.style.lineHeight = '';
      // td.classList.add('h1', 'display-6');
    });
  }
};
