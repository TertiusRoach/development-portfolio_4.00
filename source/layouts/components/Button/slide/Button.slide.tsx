import React from 'react';
import './Button.slide.scss';

interface SlideProps {
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';
  state: 'downplay' | 'highlight';
  align: 'left' | 'center' | 'right';
  text: string;
  icon?: string;

  // click?: (element: React.MouseEvent<HTMLElement>) => void;
}
const ButtonSlide: React.FC<SlideProps> = ({ block, state, align, text, icon }) => {
  /*
  console.log(`Label: ${label}`);
  console.log(`State: ${state}`);
  console.log(`Align: ${align}`);
  console.log(`Text: ${text}`);
  */
  let renderButton = (
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar',
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
export default ButtonSlide;