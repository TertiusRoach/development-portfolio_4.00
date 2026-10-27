//--|🠊 Button_profile.ts 🠈|--\\

interface StyleProps {
  image: string;
  shade: '~dark~' | '~light~';
  size: '<h1>' | '<h4>' | '<p>';
  view: '-square-' | '-circle-';
  type: '{button}' | '{disabled}' | '{submit}' | '{reset}';
  color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(orange)' | '(pink)' | '(brown)' | '(turquoise)';
}
//--|🠋 Functions 🠋|--\\
export function createClass(style: StyleProps): String {
  //--|🠊 Class Build for <ProfileButton> 🠈|--\\
  let classSize = createLayout(style.size, style.view);
  let classColor = createColor(style.shade, style.color);

  return `${classSize}_${classColor}_pro`;
}

//--|🠋 Scoped Functions 🠋|--\\
const createLayout = (size: '<h1>' | '<h4>' | '<p>', view: '-square-' | '-circle-'): string => {
  const sizeMap: Record<string, string> = {
    //--|🠊 Map of size tags to class abbreviations 🠈|--\\
    '<h1>': 'one',
    '<h4>': 'fou',
    '<p>': 'par',
  };
  const viewMap: Record<string, string> = {
    //--|🠊 Map of size tags to class abbreviations 🠈|--\\
    '-square-': 'squ',
    '-circle-': 'cir',
  };

  const classSize = sizeMap[size];
  const classView = viewMap[view];

  if (!classSize) {
    //--|🠊 Optional: runtime check for invalid inputs 🠈|--\\
    throw new Error(`Invalid size (${size}) provided to createLayout()`);
  }

  return `${classSize}_${classView}`;
};
const createColor = (
  shade: '~dark~' | '~light~',
  color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(orange)' | '(pink)' | '(brown)' | '(turquoise)',
): string => {
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
    '(orange)': 'ora',
    '(pink)': 'pin',
    '(brown)': 'bro',
    '(turquoise)': 'tur',
  };

  const classShade = shadeMap[shade];
  const classColor = colorMap[color];

  if (!classShade || !classColor) {
    //--|🠊 Optional: runtime check for invalid inputs 🠈|--\\
    throw new Error(`|🠊 Error: Invalid shade (${shade}) or color (${color}) 🠈|`);
  }

  return `${classShade}_${classColor}`;
};
export default createClass;
