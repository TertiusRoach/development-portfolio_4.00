//--|🠊 updates-article/UpdatesFunctions.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { arabicToRoman, romanToArabic } from '../../../../../../../scripts';

//--|🠋 Article Colors Toggle 🠋|--\\
export const updateArticle = (tint: string): void => {
  const article = document.querySelector('#components-main .updates-article article[class*="updates-default"]') as HTMLElement;

  let prevClass: string = article.classList[1] as string; //--|🠈 Example: 'dar_mon' 🠈|--\\
  let nextClass: string = `${prevClass.split('_')[0]}_${tint}`; //--|🠈 Keeps the shade, swaps the color: 'dar_red' 🠈|--\\

  article.classList.replace(prevClass, nextClass);
};

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
export default toggleColors;
*/
