import React from 'react';
import './Anchor.icon.scss';

interface IconProps {
  icon: string;
  state: 'downplay' | 'highlight';
  align: 'left' | 'center' | 'right';
  references: {
    name: string;
    href: string;
    icon: string;
    target: string;
  };
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';

  text?: string;

  // click?: (element: React.MouseEvent<HTMLElement>) => void;
}
const AnchorIcon: React.FC<IconProps> = ({ block, state, align, icon, references }) => {
  const className = `${block}-button ${state} ${align}` as string;
  return (
    <a className={className} href={references.href} target={references.target}>
      {renderAnchor(block, `${icon}`, align, references)}
    </a>
  );
};
export default AnchorIcon;

function renderAnchor(
  _block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar',
  icon: string,
  align: 'left' | 'center' | 'right',
  references: {
    name: string;
    href: string;
    icon: string;
    target: string;
  }
) {
  if (icon !== 'undefined' || '') {
    return (
      <>
        <img className={`${align}`} style={{ zIndex: 1 }} src={references.icon} alt={references.name} />
        <span className="button-background" style={{ zIndex: 0 }}></span>
      </>
    );
  } else {
    return <>{/* <h3>{text}</h3> */}</>;
  }
}

/*
  const blockElement = document.getElementsByTagName('main')[0];
  console.log(blockElement);
  */

/*
  console.log(`Label: ${label}`);
  console.log(`State: ${state}`);
  console.log(`Align: ${align}`);
  console.log(`Text: ${text}`);
  */
// console.log(`Icon: ${!icon}`);
// let renderAnchor = (
//   _block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar',
//   icon: string,
//   align: 'left' | 'center' | 'right',
//   text: string
// ) => {};
/*
      // switch (block) {
      //   case 'header':
      //     return (
      //       <>
      //         <h3 className={`${align}`} style={{ zIndex: 2 }}>
      //           {text}
      //         </h3>
      //         <img className={`${align}`} style={{ zIndex: 1 }} src={icon} alt={text} />
      //         <span className="button-background" style={{ zIndex: 0 }}></span>
      //       </>
      //     );
      //     break;
      //   case 'main':
      //     break;
      //   case 'footer':
      //     break;
      //   case 'overlay':
      //     break;
      //   case 'leftbar':
      //     break;
      //   case 'rightbar':
      //     break;
      // }
*/
