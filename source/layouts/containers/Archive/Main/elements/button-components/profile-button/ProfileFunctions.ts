//--|🠊 profile-button/ProfileFunctions.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
export function toggleColors(tint: string): void {
  const updateButtons = (color: string) => {
    const wrapperButtons = document.querySelectorAll(
      '#components-main .profile-button button[class*="profile-button"]',
    ) as NodeListOf<HTMLButtonElement>;

    for (let i = 0; i < 12; i++) {
      let prevClass = wrapperButtons[i].classList[1] as string;
      let nextClass = `${wrapperButtons[i].classList[1].split('_')[0]}_${wrapperButtons[i].classList[1].split('_')[1]}_${wrapperButtons[i].classList[1].split('_')[2]}_${color}_${wrapperButtons[i].classList[1].split('_')[4]}_${wrapperButtons[i].classList[1].split('_')[5]}`; //--|🠈 AI Code: Review Please 2026-10-30 · [4] is now the clarity 🠈|--\\

      wrapperButtons[i].classList.replace(prevClass, nextClass);
    }
  };
  updateButtons(tint); //--|🠈 <DivisionColourize> finds the tint, this swaps it into every <ButtonProfile> 🠈|--\\
}
