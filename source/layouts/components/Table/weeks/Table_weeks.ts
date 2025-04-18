//--|🠊 Table_weeks.ts 🠈|--//

export function findWeek(date: Date = new Date()): number {
  /**
   * Returns the ISO 8601 week number for a given date.
   * Week 1 is the one that contains the first Thursday of the year.
   *
   * @param date - Optional Date object (defaults to now).
   * @returns Week number (1–53).
   */

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
