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
  let visibleElement = document.querySelector(
    `#${pageName}-${blockName} .foreground .dark-side .size-track .visible`,
  ) as HTMLElement;
  let sectionContainer = document.querySelector(`#${pageName}-main .foreground .dark-side section`) as HTMLElement;
  let sectionHeight = sectionContainer.offsetHeight;
  if (blockAction === 'scroll-down') {
    switch (visibleElement.classList[0]) {
      case 'h1-size':
        sectionContainer.children[1].classList.remove('hidden');
        sectionContainer.children[1].classList.add('visible');

        sectionContainer.children[0].classList.remove('visible');
        sectionContainer.children[0].classList.add('hidden');

        sectionContainer.style.transform = `translateY(-${sectionHeight * 1}px)`;
        break;
      case 'h2-size':
        sectionContainer.children[2].classList.remove('hidden');
        sectionContainer.children[2].classList.add('visible');

        sectionContainer.children[1].classList.add('hidden');
        sectionContainer.children[1].classList.remove('visible');

        sectionContainer.style.transform = `translateY(-${sectionHeight * 2}px)`;
        break;
      case 'h3-size':
        sectionContainer.children[3].classList.remove('hidden');
        sectionContainer.children[3].classList.add('visible');

        sectionContainer.children[2].classList.add('hidden');
        sectionContainer.children[2].classList.remove('visible');

        sectionContainer.style.transform = `translateY(-${sectionHeight * 3}px)`;
        break;
      case 'h4-size':
        sectionContainer.children[3].classList.remove('visible');
        sectionContainer.children[3].classList.add('hidden');

        sectionContainer.children[4].classList.add('visible');
        sectionContainer.children[4].classList.remove('hidden');

        sectionContainer.style.transform = `translateY(-${sectionHeight * 4}px)`;

        break;
      case 'h5-size':
        sectionContainer.children[4].classList.remove('visible');
        sectionContainer.children[4].classList.add('hidden');

        sectionContainer.children[5].classList.add('visible');
        sectionContainer.children[5].classList.remove('hidden');

        sectionContainer.style.transform = `translateY(-${sectionHeight * 5}px)`;

        break;
      case 'h6-size':
        sectionContainer.children[5].classList.remove('visible');
        sectionContainer.children[5].classList.add('hidden');

        sectionContainer.children[6].classList.add('visible');
        sectionContainer.children[6].classList.remove('hidden');

        sectionContainer.style.transform = `translateY(-${sectionHeight * 6}px)`;

        break;
      case 'p-size':
        sectionContainer.children[6].classList.remove('visible');
        sectionContainer.children[6].classList.add('hidden');

        sectionContainer.children[0].classList.add('visible');
        sectionContainer.children[0].classList.remove('hidden');

        sectionContainer.style.transform = `translateY(-${sectionHeight * 0}px)`;
        break;
    }
  } else if (blockAction === 'go-up') {
    switch (visibleElement.classList[0]) {
      case 'h1-size':
        sectionContainer.children[0].classList.remove('visible');
        sectionContainer.children[0].classList.add('hidden');

        sectionContainer.children[6].classList.add('visible');
        sectionContainer.children[6].classList.remove('hidden');

        sectionContainer.style.transform = `translateY(-${sectionHeight * 6}px)`;
        break;
      case 'h2-size':
        sectionContainer.children[1].classList.add('hidden');
        sectionContainer.children[1].classList.remove('visible');

        sectionContainer.children[0].classList.add('visible');
        sectionContainer.children[0].classList.remove('hidden');

        sectionContainer.style.transform = `translateY(-${sectionHeight * 0}px)`;
        break;
      case 'h3-size':
        sectionContainer.children[1].classList.remove('hidden');
        sectionContainer.children[1].classList.add('visible');

        sectionContainer.children[2].classList.add('hidden');
        sectionContainer.children[2].classList.remove('visible');

        sectionContainer.style.transform = `translateY(-${sectionHeight * 1}px)`;
        break;
      case 'h4-size':
        sectionContainer.children[2].classList.add('visible');
        sectionContainer.children[2].classList.remove('hidden');

        sectionContainer.children[3].classList.add('hidden');
        sectionContainer.children[3].classList.remove('visible');

        sectionContainer.style.transform = `translateY(-${sectionHeight * 2}px)`;
        break;
      case 'h5-size':
        sectionContainer.children[4].classList.remove('visible');
        sectionContainer.children[4].classList.add('hidden');

        sectionContainer.children[3].classList.add('visible');
        sectionContainer.children[3].classList.remove('hidden');

        sectionContainer.style.transform = `translateY(-${sectionHeight * 3}px)`;
        break;
      case 'h6-size':
        sectionContainer.children[5].classList.remove('visible');
        sectionContainer.children[5].classList.add('hidden');

        sectionContainer.children[4].classList.add('visible');
        sectionContainer.children[4].classList.remove('hidden');

        sectionContainer.style.transform = `translateY(-${sectionHeight * 4}px)`;
        break;
      case 'p-size':
        sectionContainer.children[5].classList.add('visible');
        sectionContainer.children[5].classList.remove('hidden');

        sectionContainer.children[6].classList.remove('visible');
        sectionContainer.children[6].classList.add('hidden');

        sectionContainer.style.transform = `translateY(-${sectionHeight * 5}px)`;
        break;
    }
  }
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
