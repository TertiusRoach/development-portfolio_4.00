//--|🠊 Label_switching.ts 🠈|--\\
import { stripBrackets } from '../../../../scripts';
import type { TheseProps } from './Label.switching'; //--|🠈 The props are written in the .tsx, this only reads them 🠈|--\\

//--|🠋 Functions 🠋|--\\
//--|🠊 AI Code: Review Please 2026-10-30 · size_type_view_shade_color_clarity_def, e.g. nul_tog_mc_dar_mon_luc_def 🠈|--\\
function createClass(style: TheseProps['style'], cases: TheseProps['cases']): string {
  //--|🠊 Class Build for <LabelSwitching> 🠈|--\\
  const classColor = createColor(style.shade, style.color);
  const classLayout = createLayout(cases.type, style.view);
  const classClarity = createClarity(style.clarity);

  return `${classLayout}_${classColor}_${classClarity}_def`; //--|🠈 _def is a placeholder for now 🠈|--\\
}

//--|🠋 Generate Abbreviations 🠋|--\\
const createLayout = (type: TheseProps['cases']['type'], view: TheseProps['style']['view']): string => {
  const typeMap: Record<TheseProps['cases']['type'], string> = {
    //--|🠊 Map of type options to class abbreviations, the first three letters 🠈|--\\
    '{chip}': 'chi',
    '{check}': 'che',
    '{toggle}': 'tog',
    '{option}': 'opt',
  };

  const viewMap: Record<NonNullable<TheseProps['style']['view']>, string> = {
    //--|🠊 Map of view options to class abbreviations, same as <ButtonRouting> 🠈|--\\
    'top-lef': 'tl',
    'top-cen': 'tc',
    'top-rig': 'tr',
    'mid-lef': 'ml',
    'mid-cen': 'mc',
    'cen-mid': 'cm',
    'mid-rig': 'mr',
    'bot-lef': 'bl',
    'bot-cen': 'bc',
    'bot-rig': 'br',
  };

  const classSize = 'nul'; //--|🠈 <LabelSwitching> has no sizes yet, so it's always nul 🠈|--\\
  const classType = typeMap[type];
  const classView = viewMap[view ?? 'mid-cen']; //--|🠈 Missing: the middle 🠈|--\\

  if (!classType || !classView) {
    //--|🠊 Optional: runtime check for invalid inputs 🠈|--\\
    throw new Error(`|🠊 Error: Invalid {${stripBrackets(type, '{}')}} or ${view} 🠈|`);
  }

  return `${classSize}_${classType}_${classView}`;
};
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
const createClarity = (clarity: TheseProps['style']['clarity']): string => {
  const clarityMap: Record<TheseProps['style']['clarity'], string> = {
    //--|🠊 Map clarity options to class abbreviations 🠈|--\\
    '⟨opaque⟩': 'opa',
    '⟨lucid⟩': 'luc',
  };

  const classClarity = clarityMap[clarity];

  if (!classClarity) {
    //--|🠊 Optional: runtime check for invalid inputs 🠈|--\\
    throw new Error(`|🠊 Error: Invalid ⟨${stripBrackets(clarity, '⟨⟩')}⟩ 🠈|`);
  }

  return classClarity;
};
export default createClass;
