//--|🠊 Section_features.ts 🠈|--//
export function defineButton(
  button: 'track-day' | 'log-ticket' | 'find-link',
  info: { blockName: string; pageName: string }
) {
  const { blockName, pageName } = info;
  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'track-day':
      return {
        fontSize: '<h1>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'text' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'overtime' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: '',
      };
    case 'log-ticket':
      return {
        fontSize: '<h1>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'text' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'ticketing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: '',
      };
    case 'find-link':
      return {
        fontSize: '<h1>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'text' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'hyperlink' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: '',
      };
  }
}

export function togglePreview(
  pageName: string,
  action: 'highlight' | 'downplay',
  division: 'overtime' | 'ticketing' | 'hyperlink'
) {
  const element = document.querySelector(`#${pageName}-header section .preview-${division}`) as HTMLElement;
  switch (action) {
    case 'highlight':
      if (element.classList.contains('downplay')) {
        element.classList.remove('downplay'); //--|🠈 Remove '.downplay' 🠈|--//
        return element.classList.add('highlight'); //--|🠈 Toggle '.highlight' 🠈|--//
      }
      break;
    case 'downplay':
      if (element.classList.contains('highlight')) {
        element.classList.remove('highlight'); //--|🠈 Remove '.highlight' 🠈|--//
        return element.classList.add('downplay'); //--|🠈 Toggle '.downplay' 🠈|--//
      }
      break;
  }
  /*
  
  if (!(element instanceof HTMLElement)) return;

  switch (true) {
    case element.classList.contains('highlight'):
      element.classList.remove('highlight'); //--|🠈 Remove '.highlight' 🠈|--//
      return element.classList.add('downplay'); //--|🠈 Toggle '.downplay' 🠈|--//
    case element.classList.contains('downplay'):
      element.classList.remove('downplay'); //--|🠈 Remove '.downplay' 🠈|--//
      return element.classList.add('highlight'); //--|🠈 Toggle '.highlight' 🠈|--//
  }
  */
}

export function viewDemo(pageName: string, view: 'overtime' | 'ticketing' | 'hyperlink') {
  //--|🠋 Collapse Header 🠋|--//
  setTimeout(() => {
    let element = document.querySelector(`#${pageName}-header`) as HTMLElement;
    switch (true) {
      case element.classList.contains('collapsed'):
        element.classList.remove('collapsed'); //--|🠈 Remove '.collapsed' 🠈|--//
        return element.classList.add('expanded'); //--|🠈 Toggle '.expanded' 🠈|--//
      case element.classList.contains('expanded'):
        element.classList.remove('expanded'); //--|🠈 Remove '.expanded' 🠈|--//
        return element.classList.add('collapsed'); //--|🠈 Toggle '.collapsed' 🠈|--//
    }
  }, 1000);
  //--|🠋 Show Demo 🠋|--//
  let element = document.querySelector(`#${view}-body`); //--|🠈 Select the new view element using its dynamic ID 🠈|--//
  let visible = document.querySelector("div[id*='body'].active") as HTMLElement | null; //--|🠈 Find the 'div[id*='body']' tag with a '.active' class 🠈|--//

  if (!(element instanceof HTMLElement)) {
    //--|🠉 Safeguard: Ensure the element exists and is an HTMLElement 🠈|--//
    console.warn(`Element for view "${view}" not found.`);
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
}
