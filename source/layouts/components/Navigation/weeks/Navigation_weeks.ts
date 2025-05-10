//--|🠊 Navigation_weeks.ts 🠈|--//
export function defineButton(
  button: 'clock-in' | 'clock-out',
  info: { blockName: string; pageName: string }
) {
  const { blockName, pageName } = info;
  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'clock-in':
      return {
        fontSize: '<h1>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-center-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        pageName: pageName as 'overtime',
        blockName: blockName as 'header' | 'footer' | 'leftbar',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/68022b074712ac4438089936bec983a931cf858f/source/assets/svg-files/overtime-page/clock-time.svg',
      };
    case 'clock-out':
      return {
        fontSize: '<h1>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-center-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        pageName: pageName as 'overtime',
        blockName: blockName as 'header' | 'footer' | 'leftbar',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/68022b074712ac4438089936bec983a931cf858f/source/assets/svg-files/overtime-page/clock-time.svg',
      };
  }
}

export function fillWeek(pageName: string, blockName: string) {
  const workdays = document.querySelector(
    `#${pageName}-${blockName} nav[class*="weeks"] ol`
  ) as HTMLElement;
  const weekdays = document.querySelector(
    `#${pageName}-${blockName} table[class*="weeks"] #current-week`
  ) as HTMLElement;

  const present = new Date().toISOString().split('T')[0];

  // const clockTime = document.querySelector(
  //   `#${pageName}-${blockName} nav[class*="weeks"] div`
  // ) as HTMLElement;

  for (let i = 0; i < 7; i++) {
    let overlay = workdays.children[i] as HTMLElement;
    let dayText = overlay.querySelector('h1') as HTMLElement;
    let date = new Date(weekdays.children[i].id) as Date; //--|🠈 Generate date for each day in the loop 🠈|--//
    let day = date.getDate().toString().padStart(2, '0'); //--|🠈 Add leading zero if needed 🠈|--//
    let month = date.toLocaleDateString('en-GB', { month: 'long' });
    let current = date.toISOString().split('T')[0];

    if (dayText) {
      dayText.innerText = `${day} ${month}`; //--|🠈 Set text content to formatted date 🠈|--//
    }

    if (present === current) {
      let now = new Date() as Date;
      let hour = now.getHours();

      let weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
      let day = weekdays[now.getDay()]; // 0 (Sun) to 6 (Sat)

      // Determine AM or PM
      switch (true) {
        case hour < 12:
          workdays.classList = `view-week ${day}-am`;
          break;
        case hour >= 12:
          workdays.classList = `view-week ${day}-pm`;
          break;
      }
    }
  }
}
