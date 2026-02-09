//--|🠊 Main/ButtonsFunctions.ts 🠈|--\\
export function controlPreview(
  pageName: string,
  blockName: string,
  blockAction: 'go-up' | 'scroll-down' | String,
  pagePreview: 'default-buttons' | 'routing-buttons' | String,
) {
  const pagePart: String = `${pageName}-${blockName} li[class="${pagePreview}"]`;
  const findHTML = (blockAction: 'go-up' | 'scroll-down' | String, pagePart: String) => {
    let previewText = document.querySelectorAll(`#${pagePart} li.visible`) as NodeListOf<HTMLElement>;
    let asideButtons = document.querySelectorAll(`#${pagePart} div.visible`) as NodeListOf<HTMLElement>;
    let mergeNodes = Array.from(previewText).concat(Array.from(asideButtons)) as HTMLElement[];

    let viewTags: Array<HTMLElement> = [];
    for (let i = 0; i < mergeNodes.length; i++) {
      switch (blockAction) {
        case 'go-up':
          if (mergeNodes[i].previousElementSibling !== null) {
            viewTags.push(mergeNodes[i].previousElementSibling as HTMLElement);
          } else {
            viewTags.push(mergeNodes[i].parentElement?.lastChild as HTMLElement);
          }
          break;
        case 'scroll-down':
          if (mergeNodes[i].nextElementSibling !== null) {
            viewTags.push(mergeNodes[i].nextElementSibling as HTMLElement);
          } else {
            viewTags.push(mergeNodes[i].parentElement?.firstChild as HTMLElement);
          }
          break;
      }
    }
    markHTML(mergeNodes, viewTags);
  };
  const markHTML = (remove: HTMLElement[], select: Array<HTMLElement>) => {
    for (let i = 0; i < remove.length; i++) {
      remove[i].classList.add('hidden');
      select[i].classList.add('visible');

      select[i].classList.remove('hidden');
      remove[i].classList.remove('visible');
    }
    viewHTML(select);
  };
  const viewHTML = (elements: HTMLElement[]): void => {
    //--|🠊 Applies a slide class to parent elements based on the size class 🠈|--\\
    //--|🠊 found on the first carousel element 🠈|--\\

    //--|🠊 Defines all valid slide class names. 🠈|--\\
    //--|🠊 This keeps slide values constrained and type-safe. 🠈|--\\
    type Slide = 'slide-one' | 'slide-two' | 'slide-thr' | 'slide-fou' | 'slide-fiv' | 'slide-six' | 'slide-sev';

    //--|🠊 Maps size-related classes to their corresponding slide classes. 🠈|--\\
    //--|🠊 The key is the size class found on an element, 🠈|--\\
    //--|🠊 the value is the slide class to apply. 🠈|--\\
    let SIZE_TO_SLIDE: Record<string, Slide> = {
      'h1-size': 'slide-one',
      'h2-size': 'slide-two',
      'h3-size': 'slide-thr',
      'h4-size': 'slide-fou',
      'h5-size': 'slide-fiv',
      'h6-size': 'slide-six',
      'p-size': 'slide-sev',
    };

    //--|🠊 Grab the first element in the list. 🠈|--\\
    //--|🠊 This element determines which slide should be active. 🠈|--\\
    let first = elements[0];

    //--|🠊 If no elements were passed in, stop immediately. 🠈|--\\
    if (!first) return;

    //--|🠊 Convert the first element’s classList into an array, 🠈|--\\
    //--|🠊 take the first class, 🠈|--\\
    //--|🠊 and look up the matching slide in SIZE_TO_SLIDE. 🠈|--\\
    let slide = SIZE_TO_SLIDE[[...first.classList][0]];

    //--|🠊 If the class doesn’t map to a slide, do nothing. 🠈|--\\
    if (!slide) return;

    //--|🠊 Loop over all carousel elements 🠈|--\\
    elements.forEach((el) => {
      //--|🠊 Get the parent element (this is the element that receives the slide class) 🠈|--\\
      var parent = el.parentElement;

      //--|🠊 If the element has no parent, skip it 🠈|--\\
      if (!parent) return;

      //--|🠊 Remove all possible slide classes from the parent 🠈|--\\
      //--|🠊 This ensures only one slide class is active at a time 🠈|--\\
      parent.classList.remove(...Object.values(SIZE_TO_SLIDE));

      //--|🠊 Add the newly determined slide class 🠈|--\\
      parent.classList.add(slide);
    });
    // console.log(elements);
  };
  findHTML(blockAction, pagePart);

  let darkCarousel = Array.from(
    document.querySelectorAll(`#${pagePart} section[class*="foreground"] aside[id*="darkside"] li[class*="slide"]`),
  ) as HTMLElement[];
  let lightCarousel = Array.from(
    document.querySelectorAll(`#${pagePart} section[class*="foreground"] aside[id*="lightside"] li[class*="slide"]`),
  ) as HTMLElement[];
}
export function defaultPreview(
  pageName: string,
  blockName: string,
  blockAction: 'h1-size' | 'h2-size' | 'h3-size' | 'h4-size' | 'h5-size' | 'h6-size' | 'p-size',
) {
  const findHTML = (
    pageName: string,
    blockName: string,
    blockAction: string,
    pagePreview: 'default-buttons' | 'routing-buttons',
  ) => {
    const pagePart: String = `${pageName}-${blockName} li[class="${pagePreview}"]`;
    let textCarousel = document.querySelector(`#${pagePart} figure[class*="midground"] .carousel-preview`) as HTMLElement;

    let darkCarousel = Array.from(
      document.querySelectorAll(`#${pagePart} section[class*="foreground"] aside[id*="darkside"] li[class*="slide"]`),
    ) as HTMLElement[];
    let darkDef = darkCarousel[0] as HTMLElement;
    let darkAlt = darkCarousel[1] as HTMLElement;

    let lightCarousel = Array.from(
      document.querySelectorAll(`#${pagePart} section[class*="foreground"] aside[id*="lightside"] li[class*="slide"]`),
    ) as HTMLElement[];
    let lightDef = lightCarousel[0] as HTMLElement;
    let lightAlt = lightCarousel[1] as HTMLElement;

    for (let i = 0; i < textCarousel.childElementCount; i++) {
      if (textCarousel.children[i].classList[0] === blockAction) {
        var carouselElements = [
          textCarousel.children[i],
          darkDef.children[i],
          lightDef.children[i],
          darkAlt.children[i],
          lightAlt.children[i],
        ] as Array<HTMLElement>;

        markHTML(pageName, blockName, carouselElements);
      }
    }
  };
  const markHTML = (pageName: string, blockName: string, carousels: Array<HTMLElement>) => {
    for (let i = 0; i < carousels.length; i++) {
      carousels[i].classList.add('visible');
      carousels[i].classList.remove('hidden');
    }

    viewHTML(carousels);
  };
  const viewHTML = (elements: HTMLElement[]): void => {
    //--|🠊 Applies a slide class to parent elements based on the size class 🠈|--\\
    //--|🠊 found on the first carousel element 🠈|--\\

    //--|🠊 Defines all valid slide class names. 🠈|--\\
    //--|🠊 This keeps slide values constrained and type-safe. 🠈|--\\
    type Slide = 'slide-one' | 'slide-two' | 'slide-thr' | 'slide-fou' | 'slide-fiv' | 'slide-six' | 'slide-sev';

    //--|🠊 Maps size-related classes to their corresponding slide classes. 🠈|--\\
    //--|🠊 The key is the size class found on an element, 🠈|--\\
    //--|🠊 the value is the slide class to apply. 🠈|--\\
    let SIZE_TO_SLIDE: Record<string, Slide> = {
      'h1-size': 'slide-one',
      'h2-size': 'slide-two',
      'h3-size': 'slide-thr',
      'h4-size': 'slide-fou',
      'h5-size': 'slide-fiv',
      'h6-size': 'slide-six',
      'p-size': 'slide-sev',
    };

    //--|🠊 Grab the first element in the list. 🠈|--\\
    //--|🠊 This element determines which slide should be active. 🠈|--\\
    let first = elements[0];

    //--|🠊 If no elements were passed in, stop immediately. 🠈|--\\
    if (!first) return;

    //--|🠊 Convert the first element’s classList into an array, 🠈|--\\
    //--|🠊 take the first class, 🠈|--\\
    //--|🠊 and look up the matching slide in SIZE_TO_SLIDE. 🠈|--\\
    let slide = SIZE_TO_SLIDE[[...first.classList][0]];

    //--|🠊 If the class doesn’t map to a slide, do nothing. 🠈|--\\
    if (!slide) return;

    //--|🠊 Loop over all carousel elements 🠈|--\\
    elements.forEach((element) => {
      //--|🠊 Get the parent element (this is the element that receives the slide class) 🠈|--\\
      var parent = element.parentElement;

      //--|🠊 If the element has no parent, skip it 🠈|--\\
      if (!parent) return;

      //--|🠊 Remove all possible slide classes from the parent 🠈|--\\
      //--|🠊 This ensures only one slide class is active at a time 🠈|--\\
      parent.classList.remove(...Object.values(SIZE_TO_SLIDE));

      //--|🠊 Add the newly determined slide class 🠈|--\\
      parent.classList.add(slide);
    });
  };

  //--|🠊 Scroll to Default <button> 🠈|--\\
  setTimeout(() => {
    findHTML(pageName, blockName, blockAction, 'default-buttons');
  }, 125);

  setTimeout(() => {}, 6000);
}
export function togglePreview(
  pageName: string,
  blockName: string,
  pageAction: 'default' | 'routing',
  blockAction: 'toggle-dark' | 'toggle-light',
) {
  const label = document.getElementById(`${pageName}_${blockName}_${blockAction}`) as HTMLLabelElement | null;

  const input = label?.querySelector('input[type="checkbox"]') as HTMLInputElement | null;
  if (!input) return;

  const isChecked = input.checked;
  const toggleDefault = document.querySelector(
    `#${pageName}-${blockName} #${pageAction}-${blockAction.split('-')[1]}side ol[class*="preview"]`,
  ) as HTMLOListElement | null;

  if (!toggleDefault) return;

  toggleDefault.classList.remove('slide-def', 'slide-alt');
  toggleDefault.classList.add(isChecked ? 'slide-alt' : 'slide-def');
}
export function toggleAside(
  pageName: string,
  blockName: string,
  blockAction: 'open-dark' | 'close-dark' | 'open-light' | 'close-light' | String,
) {
  let darkCode = document.querySelector(
    `#${pageName}-${blockName} figure[class*="midground"] aside.dark-code`,
  ) as HTMLElement;
  let darkGrade = document.querySelector(
    `#${pageName}-${blockName} div[class*="background"] aside.dark-grade`,
  ) as HTMLElement;
  let lightCode = document.querySelector(
    `#${pageName}-${blockName} figure[class*="midground"] aside.light-code`,
  ) as HTMLElement;
  let lightGrade = document.querySelector(
    `#${pageName}-${blockName} div[class*="background"] aside.light-grade`,
  ) as HTMLElement;
  let textView = document.querySelector(
    `#${pageName}-${blockName} figure[class*="midground"] section.size-font`,
  ) as HTMLElement;

  switch (blockAction) {
    case 'open-dark':
      darkCode.classList.add('visible');
      darkCode.classList.remove('hidden');

      textView.classList.add('hidden');
      textView.classList.remove('visible');

      darkGrade.classList.add('visible');
      darkGrade.classList.remove('hidden');
      break;
    case 'close-dark':
      darkCode.classList.add('hidden');
      darkCode.classList.remove('visible');

      textView.classList.add('visible');
      textView.classList.remove('hidden');

      darkGrade.classList.add('hidden');
      darkGrade.classList.remove('visible');
      break;
    case 'open-light':
      lightCode.classList.add('visible');
      lightCode.classList.remove('hidden');

      textView.classList.add('hidden');
      textView.classList.remove('visible');

      lightGrade.classList.add('visible');
      lightGrade.classList.remove('hidden');
      break;
    case 'close-light':
      lightCode.classList.add('hidden');
      lightCode.classList.remove('visible');

      textView.classList.add('visible');
      textView.classList.remove('hidden');

      lightGrade.classList.add('hidden');
      lightGrade.classList.remove('visible');
      break;
  }
}
//--|🠊 1. Declare timer outside of scope. 🠈|--\\
let scrollTime = 0; //--|🠊 It acts as the memory for the last time a scroll was allowed. 🠈|--\\
export function scrollMouse(
  pageName: string,
  blockName: string,
  blockAction: 'scroll-down' | 'go-up' | String,
  pagePreview: 'default-buttons' | 'routing-buttons' | String,
) {
  //--|🠊 2. Get the current time 🠈|--\\
  const now = Date.now();

  //--|🠊 3. Check if 500ms (half a second) has passed since the last run 🠈|--\\
  if (now - scrollTime < 500) {
    return; //--|🠈 If it's been less than 500ms, stop here (ignore the scroll). 🠈|--\\
  }

  //--|🠊 4. Update the last run time 🠈|--\\
  scrollTime = now;

  //--|🠊 5. Execute the actual logic 🠈|--\\
  controlPreview(pageName, blockName, blockAction, pagePreview);
}

//--|🠊 1. Declare timer outside of scope. 🠈|--\\
let headTime: ReturnType<typeof setTimeout> | null = null;
export function unfoldHeader(pageName: string, blockName: string) {
  const buttonsHeader = document.getElementById(`${pageName}-header`) as HTMLElement;
  //--|🠊 2. Check if 'headTime' is running 🠈|--\\
  if (headTime === null) {
    //--|🠊 If yes, then ignore this request. 🠈|--\\
    //--|🠊 3. Check the className of the <header>. 🠈|--\\
    if (buttonsHeader.classList.contains('collapsed')) {
      buttonsHeader.classList.add('unfolded');
      buttonsHeader.classList.remove('collapsed');
      //--|🠊 4. Reset 'headTime' to null. 🠈|--\\
      headTime = setTimeout(() => {
        if (buttonsHeader.classList.contains('unfolded')) {
          buttonsHeader.classList.add('collapsed');
          buttonsHeader.classList.remove('unfolded');
        }
        headTime = null; //--|🠈 Reset headTime to signal readiness 🠈|--\\
      }, 6000);
    }
    return;
  }
}
