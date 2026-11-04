//--|🠊 selection-label/SelectionFunctions.ts 🠈|--\\
//--|🠋 Character Lists 🠋|--\\
function listCharacters(company: 'voidspire' | 'silverveil'): Array<string> {
  //--|🠊 Names and order from CHARACTERS.md, both lists end with Randomize Character 🠈|--\\
  const companyList: Record<'voidspire' | 'silverveil', Array<string>> = {
    //--|🠊 Left (~dark~): 01 - 09 🠈|--\\
    voidspire: [
      'Jane Lester',
      'Malik Tremaine Carter',
      'Dimitri Lewis',
      'Dale Sutton',
      'Dr. Alaric Voss',
      'Conrad Guy',
      'Daniel Meyers',
      'Ms. Kady Deacon',
      "Seamus O'Donnell",
      'Randomize Character',
    ],
    //--|🠊 Right (~light~): 10 - 18 🠈|--\\
    silverveil: [
      'Hammad Dean',
      'Tasneem Kemp',
      'Elliot Crane',
      'Sipho Dlamini',
      'Zuberi Thorne',
      'Nyra Solari',
      'Victor Langston',
      'Danish Copeland',
      'Aelin Darrow',
      'Randomize Character',
    ],
  };

  return companyList[company];
}
//--|🠋 Placeholders 🠋|--\\
export const typePlaceholder = (type: '{select}' | '{combo}' | '{number}'): string => {
  //--|🠊 Every <LabelSelection> is named after its cases.type; {number} shows 1 once it's cleared, the lowest count 🠈|--\\
  const placeholderMap: Record<string, string> = {
    '{select}': 'Select',
    '{combo}': 'Combo',
    '{number}': '1',
  };

  return placeholderMap[type];
};
//--|🠋 Colour Switching 🠋|--\\
//--|🠊 AI Code: Review Please 2026-11-03 · One copy per <Label> page, written line for line alike: no .ts file in label-components/ yet (RULEBOOK § Functions Files) 🠈|--\\
export const switchColors = (choice: string, labelName: 'switching' | 'textarea' | 'selection'): void => {
  //--|🠊 AI Code: Review Please 2026-10-30 · The colour {select} gives '(red)', the classes need 'red' 🠈|--\\
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

  updateLabels(colorMap[choice], labelName); //--|🠈 The {select} picks the colour, this swaps it into every <Label> on that page 🠈|--\\
};
let updateLabels = (color: string, labelName: 'switching' | 'textarea' | 'selection') => {
  //--|🠊 AI Code: Review Please 2026-10-30 · Only the colour changes: size_type_view_shade_[color]_clarity_def, so [4] is swapped; the colour {select} itself stays (mono) 🠈|--\\
  const archiveLabels = document.querySelectorAll(
    `#components-main .${labelName}-label label[class*="_${labelName}-"]:not([class*="colours"])`,
  ) as NodeListOf<HTMLLabelElement>;

  for (let i = 0; i < archiveLabels.length; i++) {
    let prevClass = archiveLabels[i].classList[1] as string;
    let nextClass = `${archiveLabels[i].classList[1].split('_')[0]}_${archiveLabels[i].classList[1].split('_')[1]}_${archiveLabels[i].classList[1].split('_')[2]}_${archiveLabels[i].classList[1].split('_')[3]}_${color}_${archiveLabels[i].classList[1].split('_')[5]}_${archiveLabels[i].classList[1].split('_')[6]}`;

    archiveLabels[i].classList.replace(prevClass, nextClass);
  }
};
export default listCharacters;
