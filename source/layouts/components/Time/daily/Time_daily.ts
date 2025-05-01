//--|🠊 Time_daily.ts 🠈|--//

export function updateDate() {
  /**
   * Updates the text content of the <h1> inside the element with class "daily-time"
   * to display the current date in the format: "Saturday, 1st January 2000".
   * Uses ISO 8601 standard as the internal source of truth.
   */

  const now = new Date(); //--|🠊 Get the current date and time as an ISO 8601 string (UTC-based) 🠈|--//
  const isoDate = now.toISOString(); //--|🠊 Not used in output but ensures ISO compliance 🠈|--//

  // Extract readable parts of the date
  const day = now.getDate();
  const weekday = now.toLocaleDateString('en-GB', { weekday: 'long' });
  const month = now.toLocaleDateString('en-GB', { month: 'long' });
  const year = now.getFullYear();

  /**
   * Add ordinal suffix to the day (e.g., 1st, 2nd, 3rd, 4th...)
   * Handles English ordinal exceptions (11th, 12th, 13th)
   */
  const suffix =
    day % 10 === 1 && day !== 11
      ? 'st'
      : day % 10 === 2 && day !== 12
      ? 'nd'
      : day % 10 === 3 && day !== 13
      ? 'rd'
      : 'th';

  const formatted = `${weekday}, ${day}${suffix} ${month} ${year}`; //--|🠊 Construct the final formatted date string 🠈|--//
  setTimeout(() => {
    const timeElement = document.querySelector('.daily-time h1'); //--|🠊 Select the target <h1> and update its text content 🠈|--//
    if (timeElement) {
      timeElement.textContent = formatted;
    }
  }, 1500);
}
/*
export function defineButton(
  button: 'track-day' | 'log-ticket' | 'find-link',
  info: { blockName: string; pageName: string }
) {
  const { blockName, pageName } = info;
  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'track-day':
      return {
        fontSize: '<h1>' as
          | '<h1>'
          | '<h2>'
          | '<h3>'
          | '<h4>'
          | '<h5>'
          | '<h6>'
          | '<p>',
        layoutView: 'text' as
          | 'left'
          | 'right'
          | 'center'
          | 'icon'
          | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'overtime' as
          | 'landing'
          | 'overtime'
          | 'ticketing'
          | 'hyperlink',
        imageLink: '',
      };
    case 'log-ticket':
      return {
        fontSize: '<h1>' as
          | '<h1>'
          | '<h2>'
          | '<h3>'
          | '<h4>'
          | '<h5>'
          | '<h6>'
          | '<p>',
        layoutView: 'text' as
          | 'left'
          | 'right'
          | 'center'
          | 'icon'
          | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'ticketing' as
          | 'landing'
          | 'overtime'
          | 'ticketing'
          | 'hyperlink',
        imageLink: '',
      };
    case 'find-link':
      return {
        fontSize: '<h1>' as
          | '<h1>'
          | '<h2>'
          | '<h3>'
          | '<h4>'
          | '<h5>'
          | '<h6>'
          | '<p>',
        layoutView: 'text' as
          | 'left'
          | 'right'
          | 'center'
          | 'icon'
          | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'hyperlink' as
          | 'landing'
          | 'overtime'
          | 'ticketing'
          | 'hyperlink',
        imageLink: '',
      };
  }
}

export function togglePreview(
  pageName: string,
  action: 'highlight' | 'downplay',
  division: 'overtime' | 'ticketing' | 'hyperlink'
) {
  const element = document.querySelector(
    `#${pageName}-header section .preview-${division}`
  ) as HTMLElement;
  switch (action) {
    case 'highlight':
      element.classList.remove('downplay'); //--|🠈 Remove '.downplay' 🠈|--//
      return element.classList.add('highlight'); //--|🠈 Toggle '.highlight' 🠈|--//
    case 'downplay':
      element.classList.remove('highlight'); //--|🠈 Remove '.highlight' 🠈|--//
      return element.classList.add('downplay'); //--|🠈 Toggle '.downplay' 🠈|--//
  }
}

export function viewDemo(
  pageName: string,
  viewDemo: 'overtime' | 'ticketing' | 'hyperlink'
) {
  const showDemo = (viewDemo: string) => {
    let element = document.querySelector(`#${viewDemo}-body`); //--|🠈 Select the new view element using its dynamic ID 🠈|--//
    let visible = document.querySelector(
      "div[id*='body'].active"
    ) as HTMLElement | null; //--|🠈 Find the 'div[id*='body']' tag with a '.active' class 🠈|--//

    if (!(element instanceof HTMLElement)) {
      //--|🠉 Safeguard: Ensure the element exists and is an HTMLElement 🠈|--//
      console.warn(`Element for view "${viewDemo}" not found.`);
      return;
    }

    if (visible) {
      //--|🠉 If there's a visible element, hide it 🠈|--//
      visible.classList.add('asleep'); //--|🠈 Hide it by adding 'asleep' 🠈|--//
      visible.classList.remove('active'); //--|🠈 And remove 'active' class 🠈|--//
    }

    switch (true) {
      case element.classList.contains('asleep'):
        //--|🠉 Show the selected view only if it’s currently hidden 🠈|--//
        element.classList.remove('asleep'); //--|🠈 Remove '.asleep' 🠈|--//
        return element.classList.add('active'); //--|🠈 Toggle '.active' 🠈|--//
      case element.classList.contains('active'):
        //--|🠉 Optional toggle: allow hiding the current element again 🠈|--//
        element.classList.remove('active'); //--|🠈 Remove '.active' 🠈|--//
        return element.classList.add('asleep'); //--|🠈 Toggle '.asleep' 🠈|--//
    }
  };
  const collapseHeader = (pageName: string) => {
    let header = document.querySelector(
      `#${pageName}-header`
    ) as HTMLElement;
    switch (true) {
      case header.classList.contains('collapsed'):
        header.classList.remove('collapsed'); //--|🠈 Remove '.collapsed' 🠈|--//
        return header.classList.add('expanded'); //--|🠈 Toggle '.expanded' 🠈|--//
      case header.classList.contains('expanded'):
        header.classList.remove('expanded'); //--|🠈 Remove '.expanded' 🠈|--//
        return header.classList.add('collapsed'); //--|🠈 Toggle '.collapsed' 🠈|--//
    }
  };

  setTimeout(() => {
    showDemo(viewDemo);
  }, 250);
  collapseHeader(pageName);
}
*/
