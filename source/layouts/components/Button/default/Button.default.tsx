//--|🠊 Button.default.tsx 🠈|--\\
import React from 'react';

//--|🠋 Functions 🠋|--\\
import createClass from './Button_default';
import { stripBrackets } from '../../../../scripts';

export interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    ariaName?: string; //--|🠈 Read aloud when the button has no visible text 🠈|--\\
    labelName?: string;
  };
  style: {
    shade: '~dark~' | '~light~';
    clarity: '⟨opaque⟩' | '⟨lucid⟩';
    size: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>';
    view: '-top-' | '-bottom-' | '-left-' | '-right-' | '-center-' | '-text-' | '-icon-';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)';
    text?: string;
    image?: string | null;
  };
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDoubleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /*
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;

  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onTouchEnd?: (event: React.TouchEvent<HTMLButtonElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onTouchStart?: (event: React.TouchEvent<HTMLButtonElement>) => void;
  onContextMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onAnimationEnd?: (event: React.AnimationEvent<HTMLButtonElement>) => void;
  onTransitionEnd?: (event: React.TransitionEvent<HTMLButtonElement>) => void;
  */
}

export function ButtonDefault({ info, style, onClick, onMouseEnter, onMouseLeave, onDoubleClick }: TheseProps) {
  const CallSize = (
    { '<h1>': 'h1', '<h2>': 'h2', '<h3>': 'h3', '<h4>': 'h4', '<h5>': 'h5', '<h6>': 'h6', '<p>': 'p' } as Record<
      '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
      'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
    >
  )[style.size];
  const parentFont: Record<'<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>', string> = {
    '<h1>': 'h1',
    '<h2>': 'h2',
    '<h3>': 'h3',
    '<h4>': 'h4',
    '<h5>': 'h5',
    '<h6>': 'h6',
    '<p>': 'p',
  };

  let styleImage: boolean = /\.(png|jpe?g)$/i.test(style.image ?? ''); //--|🠈 .png & .jpg show the picture itself, .svg becomes a tinted silhouette 🠈|--\\
  return (
    <button
      id={info.labelName || undefined}
      className={`default-button ${createClass(style)}`}
      //--|===|--\\
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onDoubleClick={onDoubleClick}
      //--|===|--\\
      aria-label={info.ariaName}
    >
      <div className="text">
        <CallSize className={parentFont[style.size]}>
          <span>{style.text}</span>
        </CallSize>
      </div>
      <div className="icon">
        <img
          alt={style.image ? 'icon' : ''}
          src={styleImage ? (style.image as string) : undefined}
          style={style.image && !styleImage ? { maskImage: `url(${style.image})`, WebkitMaskImage: `url(${style.image})` } : undefined}
        ></img>
      </div>
      <div className="back">
        <canvas className="animation"></canvas>
      </div>
    </button>
  );
}
export default ButtonDefault;
