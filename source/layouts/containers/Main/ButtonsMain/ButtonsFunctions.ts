//--|🠊 ButtonsMain.ts 🠈|--\\
export function toggleAside(
  pageName: string,
  blockName: string,
  blockAction: 'open-dark' | 'close-dark' | 'open-light' | 'close-light' | String,
) {
  const qs = (selector: string) => {
    const el = document.querySelector(selector) as HTMLElement | null;
    if (!el) throw new Error(`Missing element: ${selector}`);
    return el;
  };
  const show = (el: HTMLElement) => {
    el.classList.add('visible');
    el.classList.remove('hidden');
  };
  const hide = (el: HTMLElement) => {
    el.classList.add('hidden');
    el.classList.remove('visible');
  };

  //--|🠊 centerElement contains a .visible className 🠈|--\\
  //--|🠊 rightLight & leftDark contains a .hidden className 🠈|--\\
  const leftDark = qs(`#${pageName}-main .midground .dark-code`);
  const rightLight = qs(`#${pageName}-main .midground .light-code`);
  const centerElement = qs(`#${pageName}-main .midground .size-font`);

  switch (blockAction) {
    case 'open-dark':
      show(leftDark); //--|🠊 Toggle .hidden on leftDark to .visible 🠈|--\\
      hide(centerElement); //--|🠊 Toggle the centerElement from .visible to .hidden 🠈|--\\
      break;
    case 'close-dark':
      hide(leftDark); //--|🠊 Toggle .visible on leftDark to .hidden 🠈|--\\
      show(centerElement); //--|🠊 Toggle .hidden on centerElement to .visible 🠈|--\\
      break;
    case 'open-light':
      show(rightLight); //--|🠊 Toggle .hidden on rightLight to .visible 🠈|--\\
      hide(centerElement); //--|🠊 Toggle the centerElement from .visible to .hidden 🠈|--\\
      break;
    case 'close-light':
      hide(rightLight); //--|🠊 Toggle .visible on rightLight to .hidden 🠈|--\\
      show(centerElement); //--|🠊 Toggle .hidden on centerElement to .visible 🠈|--\\
      break;
    default:
      throw new Error(
        '//--|🠊 ERROR - C:/Develop/development-portfolio_4.00/source/layouts/containers/Main/ButtonsMain/ButtonsMain.tsx 🠈|--//',
      );
  }

  //--|🠊 console.log({ blockName, leftDark, rightLight, centerElement }); 🠈|--\\
}
export function scrollSection(pageName: string, blockName: string, blockAction: 'go-up' | 'scroll-down' | String) {
  const fontSize = document.querySelector(`#${pageName}-${blockName} .midground ol .visible`) as HTMLElement;
  const showHTML = () => {};
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

    darkLeft.style.transform = `translateY(-${sectionHeight * next}px)`;
    fontTrack.style.transform = `translateY(-${sectionHeight * next}px)`;
    lightRight.style.transform = `translateY(-${sectionHeight * next}px)`;
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
  let sectionHeight = fontTrack.offsetHeight;

  switch (fontSize.classList[0]) {
    case 'h1-size':
      if (blockAction === 'go-up') {
        markHTML(fontSize, 0, 6, blockAction);
      } else if (blockAction === 'scroll-down') {
        markHTML(fontSize, 0, 1, blockAction);
      }
      break;
    case 'h2-size':
      if (blockAction === 'go-up') {
        markHTML(fontSize, 1, 0, blockAction);
      } else if (blockAction === 'scroll-down') {
        markHTML(fontSize, 1, 2, blockAction);
      }
      break;
    case 'h3-size':
      if (blockAction === 'go-up') {
        markHTML(fontSize, 2, 1, blockAction);
      } else if (blockAction === 'scroll-down') {
        markHTML(fontSize, 2, 3, blockAction);
      }
      break;
    case 'h4-size':
      if (blockAction === 'go-up') {
        markHTML(fontSize, 3, 2, blockAction);
      } else if (blockAction === 'scroll-down') {
        markHTML(fontSize, 3, 4, blockAction);
      }
      break;
    case 'h5-size':
      if (blockAction === 'go-up') {
        markHTML(fontSize, 4, 3, blockAction);
      } else if (blockAction === 'scroll-down') {
        markHTML(fontSize, 4, 5, blockAction);
      }

      break;
    case 'h6-size':
      if (blockAction === 'go-up') {
        markHTML(fontSize, 5, 4, blockAction);
      } else if (blockAction === 'scroll-down') {
        markHTML(fontSize, 5, 6, blockAction);
      }
      break;
    case 'p-size':
      if (blockAction === 'go-up') {
        markHTML(fontSize, 6, 5, blockAction);
      } else if (blockAction === 'scroll-down') {
        markHTML(fontSize, 6, 0, blockAction);
      }
      break;
  }

  if (fontSize !== null) {
  }
}
export function defaultPreview(
  pageName: string,
  blockName: string,
  blockAction: 'h1-size' | 'h2-size' | 'h3-size' | 'h4-size' | 'h5-size' | 'h6-size' | 'p-size',
) {
  //--|🠊 Scroll to Default <button> 🠈|--\\
  setTimeout(() => {
    let fontTrack = document.querySelector(`#${pageName}-${blockName} .midground .size-font`) as HTMLElement;
    let fontSize = document.querySelector(`#${pageName}-${blockName} .midground ol .${blockAction}`) as HTMLElement;
    let darkLeft = document.querySelector(`#${pageName}-${blockName} .foreground .dark-side section`) as HTMLElement;
    let lightRight = document.querySelector(`#${pageName}-${blockName} .foreground .light-side section`) as HTMLElement;
    let sectionHeight = fontTrack.offsetHeight;

    fontSize.classList.remove('hidden');
    fontSize.classList.add('visible');
    switch (blockAction) {
      case 'h1-size':
        darkLeft.style.transform = `translateY(-${sectionHeight * 0}px)`;
        lightRight.style.transform = `translateY(-${sectionHeight * 0}px)`;
        fontTrack.style.transform = `translateY(-${sectionHeight * 0}px)`;

        darkLeft.children[0].classList.remove('hidden');
        darkLeft.children[0].classList.add('visible');

        lightRight.children[0].classList.remove('hidden');
        lightRight.children[0].classList.add('visible');
        break;
      case 'h2-size':
        darkLeft.style.transform = `translateY(-${sectionHeight * 1}px)`;
        lightRight.style.transform = `translateY(-${sectionHeight * 1}px)`;
        fontTrack.style.transform = `translateY(-${sectionHeight * 1}px)`;

        darkLeft.children[1].classList.remove('hidden');
        darkLeft.children[1].classList.add('visible');

        lightRight.children[1].classList.remove('hidden');
        lightRight.children[1].classList.add('visible');
        break;
      case 'h3-size':
        darkLeft.style.transform = `translateY(-${sectionHeight * 2}px)`;
        lightRight.style.transform = `translateY(-${sectionHeight * 2}px)`;
        fontTrack.style.transform = `translateY(-${sectionHeight * 2}px)`;

        darkLeft.children[2].classList.remove('hidden');
        darkLeft.children[2].classList.add('visible');

        lightRight.children[2].classList.remove('hidden');
        lightRight.children[2].classList.add('visible');
        break;
      case 'h4-size':
        darkLeft.style.transform = `translateY(-${sectionHeight * 3}px)`;
        lightRight.style.transform = `translateY(-${sectionHeight * 3}px)`;
        fontTrack.style.transform = `translateY(-${sectionHeight * 3}px)`;

        darkLeft.children[3].classList.remove('hidden');
        darkLeft.children[3].classList.add('visible');

        lightRight.children[3].classList.remove('hidden');
        lightRight.children[3].classList.add('visible');
        break;
      case 'h5-size':
        darkLeft.style.transform = `translateY(-${sectionHeight * 4}px)`;
        lightRight.style.transform = `translateY(-${sectionHeight * 4}px)`;
        fontTrack.style.transform = `translateY(-${sectionHeight * 4}px)`;

        darkLeft.children[4].classList.remove('hidden');
        darkLeft.children[4].classList.add('visible');

        lightRight.children[4].classList.remove('hidden');
        lightRight.children[4].classList.add('visible');
        break;
      case 'h6-size':
        darkLeft.style.transform = `translateY(-${sectionHeight * 5}px)`;
        lightRight.style.transform = `translateY(-${sectionHeight * 5}px)`;
        fontTrack.style.transform = `translateY(-${sectionHeight * 5}px)`;

        darkLeft.children[5].classList.remove('hidden');
        darkLeft.children[5].classList.add('visible');

        lightRight.children[5].classList.remove('hidden');
        lightRight.children[5].classList.add('visible');
        break;
      case 'p-size':
        darkLeft.style.transform = `translateY(-${sectionHeight * 6}px)`;
        lightRight.style.transform = `translateY(-${sectionHeight * 6}px)`;
        fontTrack.style.transform = `translateY(-${sectionHeight * 6}px)`;

        darkLeft.children[6].classList.remove('hidden');
        darkLeft.children[6].classList.add('visible');

        lightRight.children[6].classList.remove('hidden');
        lightRight.children[6].classList.add('visible');
        break;
    }
  }, 250);
}
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
  /*
    ### Centering text inside a “tall box” (no padding math needed)

    If an element is forced to be as tall as its parent (e.g., via `height = parent.offsetHeight`), **don’t calculate `padding-top`** to fake vertical alignment.
    Instead, turn the element into a tiny layout container and let CSS do the centering for free:

    - Set the child to `display: grid`
    - Use `place-items: center` to center **vertically + horizontally**
    - Add `text-align: center` if you want the text itself centered

    Result: perfectly centered content, responsive by default, and zero “maffs”.
    */
}
