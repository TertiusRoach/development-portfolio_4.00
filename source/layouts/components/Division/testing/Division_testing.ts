//--|🠊 Division_testing.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../scripts';

function testBlock(pageName: string, blockName: '<main>' | '<header>' | '<footer>' | '<overlay>' | '<leftbar>' | '<rightbar>') {
  let wrapperElement = document.querySelector(`#${pageName}-${stripBrackets(blockName, '<>')}`) as HTMLElement;
  switch (blockName) {
    case '<main>':
      viewMain(wrapperElement);
      break;
    case '<header>':
      viewHead(wrapperElement);
      break;
    case '<footer>':
      viewFoot(wrapperElement);
      break;
    case '<overlay>':
      viewOver(wrapperElement);
      break;
    case '<leftbar>':
      viewLeft(wrapperElement);
      break;
    case '<rightbar>':
      viewRight(wrapperElement);
      break;
  }
}

const viewMain = (wrapper: HTMLElement) => {
  //--|🠋 This order is mandatory. 🠋|--\\
  //--|🠊 It's meant to keep the project scalable 🠈|--\\
  let foreground = wrapper.childNodes[0] as HTMLElement; //--|🠈 <section class="foreground"> 🠈|--\\
  let midground = wrapper.childNodes[1] as HTMLElement; //--|🠈 <figure class="midground"> 🠈|--\\
  let background = wrapper.childNodes[2] as HTMLDivElement; //--|🠈 <div class="background"> 🠈|--\\

  const disableElement: string = 'frozen-main';
  if (!wrapper.classList.contains(disableElement)) {
    wrapper.classList.add(disableElement);
    emphasizeBackground(background, '(green)');
    setTimeout(() => {
      wrapper.classList.remove(disableElement);
    }, 3000);
  }
};
const viewHead = (wrapper: HTMLElement) => {
  //--|🠋 This order is mandatory. 🠋|--\\
  //--|🠊 It's meant to keep the project scalable 🠈|--\\
  let foreground = wrapper.childNodes[0] as HTMLElement; //--|🠈 <section class="foreground"> 🠈|--\\
  let midground = wrapper.childNodes[1] as HTMLElement; //--|🠈 <figure class="midground"> 🠈|--\\
  let background = wrapper.childNodes[2] as HTMLDivElement; //--|🠈 <div class="background"> 🠈|--\\

  const disableElement: string = 'frozen-header';
  if (!wrapper.classList.contains(disableElement)) {
    wrapper.classList.add(disableElement);
    wrapper.classList.replace('squaring', 'unfolded');
    emphasizeBackground(background as HTMLDivElement, '(red)');
    setTimeout(() => {
      wrapper.classList.replace('unfolded', 'expanded');
    }, 750 * 1);
    setTimeout(() => {
      wrapper.classList.replace('expanded', 'collapsed');
    }, 750 * 2);
    setTimeout(() => {
      wrapper.classList.replace('collapsed', 'unfolded');
    }, 750 * 3);
    setTimeout(() => {
      wrapper.classList.replace('unfolded', 'squaring');
    }, 750 * 4);
    setTimeout(() => {
      wrapper.classList.remove(disableElement);
    }, 750 * 5);
  }
};
const viewFoot = (wrapper: HTMLElement) => {
  //--|🠋 This order is mandatory. 🠋|--\\
  //--|🠊 It's meant to keep the project scalable 🠈|--\\
  let foreground = wrapper.childNodes[0] as HTMLElement; //--|🠈 <section class="foreground"> 🠈|--\\
  let midground = wrapper.childNodes[1] as HTMLElement; //--|🠈 <figure class="midground"> 🠈|--\\
  let background = wrapper.childNodes[2] as HTMLDivElement; //--|🠈 <div class="background"> 🠈|--\\

  const disableElement: string = 'frozen-footer';
  if (!wrapper.classList.contains(disableElement)) {
    wrapper.classList.add(disableElement);
    wrapper.classList.replace('squaring', 'unfolded');
    emphasizeBackground(background as HTMLDivElement, '(blue)');
    setTimeout(() => {
      wrapper.classList.replace('unfolded', 'expanded');
    }, 750 * 1);
    setTimeout(() => {
      wrapper.classList.replace('expanded', 'collapsed');
    }, 750 * 2);
    setTimeout(() => {
      wrapper.classList.replace('collapsed', 'unfolded');
    }, 750 * 3);
    setTimeout(() => {
      wrapper.classList.replace('unfolded', 'squaring');
    }, 750 * 4);
    setTimeout(() => {
      wrapper.classList.remove(disableElement);
    }, 750 * 5);
  }
};
const viewOver = (wrapper: HTMLElement) => {
  //--|🠋 This order is mandatory. 🠋|--\\
  //--|🠊 It's meant to keep the project scalable 🠈|--\\
  let foreground = wrapper.childNodes[0] as HTMLElement; //--|🠈 <section class="foreground"> 🠈|--\\
  let midground = wrapper.childNodes[1] as HTMLElement; //--|🠈 <figure class="midground"> 🠈|--\\
  let background = wrapper.childNodes[2] as HTMLDivElement; //--|🠈 <div class="background"> 🠈|--\\

  const disableElement: string = 'frozen-overlay';
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
const viewLeft = (wrapper: HTMLElement) => {
  const disableElement: string = 'frozen-leftbar';
  if (!wrapper.classList.contains(disableElement)) {
    wrapper.classList.add(disableElement);
    emphasizeBackground(wrapper.childNodes[2] as HTMLDivElement, '(purple)');
    wrapper.classList.replace('collapsed', 'unfolded');
    setTimeout(() => {
      wrapper.classList.replace('unfolded', 'expanded');
    }, 750 * 2);
    setTimeout(() => {
      wrapper.classList.replace('expanded', 'unfolded');
    }, 750 * 3);
    setTimeout(() => {
      wrapper.classList.replace('unfolded', 'collapsed');
    }, 750 * 4);
    setTimeout(() => {
      wrapper.classList.remove(disableElement);
    }, 750 * 5);
  }
};
const viewRight = (wrapper: HTMLElement) => {
  //--|🠋 This order is mandatory. 🠋|--\\
  //--|🠊 It's meant to keep the project scalable 🠈|--\\
  let foreground = wrapper.childNodes[0] as HTMLElement; //--|🠈 <section class="foreground"> 🠈|--\\
  let midground = wrapper.childNodes[1] as HTMLElement; //--|🠈 <figure class="midground"> 🠈|--\\
  let background = wrapper.childNodes[2] as HTMLDivElement; //--|🠈 <div class="background"> 🠈|--\\

  const disableElement: string = 'frozen-rightbar';
  if (!wrapper.classList.contains(disableElement)) {
    wrapper.classList.add(disableElement);
    emphasizeBackground(background as HTMLDivElement, '(yellow)');
    wrapper.classList.replace('collapsed', 'unfolded');
    setTimeout(() => {
      wrapper.classList.replace('unfolded', 'expanded');
    }, 750 * 2);
    setTimeout(() => {
      wrapper.classList.replace('expanded', 'unfolded');
    }, 750 * 3);
    setTimeout(() => {
      wrapper.classList.replace('unfolded', 'collapsed');
    }, 750 * 4);
    setTimeout(() => {
      wrapper.classList.remove(disableElement);
    }, 750 * 5);
  }
};

let emphasizeBackground = (element: HTMLDivElement, color: '(green)' | '(red)' | '(blue)' | '(orange)' | '(purple)' | '(yellow)') => {
  element.style.opacity = '0.5';
  element.style.transition = 'background 250ms ease-in-out';
  setTimeout(() => {
    element.style.background = '';
    setTimeout(() => {
      element.style.opacity = '';
      element.style.transition = '';
    }, 750 * 1);
  }, 750 * 5);
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
};

export default testBlock;
