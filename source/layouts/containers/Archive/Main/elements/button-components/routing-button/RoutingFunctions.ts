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
