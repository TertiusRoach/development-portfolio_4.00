//--|🠊 Button.routing.tsx 🠈|--\\
import React from 'react';

//--|🠋 Functions 🠋|--\\
import createClass, { StyleProps } from './Button_routing';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName?: string;
    labelAria?: string; //--|🠈 Read aloud when the button has no visible text 🠈|--\\
  };
  style: StyleProps;
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

export function ButtonRouting({ info, style, onClick, onMouseEnter, onMouseLeave, onDoubleClick }: TheseProps) {
  let styleImage: boolean = /\.(png|jpe?g)$/i.test(style.image ?? ''); //--|🠈 .png & .jpg show the picture itself, .svg becomes a tinted silhouette 🠈|--\\
  return (
    <button
      id={info.labelName || undefined}
      className={`routing-button ${createClass(style)}`}
      //--|===|--\\
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onDoubleClick={onDoubleClick}
      //--|===|--\\
      aria-label={info.labelAria}
    >
      <div className="fore"></div>
      <div className="icon">
        <span style={style.image && !styleImage ? { maskImage: `url(${style.image})`, WebkitMaskImage: `url(${style.image})` } : undefined}>
          <img src={styleImage ? (style.image as string) : undefined} alt="" />
        </span>
      </div>
      <div className="back"></div>
    </button>
  );
}
export default ButtonRouting;
