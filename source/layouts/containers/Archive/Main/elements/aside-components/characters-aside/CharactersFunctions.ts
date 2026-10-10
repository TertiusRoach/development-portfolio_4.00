//--|🠊 characters-aside/CharactersFunctions.ts 🠈|--\\
//--|🠋 Aside Color Toggle 🠋|--\\
export const toggleColors = (section: HTMLElement): Promise<string> => {
  const findTint = ([red, green, blue]: Array<boolean>): string => {
    let tintMap: Record<string, string> = {
      'true-false-false': 'red',
      'false-true-false': 'gre',
      'false-false-true': 'blu',
      'true-true-false': 'yel',
      'true-false-true': 'pur',
      'false-true-true': 'tur',
    };
    let key: string = `${red}-${green}-${blue}`;
    let tint: string = tintMap[key] ?? 'mon';

    updateAside(tint);
    return tint;
  };
  return new Promise((resolve) => {
    let booleans: Array<boolean> = [];
    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        const label = section.childNodes[i] as HTMLLabelElement;
        const input = label.childNodes[0] as HTMLInputElement;
        booleans.push(input.checked);
      }
      resolve(findTint(booleans));
    }, 125);
  });
};
let updateAside = (color: string) => {
  console.log('Update colors for <aside>');
  const asideElements = document.querySelectorAll(
    '#components-main aside[class="characters-aside"] aside[class*="characters-default"]',
  ) as NodeListOf<HTMLButtonElement>;

  for (let i = 0; i < asideElements.length; i++) {
    let aside = asideElements[i];

    let prevClass = aside.classList[1] as string;
    let nextClass = `${prevClass.split('_')[0]}_${prevClass.split('_')[1]}_${color}`;
    asideElements[i].classList.replace(prevClass, nextClass);
  }
};
