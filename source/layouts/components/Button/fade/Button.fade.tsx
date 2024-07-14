import React, { useState } from 'react';
import './Button.fade.scss';
import { useMediaQuery } from 'react-responsive';

interface FadeProps {
  text?: string;
  icon: string | SVGElement;
  align: 'left' | 'center' | 'right';
  view: 'downplay' | 'highlight';
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';

  index?: number;
}

const ButtonFade: React.FC<FadeProps> = ({ index, block, align, text, icon }) => {
  const [view, setState] = useState<'highlight' | 'downplay'>('highlight'); // Initial state
  const className = `${block}-button ${view} ${align}`;

  const mouseEnter = () => {
    setState('downplay');
  };

  const mouseLeave = () => {
    setState('highlight');
    /*
    switch (block) {
      case 'header':
        break;
      case 'main':
        break;
      case 'footer':
        break;
      case 'overlay':
        break;
      case 'leftbar':
        break;
      case 'rightbar':
        break;
    }
    */
  };

  const renderButton = (
    icon: string,
    align: 'left' | 'center' | 'right',
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar'
  ) => {
    let desktop = useMediaQuery({ query: '(orientation: landscape)' });
    let mobile = useMediaQuery({ query: '(orientation: portrait)' });
    if (icon) {
      return (
        <>
          {mobile && (
            <>
              <h6 className={`${align} ${block}`} style={{ zIndex: 2 }}>
                {text}
              </h6>
            </>
          )}
          {useMediaQuery({ query: '(min-width: 1000px)' }) ? (
            <>
              <h3 className={`${align} ${block}`} style={{ zIndex: 2 }}>
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

  if (index === 0) {
    return (
      <button id={`${block}-active`} className={className} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        {renderButton(`${icon}`, align, block)}
      </button>
    );
  } else {
    return (
      <button className={className} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        {renderButton(`${icon}`, align, block)}
      </button>
    );
  }

  return;
};

export default ButtonFade;
