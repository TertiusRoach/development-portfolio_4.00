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

export function showWeek(action: 'prev' | 'next', pageName: string) {
  const carousel = document.querySelector(`.${pageName}-carousel`) as HTMLElement;
  const container = carousel.querySelector(`div[class*="container"]`) as HTMLElement;
  const getView = (container: HTMLElement): number => {
    let match = container.style.transform.match(/translateY\((-?\d+(\.\d+)?)px\)/);
    if (match) {
      return parseFloat(match[1]);
    } else {
      return 0; // Default value if no match is found
    }
  };

  if (pageName === 'overtime') {
    switch (action) {
      case 'prev':
        container.style.transform = `translateY(${getView(container) + carousel.offsetHeight}px)`;
        break;
      case 'next':
        container.style.transform = `translateY(${getView(container) - carousel.offsetHeight}px)`;
        break;
    }
  } else if (pageName === 'ticketing') {
    console.log('//--|🠊 Clicked on Log a Ticket 🠈|--//');
  } else if (pageName === 'hyperlink') {
    console.log('//--|🠊 Clicked on Find a Link 🠈|--//');
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
