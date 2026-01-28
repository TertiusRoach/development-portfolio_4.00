//--|🠊 Menu_buttons.ts 🠈|--//

export function viewSize(pageName: string) {
  const sectionSlider = document.querySelector(`#${pageName}-main section[class*="buttons"]`) as HTMLElement;
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

  if (sectionSlider) {
    scrollMain(sectionSlider);
  } else {
    setTimeout(() => scrollMain(document.querySelector(`#${pageName}-main section[class*="buttons"]`) as HTMLElement), 3000);
  }
}

export function viewColor(pageName: string) {
  const viewColor = document.querySelector(
    `#${pageName}-header .buttons-menu li[class*="color"] select`
  ) as HTMLSelectElement;

  const fetchButtons = (pageName: string): NodeListOf<HTMLButtonElement> => {
    let buttonSelect: string = `#${pageName}-main button:first-child`;
    let buttonClass = document.querySelector(buttonSelect)?.classList[0] as string;
    let buttonList = document.querySelectorAll(
      `#${pageName}-main button[class*="${buttonClass}"]`
    ) as NodeListOf<HTMLButtonElement>;
    return buttonList;
  };

  const colorButtons = (
    buttons: NodeListOf<HTMLButtonElement>,
    pigment: '(red)' | '(blue)' | '(green)' | '(mono)' | string
  ): void => {
    /**
     * Updates button element classes and their child elements' text content
     * according to the given pigment type.
     *
     * @param buttons - A NodeList of HTMLButtonElements to update.
     * @param pigment - The pigment variant to apply. Expects one of '(red)', '(blue)', '(green)', '(mono)' or a custom string.
     */
    // Regex to target the pigment segment (4th part) of a class string structure like 'one_top_lig_mon_text'
    const regexSelect = /^((?:[a-z]+_){3})([a-z]{3})(_)/;

    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      const prevButton = button.classList[1];
      if (!prevButton) continue; // Safety check if classList[1] is undefined

      // Select the child containers inside the button
      const prevText = button.childNodes[0] as HTMLDivElement;
      const prevIcon = button.childNodes[1] as HTMLDivElement;
      const prevBack = button.childNodes[2] as HTMLDivElement;

      // Select child elements within those containers
      const childText = prevText.firstChild as HTMLElement;
      const childIcon = prevIcon.firstChild as HTMLElement;
      const childBack = prevBack.firstChild as HTMLElement;

      // Capture current class names for text, icon, and background groups
      let batchText: string[] = [prevText.classList[0], childText.classList[0]];
      let batchIcon: string[] = [prevIcon.classList[0], childIcon.classList[0]];
      let batchBack: string[] = [prevBack.classList[0], childBack.classList[0]];

      let nextButton = prevButton;

      // Determine pigment color tag based on pigment input
      let color: string;
      switch (pigment) {
        case '(red)':
          color = 'red';
          break;
        case '(blue)':
          color = 'blu';
          break;
        case '(green)':
          color = 'gre';
          break;
        case '(mono)':
        default:
          color = 'mon';
      }

      // Replace pigment suffix in button class
      nextButton = prevButton.replace(/_[a-z]{3}$/, `_${color}`);

      // Replace pigment segment in associated element classes using regex
      batchText = batchText.map((cls) => cls.replace(regexSelect, `$1${color}$3`));
      batchIcon = batchIcon.map((cls) => cls.replace(regexSelect, `$1${color}$3`));
      batchBack = batchBack.map((cls) => cls.replace(regexSelect, `$1${color}$3`));

      // Apply new class names to the respective elements
      prevText.classList.replace(prevText.classList[0], batchText[0]);
      childText.classList.replace(childText.classList[0], batchText[1]);

      prevIcon.classList.replace(prevIcon.classList[0], batchIcon[0]);
      childIcon.classList.replace(childIcon.classList[0], batchIcon[1]);

      prevBack.classList.replace(prevBack.classList[0], batchBack[0]);
      childBack.classList.replace(childBack.classList[0], batchBack[1]);

      // If button class changed, update its text content accordingly
      if (nextButton !== prevButton) {
        updateButtons(button, childText, childBack);
        button.classList.replace(prevButton, nextButton);
      }
    }
  };

  const updateButtons = (button: HTMLButtonElement, childText: HTMLElement, childBack: HTMLElement): void => {
    /**
     * Updates the text content of a button’s child elements based on its display mode.
     *
     * @param button - The HTMLButtonElement whose child content is being updated.
     * @param childText - The HTMLElement containing the display text.
     * @param childBack - The HTMLElement containing the background text.
     */
    const buttonMode: string = button.classList[0];
    const iconButton: boolean = childText.classList[0].includes('_ico_');

    // Deconstruct class string into segments
    const [viewSize, viewText, shadeText, colorText] = childText.classList[0].split('_');
    const sampleText: string = `${viewText}_${shadeText}_${colorText}`;

    // List of button modes that display back text
    const containsBackground: string[] = ['cleaned', 'default'];

    // Conditionally assign innerText based on mode and icon status
    childText.innerText = iconButton ? '' : sampleText;
    childBack.innerText = !iconButton && containsBackground.some((mode) => buttonMode.includes(mode)) ? sampleText : '';
  };

  colorButtons(fetchButtons(pageName), viewColor.value);
}

/*
  const colorButtons = (
    buttons: NodeListOf<HTMLButtonElement>,
    pigment: '(red)' | '(blue)' | '(green)' | '(mono)' | string
  ) => {
    let regexSelect = /^((?:[a-z]+_){3})([a-z]{3})(_)/;
    for (let i = 0; i < buttons.length; i++) {
      var prevButton = buttons[i].classList[1];
      if (!prevButton) continue;

      var prevText = buttons[i].childNodes[0] as HTMLDivElement;
      var prevIcon = buttons[i].childNodes[1] as HTMLDivElement;
      var prevBack = buttons[i].childNodes[2] as HTMLDivElement;

      var childText = prevText.firstChild as HTMLElement;
      var childIcon = prevIcon.firstChild as HTMLElement;
      var childBack = prevBack.firstChild as HTMLElement;

      var batchText: Array<string> = [prevText.classList[0], childText.classList[0]];
      var batchIcon: Array<string> = [prevIcon.classList[0], childIcon.classList[0]];
      var batchBack: Array<string> = [prevBack.classList[0], childBack.classList[0]];

      var nextButton = prevButton;

      var color: string;
      switch (pigment) {
        case '(red)':
          color = 'red';
          break;
        case '(blue)':
          color = 'blu';
          break;
        case '(green)':
          color = 'gre';
          break;
        case '(mono)':
        default:
          color = 'mon';
      }

      nextButton = prevButton.replace(/_[a-z]{3}$/, `_${color}`); //--|🠊 Update batchText 🠈|--//
      batchText = batchText.map((classString) => classString.replace(regexSelect, `$1${color}$3`));
      batchIcon = batchIcon.map((classString) => classString.replace(regexSelect, `$1${color}$3`));
      batchBack = batchBack.map((classString) => classString.replace(regexSelect, `$1${color}$3`));

      //--|🠊 Apply new class names 🠈|--//
      prevText.classList.replace(prevText.classList[0], batchText[0]);
      childText.classList.replace(childText.classList[0], batchText[1]);

      prevIcon.classList.replace(prevIcon.classList[0], batchIcon[0]);
      childIcon.classList.replace(childIcon.classList[0], batchIcon[1]);

      prevBack.classList.replace(prevBack.classList[0], batchBack[0]);
      childBack.classList.replace(childBack.classList[0], batchBack[1]);

      if (nextButton !== prevButton) {
        updateButtons(buttons[i], childText, childBack);
        buttons[i].classList.replace(prevButton, nextButton);
      }
    }
  };
  const updateButtons = (button: HTMLButtonElement, childText: HTMLElement, childBack: HTMLElement) => {
    var buttonMode = button.classList[0];
    var isIcon = childText.classList[0].includes('_ico_');
    var [viewSize, viewText, shadeText, colorText] = childText.classList[0].split('_');
    var sampleText = `${viewText}_${shadeText}_${colorText}`;

    var modesWithBack = ['cleaned', 'default'];

    childText.innerText = isIcon ? '' : sampleText;
    childBack.innerText = !isIcon && modesWithBack.some((mode) => buttonMode.includes(mode)) ? sampleText : '';
  };
  */
