//--|🠊 Menu_buttons.ts 🠈|--//

export function showSize(pageName: string) {
  const selectSize = document.querySelector(
    `#${pageName}-header .buttons-menu li[class*="size"] select`
  ) as HTMLSelectElement;
  let mainSlider = document.querySelector(`#${pageName}-main section[class*="buttons"]`) as HTMLElement;
  let prevElement = document.querySelector(`#${pageName}-main section[class*="buttons"] .visible`) as HTMLDivElement;
  let nextElement = document.querySelector(
    `#${pageName}-main section[class*="buttons"] .${selectSize.value}`
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
