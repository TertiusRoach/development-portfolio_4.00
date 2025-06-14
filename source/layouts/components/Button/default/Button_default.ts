//--|🠊 Button_default.ts 🠈|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/buttons';
//--|🠉 Functions 🠉|--//
interface StyleProps {
  shade: '~dark~' | '~medium~' | '~light~';
  color: '(red)' | '(green)' | '(blue)' | '(mono)';
  view: '-top-' | '-bottom-' | '-left-' | '-right-' | '-center-' | '-text-' | '-icon-';
}

export function createClass(style: StyleProps) {
  const viewStyle = stripBrackets(style.view, '--').substring(0, 3) as string;
  const shadeStyle = stripBrackets(style.shade, '~~').substring(0, 3) as string;
  const colorStyle = stripBrackets(style.color, '()').substring(0, 3) as string;

  return `${viewStyle}_${shadeStyle}_${colorStyle}`;
  /*
  
  // Get the first three letters of the string for viewStyle, shadeStyle and colorStyle.
  // Concatenate them with an _ between each style string.

  console.log(`${style.view}`, viewStyle);
  console.log(`${style.shade}`, shadeStyle);
  console.log(`${style.color}`, colorStyle);
    const typeStyle = stripBrackets(style.type, '{}') as string;
    const sizeStyle = stripBrackets(style.size, '<>') as string;
      const viewAbbr = viewStyle.substring(0, 3);
  const shadeAbbr = shadeStyle.substring(0, 3);
  const colorAbbr = colorStyle.substring(0, 3);

    */
}
/*
export function scaleImage(fontSize: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>') {
  const sizeMap: Record<typeof fontSize, number> = {
    '<p>': 2,
    '<h6>': 3,
    '<h5>': 4,
    '<h4>': 5,
    '<h3>': 6,
    '<h2>': 7,
    '<h1>': 8,
  };

  return sizeMap[fontSize];
}
*/
