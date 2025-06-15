//--|🠊 Section_buttons.ts 🠈|--//
export function defineButton(info: { pageName: string; blockName: string }) {
  const { pageName, blockName } = info;
  //--|🠋 Always Return an Object 🠋|--//
  /*
  switch(pageName){
    
  }
  */
  /*
  switch (button) {
    case 'track-day':
      return {
        fontSize: '<h1>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-text-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'overtime' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: '',
      };
    case 'log-ticket':
      return {
        fontSize: '<h1>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-text-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'ticketing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: '',
      };
    case 'find-link':
      return {
        fontSize: '<h1>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-text-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'hyperlink' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: '',
      };
  }
  */
}

export function scrollSize(thisName: HTMLSelectElement) {
  switch (thisName.value) {
    case 'h1-size':
      console.log(`View size changed to: ${thisName.value}`);
      break;
    case 'h2-size':
      console.log(`View size changed to: ${thisName.value}`);
      break;
    case 'h3-size':
      console.log(`View size changed to: ${thisName.value}`);
      break;
    case 'h4-size':
      console.log(`View size changed to: ${thisName.value}`);
      break;
    case 'h5-size':
      console.log(`View size changed to: ${thisName.value}`);
      break;
    case 'h6-size':
      console.log(`View size changed to: ${thisName.value}`);
      break;
    case 'p-size':
      console.log(`View size changed to: ${thisName.value}`);
      break;
  }
}
/*
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
  viewPage: 'overtime' | 'ticketing' | 'hyperlink'
) {
  const showDemo = (viewDemo: string) => {
    let element = document.querySelector(`#${viewDemo}-body`); //--|🠈 Select the new view element using its dynamic ID 🠈|--//
    let active = document.querySelector("div[id*='body'].active") as HTMLElement | null; //--|🠈 Find the 'div[id*='body']' tag with a '.active' class 🠈|--//

    if (!(element instanceof HTMLElement)) {
      //--|🠉 Safeguard: Ensure the element exists and is an HTMLElement 🠈|--//
      console.warn(`Element for view "${viewDemo}" not found.`);
      return;
    }

    if (active) {
      //--|🠉 If there's a visible element, hide it 🠈|--//
      active.classList.add('asleep'); //--|🠈 Hide it by adding 'asleep' 🠈|--//
      active.classList.remove('active'); //--|🠈 And remove 'active' class 🠈|--//
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
    let header = document.querySelector(`#${pageName}-header`) as HTMLElement;
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
    showDemo(viewPage);
  }, 250);
  collapseHeader(pageName);
}
*/
