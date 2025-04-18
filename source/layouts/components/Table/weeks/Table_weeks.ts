//--|🠊 Table_weeks.ts 🠈|--//
export function findWeek(date: Date): number {
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
  // Load the following HTML references for the entire year but split it into weeks.
  const presentDate = new Date();
  const presentYear = presentDate.getFullYear();
  const presentWeek = findWeek(presentDate);
  const weeksInYear = has53Weeks(presentYear) ? 53 : 52;

  // YYYY-01-01 always starts with the first week of the year.
  // The first week of the year is the one that contains the first Thursday of the year. (ISO Trick)
  // toggle the ID's up and down with id="previous-week", id="current-week", id="future-week" with the className of 'visible' always being in the center of the ID's.
  // Remember Safety Checks for the weeks and use the best practices for the code.
  // Please keep it readable and add easy to understand comments.

  /*
  const tableBodies = document.querySelectorAll('.weeks-table .table-body') as NodeListOf<HTMLElement>;
  const ids = ['previous-week', 'current-week', 'future-week'];

  tableBodies.forEach((tbody) => {
    tbody.classList.add('hidden');
    tbody.classList.remove('visible');
  });

  ids.forEach((id) => {
    const tbody = document.getElementById(id);
    if (!tbody) {
      console.warn(`Element with ID "${id}" not found`);
      return;
    }

    tbody.classList.remove('hidden');
    tbody.classList.add('visible');

    // Assign the correct week number to each tbody group
    let weekOffset = 0;
    if (id === 'previous-week') weekOffset = -1;
    if (id === 'future-week') weekOffset = 1;

    let weekToRender = currentWeek + weekOffset;
    if (weekToRender < 1) {
      weekToRender = has53Weeks(presentYear - 1) ? 53 : 52;
    } else if (weekToRender > weeksInYear) {
      weekToRender = 1;
    }

    // Fill rows
    const rows = tbody.querySelectorAll('tr');
    // rows.forEach((row, i) => {
    //   const day = i + 1; // Monday = 1, Sunday = 7
    //   // const dayDate = getDateOfISOWeekDay(weekToRender, year, day);
    //   const weekdayCell = row.querySelector('td:nth-child(1)');
    //   if (weekdayCell) {
    //     weekdayCell.textContent = `${String(dayDate.getDate()).padStart(2, '0')}. ${
    //       weekdayCell.textContent?.split('. ')[1]
    //     }`;
    //   }
    // });
  });
  */

  /*
      <table className="weeks-table">
      <tbody className="table-body hidden" id="previous-week">
        <tr className="monday-row">
          <td className="weekday">01. Monday</td>
          <td className="clock-in">08:00</td>
          <td className="clock-out">17:00</td>
        </tr>
        <tr className="tuesday-row">
          <td className="weekday">02. Tuesday</td>
          <td className="clock-in">08:00</td>
          <td className="clock-out">17:00</td>
        </tr>
        <tr className="wednesday-row">
          <td className="weekday">03. Wednesday</td>
          <td className="clock-in">08:00</td>
          <td className="clock-out">17:00</td>
        </tr>
        <tr className="thursday-row">
          <td className="weekday">04. Thursday</td>
          <td className="clock-in">08:00</td>
          <td className="clock-out">17:00</td>
        </tr>
        <tr className="friday-row">
          <td className="weekday">05. Friday</td>
          <td className="clock-in">08:00</td>
          <td className="clock-out">17:00</td>
        </tr>
        <tr className="saturday-row">
          <td className="weekday">06. Saturday</td>
          <td className="clock-in">08:00</td>
          <td className="clock-out">17:00</td>
        </tr>
        <tr className="sunday-row">
          <td className="weekday">07. Sunday</td>
          <td className="clock-in">08:00</td>
          <td className="clock-out">17:00</td>
        </tr>
      </tbody>
      <tbody className="table-body visible" id="current-week">
        <tr className="monday-row">
          <td>01. Monday</td>
          <td>#current-week</td>
        </tr>
        <tr className="tuesday-row">
          <td>02. Tuesday</td>
          <td>#current-week</td>
        </tr>
        <tr className="wednesday-row">
          <td>03. Wednesday</td>
          <td>#current-week</td>
        </tr>
        <tr className="thursday-row">
          <td>04. Thursday</td>
          <td>#current-week</td>
        </tr>
        <tr className="friday-row">
          <td>05. Friday</td>
          <td>#current-week</td>
        </tr>
        <tr className="saturday-row">
          <td>06. Saturday</td>
          <td>#current-week</td>
        </tr>
        <tr className="sunday-row">
          <td>07. Sunday</td>
          <td>#current-week</td>
        </tr>
      </tbody>
      <tbody className="table-body hidden" id="future-week">
        <tr className="monday-row">
          <td>01. Monday</td>
          <td>#future-week</td>
        </tr>
        <tr className="tuesday-row">
          <td>02. Tuesday</td>
          <td>#future-week</td>
        </tr>
        <tr className="wednesday-row">
          <td>03. Wednesday</td>
          <td>#future-week</td>
        </tr>
        <tr className="thursday-row">
          <td>04. Thursday</td>
          <td>#future-week</td>
        </tr>
        <tr className="friday-row">
          <td>05. Friday</td>
          <td>#future-week</td>
        </tr>
        <tr className="saturday-row">
          <td>06. Saturday</td>
          <td>#future-week</td>
        </tr>
        <tr className="sunday-row">
          <td>07. Sunday</td>
          <td>#future-week</td>
        </tr>
      </tbody>
    </table>
  */
}

//---//
export function styleTable(pageName: string, blockName: string) {
  const carousel = document.querySelector(`#${pageName}-${blockName} div[class*="carousel"]`) as HTMLElement;
  if (!carousel) {
    console.warn(`Carousel not found for #${pageName}-${blockName}`);
    return;
  } else {
    let heightRows = carousel.offsetHeight / 7;
    let heightColumns = (carousel.offsetWidth - 128) / 2;
    let dataRows = carousel.querySelectorAll(`.weeks-table tbody tr td`) as NodeListOf<HTMLElement>;
    let weekDays = carousel.querySelectorAll(`.weeks-table tbody tr td:nth-child(1)`) as NodeListOf<HTMLElement>;
    let clockIn = carousel.querySelectorAll(`.weeks-table tbody tr td:nth-child(2)`) as NodeListOf<HTMLElement>;
    let clockOut = carousel.querySelectorAll(`.weeks-table tbody tr td:nth-child(3)`) as NodeListOf<HTMLElement>;

    dataRows.forEach((row) => {
      row.style.height = `${heightRows}px`;
    });

    weekDays.forEach((column) => {
      column.style.width = `8rem`;
    });
    clockIn.forEach((column) => {
      column.style.width = `${heightColumns}px`;
    });
    clockOut.forEach((column) => {
      column.style.width = `${heightColumns}px`;
    });
  }
}

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

// function getDateOfISOWeekDay(weekToRender: number, year: number, day: number): Date {
//   /**
//    * Calculates the date of a specific day in an ISO week.
//    *
//    * @param weekToRender - The ISO week number.
//    * @param year - The year.
//    * @param day - The day of the week (1 = Monday, ..., 7 = Sunday).
//    * @returns The corresponding Date object.
//    */
//   const jan4 = new Date(Date.UTC(year, 0, 4)); // January 4th is always in the first ISO week
//   const jan4Day = jan4.getUTCDay() || 7; // Adjust Sunday to 7
//   const firstWeekStart = new Date(jan4);
//   firstWeekStart.setUTCDate(jan4.getUTCDate() - (jan4Day - 1)); // Move to the Monday of the first ISO week

//   const targetDate = new Date(firstWeekStart);
//   targetDate.setUTCDate(firstWeekStart.getUTCDate() + (weekToRender - 1) * 7 + (day - 1)); // Calculate target date
//   return targetDate;
// }
