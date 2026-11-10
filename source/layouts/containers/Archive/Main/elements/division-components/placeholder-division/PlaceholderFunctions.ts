//--|🠊 placeholder-division/PlaceholderFunctions.ts 🠈|--\\
//--|🠋 Colour Switching 🠋|--\\
export const switchColors = (choice: string, labelName: 'placeholder'): void => {
  const colorMap: Record<string, string> = {
    '(mono)': 'mon',
    '(red)': 'red',
    '(green)': 'gre',
    '(blue)': 'blu',
    '(purple)': 'pur',
    '(orange)': 'ora',
    '(pink)': 'pin',
    '(yellow)': 'yel',
    '(brown)': 'bro',
    '(turquoise)': 'tur',
  };

  updateDivisions(colorMap[choice], labelName); //--|🠈 The {select} picks the colour, this swaps it into every <DivisionPlaceholder> on that page 🠈|--\\
};
let updateDivisions = (color: string, labelName: 'placeholder') => {
  //--|🠊 Only the colour changes: view_shade_[color]_clarity, so [2] is swapped 🠈|--\\
  const archiveDivisions = document.querySelectorAll(
    `#components-main .${labelName}-division div[class*="_division-${labelName}"]`,
  ) as NodeListOf<HTMLDivElement>;

  for (let i = 0; i < archiveDivisions.length; i++) {
    let prevClass = archiveDivisions[i].classList[1] as string;
    let nextClass = `${archiveDivisions[i].classList[1].split('_')[0]}_${archiveDivisions[i].classList[1].split('_')[1]}_${color}_${archiveDivisions[i].classList[1].split('_')[3]}`;

    archiveDivisions[i].classList.replace(prevClass, nextClass);
  }
};
