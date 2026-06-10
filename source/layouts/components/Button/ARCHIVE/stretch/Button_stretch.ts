//--|🠊 Button_stretch.ts 🠈|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../../scripts/buttons';
//--|🠉 Functions 🠉|--//

interface StyleProps {
  shade: '~dark~' | '~medium~' | '~light~';
  color: '(red)' | '(green)' | '(blue)' | '(mono)';
  size: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>';
  view: '-top-' | '-bottom-' | '-left-' | '-right-' | '-center-' | '-text-' | '-icon-';
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
  const resizeElement = (iconQuery: string) => {
    let iconTag = document.querySelectorAll(iconQuery) as NodeListOf<HTMLDivElement>;
    //--|🠊 let backTag = document.querySelectorAll(backQuery) as NodeListOf<HTMLDivElement>; 🠈|--//
    for (let i = 0; i < iconTag.length; i++) {
      //--|🠊 let back = backTag[i].firstChild as HTMLDivElement; 🠈|--//
      let icon = iconTag[i].firstChild as HTMLImageElement;

      icon.style.width = `${icon.offsetHeight}px`;
      //--|🠊 back.style.width = `${icon.offsetHeight}px`; 🠈|--//
    }
  };
  if (style.view == '-icon-') {
    switch (style.size) {
      case '<h1>':
        iconQuery = `div[class*="one_${createClass(style)}_icon"]`;
        backQuery = `div[class*="one_${createClass(style)}_back"]`;
        return resizeElement(iconQuery);
      case '<h2>':
        iconQuery = `div[class*="two_${createClass(style)}_icon"]`;
        backQuery = `div[class*="two_${createClass(style)}_back"]`;
        return resizeElement(iconQuery);
      case '<h3>':
        iconQuery = `div[class*="thr_${createClass(style)}_icon"]`;
        backQuery = `div[class*="thr_${createClass(style)}_back"]`;
        return resizeElement(iconQuery);
      case '<h4>':
        iconQuery = `div[class*="fou_${createClass(style)}_icon"]`;
        backQuery = `div[class*="fou_${createClass(style)}_back"]`;
        return resizeElement(iconQuery);
      case '<h5>':
        iconQuery = `div[class*="fiv_${createClass(style)}_icon"]`;
        backQuery = `div[class*="fiv_${createClass(style)}_back"]`;
        return resizeElement(iconQuery);
      case '<h6>':
        iconQuery = `div[class*="six_${createClass(style)}_icon"]`;
        backQuery = `div[class*="six_${createClass(style)}_back"]`;
        return resizeElement(iconQuery);
      case '<p>':
        iconQuery = `div[class*="par_${createClass(style)}_icon"]`;
        backQuery = `div[class*="par_${createClass(style)}_back"]`;
        return resizeElement(iconQuery);
      default:
        return undefined;
    }
  }
}
