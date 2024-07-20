//--|🠋 index.ts 🠋|--//

//--|🠋 Index Page 🠋|--//
export function showSection(pageName: string, blockName: 'overlay' | String) {
  const element = document.getElementById('index-overlay') as HTMLElement;
  if (!element) {
    console.error('Element with ID "index-overlay" not found.');
    return;
  }

  let safety: boolean = element.className.includes('blocked');
  let status = element.className.split(' ').pop() as string;

  if (!safety) {
    const targetElement = document.getElementById(`${pageName}-${blockName}`);
    if (!targetElement) {
      console.error(`Element with ID "${pageName}-${blockName}" not found.`);
      return;
    }

    switch (status) {
      case 'visible':
        targetElement.classList.add('blocked');
        targetElement.classList.toggle('hidden');

        setTimeout(() => {
          targetElement.classList.remove('blocked');
          targetElement.style.display = 'none';
          targetElement.classList.remove('visible');
        }, 1000);
        break;
      case 'hidden':
        targetElement.classList.add('blocked');
        targetElement.style.display = 'grid';
        targetElement.classList.toggle('visible');

        setTimeout(() => {
          targetElement.classList.remove('blocked');
          targetElement.classList.remove('hidden');
        }, 1000);
        break;
      default:
        alert('ERROR!');
    }
  }
}
export function setActive(button: HTMLButtonElement, blockName: String): void {
  const activeButton = document.querySelector(`#${blockName}-active`) as HTMLElement;
  if (button.parentElement?.tagName === 'MENU') {
    if (activeButton) {
      activeButton.removeAttribute('id');
    } else {
      console.log(`//--|🠊 No Element: #${blockName}-active 🠈|--//`);
    }

    button.id = `${blockName}-active`;
  }
}
export function showAside(blockName: 'leftbar' | 'rightbar' | string) {
  const pageName = getIdentification();
  const element = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  if (!element) {
    console.error(`Element with ID "${pageName}-${blockName}" not found.`);
    return;
  }

  const safety: boolean = element.className.includes('blocked');
  const status = element.className.split(' ').pop() as string;

  if (!safety) {
    switch (status) {
      case 'expanded':
        element.classList.add('blocked');
        element.classList.add('expanded');

        setTimeout(() => {
          element.classList.remove('blocked');
          element.style.display = 'none';
          element.classList.remove('expanded');
        }, 1000);
        break;
      case 'collapsed':
        element.style.display = 'grid';
        element.classList.add('blocked');
        element.classList.add('expanded');

        setTimeout(() => {
          element.classList.remove('blocked');
          element.classList.remove('collapsed');
        }, 1000);
        break;
      default:
        alert('ERROR!');
    }
  }
}
export function getScroll(button: HTMLButtonElement, container: HTMLElement, blockName: 'header' | 'footer' | String) {
  const setPixels = function (container: HTMLElement): { className: string; scrollAmount: number }[] {
    let children = Array.from(container.children) as HTMLElement[]; //--|🠈 Convert the container's children to an array of HTMLElement 🠈|--//
    let scrollAmounts: { className: string; scrollAmount: number }[] = []; //--|🠈 Initialize an array to store the class names and scroll amounts 🠈|--//
    let cumulativeHeight = 0; //--|🠈 Initialize cumulative height to 0 🠈|--//
    //--|🠋 Iterate over each child element 🠈|--//
    children.forEach((child) => {
      //--|🠋 Check if the child element is a SECTION 🠈|--//
      if (child.tagName === 'SECTION') {
        //--|🠋 Add the class name and cumulative height to the scrollAmounts array 🠈|--//
        scrollAmounts.push({
          className: child.className.split('-')[1], //--|🠈 Assuming className format includes the section name 🠈|--//
          scrollAmount: cumulativeHeight,
        });
      }
      cumulativeHeight += child.offsetHeight; //--|🠈 Add the child's height to the cumulative height 🠈|--//
    });
    //--|🠋 Return the array of class names and scroll amounts 🠈|--//
    return scrollAmounts;
  };
  const scrollTag = container.tagName.toLowerCase() as String; //--|🠈 Get the tag name of the container in lowercase 🠈|--//
  const scrollLabel = button.className.split(' ')[0].split('-')[1] as String; //--|🠈 Extract the label name from the button's class name 🠈|--//
  const scrollPixels = setPixels(container).find((item) => item.className === scrollLabel); //--|🠈 Find the scroll amount for the section corresponding to the label name 🠈|--//

  //--|🠋 If scrollPixels is found, animate the scroll to the calculated amount 🠋|--//
  if (scrollPixels) {
    setActive(button, blockName);
    return {
      scrollTag: scrollTag as String,
      scrollTop: scrollPixels.scrollAmount as Number,
    };
  }
}
export function setMenu(blockName: String, labelName: String) {
  // Get currently active section and the selected section elements
  const disableElement = document.getElementById('main-active') as HTMLElement | null;
  const activateElement = document.querySelector(`.${blockName}-${labelName}`) as HTMLElement | null;

  // Helper function to update active elements
  const toggleElement = function (
    disableElement: HTMLElement | HTMLButtonElement | null,
    activateElement: HTMLElement | HTMLButtonElement | null,
    id: string
  ) {
    if (disableElement) {
      disableElement.removeAttribute('id');
    }
    if (activateElement) {
      activateElement.setAttribute('id', id);
    }
  };

  // Determine orientation and update the active button accordingly
  let block: 'header' | 'footer' | '';
  switch (getOrientation()) {
    case 'desktop-landscape':
      block = 'header';
      break;
    case 'mobile-portrait':
      block = 'footer';
      break;
    default:
      block = '';
  }

  if (block) {
    let activeButton = document.querySelector(`#${block}-active`) as HTMLButtonElement;
    let selectButton = document.querySelector(`.${block}-${labelName}`) as HTMLButtonElement;
    toggleElement(activeButton, selectButton, `${block}-active`); // Update the <header> or <footer> element based on device orientation
    toggleElement(disableElement, activateElement, 'main-active'); // Activate the <section> inside the <main> container
  }
}
//--|🠉 Index Page 🠉|--//
//--|🠋 Established Functions 🠋|--//
export function getIdentification(): String {
  const hyperlink: String = window.location.href;
  const identification: String | undefined = hyperlink?.split('/').pop()?.split('.')[0];
  if (identification === '' || undefined || null) {
    return 'index';
  } else {
    return hyperlink.split('/').pop()?.split('.')[0] as String;
  }
}
export function getOrientation(): String {
  const orientation = window.screen.orientation.type;

  if (!orientation.includes('landscape')) {
    return 'desktop-landscape' as String;
  } else if (!orientation.includes('portrait')) {
    return 'mobile-portrait' as String;
  } else {
    return 'unknown-orientation' as String;
  }
}
export function getResolution(): String {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const resolution = `${width}x${height}`;

  return resolution as String;
}
export function getSVG(labelName: string): { dark: String; medium: String; light: String } {
  const colorShades: Array<string> = ['dark', 'medium', 'light'];
  const iconURI = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/47547119286073f7ff21945c645c3d8f1b164225`;
  //--|🠋 Folder Structure Location 🠋|--//
  const getIconPath = (shade: string): string => {
    return `/source/assets/svg-files/${getIdentification()}-page/${labelName}/${labelName}-${shade}.svg`;
  };

  return {
    dark: `${iconURI}${getIconPath(colorShades[0])}`,
    medium: `${iconURI}${getIconPath(colorShades[1])}`,
    light: `${iconURI}${getIconPath(colorShades[2])}`,
  } as { dark: String; medium: String; light: String };
}
//--|🠉 Established Functions 🠉|--//
