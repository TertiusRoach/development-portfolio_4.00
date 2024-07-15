import React, { useState } from 'react';
import './Button.fade.scss';
import { useMediaQuery } from 'react-responsive';

interface FadeProps {
  text?: string;
  index?: number;
  icon: string | SVGElement;

  align: 'left' | 'center' | 'right';
  view: 'downplay' | 'highlight';
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';
}

const ButtonFade: React.FC<FadeProps> = ({ index, block, align, text, icon }) => {
  const [view, setState] = useState<'highlight' | 'downplay'>('highlight'); // Initial state

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

  let className = `${block}-button ${view} ${align}`;
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
};

export default ButtonFade;
