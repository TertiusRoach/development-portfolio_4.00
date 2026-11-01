//--|🠊 login-form/LoginFunctions.ts 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-01 · Written like CharactersFunctions.ts 🠈|--\\
//--|🠋 Form Color Toggle 🠋|--\\
export const toggleColors = (tint: string): void => {
  updateForm(tint); //--|🠈 <DivisionColourize> finds the tint, this swaps it into <FormLogin> and everything inside it 🠈|--\\
};
let updateForm = (color: string) => {
  const formElements = document.querySelectorAll('#components-main aside[class="login-form"] form[class*="_login-"]') as NodeListOf<HTMLFormElement>;
  for (let i = 0; i < formElements.length; i++) {
    let form = formElements[i] as HTMLFormElement;

    let prevClass = form.classList[1] as string;
    let nextClass = `${color}_${prevClass.split('_')[1]}` as string; //--|🠈 color_def: [0] is the colour 🠈|--\\

    formElements[i].classList.replace(prevClass, nextClass);
  }
  //--|===|--\\
  const buttonElements = document.querySelectorAll('#components-main aside[class="login-form"] form[class*="_login-"] button') as NodeListOf<HTMLButtonElement>;
  for (let i = 0; i < buttonElements.length; i++) {
    let button = buttonElements[i] as HTMLButtonElement;

    let prevClass = button.classList[1] as string;
    let nextClass = `${prevClass.split('_')[0]}_${prevClass.split('_')[1]}_${prevClass.split('_')[2]}_${color}_${prevClass.split('_')[4]}_${prevClass.split('_')[5]}` as string; //--|🠈 size_view_shade_color_clarity_variant: [3] is the colour 🠈|--\\

    buttonElements[i].classList.replace(prevClass, nextClass);
  }
  //--|===|--\\
  const labelElements = document.querySelectorAll('#components-main aside[class="login-form"] form[class*="_login-"] label') as NodeListOf<HTMLLabelElement>;
  for (let i = 0; i < labelElements.length; i++) {
    let label = labelElements[i] as HTMLLabelElement;

    let prevClass = label.classList[1] as string;
    let nextClass = `${prevClass.split('_')[0]}_${prevClass.split('_')[1]}_${prevClass.split('_')[2]}_${prevClass.split('_')[3]}_${color}_${prevClass.split('_')[5]}_${prevClass.split('_')[6]}` as string; //--|🠈 size_type_view_shade_color_clarity_def: [4] is the colour 🠈|--\\

    labelElements[i].classList.replace(prevClass, nextClass);
  }
};
