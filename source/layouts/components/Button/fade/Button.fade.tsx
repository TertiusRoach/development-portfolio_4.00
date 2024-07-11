import React from 'react';
import './Button.fade.scss';
import { useMediaQuery } from 'react-responsive';

interface FadeProps {
  text?: string;
  icon: string | SVGElement;
  state: 'downplay' | 'highlight';
  align: 'left' | 'center' | 'right';
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';
}

const ButtonFade: React.FC<FadeProps> = ({ block, state, align, text, icon }) => {
  const renderButton = (
    _block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar',
    icon: string,
    align: 'left' | 'center' | 'right'
  ) => {
    const desktop = useMediaQuery({ query: '(orientation: landscape)' });
    const mobile = useMediaQuery({ query: '(orientation: portrait)' });
    if (icon) {
      return (
        <>
          {mobile && (
            <>
              <h6 className={`${align}`} style={{ zIndex: 2 }}>
                {text}
              </h6>
            </>
          )}
          {useMediaQuery({ query: '(min-width: 1000px)' }) ? (
            <>
              <h3 className={`${align}`} style={{ zIndex: 2 }}>
                {text}
              </h3>
            </>
          ) : (
            <></>
          )}
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

  const className = `${block}-button ${state} ${align}`;

  return <button className={className}>{renderButton(block, `${icon}`, align)}</button>;
};

export default ButtonFade;
