//--|🠊 Label_textarea.ts 🠈|--\\
import { abbrShade, abbrColor, abbrClarity } from '../../components'; //--|🠈 AI Code: Review Please 2026-11-08 🠈|--\\
import { stripBrackets } from '../../../tools/conversions';
import type { TheseProps } from './Label.textarea'; //--|🠈 The props are written in the .tsx, this only reads them 🠈|--\\

//--|🠋 Functions 🠋|--\\
//--|🠊 AI Code: Review Please 2026-10-30 · size_type_view_shade_color_clarity_def, e.g. nul_inp_mc_dar_mon_opa_def 🠈|--\\
function createClass(style: TheseProps['style'], cases: TheseProps['cases']): string {
  //--|🠊 Class Build for <LabelTextarea> 🠈|--\\
  const classColor = createColor(style.shade, style.color);
  const classLayout = createLayout(style.size, cases.type, style.view);
  const classClarity = abbrClarity(style.clarity); //--|🠈 AI Code: Review Please 2026-11-08 🠈|--\\

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
//--|🠊 AI Code: Review Please 2026-11-08 · The maps live in components.ts, shared by every component 🠈|--\\
const createColor = (shade: TheseProps['style']['shade'], color: TheseProps['style']['color']): string => {
  const classShade = abbrShade(shade);
  const classColor = abbrColor(color);

  return `${classShade}_${classColor}`;
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
