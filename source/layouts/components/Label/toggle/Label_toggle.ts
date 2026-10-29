//--|🠊 Label_toggle.ts 🠈|--\\
import { stripBrackets } from '../../../../scripts';

export interface StyleProps {
  shade: '~dark~' | '~light~';
  color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)';
}
//--|🠋 Functions 🠋|--\\
function createClass(style: StyleProps): string {
  //--|🠊 Class Build for <LabelToggle> 🠈|--\\
  const classColor = createColor(style.shade, style.color);

  return `${classColor}`;
}

//--|🠋 Generate Abbreviations 🠋|--\\
const createColor = (shade: StyleProps['shade'], color: StyleProps['color']): string => {
  const shadeMap: Record<StyleProps['shade'], string> = {
    //--|🠊 Map shade options to class abbreviations 🠈|--\\
    '~dark~': 'dar',
    '~light~': 'lig',
  };

  const colorMap: Record<StyleProps['color'], string> = {
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
