//--|🠊 profile-button/ProfileFunctions.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
//--|🠋 Button Colors Toggle 🠋|--\\
export const toggleColors = (tint: string): void => {
  //--|🠊 AI Code: Review Please 2026-10-31 11:26 · Same shape as DefaultFunctions.ts: export const calls a file-level let 🠈|--\\
  updateButtons(tint); //--|🠈 <DivisionColourize> finds the tint, this swaps it into every <ButtonProfile> 🠈|--\\
};
//--|🠋 Button Clarity Toggle 🠋|--\\
export const toggleClarity = (element: HTMLFieldSetElement): void => {
  //--|🠊 AI Code: Review Please 2026-10-31 · Like <DefaultButton>, but <ProfileButton> has no sides: the <fieldset>'s class picks the shade instead 🠈|--\\
  const checkedInput = element.querySelector('input:checked') as HTMLInputElement;

  let fieldsetShade: string = '';
  switch (element.classList[0]) {
    case 'clarify-darkside':
      fieldsetShade = 'dar';
      break;
    case 'clarify-lightside':
      fieldsetShade = 'lig';
      break;
  }

  let clarity: string = '';
  switch (checkedInput.value) {
    case 'Lucid':
      clarity = 'luc';
      break;
    case 'Opaque':
      clarity = 'opa';
      break;
  }
  updateClarity(clarity, fieldsetShade); //--|🠈 Swaps the clarity into every <ButtonProfile> of that shade only 🠈|--\\
};

let updateButtons = (color: string) => {
  const wrapperButtons = document.querySelectorAll(
    '#components-main .profile-button button[class*="profile-button"]',
  ) as NodeListOf<HTMLButtonElement>;

  for (let i = 0; i < wrapperButtons.length; i++) {
    //--|🠊 AI Code: Review Please 2026-10-31 11:26 · .length, not 12 🠈|--\\
    let prevClass = wrapperButtons[i].classList[1] as string;
    let nextClass = `${wrapperButtons[i].classList[1].split('_')[0]}_${wrapperButtons[i].classList[1].split('_')[1]}_${wrapperButtons[i].classList[1].split('_')[2]}_${color}_${wrapperButtons[i].classList[1].split('_')[4]}_${wrapperButtons[i].classList[1].split('_')[5]}`; //--|🠈 AI Code: Review Please 2026-10-30 · [4] is now the clarity 🠈|--\\

    wrapperButtons[i].classList.replace(prevClass, nextClass);
  }
};
let updateClarity = (clarity: string, shade: string) => {
  const wrapperShade = document.querySelectorAll(
    `#components-main .profile-button button[class*="profile-button"][class*="_${shade}_"]`,
  ) as NodeListOf<HTMLButtonElement>;

  for (let i = 0; i < wrapperShade.length; i++) {
    //--|🠊 AI Code: Review Please 2026-10-31 11:26 · .length, not 6: one shade's share of updateButtons(), [4] is the clarity 🠈|--\\
    let prevShadeClass = wrapperShade[i].classList[1] as string;

    let nextShadeClass = `${wrapperShade[i].classList[1].split('_')[0]}_${wrapperShade[i].classList[1].split('_')[1]}_${wrapperShade[i].classList[1].split('_')[2]}_${wrapperShade[i].classList[1].split('_')[3]}_${clarity}_${wrapperShade[i].classList[1].split('_')[5]}`;

    wrapperShade[i].classList.replace(prevShadeClass, nextShadeClass);
  }
};
