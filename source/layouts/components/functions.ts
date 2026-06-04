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
export const eventListener = (selector: string, execution: () => void) => {
  let classObserver: MutationObserver | null = null;
  let domObserver: MutationObserver | null = null;

  const observeElement = (element: HTMLElement): void => {
    classObserver = new MutationObserver(execution);

    classObserver.observe(element, {
      attributes: true,
      attributeFilter: ['class'],
    });
  };

  const findElement = (): HTMLElement | null => document.querySelector(selector);

  const element = findElement();

  if (element) {
    observeElement(element);
  } else {
    domObserver = new MutationObserver(() => {
      const found = findElement();

      if (!found) return;

      observeElement(found);
      domObserver?.disconnect();
    });

    domObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  return () => {
    classObserver?.disconnect();
    domObserver?.disconnect();
  };
};
export default stripBrackets;

//--|🠋 Create Abbreviations 🠋|--\\
export const abbrAxis = (axis: '[x]' | '[y]'): string => {
  const axisMap: Record<string, string> = {
    //--|🠊 Map of types to abbreviations 🠈|--\\
    '[x]': 'hori',
    '[y]': 'vert',
  };

  const classAxis = axisMap[axis];

  return `${classAxis}`;
};
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

export function arabicToRoman(arabicNumeral: number): string {
  switch (arabicNumeral) {
    //--|🠊 Map of Numbers to Roman Numerals 🠈|--\\
    case 0:
      return 'O';

    case 1:
      return 'I';
    case 2:
      return 'II';
    case 3:
      return 'III';
    case 4:
      return 'IV';
    case 5:
      return 'V';
    case 6:
      return 'VI';
    case 7:
      return 'VII';
    case 8:
      return 'VIII';
    case 9:
      return 'IX';
    case 10:
      return 'X';

    case 11:
      return 'XI';
    case 12:
      return 'XII';
    case 13:
      return 'XIII';
    case 14:
      return 'XIV';
    case 15:
      return 'XV';
    case 16:
      return 'XVI';
    case 17:
      return 'XVII';
    case 18:
      return 'XVIII';
    case 19:
      return 'XIX';
    case 20:
      return 'XX';

    case 21:
      return 'XXI';
    case 22:
      return 'XXII';
    case 23:
      return 'XXIII';
    case 24:
      return 'XXIV';
    case 25:
      return 'XXV';
    case 26:
      return 'XXVI';
    case 27:
      return 'XXVII';
    case 28:
      return 'XXVIII';
    case 29:
      return 'XXIX';
    case 30:
      return 'XXX';

    case 31:
      return 'XXXI';
    case 32:
      return 'XXXII';
    case 33:
      return 'XXXIII';
    case 34:
      return 'XXXIV';
    case 35:
      return 'XXXV';
    case 36:
      return 'XXXVI';
    case 37:
      return 'XXXVII';
    case 38:
      return 'XXXVIII';
    case 39:
      return 'XXXIX';
    case 40:
      return 'XL';

    case 41:
      return 'XLI';
    case 42:
      return 'XLII';
    case 43:
      return 'XLIII';
    case 44:
      return 'XLIV';
    case 45:
      return 'XLV';
    case 46:
      return 'XLVI';
    case 47:
      return 'XLVII';
    case 48:
      return 'XLVIII';
    case 49:
      return 'XLIX';
    case 50:
      return 'L';

    case 51:
      return 'LI';
    case 52:
      return 'LII';
    case 53:
      return 'LIII';
    case 54:
      return 'LIV';
    case 55:
      return 'LV';
    case 56:
      return 'LVI';
    case 57:
      return 'LVII';
    case 58:
      return 'LVIII';
    case 59:
      return 'LIX';
    case 60:
      return 'LX';

    case 61:
      return 'LXI';
    case 62:
      return 'LXII';
    case 63:
      return 'LXIII';
    case 64:
      return 'LXIV';
    case 65:
      return 'LXV';
    case 66:
      return 'LXVI';
    case 67:
      return 'LXVII';
    case 68:
      return 'LXVIII';
    case 69:
      return 'LXIX';
    case 70:
      return 'LXX';

    case 71:
      return 'LXXI';
    case 72:
      return 'LXXII';
    case 73:
      return 'LXXIII';
    case 74:
      return 'LXXIV';
    case 75:
      return 'LXXV';
    case 76:
      return 'LXXVI';
    case 77:
      return 'LXXVII';
    case 78:
      return 'LXXVIII';
    case 79:
      return 'LXXIX';
    case 80:
      return 'LXXX';

    case 81:
      return 'LXXXI';
    case 82:
      return 'LXXXII';
    case 83:
      return 'LXXXIII';
    case 84:
      return 'LXXXIV';
    case 85:
      return 'LXXXV';
    case 86:
      return 'LXXXVI';
    case 87:
      return 'LXXXVII';
    case 88:
      return 'LXXXVIII';
    case 89:
      return 'LXXXIX';
    case 90:
      return 'XC';

    case 91:
      return 'XCI';
    case 92:
      return 'XCII';
    case 93:
      return 'XCIII';
    case 94:
      return 'XCIV';
    case 95:
      return 'XCV';
    case 96:
      return 'XCVI';
    case 97:
      return 'XCVII';
    case 98:
      return 'XCVIII';
    case 99:
      return 'XCIX';
    case 100:
      return 'C';

    case 101:
      return 'CI';
    case 102:
      return 'CII';
    case 103:
      return 'CIII';
    case 104:
      return 'CIV';
    case 105:
      return 'CV';
    case 106:
      return 'CVI';
    case 107:
      return 'CVII';
    case 108:
      return 'CVIII';
    case 109:
      return 'CIX';
    case 110:
      return 'CX';

    case 111:
      return 'CXI';
    case 112:
      return 'CXII';
    case 113:
      return 'CXIII';
    case 114:
      return 'CXIV';
    case 115:
      return 'CXV';
    case 116:
      return 'CXVI';
    case 117:
      return 'CXVII';
    case 118:
      return 'CXVIII';
    case 119:
      return 'CXIX';
    case 120:
      return 'CXX';

    case 121:
      return 'CXXI';
    case 122:
      return 'CXXII';
    case 123:
      return 'CXXIII';
    case 124:
      return 'CXXIV';
    case 125:
      return 'CXXV';
    case 126:
      return 'CXXVI';
    case 127:
      return 'CXXVII';
    case 128:
      return 'CXXVIII';
    case 129:
      return 'CXXIX';
    case 130:
      return 'CXXX';

    case 131:
      return 'CXXXI';
    case 132:
      return 'CXXXII';
    case 133:
      return 'CXXXIII';
    case 134:
      return 'CXXXIV';
    case 135:
      return 'CXXXV';
    case 136:
      return 'CXXXVI';
    case 137:
      return 'CXXXVII';
    case 138:
      return 'CXXXVIII';
    case 139:
      return 'CXXXIX';
    case 140:
      return 'CXL';

    case 141:
      return 'CXLI';
    case 142:
      return 'CXLII';
    case 143:
      return 'CXLIII';
    case 144:
      return 'CXLIV';
    case 145:
      return 'CXLV';
    case 146:
      return 'CXLVI';
    case 147:
      return 'CXLVII';
    case 148:
      return 'CXLVIII';
    case 149:
      return 'CXLIX';
    case 150:
      return 'CL';

    case 151:
      return 'CLI';
    case 152:
      return 'CLII';
    case 153:
      return 'CLIII';
    case 154:
      return 'CLIV';
    case 155:
      return 'CLV';
    case 156:
      return 'CLVI';

    //--|🠊 Map of Arabic Numerals to String 🠈|--\\
    default:
      return 'O';
  }
}
export function romanToArabic(romanNumeral: string): number {
  switch (romanNumeral) {
    //--|🠊 Map of Roman Strings to Number 🠈|--\\
    case 'O':
      return 0;

    case 'I':
      return 1;
    case 'II':
      return 2;
    case 'III':
      return 3;
    case 'IV':
      return 4;
    case 'V':
      return 5;
    case 'VI':
      return 6;
    case 'VII':
      return 7;
    case 'VIII':
      return 8;
    case 'IX':
      return 9;
    case 'X':
      return 10;

    case 'XI':
      return 11;
    case 'XII':
      return 12;
    case 'XIII':
      return 13;
    case 'XIV':
      return 14;
    case 'XV':
      return 15;
    case 'XVI':
      return 16;
    case 'XVII':
      return 17;
    case 'XVIII':
      return 18;
    case 'XIX':
      return 19;
    case 'XX':
      return 20;

    case 'XXI':
      return 21;
    case 'XXII':
      return 22;
    case 'XXIII':
      return 23;
    case 'XXIV':
      return 24;
    case 'XXV':
      return 25;
    case 'XXVI':
      return 26;
    case 'XXVII':
      return 27;
    case 'XXVIII':
      return 28;
    case 'XXIX':
      return 29;
    case 'XXX':
      return 30;

    case 'XXXI':
      return 31;
    case 'XXXII':
      return 32;
    case 'XXXIII':
      return 33;
    case 'XXXIV':
      return 34;
    case 'XXXV':
      return 35;
    case 'XXXVI':
      return 36;
    case 'XXXVII':
      return 37;
    case 'XXXVIII':
      return 38;
    case 'XXXIX':
      return 39;
    case 'XL':
      return 40;

    case 'XLI':
      return 41;
    case 'XLII':
      return 42;
    case 'XLIII':
      return 43;
    case 'XLIV':
      return 44;
    case 'XLV':
      return 45;
    case 'XLVI':
      return 46;
    case 'XLVII':
      return 47;
    case 'XLVIII':
      return 48;
    case 'XLIX':
      return 49;
    case 'L':
      return 50;

    case 'LI':
      return 51;
    case 'LII':
      return 52;
    case 'LIII':
      return 53;
    case 'LIV':
      return 54;
    case 'LV':
      return 55;
    case 'LVI':
      return 56;
    case 'LVII':
      return 57;
    case 'LVIII':
      return 58;
    case 'LIX':
      return 59;
    case 'LX':
      return 60;

    case 'LXI':
      return 61;
    case 'LXII':
      return 62;
    case 'LXIII':
      return 63;
    case 'LXIV':
      return 64;
    case 'LXV':
      return 65;
    case 'LXVI':
      return 66;
    case 'LXVII':
      return 67;
    case 'LXVIII':
      return 68;
    case 'LXIX':
      return 69;
    case 'LXX':
      return 70;

    case 'LXXI':
      return 71;
    case 'LXXII':
      return 72;
    case 'LXXIII':
      return 73;
    case 'LXXIV':
      return 74;
    case 'LXXV':
      return 75;
    case 'LXXVI':
      return 76;
    case 'LXXVII':
      return 77;
    case 'LXXVIII':
      return 78;
    case 'LXXIX':
      return 79;
    case 'LXXX':
      return 80;

    case 'LXXXI':
      return 81;
    case 'LXXXII':
      return 82;
    case 'LXXXIII':
      return 83;
    case 'LXXXIV':
      return 84;
    case 'LXXXV':
      return 85;
    case 'LXXXVI':
      return 86;
    case 'LXXXVII':
      return 87;
    case 'LXXXVIII':
      return 88;
    case 'LXXXIX':
      return 89;
    case 'XC':
      return 90;

    case 'XCI':
      return 91;
    case 'XCII':
      return 92;
    case 'XCIII':
      return 93;
    case 'XCIV':
      return 94;
    case 'XCV':
      return 95;
    case 'XCVI':
      return 96;
    case 'XCVII':
      return 97;
    case 'XCVIII':
      return 98;
    case 'XCIX':
      return 99;
    case 'C':
      return 100;

    case 'CI':
      return 101;
    case 'CII':
      return 102;
    case 'CIII':
      return 103;
    case 'CIV':
      return 104;
    case 'CV':
      return 105;
    case 'CVI':
      return 106;
    case 'CVII':
      return 107;
    case 'CVIII':
      return 108;
    case 'CIX':
      return 109;
    case 'CX':
      return 110;

    case 'CXI':
      return 111;
    case 'CXII':
      return 112;
    case 'CXIII':
      return 113;
    case 'CXIV':
      return 114;
    case 'CXV':
      return 115;
    case 'CXVI':
      return 116;
    case 'CXVII':
      return 117;
    case 'CXVIII':
      return 118;
    case 'CXIX':
      return 119;
    case 'CXX':
      return 120;

    case 'CXXI':
      return 121;
    case 'CXXII':
      return 122;
    case 'CXXIII':
      return 123;
    case 'CXXIV':
      return 124;
    case 'CXXV':
      return 125;
    case 'CXXVI':
      return 126;
    case 'CXXVII':
      return 127;
    case 'CXXVIII':
      return 128;
    case 'CXXIX':
      return 129;
    case 'CXXX':
      return 130;

    case 'CXXXI':
      return 131;
    case 'CXXXII':
      return 132;
    case 'CXXXIII':
      return 133;
    case 'CXXXIV':
      return 134;
    case 'CXXXV':
      return 135;
    case 'CXXXVI':
      return 136;
    case 'CXXXVII':
      return 137;
    case 'CXXXVIII':
      return 138;
    case 'CXXXIX':
      return 139;
    case 'CXL':
      return 140;

    case 'CXLI':
      return 141;
    case 'CXLII':
      return 142;
    case 'CXLIII':
      return 143;
    case 'CXLIV':
      return 144;
    case 'CXLV':
      return 145;
    case 'CXLVI':
      return 146;
    case 'CXLVII':
      return 147;
    case 'CXLVIII':
      return 148;
    case 'CXLIX':
      return 149;
    case 'CL':
      return 150;

    case 'CLI':
      return 151;
    case 'CLII':
      return 152;
    case 'CLIII':
      return 153;
    case 'CLIV':
      return 154;
    case 'CLV':
      return 155;
    case 'CLVI':
      return 156;

    // Fallback Number
    default:
      return 0;
  }
}
