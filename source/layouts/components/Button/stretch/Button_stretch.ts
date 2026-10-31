//--|🠊 Button_stretch.ts 🠈|--\\
//--|🠊 AI Code: Review Please 2026-10-31 11:32 · Copied from <ButtonDefault>, only the names changed 🠈|--\\
import { stripBrackets } from '../../../../scripts';
import type { TheseProps } from './Button.stretch'; //--|🠈 The props are written in the .tsx, this only reads them 🠈|--\\

//--|🠋 Functions 🠋|--\\
function createClass(style: TheseProps['style']): string {
  //--|🠊 Class Build for <ButtonStretch> 🠈|--\\
  const classColor = createColor(style.shade, style.color);
  const classLayout = createLayout(style.size, style.view);
  const classClarity = createClarity(style.clarity); //--|🠈 AI Code: Review Please 2026-10-30 🠈|--\\

  if (style.image == null) {
    return `${classLayout}_${classColor}_${classClarity}_alt`;
  } else {
    return `${classLayout}_${classColor}_${classClarity}_str`;
  }
}

//--|🠋 Generate Abbreviations 🠋|--\\
const createLayout = (size: TheseProps['style']['size'], view: TheseProps['style']['view']): string => {
  const sizeMap: Record<TheseProps['style']['size'], string> = {
    //--|🠊 Map of size tags to class abbreviations 🠈|--\\
    '<h1>': 'one',
    '<h2>': 'two',
    '<h3>': 'thr',
    '<h4>': 'fou',
    '<h5>': 'fiv',
    '<h6>': 'six',
    '<p>': 'par',
  };

  const viewMap: Record<TheseProps['style']['view'], string> = {
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
    throw new Error(`|🠊 Error: Invalid <${stripBrackets(size, '<>')}> or -${stripBrackets(view, '--')}- 🠈|`);
  }

  return `${classSize}_${classView}`;
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
//--|🠊 AI Code: Review Please 2026-10-30 🠈|--\\
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
