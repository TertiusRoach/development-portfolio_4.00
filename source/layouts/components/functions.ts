//--|🠊 source/layouts/components/functions.ts 🠈|--\\
function stripBrackets(thisText: string, wrapType: '[]' | '<>' | '()' | '{}' | '--' | '~~'): string {
  switch (wrapType) {
    case '[]':
      //--|🠊 pageName 🠈|--\\
      return thisText.replace(/[\[\]]/g, '');
    case '<>':
      //--|🠊 blockName & style.size 🠈|--\\
      return thisText.replace(/[<>]/g, '');
    case '()':
      //--|🠊 roleName, style.color & style.role 🠈|--\\
      return thisText.replace(/[()]/g, '');
    case '~~':
      //--|🠊 style.shade 🠈|--\\
      return thisText.replace(/[~~]/g, '');
    case '{}':
      //--|🠊 style.type 🠈|--\\
      return thisText.replace(/[{}]/g, '');
    case '--':
      //--|🠊 style.view 🠈|--\\
      return thisText.replace(/[--]/g, '');
  }
}
export default stripBrackets;

//--|🠋 Create Abbreviations 🠋|--\\
export const abbrType = (type: '{select}' | '{scroll}'): string => {
  const typeMap: Record<string, string> = {
    //--|🠊 Map of types to abbreviations 🠈|--\\
    '{select}': 'sel',
    '{scroll}': 'scr',
  };

  const classType = typeMap[type];

  return `${classType}`;
};
export const abbrView = (view: '-top-' | '-rig-' | '-bot-' | '-lef-'): string => {
  const classView = stripBrackets(view, '--');

  return `${classView}`;
};
export const abbrShade = (shade: '~dark~' | '~medium~' | '~light~'): string => {
  const shadeMap: Record<string, string> = {
    //--|🠊 Map of types to abbreviations 🠈|--\\
    '~dark~': 'dar',
    '~medium~': 'med',
    '~light~': 'lig',
  };

  const classShade = shadeMap[shade];

  return `${classShade}`;
};
export const abbrColor = (color: '(red)' | '(green)' | '(blue)' | '(mono)'): string => {
  const colorMap: Record<string, string> = {
    //--|🠊 Map of types to abbreviations 🠈|--\\
    '(red)': 'red',
    '(green)': 'gre',
    '(blue)': 'blu',
    '(mono)': 'mon',
  };

  const classColor = colorMap[color];

  return `${classColor}`;
};
export const abbrAxis = (axis: '[x]' | '[y]'): string => {
  const axisMap: Record<string, string> = {
    //--|🠊 Map of types to abbreviations 🠈|--\\
    '[x]': 'hori',
    '[y]': 'vert',
  };

  const classAxis = axisMap[axis];

  return `${classAxis}`;
};
export function romanNumerals(): Array<string> {
  return [
    'O', // 0 (usually left empty)
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
    'XI',
    'XII',
    'XIII',
    'XIV',
    'XV',
    'XVI',
    'XVII',
    'XVIII',
    'XIX',
    'XX',
    'XXI',
    'XXII',
    'XXIII',
    'XXIV',
    'XXV',
    'XXVI',
    'XXVII',
    'XXVIII',
    'XXIX',
    'XXX',
    'XXXI',
    'XXXII',
    'XXXIII',
    'XXXIV',
    'XXXV',
    'XXXVI',
    'XXXVII',
    'XXXVIII',
    'XXXIX',
    'XL',
    'XLI',
    'XLII',
    'XLIII',
    'XLIV',
    'XLV',
    'XLVI',
    'XLVII',
    'XLVIII',
    'XLIX',
    'L',
    'LI',
    'LII',
    'LIII',
    'LIV',
    'LV',
    'LVI',
    'LVII',
    'LVIII',
    'LIX',
    'LX',
    'LXI',
    'LXII',
    'LXIII',
    'LXIV',
    'LXV',
    'LXVI',
    'LXVII',
    'LXVIII',
    'LXIX',
    'LXX',
    'LXXI',
    'LXXII',
    'LXXIII',
    'LXXIV',
    'LXXV',
    'LXXVI',
    'LXXVII',
    'LXXVIII',
    'LXXIX',
    'LXXX',
    'LXXXI',
    'LXXXII',
    'LXXXIII',
    'LXXXIV',
    'LXXXV',
    'LXXXVI',
    'LXXXVII',
    'LXXXVIII',
    'LXXXIX',
    'XC',
    'XCI',
    'XCII',
    'XCIII',
    'XCIV',
    'XCV',
    'XCVI',
    'XCVII',
    'XCVIII',
    'XCIX',
    'C',
    'CI',
    'CII',
    'CIII',
    'CIV',
    'CV',
    'CVI',
    'CVII',
    'CVIII',
    'CIX',
    'CX',
    'CXI',
    'CXII',
    'CXIII',
    'CXIV',
    'CXV',
    'CXVI',
    'CXVII',
    'CXVIII',
    'CXIX',
    'CXX',
    'CXXI',
    'CXXII',
    'CXXIII',
    'CXXIV',
    'CXXV',
    'CXXVI',
    'CXXVII',
    'CXXVIII',
    'CXXIX',
    'CXXX',
    'CXXXI',
    'CXXXII',
    'CXXXIII',
    'CXXXIV',
    'CXXXV',
    'CXXXVI',
    'CXXXVII',
    'CXXXVIII',
    'CXXXIX',
    'CXL',
    'CXLI',
    'CXLII',
    'CXLIII',
    'CXLIV',
    'CXLV',
    'CXLVI',
    'CXLVII',
    'CXLVIII',
    'CXLIX',
    'CL',
    'CLI',
    'CLII',
    'CLIII',
    'CLIV',
    'CLV',
    'CLVI',
  ];
}
