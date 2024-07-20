import './Button.frame.scss';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface FrameProps {
  text?: string;
  index?: number;
  icon: string | undefined;
  view: 'downplay' | 'highlight';
  align: 'left' | 'center' | 'right' | string;
  label?: 'home' | 'skills' | 'contact' | string;
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
}

const ButtonFrame: React.FC<FrameProps> = ({ index, block, align, text, icon, label }) => {
  const [view, setView] = useState<'highlight' | 'downplay'>('highlight');

  const mouseEnter = () => {
    setView('downplay');
  };

  const mouseLeave = () => {
    setView('highlight');
  };

  const renderButtonContent = (icon: string, align: 'left' | 'center' | 'right', block: string) => {
    const desktop = useMediaQuery({ query: '(orientation: landscape)' });
    const mobile = useMediaQuery({ query: '(orientation: portrait)' });

    return (
      <>
        {icon && <img className={`${align}`} style={{ zIndex: 1 }} src={icon} alt={text} />}
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
  };

  const buttonClass = label ? `${block}-${label}` : `${block}-button`;
  const buttonId = index === 0 ? `${block}-active` : undefined;

  return (
    <button id={buttonId} className={`${buttonClass} ${view} ${align}`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      {renderButtonContent(icon as string, align as 'left' | 'center' | 'right', block)}
    </button>
  );
};

export default ButtonFrame;
