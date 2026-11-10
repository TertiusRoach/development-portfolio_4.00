//--|🠊 updates-article/UpdatesFunctions.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { arabicToRoman, romanToArabic } from '../../../../../../tools/conversions';

//--|🠋 Article Colors Toggle 🠋|--\\
function toggleColors(tint: string): void {
  //--|🠊 AI Code: Review Please 2026-11-10 · One article per slide now, so each shade is found and swapped on its own 🠈|--\\
  const articleDark = document.querySelector('#components-main .updates-main_shade-dark article[class*="updates-default"]') as HTMLElement;
  const articleLight = document.querySelector('#components-main .updates-main_shade-light article[class*="updates-default"]') as HTMLElement;

  let prevDarkClass: string = articleDark.classList[1] as string; //--|🠈 Example: 'dar_mon' 🠈|--\\
  let prevLightClass: string = articleLight.classList[1] as string; //--|🠈 Example: 'lig_mon' 🠈|--\\

  let nextDarkClass: string = `${prevDarkClass.split('_')[0]}_${tint}`; //--|🠈 Keeps the shade, swaps the color: 'dar_red' 🠈|--\\
  let nextLightClass: string = `${prevLightClass.split('_')[0]}_${tint}`; //--|🠈 Keeps the shade, swaps the color: 'lig_red' 🠈|--\\

  articleDark.classList.replace(prevDarkClass, nextDarkClass);
  articleLight.classList.replace(prevLightClass, nextLightClass);
}

//--|🠋 Button Colors Toggle 🠋|--\\
/*
function toggleColors(section: HTMLElement): Promise<string> {
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
*/
export default toggleColors;
