//--|🠊 Button_routing.ts 🠈|--\\
import { stripBrackets } from '../../../../scripts';

export interface StyleProps {
  shade: '~dark~' | '~light~';
  size: '<h1>' | '<h4>' | '<p>';
  view: 'top-lef' | 'top-cen' | 'top-rig' | 'mid-lef' | 'mid-cen' | 'mid-rig' | 'bot-lef' | 'bot-cen' | 'bot-rig';
  color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)';

  image?: string | null;
}
//--|🠋 Functions 🠋|--\\
function createClass(style: StyleProps): string {
  //--|🠊 Class Build for <ButtonRouting> 🠈|--\\
  const classColor = createColor(style.shade, style.color);
  const classLayout = createLayout(style.size, style.view);

  if (style.image == null) {
    return `${classLayout}_${classColor}_alt`;
  } else if (/\.(png|jpe?g)$/i.test(style.image)) {
    return `${classLayout}_${classColor}_alt`; //--|🠈 .png & .jpg show the picture itself 🠈|--\\
  } else {
    return `${classLayout}_${classColor}_rou`;
  }
}

//--|🠋 Generate Abbreviations 🠋|--\\
const createLayout = (size: StyleProps['size'], view: StyleProps['view']): string => {
  const sizeMap: Record<StyleProps['size'], string> = {
    //--|🠊 Map of size tags to class abbreviations 🠈|--\\
    '<h1>': 'one',
    '<h4>': 'fou',
    '<p>': 'par',
  };

  const viewMap: Record<StyleProps['view'], string> = {
    //--|🠊 Map of view options to class abbreviations 🠈|--\\
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
