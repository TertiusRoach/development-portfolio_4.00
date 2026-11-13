export namespace UseDatefy {
  export function forToday(format: String | '2000-01-01' | 'Weekday, 00 Month YYYY' | '00 Weekday, Month YYYY' | undefined) {
    const presentDate: String = Date();
    let monthDay: String | Number = presentDate.split(' ')[2];

    const weekdayEN: Array<String> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekdagAF: Array<String> = ['Sondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrydag', 'Saterdag'];
    let weekday = weekdayEN[new Date().getDay()];
    let weekdag = weekdagAF[new Date().getDay()];

    const monthEN: Array<String> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const maandAF: Array<String> = ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'];
    let month = monthEN[new Date().getMonth()];
    let maand = maandAF[new Date().getMonth()];

    const monthNumber: Array<String> = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let monthNumerical: String = monthNumber[new Date().getMonth()];

    let year: String = presentDate.split(' ')[3];

    switch (format) {
      case '2000-01-01':
        return `${year}-${monthNumerical}-${monthDay}`;
      case 'Weekday, 00 Month YYYY':
        return `${weekday}, ${monthDay} ${month} ${year}`;
      case '00 Weekday, Month YYYY':
        return `${monthDay} ${weekday}, ${month} ${year}`;
      default:
        return 'No function for selected format';
    }
  }
}
