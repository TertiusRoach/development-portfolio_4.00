import './Button.fade.scss';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface FadeProps {
  icon: string;
  text?: string;
  index?: number;
  view: 'downplay' | 'highlight';
  align: 'left' | 'center' | 'right' | string;
  label?: 'home' | 'skills' | 'contact' | string;
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
}

const ButtonFade: React.FC<FadeProps> = ({ index, block, align, text, icon, label }) => {
  const [view, setView] = useState<'highlight' | 'downplay'>('highlight'); // Initial state
  const className = label !== undefined ? `${block}-${label}` : `${block}-button`;

  // Conditionally apply the id only if index is 0 and block is not 'main'
  const setActive = index === 0 && block !== 'main' ? `${block}-active` : undefined;

  let mouseEnter = function () {
    setView('downplay');
  };
  let mouseLeave = function () {
    setView('highlight');
  };

  let renderButton = function (
    icon: string,
    align: 'left' | 'center' | 'right' | string,
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string
  ) {
    const desktop = useMediaQuery({ query: '(orientation: landscape)' });
    const mobile = useMediaQuery({ query: '(orientation: portrait)' });

    if (icon) {
      return (
        <>
          <img className={`${align}`} style={{ zIndex: 1 }} src={icon} alt={text} />
          <span className="button-background" style={{ zIndex: 0 }}></span>
          <>
            {desktop && (
              <h3 className={`${align} ${block}`} style={{ zIndex: 2 }}>
                {text}
              </h3>
            )}
            {mobile && (
              <h6 className={`${align} ${block}`} style={{ zIndex: 2 }}>
                {text}
              </h6>
            )}
          </>
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

  return (
    <button onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={`${className} ${view} ${align}`} id={setActive}>
      {renderButton(icon, align, block)}
    </button>
  );
};

export default ButtonFade;
