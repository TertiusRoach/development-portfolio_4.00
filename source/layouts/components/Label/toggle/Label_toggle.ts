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
  return `tog_${classShade}_${classColor}`;
}
export function createColor(
  shade: '~dark~' | '~medium~' | '~light~',
  color: '(red)' | '(green)' | '(blue)' | '(mono)',
): string {
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
