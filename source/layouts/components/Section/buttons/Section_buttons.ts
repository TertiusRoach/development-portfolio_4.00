//--|🠊 Section_buttons.ts 🠈|--//
export function defineButton(info: { pageName: string; blockName: string }) {
  const { pageName, blockName } = info;
  //--|🠋 Always Return an Object 🠋|--//
  /*
  switch(pageName){
    
  }
  */
  /*
  switch (button) {
    case 'track-day':
      return {
        fontSize: '<h1>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-text-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'overtime' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: '',
      };
    case 'log-ticket':
      return {
        fontSize: '<h1>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-text-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'ticketing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: '',
      };
    case 'find-link':
      return {
        fontSize: '<h1>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-text-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'hyperlink' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: '',
      };
  }
  */
}

export function sizeDivs(pageName: string, blockName: string) {
  const mainBlock = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  const mainDivs = mainBlock.querySelectorAll('section div[class*="size"]') as NodeListOf<HTMLDivElement>;
  for (let i = 0; i < mainDivs.length; i++) {
    let mainDiv = mainDivs[i] as HTMLDivElement;
    mainDiv.style.width = `${mainBlock.offsetWidth}px`;
    mainDiv.style.height = `${mainBlock.offsetHeight}px`;
  }
}

export function showSize(pageName: string, blockName: string) {
  const selectSize = document.querySelector(
    `#${pageName}-header .buttons-menu li[class*="size"] select`
  ) as HTMLSelectElement;
  const mainSlider = document.querySelector(`#${pageName}-${blockName} section[class*="buttons"]`) as HTMLElement;
  const prevElement = document.querySelector(
    `#${pageName}-${blockName} section[class*="buttons"] .visible`
  ) as HTMLDivElement;
  const nextElement = document.querySelector(
    `#${pageName}-${blockName} section[class*="buttons"] .${selectSize.value}`
  ) as HTMLDivElement;

  nextElement.className = `${selectSize.value} visible`;
  prevElement.className = `${prevElement.classList[0]} hidden`;
  switch (selectSize.value) {
    case 'h1-size':
      return (mainSlider.style.transform = `translateY(0px)`);
    case 'h2-size':
      return (mainSlider.style.transform = `translateY(-${mainSlider.offsetHeight * 1}px)`);
    case 'h3-size':
      return (mainSlider.style.transform = `translateY(-${mainSlider.offsetHeight * 2}px)`);
    case 'h4-size':
      return (mainSlider.style.transform = `translateY(-${mainSlider.offsetHeight * 3}px)`);
    case 'h5-size':
      return (mainSlider.style.transform = `translateY(-${mainSlider.offsetHeight * 4}px)`);
    case 'h6-size':
      return (mainSlider.style.transform = `translateY(-${mainSlider.offsetHeight * 5}px)`);
    case 'p-size':
      return (mainSlider.style.transform = `translateY(-${mainSlider.offsetHeight * 6}px)`);
  }
}
