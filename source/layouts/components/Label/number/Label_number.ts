//--|🠊 Label_number.ts 🠈|--\\
import { stripBrackets } from '../../../../scripts';
import type { TheseProps } from './Label.number'; //--|🠈 The props are written in the .tsx, this only reads them 🠈|--\\

//--|🠋 Functions 🠋|--\\
//--|🠊 AI Code: Review Please 2026-10-29 15:51 · Copied from Label_select.ts 🠈|--\\
function createClass(style: TheseProps['style']): string {
  //--|🠊 Class Build for <LabelNumber> 🠈|--\\
  const classColor = createColor(style.shade, style.color);
  const classView = createView(style.view); //--|🠈 AI Code: Review Please 2026-10-29 17:04 · A third class, so the colour class stays second 🠈|--\\

  return `${classColor} ${classView}`;
}

//--|🠋 Generate Abbreviations 🠋|--\\
const createColor = (shade: TheseProps['style']['shade'], color: TheseProps['style']['color']): string => {
  const shadeMap: Record<TheseProps['style']['shade'], string> = {
    //--|🠊 Map shade options to class abbreviations 🠈|--\\
    '~dark~': 'dar',
    '~light~': 'lig',
  };

  const colorMap: Record<TheseProps['style']['color'], string> = {
    //--|🠊 Map color options to class abbreviations 🠈|--\\
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

  const classShade = shadeMap[shade];
  const classColor = colorMap[color];

  if (!classShade || !classColor) {
    //--|🠊 Optional: runtime check for invalid inputs 🠈|--\\
    throw new Error(`|🠊 Error: Invalid ~${stripBrackets(shade, '~~')}~ or (${stripBrackets(color, '()')}) 🠈|`);
  }

  return `${classShade}_${classColor}`;
};
//--|🠊 AI Code: Review Please 2026-10-29 17:04 🠈|--\\
const createView = (view: TheseProps['style']['view']): string => {
  const viewMap: Record<TheseProps['style']['view'], string> = {
    //--|🠊 Map view options to class abbreviations, the side the caret sits on 🠈|--\\
    '-left-': 'lef',
    '-right-': 'rig',
  };

  const classView = viewMap[view];

  if (!classView) {
    //--|🠊 Optional: runtime check for invalid inputs 🠈|--\\
    throw new Error(`|🠊 Error: Invalid -${stripBrackets(view, '--')}- 🠈|`);
  }

  return classView;
};
export default createClass;
