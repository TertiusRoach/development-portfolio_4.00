//--|🠊 Button_default.ts 🠈|--\\
import { stripBrackets } from '../../../../scripts';

export interface StyleProps {
  shade: '~dark~' | '~light~';
  size: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>';
  view: '-top-' | '-bottom-' | '-left-' | '-right-' | '-center-' | '-text-' | '-icon-';
  color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)';

  text?: string;
  image?: string | null;
}
//--|🠋 Functions 🠋|--\\
function createClass(style: StyleProps): string {
  //--|🠊 Class Build for <ButtonDefault> 🠈|--\\
  const classColor = createColor(style.shade, style.color);
  const classLayout = createLayout(style.size, style.view);

  if (style.image == null) {
    return `${classLayout}_${classColor}_alt`;
  } else {
    return `${classLayout}_${classColor}_def`;
  }
}

//--|🠋 Generate Abbreviations 🠋|--\\
const createLayout = (size: StyleProps['size'], view: StyleProps['view']): string => {
  const sizeMap: Record<StyleProps['size'], string> = {
    //--|🠊 Map of size tags to class abbreviations 🠈|--\\
    '<h1>': 'one',
    '<h2>': 'two',
    '<h3>': 'thr',
    '<h4>': 'fou',
    '<h5>': 'fiv',
    '<h6>': 'six',
    '<p>': 'par',
  };

  const viewMap: Record<StyleProps['view'], string> = {
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
const createColor = (shade: StyleProps['shade'], color: StyleProps['color']): string => {
  const shadeMap: Record<StyleProps['shade'], string> = {
    //--|🠊 Map shade options to class abbreviations 🠈|--\\
    '~dark~': 'dar',
    '~light~': 'lig',
  };

  const colorMap: Record<StyleProps['color'], string> = {
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
export default createClass;
