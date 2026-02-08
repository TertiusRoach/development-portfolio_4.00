//--|🠊 Button_routing.ts 🠈|--\\
import { stripBrackets } from '../../../scripts/buttons';

interface StyleProps {
  image: string;
  size: '<h1>' | '<p>';
  shade: '~dark~' | '~medium~' | '~light~';
  color: '(red)' | '(green)' | '(blue)' | '(mono)';
  view: 'top-lef' | 'top-cen' | 'top-rig' | 'mid-lef' | 'mid-cen' | 'mid-rig' | 'bot-lef' | 'bot-cen' | 'bot-rig';

  type: '{button}' | '{submit}' | '{reset}' | '{disabled}';
  role?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)';
}
//--|🠋 Functions 🠋|--\\
export function createVars(image: string): String {
  switch (image.split('.').pop()) {
    case 'svg':
      return 'rou';
    case 'png':
      return 'por';
    default:
      return 'alt';
  }
}
export function createClass(style: StyleProps): String {
  //--|🠊 Class Build for <RoutingButton> 🠈|--\\
  let classVars = createVars(style.image);
  let classColor = createColor(style.shade, style.color);
  let classLayout = createLayout(style.size, style.view);

  return `${classLayout}_${classColor}_${classVars}`;
}
export function createLayout(
  size: '<h1>' | '<p>',
  view: 'top-lef' | 'top-cen' | 'top-rig' | 'mid-lef' | 'mid-cen' | 'mid-rig' | 'bot-lef' | 'bot-cen' | 'bot-rig',
): string {
  const sizeMap: Record<string, string> = {
    //--|🠊 Map of size tags to class abbreviations 🠈|--\\
    '<h1>': 'one',
    '<p>': 'par',
  };

  const viewMap: Record<string, string> = {
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
    throw new Error(`Invalid size (${size}) or view (${view}) provided to createLayout()`);
  }

  return `${classSize}_${classView}`;
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
export default createClass;
