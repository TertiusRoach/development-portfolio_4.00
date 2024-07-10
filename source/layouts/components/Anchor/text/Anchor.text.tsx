import React from 'react';
import './Anchor.text.scss';

interface TextProps {
  text: string;
  icon?: string;
  state: 'downplay' | 'highlight';
  align: 'left' | 'center' | 'right';
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';

  // click?: (element: React.MouseEvent<HTMLElement>) => void;
}
const AnchorText: React.FC<TextProps> = ({ block, state, align, text, icon }) => {
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
  let renderButton = (
    _block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar',
    icon: string,
    align: 'left' | 'center' | 'right'
  ) => {
    if (icon !== 'undefined' || '') {
      return (
        <>
          <h3 className={`${align}`} style={{ zIndex: 2 }}>
            {text}
          </h3>
          <img className={`${align}`} style={{ zIndex: 1 }} src={icon} alt={text} />
          <span className="button-background" style={{ zIndex: 0 }}></span>
        </>
      );
    } else {
      return (
        <>
          <h3>{text}</h3>
        </>
      );
    }
  };
  const className = `${block}-button ${state} ${align}` as string;
  return <button className={className}>{renderButton(block, `${icon}`, align)}</button>;
};
export default AnchorText;

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
