//--|🠊 profile-button/ProfileFunctions.ts 🠈|--\\

//--|🠋 Functions 🠋|--\\
export function toggleColors(section: HTMLElement): Promise<string> {
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

    updateButtons(tint);
    return tint;
  };
  const updateButtons = (color: string) => {
    const wrapperButtons = document.querySelectorAll('#components-main .profile-button button[class*="profile-button"]') as NodeListOf<HTMLButtonElement>;

    for (let i = 0; i < 12; i++) {
      let prevClass = wrapperButtons[i].classList[1] as string;

      let nextClass = `${wrapperButtons[i].classList[1].split('_')[0]}_${wrapperButtons[i].classList[1].split('_')[1]}_${wrapperButtons[i].classList[1].split('_')[2]}_${color}_${wrapperButtons[i].classList[1].split('_')[4]}`;

      wrapperButtons[i].classList.replace(prevClass, nextClass);
    }
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
}
