//--|🠊 characters-aside/CharactersFunctions.ts 🠈|--\\
//--|🠋 Aside Color Toggle 🠋|--\\
export const toggleColors = (tint: string): void => {
  updateAside(tint); //--|🠈 <DivisionColourize> finds the tint, this swaps it into every <AsideCharacters> 🠈|--\\
};
let updateAside = (color: string) => {
  const asideElements = document.querySelectorAll(
    '#components-main aside[class="characters-aside"] aside[class*="characters-default"]',
  ) as NodeListOf<HTMLElement>;
  for (let i = 0; i < asideElements.length; i++) {
    let aside = asideElements[i];

    let prevClass = aside.classList[1] as string;
    let nextClass = `${prevClass.split('_')[0]}_${prevClass.split('_')[1]}_${color}_${prevClass.split('_')[3]}` as string;

    asideElements[i].classList.replace(prevClass, nextClass);
  }
  //--|===|--\\
  const buttonElements = document.querySelectorAll(
    '#components-main aside[class="characters-aside"] aside[class*="characters-default"] button',
  ) as NodeListOf<HTMLButtonElement>;
  for (let i = 0; i < buttonElements.length; i++) {
    let button = buttonElements[i] as HTMLButtonElement;

    let prevClass = button.classList[1] as string;
    let nextClass = `${prevClass.split('_')[0]}_${prevClass.split('_')[1]}_${prevClass.split('_')[2]}_${color}_${prevClass.split('_')[4]}_${prevClass.split('_').pop()}` as string;

    buttonElements[i].classList.replace(prevClass, nextClass);
  }
};
//--|🠋 Aside Clarity Toggle 🠋|--\\
export const toggleClarity = (element: HTMLFieldSetElement): void => {
  const checkedInput = element.querySelector('input:checked') as HTMLInputElement;

  let clarity: string = '';
  switch (checkedInput.value) {
    case 'Lucid':
      clarity = 'luc';
      break;
    case 'Opaque':
      clarity = 'opa';
      break;
  }
  updateClarity(clarity); //--|🠈 Swaps the clarity into every <AsideCharacters> 🠈|--\\
};
let updateClarity = (clarity: string) => {
  const asideElements = document.querySelectorAll(
    '#components-main aside[class="characters-aside"] aside[class*="characters-default"]',
  ) as NodeListOf<HTMLElement>;

  for (let i = 0; i < asideElements.length; i++) {
    //--|🠊 view_shade_color_[clarity], so [3] is swapped 🠈|--\\
    let prevClass = asideElements[i].classList[1] as string;
    let nextClass = `${asideElements[i].classList[1].split('_')[0]}_${asideElements[i].classList[1].split('_')[1]}_${asideElements[i].classList[1].split('_')[2]}_${clarity}`;

    asideElements[i].classList.replace(prevClass, nextClass);
  }
};
