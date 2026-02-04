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

// switch()
/*

    */
/*
    let fontTrack = document.querySelector(`#${pageName}-${blockName} .midground .size-font`) as HTMLElement;
    let fontSize = document.querySelector(`#${pageName}-${blockName} .midground ol .${blockAction}`) as HTMLElement;
    let darkLeft = document.querySelector(`#${pageName}-${blockName} .foreground .dark-side section`) as HTMLElement;
    let lightRight = document.querySelector(`#${pageName}-${blockName} .foreground .light-side section`) as HTMLElement;
    let sectionHeight = fontTrack.offsetHeight;

    fontSize.classList.remove('hidden');
    fontSize.classList.add('visible');
    switch (blockAction) {
      case 'h1-size':
        darkLeft.style.transform = `translateY(-${darkLeft.offsetHeight * 0}px)`;
        lightRight.style.transform = `translateY(-${lightRight.offsetHeight * 0}px)`;
        fontTrack.style.transform = `translateY(-${fontTrack.offsetHeight * 0}px)`;

        darkLeft.children[0].classList.remove('hidden');
        darkLeft.children[0].classList.add('visible');

        lightRight.children[0].classList.remove('hidden');
        lightRight.children[0].classList.add('visible');
        break;
      case 'h2-size':
        darkLeft.style.transform = `translateY(-${darkLeft.offsetHeight * 1}px)`;
        lightRight.style.transform = `translateY(-${lightRight.offsetHeight * 1}px)`;
        fontTrack.style.transform = `translateY(-${fontTrack.offsetHeight * 1}px)`;

        darkLeft.children[1].classList.remove('hidden');
        darkLeft.children[1].classList.add('visible');

        lightRight.children[1].classList.remove('hidden');
        lightRight.children[1].classList.add('visible');
        break;
      case 'h3-size':
        darkLeft.style.transform = `translateY(-${darkLeft.offsetHeight * 2}px)`;
        lightRight.style.transform = `translateY(-${lightRight.offsetHeight * 2}px)`;
        fontTrack.style.transform = `translateY(-${fontTrack.offsetHeight * 2}px)`;

        darkLeft.children[2].classList.remove('hidden');
        darkLeft.children[2].classList.add('visible');

        lightRight.children[2].classList.remove('hidden');
        lightRight.children[2].classList.add('visible');
        break;
      case 'h4-size':
        darkLeft.style.transform = `translateY(-${darkLeft.offsetHeight * 3}px)`;
        lightRight.style.transform = `translateY(-${lightRight.offsetHeight * 3}px)`;
        fontTrack.style.transform = `translateY(-${fontTrack.offsetHeight * 3}px)`;

        darkLeft.children[3].classList.remove('hidden');
        darkLeft.children[3].classList.add('visible');

        lightRight.children[3].classList.remove('hidden');
        lightRight.children[3].classList.add('visible');
        break;
      case 'h5-size':
        darkLeft.style.transform = `translateY(-${darkLeft.offsetHeight * 4}px)`;
        lightRight.style.transform = `translateY(-${lightRight.offsetHeight * 4}px)`;
        fontTrack.style.transform = `translateY(-${fontTrack.offsetHeight * 4}px)`;

        darkLeft.children[4].classList.remove('hidden');
        darkLeft.children[4].classList.add('visible');

        lightRight.children[4].classList.remove('hidden');
        lightRight.children[4].classList.add('visible');
        break;
      case 'h6-size':
        darkLeft.style.transform = `translateY(-${darkLeft.offsetHeight * 5}px)`;
        lightRight.style.transform = `translateY(-${lightRight.offsetHeight * 5}px)`;
        fontTrack.style.transform = `translateY(-${fontTrack.offsetHeight * 5}px)`;

        darkLeft.children[5].classList.remove('hidden');
        darkLeft.children[5].classList.add('visible');

        lightRight.children[5].classList.remove('hidden');
        lightRight.children[5].classList.add('visible');
        break;
      case 'p-size':
        darkLeft.style.transform = `translateY(-${darkLeft.offsetHeight * 6}px)`;
        lightRight.style.transform = `translateY(-${lightRight.offsetHeight * 6}px)`;
        fontTrack.style.transform = `translateY(-${fontTrack.offsetHeight * 6}px)`;

        darkLeft.children[6].classList.remove('hidden');
        darkLeft.children[6].classList.add('visible');

        lightRight.children[6].classList.remove('hidden');
        lightRight.children[6].classList.add('visible');
        break;
    }
    */
/*
  console.log(textCarousel);

  console.log(darkDef);
  console.log(darkAlt);

  console.log(lightDef);
  console.log(lightAlt);
  */
/*
  console.log(pageName);
  console.log(blockName);
  console.log(blockAction);
  console.log(pagePreview);
  */
/*
  const fontSize = document.querySelector(`#${pageName}-${blockName} .midground ol .visible`) as HTMLElement;
  const showHTML = (view: number) => {
    darkLeft.style.transform = `translateY(-${lightRight.offsetHeight * view}px)`;
    fontTrack.style.transform = `translateY(-${fontTrack.offsetHeight * view}px)`;
    lightRight.style.transform = `translateY(-${darkLeft.offsetHeight * view}px)`;
  };
  const markHTML = (fontSize: HTMLElement, prev: number, next: number, blockAction: String) => {
    let prevFont = findHTML(fontSize)[0];
    let nextFont = findHTML(fontSize)[1];

    fontSize.classList.add('hidden');
    fontSize.classList.remove('visible');
    if (blockAction === 'go-up') {
      prevFont.classList.add('visible');
      prevFont.classList.remove('hidden');
    } else if (blockAction === 'scroll-down') {
      nextFont.classList.add('visible');
      nextFont.classList.remove('hidden');
    }

    darkLeft.children[prev].classList.add('hidden');
    darkLeft.children[prev].classList.remove('visible');
    darkLeft.children[next].classList.add('visible');
    darkLeft.children[next].classList.remove('hidden');

    lightRight.children[next].classList.remove('hidden');
    lightRight.children[next].classList.add('visible');
    lightRight.children[prev].classList.remove('visible');
    lightRight.children[prev].classList.add('hidden');
  };


  let fontTrack = document.querySelector(`#${pageName}-${blockName} .midground .size-font`) as HTMLElement;
  let darkLeft = document.querySelector(`#${pageName}-${blockName} .foreground .dark-side section`) as HTMLElement;
  let lightRight = document.querySelector(`#${pageName}-${blockName} .foreground .light-side section`) as HTMLElement;
  let whiteHeight = lightRight.offsetHeight;
  let fontHeight = fontTrack.offsetHeight;
  let darkHeight = darkLeft.offsetHeight;
  if (fontSize !== null) {
    switch (fontSize.classList[0]) {
      case 'h1-size':
        if (blockAction === 'go-up') {
          showHTML(6);
          markHTML(fontSize, 0, 6, blockAction);
        } else if (blockAction === 'scroll-down') {
          showHTML(1);
          markHTML(fontSize, 0, 1, blockAction);
        }
        break;
      case 'h2-size':
        if (blockAction === 'go-up') {
          showHTML(0);
          markHTML(fontSize, 1, 0, blockAction);
        } else if (blockAction === 'scroll-down') {
          showHTML(2);
          markHTML(fontSize, 1, 2, blockAction);
        }
        break;
      case 'h3-size':
        if (blockAction === 'go-up') {
          showHTML(1);
          markHTML(fontSize, 2, 1, blockAction);
        } else if (blockAction === 'scroll-down') {
          showHTML(3);
          markHTML(fontSize, 2, 3, blockAction);
        }
        break;
      case 'h4-size':
        if (blockAction === 'go-up') {
          showHTML(2);
          markHTML(fontSize, 3, 2, blockAction);
        } else if (blockAction === 'scroll-down') {
          showHTML(4);
          markHTML(fontSize, 3, 4, blockAction);
        }
        break;
      case 'h5-size':
        if (blockAction === 'go-up') {
          showHTML(3);
          markHTML(fontSize, 4, 3, blockAction);
        } else if (blockAction === 'scroll-down') {
          showHTML(5);
          markHTML(fontSize, 4, 5, blockAction);
        }
        break;
      case 'h6-size':
        if (blockAction === 'go-up') {
          showHTML(4);
          markHTML(fontSize, 5, 4, blockAction);
        } else if (blockAction === 'scroll-down') {
          showHTML(5);
          markHTML(fontSize, 5, 6, blockAction);
        }
        break;
      case 'p-size':
        if (blockAction === 'go-up') {
          showHTML(5);
          markHTML(fontSize, 6, 5, blockAction);
        } else if (blockAction === 'scroll-down') {
          showHTML(0);
          markHTML(fontSize, 6, 0, blockAction);
        }
        break;
    }
  }
  */
/*
export function resizePreview(pageName: string, blockName: string) {
  //--|🠊 Complete documentation at bottom of function 🠈|--\\
  const sizeList = document.querySelector<HTMLOListElement>(`#${pageName}-main .size-font > ol`);
  const parent = document.querySelector<HTMLElement>(`#${pageName}-main .size-font`);
  if (!sizeList || !parent) return;
  requestAnimationFrame(() => {
    const h = parent.offsetHeight;
    Array.from(sizeList.children).forEach((child) => {
      const el = child as HTMLElement;
      //--|🠊 Step 1: Make each item match the parent height. 🠈|--\\
      el.style.height = `${h}px`;
      el.style.boxSizing = 'border-box';
      //--|🠊 Step 1: center the text within that tall box (no padding math needed) 🠈|--\\
      el.style.margin = '0';
      el.style.display = 'grid';
      el.style.textAlign = 'center';
      el.style.placeItems = 'center';
    });
  });
  
    ### Centering text inside a “tall box” (no padding math needed)

    If an element is forced to be as tall as its parent (e.g., via `height = parent.offsetHeight`), **don’t calculate `padding-top`** to fake vertical alignment.
    Instead, turn the element into a tiny layout container and let CSS do the centering for free:

    - Set the child to `display: grid`
    - Use `place-items: center` to center **vertically + horizontally**
    - Add `text-align: center` if you want the text itself centered

    Result: perfectly centered content, responsive by default, and zero “maffs”.
    
}
*/
/*
export function scrollSection(pageName: string, blockName: string, blockAction: 'go-up' | 'scroll-down' | String) {
  const fontSize = document.querySelector(`#${pageName}-${blockName} .midground ol .visible`) as HTMLElement;
  const showHTML = (view: number) => {
    darkLeft.style.transform = `translateY(-${lightRight.offsetHeight * view}px)`;
    fontTrack.style.transform = `translateY(-${fontTrack.offsetHeight * view}px)`;
    lightRight.style.transform = `translateY(-${darkLeft.offsetHeight * view}px)`;
  };
  const markHTML = (fontSize: HTMLElement, prev: number, next: number, blockAction: String) => {
    let prevFont = findHTML(fontSize)[0];
    let nextFont = findHTML(fontSize)[1];

    fontSize.classList.add('hidden');
    fontSize.classList.remove('visible');
    if (blockAction === 'go-up') {
      prevFont.classList.add('visible');
      prevFont.classList.remove('hidden');
    } else if (blockAction === 'scroll-down') {
      nextFont.classList.add('visible');
      nextFont.classList.remove('hidden');
    }

    darkLeft.children[prev].classList.add('hidden');
    darkLeft.children[prev].classList.remove('visible');
    darkLeft.children[next].classList.add('visible');
    darkLeft.children[next].classList.remove('hidden');

    lightRight.children[next].classList.remove('hidden');
    lightRight.children[next].classList.add('visible');
    lightRight.children[prev].classList.remove('visible');
    lightRight.children[prev].classList.add('hidden');
  };
  const findHTML = (fontSize: HTMLElement) => {
    let nextFont: HTMLElement;
    let prevFont: HTMLElement;
    if (fontSize.previousElementSibling !== null) {
      prevFont = fontSize.previousElementSibling as HTMLElement;
    } else {
      prevFont = document.querySelector(`#${pageName}-${blockName} .midground ol *:nth-child(7)`) as HTMLElement;
    }
    if (fontSize.nextElementSibling !== null) {
      nextFont = fontSize.nextElementSibling as HTMLElement;
    } else {
      nextFont = document.querySelector(`#${pageName}-${blockName} .midground ol *:nth-child(1)`) as HTMLElement;
    }

    return [prevFont, nextFont] as Array<HTMLElement>;
  };

  let fontTrack = document.querySelector(`#${pageName}-${blockName} .midground .size-font`) as HTMLElement;
  let darkLeft = document.querySelector(`#${pageName}-${blockName} .foreground .dark-side section`) as HTMLElement;
  let lightRight = document.querySelector(`#${pageName}-${blockName} .foreground .light-side section`) as HTMLElement;
  let whiteHeight = lightRight.offsetHeight;
  let fontHeight = fontTrack.offsetHeight;
  let darkHeight = darkLeft.offsetHeight;
  if (fontSize !== null) {
    switch (fontSize.classList[0]) {
      case 'h1-size':
        if (blockAction === 'go-up') {
          showHTML(6);
          markHTML(fontSize, 0, 6, blockAction);
        } else if (blockAction === 'scroll-down') {
          showHTML(1);
          markHTML(fontSize, 0, 1, blockAction);
        }
        break;
      case 'h2-size':
        if (blockAction === 'go-up') {
          showHTML(0);
          markHTML(fontSize, 1, 0, blockAction);
        } else if (blockAction === 'scroll-down') {
          showHTML(2);
          markHTML(fontSize, 1, 2, blockAction);
        }
        break;
      case 'h3-size':
        if (blockAction === 'go-up') {
          showHTML(1);
          markHTML(fontSize, 2, 1, blockAction);
        } else if (blockAction === 'scroll-down') {
          showHTML(3);
          markHTML(fontSize, 2, 3, blockAction);
        }
        break;
      case 'h4-size':
        if (blockAction === 'go-up') {
          showHTML(2);
          markHTML(fontSize, 3, 2, blockAction);
        } else if (blockAction === 'scroll-down') {
          showHTML(4);
          markHTML(fontSize, 3, 4, blockAction);
        }
        break;
      case 'h5-size':
        if (blockAction === 'go-up') {
          showHTML(3);
          markHTML(fontSize, 4, 3, blockAction);
        } else if (blockAction === 'scroll-down') {
          showHTML(5);
          markHTML(fontSize, 4, 5, blockAction);
        }
        break;
      case 'h6-size':
        if (blockAction === 'go-up') {
          showHTML(4);
          markHTML(fontSize, 5, 4, blockAction);
        } else if (blockAction === 'scroll-down') {
          showHTML(5);
          markHTML(fontSize, 5, 6, blockAction);
        }
        break;
      case 'p-size':
        if (blockAction === 'go-up') {
          showHTML(5);
          markHTML(fontSize, 6, 5, blockAction);
        } else if (blockAction === 'scroll-down') {
          showHTML(0);
          markHTML(fontSize, 6, 0, blockAction);
        }
        break;
    }
  }
}
*/
