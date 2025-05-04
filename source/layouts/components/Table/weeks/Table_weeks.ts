//--|🠊 Table_weeks.ts 🠈|--//

import { get } from 'axios';

export function loadWeekdays(pageName: string, blockName: string) {
  const thisDate: Date = new Date(); //--|🠈 Get the current date 🠈|--//
  const thisDay: string = thisDate.toISOString().split('T')[0]; //--|🠈 Get the current day in ISO format 🠈|--//
  const table = document.querySelector(
    `#${pageName}-${blockName} table[class*="weeks"]`
  ) as HTMLElement;

  // const thisYear: number = thisDate.getFullYear(); //--|🠊 const thisYear: number = 2020; 🠈|--//
  // const caseName: string = `${pageName}-${blockName}`;
  // const main = document.querySelector(`#${caseName}`) as HTMLElement; //--|🠈 Select the parent element to avoid the chance of encountering duplicates.  🠈|--//

  // 1
  const createWeeks = (pageName: string, blockName: string, thisDay: string) => {
    table.innerHTML = ''; //--|🠈 Clear the HTML for the weekTable element 🠈|--//

    const year: number = Number(thisDay.split('-')[0]);
    const countWeeks = (year: number): number => {
      /**
       * Returns the number of ISO-8601 weeks in a given year.
       * According to ISO-8601:
       * - Weeks start on Monday.
       * - Week 1 is the week containing the first Thursday of the year.
       * - A year can have either 52 or 53 weeks.
       *
       * @param year - The full year (e.g., 2025)
       * @returns The number of ISO weeks in the year (52 or 53)
       */
      //--|🠊 ISO week number (week starts on Monday) 🠈|--//
      //--|🠊 ISO week 1 is the week with the first Thursday of the year. 🠈|--//
      //--|🠊 So we check if Dec 28 is in week 53—if yes, the year has 53 weeks. 🠈|--//
      const dec28 = new Date(Date.UTC(year, 11, 28)); //--|🠈 Dec 28 is always in the last ISO week of the year 🠈|--//
      const day = dec28.getUTCDay(); //--|🠈 Get ISO week number of Dec 28 (which will be either 52 or 53) 🠈|--//
      const isoWeekDay = day === 0 ? 7 : day; //--|🠈 Convert Sunday (0) to 7 🠈|--//
      const startOfYear = new Date(Date.UTC(year, 0, 1));
      const startDay = startOfYear.getUTCDay();
      const startIso = startDay === 0 ? 7 : startDay;
      const daysBetween = Math.floor(
        (dec28.getTime() - startOfYear.getTime()) / 86400000
      ); //--|🠈 Calculate number of days between Jan 1 and Dec 28 🠈|--//
      const week = Math.floor((daysBetween + startIso - 1) / 7) + 1; //--|🠈 Calculate week number 🠈|--//

      return week; //--|🠊 52 or 53 🠈|--//
    };

    const findStart = (year: number): Date => {
      let jan1 = new Date(year, 0, 1);
      let dayOfWeek = jan1.getDay(); // 0 (Sunday) - 6 (Saturday)
      let daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Calculate days to the first Monday
      let firstMonday: Date = new Date(year, 0, 1 - daysToMonday);

      return firstMonday;
    };

    const findEnd = (year: number): Date => {
      let dec31 = new Date(year, 11, 31);
      let dayOfWeek = dec31.getDay(); // 0 (Sunday) - 6 (Saturday)
      let daysToEndOfWeek = dayOfWeek === 0 ? 0 : 7 - dayOfWeek; // Calculate days to the end of the week (Sunday)
      let lastSunday: Date = new Date(year, 11, 31 + daysToEndOfWeek);

      return lastSunday;
    };
    let totalWeeks: number = countWeeks(year);
    let startYear: Date = findStart(year);
    let endYear: Date = findEnd(year);

    console.log(totalWeeks);
    console.log(startYear);
    console.log(endYear);

    // console.log(Number(endYear) - Number(startYear));

    // let startYear: string = findWeekday(year);
    // let startDay: Date = startWeeks(year);
    // console.log(startDay);

    // //--|🠊 If last ISO week spills into the next year, add an extra week 🠈|--//
    // if (firstWeekStartNextYear.getFullYear() === year) {
    //   totalWeeks += 1;
    // }

    // for (let i = 1; i <= totalWeeks; i++) {
    //   let tableBody = document.createElement('tbody'); //--|🠈 Create tbody element 🠈|--//
    //   let weekData = i.toString().padStart(2, '0');

    //   tableBody.className = 'table-body hidden';
    //   tableBody.dataset.week = weekData; //--|🠈 Assign a dataString for each week as data-week-"01" 🠈|--//
    //   table.appendChild(tableBody);

    //   for (let i = 1; i <= 7; i++) {
    //     let tableRow = document.createElement('tr');
    //     let tableData = document.createElement('td');
    //     tableData.className = 'weekday h1';

    //     let clockIn = document.createElement('td');
    //     clockIn.className = 'clock-in';
    //     clockIn.textContent = '--:--';

    //     let clockOut = document.createElement('td');
    //     clockOut.className = 'clock-out';
    //     clockOut.textContent = '~~:~~';

    //     //--|🠊 Determine day label and row class 🠈|--//
    //     switch (i) {
    //       case 1:
    //         tableData.textContent = 'Mon';
    //         tableRow.className = 'mon-row';
    //         //--| console.log('Monday'); |--//
    //         break;
    //       case 2:
    //         tableData.textContent = 'Tue';
    //         tableRow.className = 'tue-row';
    //         //--| console.log('Tuesday'); |--//
    //         break;
    //       case 3:
    //         tableData.textContent = 'Wed';
    //         tableRow.className = 'wed-row';
    //         //--| console.log('Wednesday'); |--//
    //         break;
    //       case 4:
    //         tableData.textContent = 'Thu';
    //         tableRow.className = 'thu-row';
    //         //--| console.log('Thursday'); |--//
    //         break;
    //       case 5:
    //         tableData.textContent = 'Fri';
    //         tableRow.className = 'fri-row';
    //         //--| console.log('Friday'); |--//
    //         break;
    //       case 6:
    //         tableData.textContent = 'Sat';
    //         tableRow.className = 'sat-row';
    //         //--| console.log('Saturday'); |--//
    //         break;
    //       case 7:
    //         tableData.textContent = 'Sun';
    //         tableRow.className = 'sun-row';
    //         //--| console.log('Sunday'); |--//
    //         break;
    //     }

    //     //--|🠊 Assemble and append row 🠈|--//
    //     tableRow.appendChild(tableData);
    //     tableRow.appendChild(clockIn);
    //     tableRow.appendChild(clockOut);
    //     tableBody.appendChild(tableRow);
    //   }
    // }

    // labelWeeks(pageName, blockName, thisDay);
  };

  // 2
  const labelWeeks = (pageName: string, blockName: string, thisDay: string) => {
    // const tableRows: NodeListOf<HTMLTableRowElement> = document.querySelectorAll(
    //   `#${pageName}-${blockName} tr`
    // );
    // const container = document.querySelector(
    //   `#${pageName}-${blockName} .weekdays-container`
    // ) as HTMLElement;
    // let jan4 = new Date(thisYear, 0, 4); //--|🠈 Find the Monday of the week containing Jan 4th (ISO week 1 always includes Jan 4th) 🠈|--//
    // let dayOfWeek = jan4.getDay(); //--|🠈 0 (Sun) - 6 (Sat) 🠈|--//
    // let diffToMonday = (dayOfWeek + 6) % 7; //--|🠈 Convert to Monday = 0 🠈|--//
    // let startDate = new Date(jan4);
    // let currentDate = new Date(startDate);
    // startDate.setDate(jan4.getDate() - diffToMonday);
    // tableRows.forEach((row) => {
    //   const YYYY = currentDate.getFullYear();
    //   const MM = String(currentDate.getMonth() + 1).padStart(2, '0');
    //   const DD = String(currentDate.getDate()).padStart(2, '0');
    //   switch (thisDay) {
    //     case `${YYYY}-${MM}-${DD}`:
    //       row.id = `${YYYY}-${MM}-${DD}`;
    //       const presentDay = document.getElementById(`${thisDay}`) as HTMLTableRowElement;
    //       if (presentDay) {
    //         let currentWeek = presentDay.parentElement as HTMLElement;
    //         let futureWeek = currentWeek.nextElementSibling as HTMLElement;
    //         let previousWeek = currentWeek.previousElementSibling as HTMLElement;
    //         container.dataset.view = currentWeek.dataset.week;
    //         currentWeek.classList.remove('hidden');
    //         currentWeek.classList.add('visible');
    //         currentWeek.id = 'current-week';
    //         futureWeek.id = 'future-week';
    //         previousWeek.id = 'previousWeek';
    //         // console.log();
    //         // console.log(container);
    //       }
    //       break;
    //     default:
    //       row.id = `${YYYY}-${MM}-${DD}`;
    //       break;
    //   }
    //   currentDate.setDate(currentDate.getDate() + 1);
    // });
    // scaleWeeks(pageName, blockName);
  };

  // 3
  const scaleWeeks = (pageName: string, blockName: string) => {
    // const carousel = document.querySelector(
    //   `#${pageName}-${blockName} div[class*="carousel"]`
    // ) as HTMLElement;
    // if (carousel) {
    //   let weekDays = carousel.querySelectorAll(
    //     `.weeks-table tbody tr td:nth-child(1)`
    //   ) as NodeListOf<HTMLElement>;
    //   let clockIn = carousel.querySelectorAll(
    //     `.weeks-table tbody tr td:nth-child(2)`
    //   ) as NodeListOf<HTMLElement>;
    //   let clockOut = carousel.querySelectorAll(
    //     `.weeks-table tbody tr td:nth-child(3)`
    //   ) as NodeListOf<HTMLElement>;
    //   let dataRows = carousel.querySelectorAll(
    //     `.weeks-table tbody tr td`
    //   ) as NodeListOf<HTMLElement>;
    //   let heightRows = carousel.offsetHeight / 7; //--|🠈 1 Week is equal to 7 Days 🠈|--//
    //   let heightColumns = (carousel.offsetWidth - 128) / 2; //--|🠈 3 Divided is equal to 3 Columns etc. 🠈|--//
    //   dataRows.forEach((row) => {
    //     row.style.height = `${heightRows}px`;
    //   });
    //   clockIn.forEach((column) => {
    //     column.style.width = `${heightColumns}px`;
    //   });
    //   clockOut.forEach((column) => {
    //     column.style.width = `${heightColumns}px`;
    //   });
    //   weekDays.forEach((column) => {
    //     column.style.width = `8rem`;
    //   });
    // } else {
    //   console.warn(`//--|🠊 #${pageName}-${blockName} doesn't contain a Carousel 🠈|--//`);
    //   return;
    // }
    // adjustWeeks(pageName, blockName, '<y>');
  };

  // 4
  const adjustWeeks = (pageName: string, blockName: string, viewAxis: '<y>' | '<x>') => {
    /*
    console.log(pageName);
    console.log(blockName);
    console.log(viewAxis);
    */
  };

  const adjustBackup = (pageName: string, viewAxis: '<y>' | '<x>') => {
    // /**
    //  * Moves the carousel container by a certain distance on either the <x> or <y> axis.
    //  * The movement is based on the existing transform value, with an added offset.
    //  *
    //  * @param pageName - The base name used to target the specific carousel.
    //  * @param viewAxis - The axis to move along: '<x>' for horizontal, '<y>' for vertical.
    //  */
    // const carousel = document.querySelector(`.${pageName}-carousel`) as HTMLElement; //--|🠈 Select the carousel element by its class name. 🠈|--//
    // const container = carousel.querySelector(`div[class*="container"]`) as HTMLElement; //--|🠈 Select the container inside the carousel — assumed to have a class containing "container". 🠈|--//
    // const updateValue = (element: HTMLElement): number => {
    //   /**
    //    * Helper function to get the current transform value on the specified axis,
    //    * then return a new value with a 16px adjustment.
    //    *
    //    * @param element - The container element whose transform will be read.
    //    * @returns The new transform value (number of pixels) after adjustment.
    //    */
    //   let transformStyle = element.style.transform; //--|🠈 Read the current transform value. 🠈|--//
    //   let match = transformStyle.match(regexExtract[viewAxis]); //--|🠈 Match the current value based on the axis. 🠈|--//
    //   let currentValue = match ? parseFloat(match[1]) : 0; //--|🠈 If a value exists, parse it; otherwise, start from 0. 🠈|--//
    //   //--|🠊 Determine the new value based on the axis. 🠈|--//
    //   //--|🠊 I might remove this if it doesn't clash with the styling 🠈|--//
    //   switch (viewAxis) {
    //     case '<x>':
    //       return currentValue; //--|🠈 Keep <x> axis value the same 🠈|--//
    //     case '<y>':
    //       return currentValue /* - 16 */; //--|🠈 Move 16px upwards for the <y> axis 🠈|--//
    //   }
    // };
    // const regexExtract = {
    //   //--|🠊 Regular expressions to extract current translateX or translateY value. 🠈|--//
    //   '<x>': /translateX\((-?\d+(\.\d+)?)px\)/,
    //   '<y>': /translateY\((-?\d+(\.\d+)?)px\)/,
    // };
    // if (carousel) {
    //   switch (viewAxis) {
    //     case '<x>':
    //       container.style.transform = `translateX(${updateValue(container)}px)`; //--|🠈 Apply the new transform value to the container. 🠈|--//
    //       break;
    //     case '<y>':
    //       container.style.transform = `translateY(${updateValue(container)}px)`; //--|🠈 Get the updated value by subtracting 16px for the <y> axis 🠈|--//
    //       break;
    //   }
    // } else {
    //   console.warn(`Carousel with class "${pageName}-carousel" not found.`);
    // }
  };

  if (table) {
    createWeeks(pageName, blockName, thisDay);
  }
}

export default loadWeekdays;

//---//

function getInfo(
  date: Date,
  view: '<week>' | '<month>', // cleaned angle brackets
  format: '-number-' | '-string-' // clearer than -number-
) {
  if (format === '-number-') {
    switch (view) {
      case '<week>':
        let target = new Date(
          Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
        );
        let day = target.getUTCDay() || 7; // Sunday as 7
        target.setUTCDate(target.getUTCDate() + 4 - day); // move to nearest Thursday

        let yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1));
        let weekNumber = Math.ceil(((+target - +yearStart) / 86400000 + 1) / 7);
        return weekNumber;
      case '<month>':
        return date.getMonth() + 1;
      default:
        alert('//--|🠊 Invalid type. Use "<week>" to get the week number. 🠈|--//');
        return 0; //--|🠈 Default value if no match is found 🠈|--//
    }
  } else if (format === '-string-') {
    switch (view) {
      case '<week>':
        return date.toLocaleString('en-GB', {
          weekday: 'long',
        });
      case '<month>':
        return date.toLocaleString('en-GB', {
          month: 'long',
        });
      default:
        alert('//--|🠊 Invalid view. Use "<month>" to get the month text. 🠈|--//');
        return 0; //--|🠈 Default value if no match is found 🠈|--//
    }
  }
}
function loadTime() {
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
    const inputDate = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );

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
/*
    let thisMonth: string = getInfo(thisDate, '<month>', '-string-') as string; //--|🠈 Get the current month 🠈|--//
    let thisWeek: string = getInfo(thisDate, '<week>', '-string-') as string; //--|🠈 Get the current week 🠈|--//

    let monthsCount: number = 12;

    let monthNumber: number = thisDate.getMonth(); //--|🠈 Get the current month 🠈|--//

    let weekNumber = getInfo(thisDate, '<week>', '-number-') as number;



    let yearEnd: Date = new Date(`${thisYear}-12-31`);
    let weekEnd = yearEnd.toLocaleDateString('en-GB', { weekday: 'long' });
    */
/*
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
*/
/*
    // setTimeout(() => {}, 500);
    // setTimeout(() => {}, 1000);
    setTimeout(() => {
      const presentDay = document.getElementById(`${thisDate}`) as HTMLElement;
      const currentWeek = presentDay.parentElement as HTMLElement;
      const previousWeek = currentWeek.previousElementSibling as HTMLElement;
      const futureWeek = currentWeek.nextElementSibling as HTMLElement;

      previousWeek.id = 'previousWeek';
      currentWeek.id = 'current-week';
      currentWeek.classList = 'table-body visible';
      futureWeek.id = 'future-week';

      console.log(previousWeek);
      console.log(currentWeek);
      console.log(futureWeek);
      // labelWeekdays(thisDay);
    }, 1500);
    */
// function labelWeeks(pageName: string, thisDate: string) {
//   /*
//   const presentDay = document.getElementById(`${thisDate}`) as HTMLElement;
//   const currentWeek = presentDay.parentElement as HTMLElement;
//   const previousWeek = currentWeek.previousElementSibling as HTMLElement;
//   const futureWeek = currentWeek.nextElementSibling as HTMLElement;

//   previousWeek.id = 'previousWeek';
//   currentWeek.id = 'current-week';
//   currentWeek.classList = 'table-body visible';
//   futureWeek.id = 'future-week';

//   console.log(previousWeek);
//   console.log(currentWeek);
//   console.log(futureWeek);
//   */
// }
