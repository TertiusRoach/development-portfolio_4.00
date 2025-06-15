//--|🠊 Button_default.ts 🠈|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/buttons';
//--|🠉 Functions 🠉|--//
interface InfoProps {
  pageName: string;
  blockName: string;
  className: string;
}
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
}

const scaleImage = (pageName: string, blockName: string, className: string) => {
  // Debug logs (keep or remove as needed)
  console.log(pageName);
  console.log(blockName);
  // console.log(className);

  // return <img alt={className} src={imageLink} />;
};
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
