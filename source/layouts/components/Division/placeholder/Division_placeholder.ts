//--|🠊 Division_placeholder.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../tools/conversions';

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

//--|🠊 AI Code: Review Please 2026-11-01 🠈|--\\
let emphasizeBackground = (element: HTMLDivElement, color: '(green)' | '(red)' | '(blue)' | '(orange)' | '(purple)' | '(yellow)') => {
  //--|🠋 Styled in Division.testing.scss: .emphasize dims the background, .emphasize-* paints it 🠋|--\\
  const paintClass: string = `emphasize-${stripBrackets(color, '()')}`;
  element.classList.add('emphasize', paintClass);
  setTimeout(() => {
    element.classList.remove(paintClass);
    setTimeout(() => {
      element.classList.remove('emphasize');
    }, 750 * 1);
  }, 750 * 5);
};

export default testBlock;
