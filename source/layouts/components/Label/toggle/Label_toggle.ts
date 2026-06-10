//--|🠊 Label_toggle.ts 🠈|--\\
export function createClass(
  shade: '~dark~' | '~medium~' | '~light~',
  color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(turquoise)',
): string {
  const shadeMap: Record<string, string> = {
    //--|🠊 Map of size tags to class abbreviations 🠈|--\\
    '~dark~': 'dar',
    '~medium~': 'med',
    '~light~': 'lig',
  };
  const colorMap: Record<string, string> = {
    //--|🠊 Map of view options to class abbreviations 🠈|--\\
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
  return `${classShade}_${classColor}`;
}
