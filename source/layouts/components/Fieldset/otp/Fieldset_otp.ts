//--|🠊 Fieldset_otp.ts 🠈|--\\
import { stripBrackets } from '../../../../scripts';
import type { TheseProps } from './Fieldset.otp'; //--|🠈 The props are written in the .tsx, this only reads them 🠈|--\\

//--|🠋 Functions 🠋|--\\
//--|🠊 AI Code: Review Please 2026-10-29 17:22 · Copied from Label_select.ts 🠈|--\\
function createClass(style: TheseProps['style']): string {
  //--|🠊 Class Build for <FieldsetOtp> 🠈|--\\
  const classColor = createColor(style.shade, style.color);

  return `${classColor}`;
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
export default createClass;
