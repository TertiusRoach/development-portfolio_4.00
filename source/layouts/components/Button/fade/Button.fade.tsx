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
  const [view, setView] = useState<'highlight' | 'downplay'>('downplay'); // Initial state
  const className = label !== undefined ? `${block}-${label}` : `${block}-button`;
  const setActive = index === 0 && block !== 'main' ? `${block}-active` : undefined; // Conditionally apply the id only if index is 0 and block is not 'main'

  let mouseEnter = function () {
    setView('highlight');
  };
  let mouseLeave = function () {
    setView('downplay');
  };

  return (
    <button onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={`${className} ${view} ${align}`} id={setActive}>
      {renderButton(icon, text, align, block)}
    </button>
  );
};

export default ButtonFade;

function renderButton(
  icon: string,
  text: string | undefined,
  align: 'left' | 'center' | 'right' | string,
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string
) {
  const desktop = useMediaQuery({ query: '(orientation: landscape)' });
  const mobile = useMediaQuery({ query: '(orientation: portrait)' });
  return (
    <>
      <span className="button-background" style={{ zIndex: 0 }}></span>
      {desktop && (
        <>
          <img className={`${align}`} style={{ zIndex: 1 }} src={icon} alt={text} />
          <h3 className={`${align} ${block}`} style={{ zIndex: 2 }}>
            {text}
          </h3>
        </>
      )}
      {mobile && (
        <>
          <img className={`${align}`} style={{ zIndex: 1 }} src={icon} alt={text} />
          <h6 className={`${align} ${block} display-6`} style={{ zIndex: 2 }}>
            {text}
          </h6>
        </>
      )}
    </>
  );
}
