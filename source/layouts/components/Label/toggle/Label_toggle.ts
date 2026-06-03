//--|🠊 Label_toggle.ts 🠈|--\\
export function createClass(
  shade: '~dark~' | '~medium~' | '~light~',
  color: '(red)' | '(green)' | '(blue)' | '(mono)',
): string {
  const shadeMap: Record<string, string> = {
    //--|🠊 Map of size tags to class abbreviations 🠈|--\\
    '~dark~': 'dar',
    '~medium~': 'med',
    '~light~': 'lig',
  };
  const colorMap: Record<string, string> = {
    //--|🠊 Map of view options to class abbreviations 🠈|--\\
    '(red)': 'red',
    '(green)': 'gre',
    '(blue)': 'blu',
    '(mono)': 'mon',
  };

  const classShade = shadeMap[shade];
  const classColor = colorMap[color];
  return `${classShade}_${classColor}`;
}
