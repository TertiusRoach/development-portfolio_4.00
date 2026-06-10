//--|🠊 Division_default.ts 🠈|--\\
//--|🠋 Styles 🠋|--\\
import * as Palettes from '../../../designs/Palettes.scss';

//--|🠋 Functions 🠋|--\\
import stripBrackets from '../../functions';

function testBlock(
  pageName: string,
  blockName: '<main>' | '<header>' | '<footer>' | '<overlay>' | '<leftbar>' | '<rightbar>',
  labelName: string,
) {
  let wrapperElement = document.querySelector(`#${pageName}-${stripBrackets(blockName, '<>')}`) as HTMLElement;
  switch (blockName) {
    case '<main>':
      ViewMain(wrapperElement);
      break;
    case '<header>':
      ViewHead(wrapperElement);
      break;
    case '<footer>':
      ViewFoot(wrapperElement);
      break;
    case '<overlay>':
      ViewOver(wrapperElement);
      break;
    case '<leftbar>':
      ViewLeft(wrapperElement);
      break;
    case '<rightbar>':
      ViewRight(wrapperElement);
      break;
  }
}

const ViewMain = (wrapper: HTMLElement) => {
  //--|🠋 This order is mandatory. 🠋|--\\
  //--|🠊 It's meant to keep the project scalable 🠈|--\\
  let foreground = wrapper.childNodes[0] as HTMLElement; //--|🠈 <section class="foreground"> 🠈|--\\
  let midground = wrapper.childNodes[1] as HTMLElement; //--|🠈 <figure class="midground"> 🠈|--\\
  let background = wrapper.childNodes[2] as HTMLDivElement; //--|🠈 <div class="background"> 🠈|--\\

  const disableElement: string = 'disabled-main';
  if (!wrapper.classList.contains(disableElement)) {
    wrapper.classList.add(disableElement);
    emphasizeBackground(background, '(green)');
    setTimeout(() => {
      wrapper.classList.remove(disableElement);
    }, 3000);
  }
};
const ViewHead = (wrapper: HTMLElement) => {
  //--|🠋 This order is mandatory. 🠋|--\\
  //--|🠊 It's meant to keep the project scalable 🠈|--\\
  let foreground = wrapper.childNodes[0] as HTMLElement; //--|🠈 <section class="foreground"> 🠈|--\\
  let midground = wrapper.childNodes[1] as HTMLElement; //--|🠈 <figure class="midground"> 🠈|--\\
  let background = wrapper.childNodes[2] as HTMLDivElement; //--|🠈 <div class="background"> 🠈|--\\

  const disableElement: string = 'disabled-header';
  if (!wrapper.classList.contains(disableElement)) {
    wrapper.classList.add(disableElement);
    wrapper.classList.replace('squaring', 'unfolded');
    emphasizeBackground(background as HTMLDivElement, '(red)');
    setTimeout(() => {
      wrapper.classList.replace('unfolded', 'expanded');
    }, 500);
    setTimeout(() => {
      wrapper.classList.replace('expanded', 'collapsed');
    }, 1000);
    setTimeout(() => {
      wrapper.classList.replace('collapsed', 'unfolded');
    }, 1500);
    setTimeout(() => {
      wrapper.classList.replace('unfolded', 'squaring');
    }, 2000);

    setTimeout(() => {
      wrapper.classList.remove(disableElement);
    }, 3000);
  }
};
const ViewFoot = (wrapper: HTMLElement) => {
  //--|🠋 This order is mandatory. 🠋|--\\
  //--|🠊 It's meant to keep the project scalable 🠈|--\\
  let foreground = wrapper.childNodes[0] as HTMLElement; //--|🠈 <section class="foreground"> 🠈|--\\
  let midground = wrapper.childNodes[1] as HTMLElement; //--|🠈 <figure class="midground"> 🠈|--\\
  let background = wrapper.childNodes[2] as HTMLDivElement; //--|🠈 <div class="background"> 🠈|--\\

  const disableElement: string = 'disabled-footer';
  if (!wrapper.classList.contains(disableElement)) {
    wrapper.classList.add(disableElement);
    wrapper.classList.replace('squaring', 'unfolded');
    emphasizeBackground(background as HTMLDivElement, '(blue)');
    setTimeout(() => {
      wrapper.classList.replace('unfolded', 'expanded');
    }, 500);
    setTimeout(() => {
      wrapper.classList.replace('expanded', 'collapsed');
    }, 1000);
    setTimeout(() => {
      wrapper.classList.replace('collapsed', 'unfolded');
    }, 1500);
    setTimeout(() => {
      wrapper.classList.replace('unfolded', 'squaring');
    }, 2000);
    setTimeout(() => {
      wrapper.classList.remove(disableElement);
    }, 3000);
  }
};
const ViewOver = (wrapper: HTMLElement) => {
  //--|🠋 This order is mandatory. 🠋|--\\
  //--|🠊 It's meant to keep the project scalable 🠈|--\\
  let foreground = wrapper.childNodes[0] as HTMLElement; //--|🠈 <section class="foreground"> 🠈|--\\
  let midground = wrapper.childNodes[1] as HTMLElement; //--|🠈 <figure class="midground"> 🠈|--\\
  let background = wrapper.childNodes[2] as HTMLDivElement; //--|🠈 <div class="background"> 🠈|--\\

  const disableElement: string = 'disabled-overlay';
  if (!wrapper.classList.contains(disableElement)) {
    wrapper.classList.add(disableElement);
    wrapper.classList.replace('hidden', 'visible');
    emphasizeBackground(background as HTMLDivElement, '(orange)');
    setTimeout(() => {
      wrapper.classList.remove(disableElement);
      wrapper.classList.replace('visible', 'hidden');
    }, 3000);
  }
};
const ViewLeft = (wrapper: HTMLElement) => {
  const disableElement: string = 'disabled-leftbar';
  if (!wrapper.classList.contains(disableElement)) {
    wrapper.classList.add(disableElement);
    emphasizeBackground(wrapper.childNodes[2] as HTMLDivElement, '(purple)');
    wrapper.classList.replace('collapsed', 'unfolded');
    setTimeout(() => {
      wrapper.classList.replace('unfolded', 'expanded');
    }, 500);
    setTimeout(() => {
      wrapper.classList.replace('expanded', 'unfolded');
    }, 1000);
    setTimeout(() => {
      wrapper.classList.replace('unfolded', 'collapsed');
    }, 1500);
    setTimeout(() => {
      wrapper.classList.remove(disableElement);
    }, 3000);
  }
};
const ViewRight = (wrapper: HTMLElement) => {
  //--|🠋 This order is mandatory. 🠋|--\\
  //--|🠊 It's meant to keep the project scalable 🠈|--\\
  let foreground = wrapper.childNodes[0] as HTMLElement; //--|🠈 <section class="foreground"> 🠈|--\\
  let midground = wrapper.childNodes[1] as HTMLElement; //--|🠈 <figure class="midground"> 🠈|--\\
  let background = wrapper.childNodes[2] as HTMLDivElement; //--|🠈 <div class="background"> 🠈|--\\
  const disableElement: string = 'disabled-rightbar';
  if (!wrapper.classList.contains(disableElement)) {
    wrapper.classList.add(disableElement);
    emphasizeBackground(background as HTMLDivElement, '(yellow)');
    wrapper.classList.replace('collapsed', 'unfolded');
    setTimeout(() => {
      wrapper.classList.replace('unfolded', 'expanded');
    }, 500);
    setTimeout(() => {
      wrapper.classList.replace('expanded', 'unfolded');
    }, 1000);
    setTimeout(() => {
      wrapper.classList.replace('unfolded', 'collapsed');
    }, 1500);
    setTimeout(() => {
      wrapper.classList.remove(disableElement);
    }, 3000);
  }
};

let emphasizeBackground = (
  element: HTMLDivElement,
  color: '(green)' | '(red)' | '(blue)' | '(orange)' | '(purple)' | '(yellow)',
) => {
  element.style.opacity = '0.25';
  element.style.transition = 'background 250ms ease-in-out';
  setTimeout(() => {
    switch (color) {
      case '(green)':
        return (element.style.background = '#63ff9c');
      case '(red)':
        return (element.style.background = '#ff9090');
      case '(blue)':
        return (element.style.background = '#7dc0ff');
      case '(orange)':
        return (element.style.background = '#ff9900');
      case '(purple)':
        return (element.style.background = '#c98fff');
      case '(yellow)':
        return (element.style.background = '#ffdd55');
    }
  }, 125);
  setTimeout(() => {
    element.style.background = '';
    setTimeout(() => {
      element.style.opacity = '';
      element.style.transition = '';
    }, 500);
  }, 2000);
};
export default testBlock;
/*
function previewElement(pageName: string, blockName: string, labelName: string, blockAction: 'next-view' | 'prev-view') {
  // (1) Query safely: allow null
  const tableWeek = document.querySelector(
    `#${pageName}-${blockName} .${labelName}-${blockName}_carousel li`,
  ) as HTMLTableElement | null;
  if (!tableWeek) return;

  // (2) Valid states as a literal tuple (gives you a real union type)
  const romanNumerals = ['I', 'II', 'III'] as Array<string>;

  // (3) Detect current state by checking which class exists (order-independent)
  const currentRoman = romanNumerals.find((r) => tableWeek.classList.contains(r)) ?? (romanNumerals[0] as string);

  // (4) Convert current roman to an index (guaranteed 0..length-1)
  const currentIndex = romanNumerals.indexOf(currentRoman) as number;

  // (5) Compute next index based on action and clamp it (prevents going out of range)
  type selectRoman = (typeof romanNumerals)[number];
  const delta = blockAction === 'next-view' ? 1 : -1;
  const nextIndex = Math.max(0, Math.min(romanNumerals.length - 1, currentIndex + delta)) as number;
  const nextRoman: selectRoman = romanNumerals[nextIndex] as string;

  // (6) Apply the new class (remove old roman state classes, then add next)
  tableWeek.classList.remove(...romanNumerals);
  tableWeek.classList.add(nextRoman);

  // (7) Toggling the tbodies based on DOM siblings (Your logic, safely typed)
  const visibleElement = document.querySelector('#overtime-leftbar tbody.visible') as HTMLTableSectionElement | null;

  // Make sure we actually found a visible element before trying to move
  if (visibleElement) {
    if (blockAction === 'prev-view') {
      const prevElement = visibleElement.previousElementSibling as HTMLTableSectionElement | null;

      // Only swap if a previous element actually exists (prevents crash at the very top)
      if (prevElement) {
        visibleElement.classList.add('hidden');
        visibleElement.classList.remove('visible');
        prevElement.classList.add('visible');
        prevElement.classList.remove('hidden');
      }
    } else if (blockAction === 'next-view') {
      const nextElement = visibleElement.nextElementSibling as HTMLTableSectionElement | null;

      // Only swap if a next element actually exists (prevents crash at the very bottom)
      if (nextElement) {
        visibleElement.classList.add('hidden');
        visibleElement.classList.remove('visible');
        nextElement.classList.add('visible');
        nextElement.classList.remove('hidden');
      }
    }
  }

  // (8) Optional: If you need a numeric position for other logic
  const position1Based = nextIndex + 1;

  // (9) Logging / side effects go here (NOT needed for the class switching itself)
  console.log('action:', blockAction);
  console.log('from:', currentRoman, 'to:', nextRoman);
  console.log('position (1-based):', position1Based);
}
export default previewElement;
*/
