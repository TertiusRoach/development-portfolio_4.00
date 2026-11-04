//--|🠊 textarea-label/TextareaFunctions.ts 🠈|--\\
//--|🠋 Placeholders 🠋|--\\
function typePlaceholder(type: '{text}' | '{input}' | '{block}', input?: string): string {
  //--|🠊 Every <LabelTextarea> is named after its cases.type; {block} is one security-code character, so it shows a dash 🠈|--\\
  const placeholderMap: Record<string, string> = {
    '{text}': 'Text',
    '{input}': 'Input',
    '{block}': '-',
  };
  const inputMap: Record<string, string> = {
    '{text}': 'Text',
    '{email}': 'Email',
    '{password}': 'Password',
    '{search}': 'Search',
    '{url}': 'Website',
    '{tel}': 'Phone number',
  };

  if (type === '{input}' && input) {
    return `${inputMap[input]} ${placeholderMap[type]}`; //--|🠈 Its data-input, then its cases.type: 'Email Input' 🠈|--\\
  }
  return placeholderMap[type];
}
//--|🠋 Inputs 🠋|--\\
export const listInputs = (): Array<string> => {
  //--|🠊 The old <LabelInput> page's order, the {input} row uses the first four 🠈|--\\
  return ['{text}', '{email}', '{password}', '{search}', '{url}', '{tel}', '{text}', '{email}', '{password}', '{search}'];
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
export default typePlaceholder;
