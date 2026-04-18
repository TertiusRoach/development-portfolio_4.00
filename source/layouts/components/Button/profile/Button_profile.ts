//--|🠊 Button_profile.ts 🠈|--\\
import { stripBrackets } from '../../../scripts/buttons';

interface StyleProps {
  image: string;
  size: '<h1>' | '<p>';
  shade: '~dark~' | '~light~';
  color: '(red)' | '(green)' | '(blue)' | '(mono)';
  type: '{button}' | '{disabled}' | '{submit}' | '{reset}';
}
//--|🠋 Functions 🠋|--\\
export function createClass(style: StyleProps): String {
  //--|🠊 Class Build for <ProfileButton> 🠈|--\\
  let classLayout = createLayout(style.size);
  let classColor = createColor(style.shade, style.color);
  return `${classLayout}_${classColor}_pro`;
}
export default createClass;

//--|🠋 Scoped Functions 🠋|--\\
function createLayout(size: '<h1>' | '<p>'): string {
  const sizeMap: Record<string, string> = {
    //--|🠊 Map of size tags to class abbreviations 🠈|--\\
    '<h1>': 'big',
    '<p>': 'sma',
  };

  const classSize = sizeMap[size];

  if (!classSize) {
    //--|🠊 Optional: runtime check for invalid inputs 🠈|--\\
    throw new Error(`Invalid size (${size}) provided to createLayout()`);
  }

  return `${classSize}`;
}
function createColor(shade: '~dark~' | '~medium~' | '~light~', color: '(red)' | '(green)' | '(blue)' | '(mono)'): string {
  const shadeMap: Record<string, string> = {
    //--|🠊 Map shade options to class abbreviations 🠈|--\\
    '~dark~': 'dar',
    '~medium~': 'med',
    '~light~': 'lig',
  };

  const colorMap: Record<string, string> = {
    //--|🠊 Map color options to class abbreviations 🠈|--\\
    '(red)': 'red',
    '(green)': 'gre',
    '(blue)': 'blu',
    '(mono)': 'mon',
  };

  const classShade = shadeMap[shade];
  const classColor = colorMap[color];

  if (!classShade || !classColor) {
    //--|🠊 Optional: runtime check for invalid inputs 🠈|--\\
    throw new Error(`Invalid shade (${shade}) or color (${color}) provided to createColor()`);
  }

  return `${classShade}_${classColor}`;
}
