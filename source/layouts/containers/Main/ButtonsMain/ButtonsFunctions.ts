//--|🠊 ButtonsMain.ts 🠈|--\\

export function controlPreview(
  pageName: string,
  blockName: string,
  blockAction: 'go-up' | 'scroll-down' | String,
  pagePreview: 'default-buttons' | 'routing-buttons' | string,
) {
  const pagePart: String = `${pageName}-${blockName} li[class="${pagePreview}"]`;
  let darkCarousel = Array.from(
    document.querySelectorAll(`#${pagePart} section[class*="foreground"] aside[id*="darkside"] li[class*="slide"]`),
  ) as HTMLElement[];
  let lightCarousel = Array.from(
    document.querySelectorAll(`#${pagePart} section[class*="foreground"] aside[id*="lightside"] li[class*="slide"]`),
  ) as HTMLElement[];

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
  /*
  let textCarousel = document.querySelector(`#${pagePart} figure[class*="midground"] .carousel-preview`) as HTMLElement;

  let darkDef = darkCarousel[0] as HTMLElement;
  let darkAlt = darkCarousel[1] as HTMLElement;

  let lightDef = lightCarousel[0] as HTMLElement;
  let lightAlt = lightCarousel[1] as HTMLElement;
  */
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
        var carouselElements = [darkDef.children[i], textCarousel.children[i], lightDef.children[i]] as Array<HTMLElement>;
        markHTML(carouselElements);
      }
    }
  };
  const markHTML = (carousels: Array<HTMLElement>) => {
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
  };

  //--|🠊 Scroll to Default <button> 🠈|--\\
  setTimeout(() => {
    findHTML(pageName, blockName, blockAction, 'default-buttons');
  }, 125);
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

export function markList(pageName: string, blockName: string, listName: 'default-buttons' | 'routing-buttons'): string {
  const identifier = listName.split('-')[0];
  setTimeout(() => {
    let parentElement = document.querySelector(`#${pageName}-${blockName} .carousel-preview [class*="${identifier}"]`)
      ?.parentElement as HTMLElement;
    parentElement.classList.add(listName);
  }, 125);
  return identifier;
}
