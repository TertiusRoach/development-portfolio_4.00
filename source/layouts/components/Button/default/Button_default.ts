//--|🠊 Button_default.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/buttons';

interface StyleProps {
  shade: '~dark~' | '~medium~' | '~light~';
  color: '(red)' | '(green)' | '(blue)' | '(mono)';
  size: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>';
  view: '-top-' | '-bottom-' | '-left-' | '-right-' | '-center-' | '-text-' | '-icon-';
}

export function createLayout(
  size: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
  view: '-top-' | '-bottom-' | '-left-' | '-right-' | '-center-' | '-text-' | '-icon-'
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
export function createColor(
  shade: '~dark~' | '~medium~' | '~light~',
  color: '(red)' | '(green)' | '(blue)' | '(mono)'
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

export function createClass(style: StyleProps) {
  const viewStyle = stripBrackets(style.view, '--').substring(0, 3) as string;
  const shadeStyle = stripBrackets(style.shade, '~~').substring(0, 3) as string;
  const colorStyle = stripBrackets(style.color, '()').substring(0, 3) as string;

  return `${viewStyle}_${shadeStyle}_${colorStyle}`;
}
export function sizeIcon(style: StyleProps) {
  let iconQuery: string | undefined;
  let backQuery: string | undefined;
  const resizeElement = (iconQuery: string, backQuery: string) => {
    let iconTag = document.querySelectorAll(iconQuery) as NodeListOf<HTMLDivElement>;
    let backTag = document.querySelectorAll(backQuery) as NodeListOf<HTMLDivElement>;
    for (let i = 0; i < iconTag.length; i++) {
      let back = backTag[i].firstChild as HTMLDivElement;
      let icon = iconTag[i].firstChild as HTMLImageElement;

      back.style.width = `${icon.offsetHeight}px`;
      icon.style.width = `${icon.offsetHeight}px`;
    }
  };
  if (style.view == '-icon-') {
    switch (style.size) {
      case '<h1>':
        iconQuery = `div[class*="one_${createClass(style)}_icon"]`;
        backQuery = `div[class*="one_${createClass(style)}_back"]`;
        return resizeElement(iconQuery, backQuery);
      case '<h2>':
        iconQuery = `div[class*="two_${createClass(style)}_icon"]`;
        backQuery = `div[class*="two_${createClass(style)}_back"]`;
        return resizeElement(iconQuery, backQuery);
      case '<h3>':
        iconQuery = `div[class*="thr_${createClass(style)}_icon"]`;
        backQuery = `div[class*="thr_${createClass(style)}_back"]`;
        return resizeElement(iconQuery, backQuery);
      case '<h4>':
        iconQuery = `div[class*="fou_${createClass(style)}_icon"]`;
        backQuery = `div[class*="fou_${createClass(style)}_back"]`;
        return resizeElement(iconQuery, backQuery);
      case '<h5>':
        iconQuery = `div[class*="fiv_${createClass(style)}_icon"]`;
        backQuery = `div[class*="fiv_${createClass(style)}_back"]`;
        return resizeElement(iconQuery, backQuery);
      case '<h6>':
        iconQuery = `div[class*="six_${createClass(style)}_icon"]`;
        backQuery = `div[class*="six_${createClass(style)}_back"]`;
        return resizeElement(iconQuery, backQuery);
      case '<p>':
        iconQuery = `div[class*="par_${createClass(style)}_icon"]`;
        backQuery = `div[class*="par_${createClass(style)}_back"]`;
        return resizeElement(iconQuery, backQuery);
      default:
        return undefined;
    }
  }
}
