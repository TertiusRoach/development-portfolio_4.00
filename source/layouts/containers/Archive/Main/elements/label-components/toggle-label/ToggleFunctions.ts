//--|🠊 toggle-label/ToggleFunctions.ts 🠈|--\\
//--|🠋 Label Color Toggle 🠋|--\\
/*
export const toggleColors = (tint: string): void => {
  updateLabels(tint); //--|🠈 <DivisionColourize> finds the tint, this swaps it into every <LabelToggle> on both sides 🠈|--\\
};
let updateLabels = (color: string) => {
  //--|🠊 Only the darkside & lightside toggles, the picker is made of <LabelToggle> too and keeps its own colours 🠈|--\\
  const labelElements = document.querySelectorAll(
    '#components-main aside[class="toggle-label"] div[class*="darkside"] label[class*="toggle-default"], #components-main aside[class="toggle-label"] div[class*="lightside"] label[class*="toggle-default"]',
  ) as NodeListOf<HTMLLabelElement>;
  for (let i = 0; i < labelElements.length; i++) {
    let label = labelElements[i];

    let prevClass = label.classList[1] as string;
    let nextClass = `${prevClass.split('_')[0]}_${color}` as string;

    labelElements[i].classList.replace(prevClass, nextClass);
  }
};
*/
