//--|🠊 Label_textarea.ts 🠈|--\\
import { stripBrackets } from '../../../../scripts';
import type { TheseProps } from './Label.textarea'; //--|🠈 The props are written in the .tsx, this only reads them 🠈|--\\

//--|🠋 Functions 🠋|--\\
//--|🠊 AI Code: Review Please 2026-10-30 · size_type_view_shade_color_clarity_def, e.g. nul_inp_mc_dar_mon_opa_def 🠈|--\\
function createClass(style: TheseProps['style'], cases: TheseProps['cases']): string {
  //--|🠊 Class Build for <LabelTextarea> 🠈|--\\
  const classColor = createColor(style.shade, style.color);
  const classLayout = createLayout(style.size, cases.type, style.view);
  const classClarity = createClarity(style.clarity);

  return `${classLayout}_${classColor}_${classClarity}_def`; //--|🠈 _def is a placeholder for now 🠈|--\\
}

//--|🠋 Generate Abbreviations 🠋|--\\
const createLayout = (size: TheseProps['style']['size'], type: TheseProps['cases']['type'], view: TheseProps['style']['view']): string => {
  const sizeMap: Record<'<h1>' | '<p>', string> = {
    //--|🠊 Map of size tags to class abbreviations 🠈|--\\
    '<h1>': 'one',
    '<p>': 'par',
  };

  const typeMap: Record<TheseProps['cases']['type'], string> = {
    //--|🠊 Map of type options to class abbreviations, the first three letters 🠈|--\\
    '{text}': 'tex',
    '{input}': 'inp',
    '{block}': 'blo',
  };

  const viewMap: Record<NonNullable<TheseProps['style']['view']>, string> = {
    //--|🠊 Map of view options to class abbreviations, same as <ButtonRouting> 🠈|--\\
    'top-lef': 'tl',
    'top-cen': 'tc',
    'top-rig': 'tr',
    'mid-lef': 'ml',
    'mid-cen': 'mc',
    'mid-rig': 'mr',
    'bot-lef': 'bl',
    'bot-cen': 'bc',
    'bot-rig': 'br',
  };

  const classSize = size == null ? 'nul' : sizeMap[size]; //--|🠈 Missing or null: no size, nul 🠈|--\\
  const classType = typeMap[type];
  const classView = viewMap[view ?? 'mid-cen']; //--|🠈 Missing: the middle 🠈|--\\

  if (!classSize || !classType || !classView) {
    //--|🠊 Optional: runtime check for invalid inputs 🠈|--\\
    throw new Error(`|🠊 Error: Invalid <${stripBrackets(size ?? '', '<>')}>, {${stripBrackets(type, '{}')}} or ${view} 🠈|`);
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
//--|🠊 AI Code: Review Please 2026-10-30 🠈|--\\
export const previewParent = (thisLabel: HTMLElement | null, thisGroup?: string): { group: string; input: string } => {
  //--|🠊 Reads the "genes" a <Label> inherits: the data- attributes of the <fieldset> or <form> around it 🠈|--\\
  let parentElement = thisLabel?.closest('fieldset, form') as HTMLElement | null;
  if (!parentElement) {
    return { group: thisGroup ?? '', input: '{text}' }; //--|🠈 No parent, nothing to inherit 🠈|--\\
  }
  if (thisGroup && !parentElement.dataset.group) {
    parentElement.dataset.group = thisGroup; //--|🠈 The first {option} names the group, the others read it 🠈|--\\
  }
  return {
    group: parentElement.dataset.group ?? '', //--|🠈 data-group: the name every {option} radio shares 🠈|--\\
    input: parentElement.dataset.input ?? '{text}', //--|🠈 data-input: '{email}', '{password}', '{search}', '{url}' or '{tel}' for an {input} 🠈|--\\
  };
};
export default createClass;
