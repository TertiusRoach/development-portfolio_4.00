//--|🠊 Span_scrolling.ts 🠈|--//
export function defineButton(
  button: 'next-week' | 'prev-week' | 'next-month' | 'prev-month',
  info: { blockName: string; pageName: string }
) {
  const { blockName, pageName } = info;
  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'prev-week':
      return {
        fontSize: '<h5>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-icon-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        pageName: pageName as 'overtime',
        blockName: blockName as 'header' | 'footer' | 'leftbar',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/f721d1e7f19d271e1764d875c67011d671b41f0f/source/assets/svg-files/overtime-page/prev-week.svg',
      };
    case 'next-week':
      return {
        fontSize: '<h5>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-icon-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        pageName: pageName as 'overtime',
        blockName: blockName as 'header' | 'footer' | 'leftbar',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/f721d1e7f19d271e1764d875c67011d671b41f0f/source/assets/svg-files/overtime-page/next-week.svg',
      };
    case 'next-month':
      return {
        fontSize: '<h5>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-center-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        pageName: pageName as 'overtime',
        blockName: blockName as 'header' | 'footer' | 'leftbar',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/2a637da3c1af6e9f3f1f89fb0046ce304147d383/source/assets/svg-files/overtime-page/next-month.svg',
      };
    //---//
    case 'prev-month':
      return {
        fontSize: '<h5>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-center-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'header' | 'footer' | 'leftbar',
        pageName: pageName as 'overtime',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/2a637da3c1af6e9f3f1f89fb0046ce304147d383/source/assets/svg-files/overtime-page/prev-month.svg',
      };
  }
}
export function showWeek(
  pageName: string,
  viewAxis: '<y>' | '<x>',
  moveAxis: '-prev-' | '-next-'
) {
  const carousel = document.querySelector(`.${pageName}-carousel`) as HTMLElement;
  const container = carousel.querySelector('div[class*="container"]') as HTMLElement;
  const firstWeek = carousel.querySelector('tbody:nth-child(1)') as HTMLTableElement;
  const visibleTag = container.querySelector('.visible') as HTMLTableElement;
  const hiddenPrev = visibleTag.previousElementSibling as HTMLTableElement;
  const hiddenNext = visibleTag.nextElementSibling as HTMLTableElement;

  // Header & footer buttons
  const header = document.querySelector(`#${pageName}-header`) as HTMLElement;
  const footer = document.querySelector(`#${pageName}-footer`) as HTMLElement;
  const prevButton = header.querySelector(
    ".span-scrolling button[class*='-prev-'] div img"
  ) as HTMLElement;
  const nextButton = footer.querySelector(
    ".span-scrolling button[class*='-next-'] div img"
  ) as HTMLElement;

  // Toggle button visibility and interactivity
  const viewButton = (btn: HTMLElement, visible: boolean) => {
    btn.style.opacity = visible ? '1' : '0';
    btn.style.cursor = visible ? 'pointer' : 'default';
  };

  // Toggle visibility between week elements
  const toggleView = (show: HTMLElement, hide: HTMLElement): boolean => {
    if (!show) return false;
    show.classList.add('visible');
    show.classList.remove('hidden');
    hide.classList.remove('visible');
    hide.classList.add('hidden');
    return true;
  };

  if (viewAxis === '<y>') {
    // Get current vertical scroll position from transform
    const transformY = container.style.transform.match(/translateY\((-?\d+(\.\d+)?)px\)/);
    const positionY = transformY ? Number(transformY[1]) : 0;
    const offsetY = firstWeek.offsetHeight;

    let viewWeekY: HTMLElement;
    let viewBodyY: HTMLElement;
    switch (moveAxis) {
      case '-prev-':
        if (hiddenPrev) {
          toggleView(hiddenPrev, visibleTag);
          container.style.transform = `translateY(${positionY + offsetY}px)`;
        }

        // Update state after transition
        viewWeekY = carousel.querySelector('.visible') as HTMLElement;
        container.dataset.view = viewWeekY.dataset.week;

        viewBodyY = container; // already selected earlier
        const isFirst = viewBodyY.dataset.view === '01';

        // Disable prev if we're at the first week
        if (isFirst) {
          viewButton(prevButton, false);
        } else if (nextButton.style.opacity === '0') {
          viewButton(nextButton, true); // Re-enable next if previously disabled
        }
        break;
      case '-next-':
        if (hiddenNext) {
          toggleView(hiddenNext, visibleTag);
          container.style.transform = `translateY(${positionY - offsetY}px)`;
        }

        // Update state after transition
        viewWeekY = carousel.querySelector('.visible') as HTMLElement;
        container.dataset.view = viewWeekY.dataset.week;

        viewBodyY = container;
        const weekCount = container.querySelectorAll('tbody').length.toString();
        const isLast = viewBodyY.dataset.view === weekCount;

        // Disable next if we're at the last week
        if (isLast) {
          viewButton(nextButton, false);
        } else if (prevButton.style.opacity === '0') {
          viewButton(prevButton, true); // Re-enable prev if previously disabled
        }
        break;
    }
  } else if (viewAxis === '<x>') {
  }
}

export const assignBlock = (block: '<header>' | '<footer>' | '<aside>') => {
  if (block === '<header>') {
    return 'header';
  } else if ((block = '<footer>')) {
    return 'footer';
  } else if (block === '<aside>') {
    return 'aside';
  }
};
