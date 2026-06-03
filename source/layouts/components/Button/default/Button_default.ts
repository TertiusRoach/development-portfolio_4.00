//--|🠊 Button_default.ts 🠈|--\\
import { stripBrackets } from '../../../scripts/buttons';

interface StyleProps {
  shade: '~dark~' | '~medium~' | '~light~';
  type: '{button}' | '{disabled}' | '{submit}' | '{reset}';
  size: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>';
  view: '-top-' | '-bottom-' | '-left-' | '-right-' | '-center-' | '-text-' | '-icon-';

  color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(turquoise)';

  text?: string;
  image?: string | null | undefined;
  role?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)';
}
//--|🠋 Functions 🠋|--\\
export function createClass(style: StyleProps): String {
  //--|🠊 Class Build for <DefaultButton> 🠈|--\\
  let classColor = createColor(style.shade, style.color);
  let classLayout = createLayout(style.size, style.view);

  if (style.image == null) {
    return `${classLayout}_${classColor}_alt`;
  } else {
    return `${classLayout}_${classColor}_def`;
  }
}
export default createClass;

//--|🠋 Scoped Functions 🠋|--\\

export function createLayout(
  size: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
  view: '-top-' | '-bottom-' | '-left-' | '-right-' | '-center-' | '-text-' | '-icon-',
): string {
  const sizeMap: Record<string, string> = {
    //--|🠊 Map of size tags to class abbreviations 🠈|--\\
    '<h1>': 'one',
    '<h2>': 'two',
    '<h3>': 'thr',
    '<h4>': 'fou',
    '<h5>': 'fiv',
    '<h6>': 'six',
    '<p>': 'par',
  };

  const viewMap: Record<string, string> = {
    //--|🠊 Map of view options to class abbreviations 🠈|--\\
    '-top-': 'top',
    '-bottom-': 'bot',
    '-left-': 'lef',
    '-right-': 'rig',
    '-center-': 'cen',
    '-text-': 'tex',
    '-icon-': 'ico',
  };

  const classSize = sizeMap[size];
  const classView = viewMap[view];

  if (!classSize || !classView) {
    //--|🠊 Optional: runtime check for invalid inputs 🠈|--\\
    throw new Error(`Invalid size (${size}) or view (${view}) provided to createLayout()`);
  }

  return `${classSize}_${classView}`;
}
export function createColor(
  shade: '~dark~' | '~medium~' | '~light~',
  color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(turquoise)',
): string {
  const shadeMap: Record<string, string> = {
    //--|🠊 Map shade options to class abbreviations 🠈|--\\
    '~dark~': 'dar',
    '~medium~': 'med',
    '~light~': 'lig',
  };

  const colorMap: Record<string, string> = {
    //--|🠊 Map color options to class abbreviations 🠈|--\\
    '(mono)': 'mon',
    '(red)': 'red',
    '(green)': 'gre',
    '(blue)': 'blu',
    '(yellow)': 'yel',
    '(purple)': 'pur',
    '(turquoise)': 'tur',
  };

  const classShade = shadeMap[shade];
  const classColor = colorMap[color];

  if (!classShade || !classColor) {
    //--|🠊 Optional: runtime check for invalid inputs 🠈|--\\
    throw new Error(`Invalid shade (${shade}) or color (${color}) provided to createColor()`);
  }

  return `${classShade}_${classColor}`;
}
