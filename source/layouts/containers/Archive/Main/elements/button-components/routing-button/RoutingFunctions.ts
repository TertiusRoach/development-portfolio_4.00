//--|🠊 routing-button/RoutingFunctions.ts 🠈|--\\

//--|🠋 Functions 🠋|--\\
export function toggleColors(tint: string): void {
  const updateButtons = (color: string) => {
    const wrapperDarkside = document.querySelectorAll('#components-main .routing-darkside-main_container button[class*="routing-button"]') as NodeListOf<HTMLButtonElement>;
    const wrapperLightside = document.querySelectorAll('#components-main .routing-lightside-main_container button[class*="routing-button"]') as NodeListOf<HTMLButtonElement>;

    for (let i = 0; i < 27; i++) {
      let prevDarkClass = wrapperDarkside[i].classList[1] as string;
      let prevLightClass = wrapperLightside[i].classList[1] as string;

      let nextDarkClass = `${wrapperDarkside[i].classList[1].split('_')[0]}_${wrapperDarkside[i].classList[1].split('_')[1]}_${wrapperDarkside[i].classList[1].split('_')[2]}_${color}_${wrapperDarkside[i].classList[1].split('_')[4]}_${wrapperDarkside[i].classList[1].split('_')[5]}`; //--|🠈 AI Code: Review Please 2026-10-30 · [4] is now the clarity 🠈|--\\
      let nextLightClass = `${wrapperLightside[i].classList[1].split('_')[0]}_${wrapperLightside[i].classList[1].split('_')[1]}_${wrapperLightside[i].classList[1].split('_')[2]}_${color}_${wrapperLightside[i].classList[1].split('_')[4]}_${wrapperLightside[i].classList[1].split('_')[5]}`; //--|🠈 AI Code: Review Please 2026-10-30 · [4] is now the clarity 🠈|--\\

      wrapperDarkside[i].classList.replace(prevDarkClass, nextDarkClass);
      wrapperLightside[i].classList.replace(prevLightClass, nextLightClass);
    }
  };
  updateButtons(tint); //--|🠈 <DivisionColourize> finds the tint, this swaps it into every <ButtonRouting> 🠈|--\\
}
export function toggleClarity(element: HTMLFieldSetElement): void {
  //--|🠊 AI Code: Review Please 2026-10-31 · The checked radio's value picks the clarity, the <fieldset>'s class picks the side, like <DefaultButton> 🠈|--\\
  const updateClarity = (clarity: string, side: string) => {
    const wrapperSide = document.querySelectorAll(`#components-main .routing-${side}-main_container button[class*="routing-button"]`) as NodeListOf<HTMLButtonElement>;

    for (let i = 0; i < 27; i++) {
      //--|🠊 Same 27 as toggleColors(), [4] is the clarity 🠈|--\\
      let prevSideClass = wrapperSide[i].classList[1] as string;

      let nextSideClass = `${wrapperSide[i].classList[1].split('_')[0]}_${wrapperSide[i].classList[1].split('_')[1]}_${wrapperSide[i].classList[1].split('_')[2]}_${wrapperSide[i].classList[1].split('_')[3]}_${clarity}_${wrapperSide[i].classList[1].split('_')[5]}`;

      wrapperSide[i].classList.replace(prevSideClass, nextSideClass);
    }
  };
  const checkedInput = element.querySelector('input:checked') as HTMLInputElement;
  const fieldsetSide = element.classList[0].split('-')[1] as string; //--|🠈 clarify-darkside → darkside 🠈|--\\

  let clarity: string = '';
  switch (checkedInput.value) {
    case 'Lucid':
      clarity = 'luc';
      break;
    case 'Opaque':
      clarity = 'opa';
      break;
  }
  updateClarity(clarity, fieldsetSide); //--|🠈 Swaps the clarity into every <ButtonRouting> on that side only 🠈|--\\
}
