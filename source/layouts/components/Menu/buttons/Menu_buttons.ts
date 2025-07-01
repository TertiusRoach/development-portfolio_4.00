//--|🠊 Menu_buttons.ts 🠈|--//

export function showSize(pageName: string) {
  const scrollMain = (sectionSlider: HTMLElement) => {
    let selectSize = document.querySelector(
      `#${pageName}-header .buttons-menu li[class*="size"] select`
    ) as HTMLSelectElement;

    let prevElement = document.querySelector(`#${pageName}-main section[class*="buttons"] .visible`) as HTMLDivElement;

    let nextElement = document.querySelector(
      `#${pageName}-main section[class*="buttons"] .${selectSize.value}`
    ) as HTMLDivElement;

    if (prevElement.classList[0] !== nextElement.classList[0]) {
      prevElement.className = `${prevElement.classList[0]} hidden`;
      nextElement.className = `${selectSize.value} visible`;
    }

    switch (selectSize.value) {
      case 'h1-size':
        return (sectionSlider.style.transform = `translateY(0px)`);
      case 'h2-size':
        return (sectionSlider.style.transform = `translateY(-${sectionSlider.offsetHeight * 1}px)`);
      case 'h3-size':
        return (sectionSlider.style.transform = `translateY(-${sectionSlider.offsetHeight * 2}px)`);
      case 'h4-size':
        return (sectionSlider.style.transform = `translateY(-${sectionSlider.offsetHeight * 3}px)`);
      case 'h5-size':
        return (sectionSlider.style.transform = `translateY(-${sectionSlider.offsetHeight * 4}px)`);
      case 'h6-size':
        return (sectionSlider.style.transform = `translateY(-${sectionSlider.offsetHeight * 5}px)`);
      case 'p-size':
        return (sectionSlider.style.transform = `translateY(-${sectionSlider.offsetHeight * 6}px)`);
    }
  };

  let sectionSlider = document.querySelector(`#${pageName}-main section[class*="buttons"]`) as HTMLElement;

  if (sectionSlider) {
    scrollMain(sectionSlider);
  } else {
    setTimeout(() => scrollMain(document.querySelector(`#${pageName}-main section[class*="buttons"]`) as HTMLElement), 3000);
  }
}

export function viewColor(pageName: string) {
  let viewColor = document.querySelector(`#${pageName}-header .buttons-menu li[class*="color"] select`) as HTMLSelectElement;
  switch (viewColor.value) {
    case 'mono-color':
      return console.log(`${viewColor.value}`);
    case 'red-color':
      return console.log(`${viewColor.value}`);
    case 'green-color':
      return console.log(`${viewColor.value}`);
    case 'blue-color':
      return console.log(`${viewColor.value}`);
    default:
      return console.log(`${viewColor.value}`);
  }
}
