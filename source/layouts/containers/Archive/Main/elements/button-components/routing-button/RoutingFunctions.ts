//--|🠊 routing-button/RoutingFunctions.ts 🠈|--\\

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
    const wrapperDarkside = document.querySelectorAll('#components-main .routing-darkside-main_container button[class*="routing-button"]') as NodeListOf<HTMLButtonElement>;
    const wrapperLightside = document.querySelectorAll('#components-main .routing-lightside-main_container button[class*="routing-button"]') as NodeListOf<HTMLButtonElement>;

    for (let i = 0; i < 27; i++) {
      let prevDarkClass = wrapperDarkside[i].classList[1] as string;
      let prevLightClass = wrapperLightside[i].classList[1] as string;

      let nextDarkClass = `${wrapperDarkside[i].classList[1].split('_')[0]}_${wrapperDarkside[i].classList[1].split('_')[1]}_${wrapperDarkside[i].classList[1].split('_')[2]}_${color}_${wrapperDarkside[i].classList[1].split('_')[4]}`;
      let nextLightClass = `${wrapperLightside[i].classList[1].split('_')[0]}_${wrapperLightside[i].classList[1].split('_')[1]}_${wrapperLightside[i].classList[1].split('_')[2]}_${color}_${wrapperLightside[i].classList[1].split('_')[4]}`;

      wrapperDarkside[i].classList.replace(prevDarkClass, nextDarkClass);
      wrapperLightside[i].classList.replace(prevLightClass, nextLightClass);
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
