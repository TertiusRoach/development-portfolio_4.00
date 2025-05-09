//--|🠊 Navigation_weeks.ts 🠈|--//
export function fillWeek(pageName: string, blockName: string) {
  const workdays = document.querySelector(
    `#${pageName}-${blockName} nav[class*="weeks"] ol`
  ) as HTMLElement;
  const weekdays = document.querySelector(
    `#${pageName}-${blockName} table[class*="weeks"] #current-week`
  ) as HTMLElement;

  for (let i = 0; i < 7; i++) {
    let workday = workdays.children[i] as HTMLElement;
    let weekday = weekdays.children[i] as HTMLElement;
    let dayText = workday.querySelector('h1') as HTMLElement;

    if (dayText) {
      var date = new Date(weekday.id); //--|🠈 Generate date for each day in the loop 🠈|--//
      var day = date.getDate().toString().padStart(2, '0'); //--|🠈 Add leading zero if needed 🠈|--//
      var month = date.toLocaleDateString('en-GB', { month: 'long' });

      dayText.innerText = `${day} ${month}`; //--|🠈 Set text content to formatted date 🠈|--//
    }
  }
}
