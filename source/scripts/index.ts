// index.ts
import $ from 'jquery';

//--|🠋 Exports 🠋|--//
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

export function showSection(button: HTMLButtonElement, container: HTMLElement, blockName: 'header' | 'footer' | String) {
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
  const setActive = function (button: HTMLButtonElement, blockName: String): void {
    const activeButton = document.querySelector(`#${blockName}-active`) as HTMLElement;
    if (button.parentElement?.tagName === 'MENU') {
      if (activeButton) {
        activeButton.removeAttribute('id');
      } else {
        console.log(`//--|🠊 No Element: #${blockName}-active 🠈|--//`);
      }

      button.id = `${blockName}-active`;
    }
  };
  const scrollLabel = button.className.split(' ')[0].split('-')[1] as string; //--|🠈 Extract the label name from the button's class name 🠈|--//
  const scrollPixels = setPixels(container).find((item) => item.className === scrollLabel); //--|🠈 Find the scroll amount for the section corresponding to the label name 🠈|--//
  const scrollElement = container.tagName.toLowerCase() as string; //--|🠈 Get the tag name of the container in lowercase 🠈|--//

  //--|🠋 If scrollPixels is found, animate the scroll to the calculated amount 🠋|--//
  if (scrollPixels) {
    setActive(button, blockName);
    $(scrollElement).animate({ scrollTop: `${scrollPixels.scrollAmount}px` }, 1000);
  }
}

export function showAside(blockName: 'leftbar' | 'rightbar' | string) {
  const pageName = getIdentification();
  const element = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  const safety: boolean = element?.className.includes('blocked');
  const status = element?.className.split(' ').pop() as string;
  if (!safety) {
    switch (status) {
      case 'expanded':
        $(`#${pageName}-${blockName}.expanded`).addClass('blocked');
        $(`#${pageName}-${blockName}.expanded`).addClass('expanded');
        setTimeout(() => {
          $(`#${pageName}-${blockName}`).removeClass('blocked');
          $(`#${pageName}-${blockName}`).css('display', 'none');
          $(`#${pageName}-${blockName}`).removeClass('expanded');
        }, 1000);
        break;
      case 'collapsed':
        $(`#${pageName}-${blockName}.collapsed`).css('display', 'grid');
        $(`#${pageName}-${blockName}.collapsed`).addClass('blocked');
        $(`#${pageName}-${blockName}.collapsed`).addClass('expanded');
        setTimeout(() => {
          $(`#${pageName}-${blockName}`).removeClass('blocked');
          $(`#${pageName}-${blockName}`).removeClass('collapsed');
        }, 1000);
        break;
      default:
        alert('ERROR!');
    }
  }
}
