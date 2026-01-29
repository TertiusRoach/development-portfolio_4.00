//--|🠊 Button.default.tsx 🠈|--\\
import React, { useEffect } from 'react';
//--|🠋 Styles 🠋|--\\
import './Button.default.scss';
//--|🠋 Functions 🠋|--\\
import { createLayout, createColor, createClass, sizeIcon } from './Button_default';
import { stripBrackets } from '../../../scripts/buttons';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName?: string;
  };
  style: {
    shade: '~dark~' | '~medium~' | '~light~';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
    type: '{button}' | '{submit}' | '{reset}' | '{disabled}';
    size: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>';
    view: '-top-' | '-bottom-' | '-left-' | '-right-' | '-center-' | '-text-' | '-icon-';

    text?: string;
    image?: string | null | undefined;
    role?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)';
  };

  onBlur?: () => void;
  onFocus?: () => void;
  onClick?: () => void;
  onMouseUp?: () => void;
  onTouchEnd?: () => void;
  onMouseDown?: () => void;
  onTouchStart?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onDoubleClick?: () => void;
  onAnimationEnd?: () => void;
  onTransitionEnd?: () => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onContextMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const ButtonDefault: React.FC<TheseProps> = ({
  info,
  style,
  onClick,
  /*
  onBlur,
  onFocus,
  onMouseUp,
  onTouchEnd,
  onMouseDown,
  onTouchStart,
  onMouseEnter,
  onMouseLeave,
  onDoubleClick,
  onAnimationEnd,
  onTransitionEnd,
  onKeyUp,
  onKeyDown,
  onContextMenu,
  */
}) => {
  const blockName = stripBrackets(info.blockName, '<>') as string;
  const pageName = stripBrackets(info.pageName, '[]') as string;

  let classColor = createColor(style.shade, style.color);
  let classLayout = createLayout(style.size, style.view);
  let imageStatus: 'def' | 'alt';
  if (style.image == null) {
    imageStatus = 'alt';
  } else {
    imageStatus = 'def';
  }
  let classCreated = `${classLayout}_${classColor}_${imageStatus}`;

  const handleDefault = (infoStyle: Array<object>) => {
    switch (style.size) {
      case '<h1>':
        return (
          <>
            <div className="text">
              <h1>{style.text}</h1>
            </div>
            <div className="icon">
              <img
                className={`${classLayout} icon ${classColor}`}
                alt="icon"
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>
            <div className="back"></div>
          </>
        );
      case '<h2>':
        return (
          <>
            <div className="text">
              <h2>{style.text}</h2>
            </div>
            <div className="icon">
              <img
                className={`${classLayout} icon ${classColor}`}
                alt="icon"
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>
            <div className="back"></div>
          </>
        );
      case '<h3>':
        return (
          <>
            <div className="text">
              <h3>{style.text}</h3>
            </div>
            <div className="icon">
              <img
                className={`${classLayout} icon ${classColor}`}
                alt="icon"
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>
            <div className="back"></div>
          </>
        );
      case '<h4>':
        return (
          <>
            <div className="text">
              <h4>{style.text}</h4>
            </div>
            <div className="icon">
              <img
                className={`${classLayout} icon ${classColor}`}
                alt="icon"
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>
            <div className="back"></div>
          </>
        );
      case '<h5>':
        return (
          <>
            <div className="text">
              <h5>{style.text}</h5>
            </div>
            <div className="icon">
              <img
                className={`${classLayout} icon ${classColor}`}
                alt="icon"
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>
            <div className="back"></div>
          </>
        );
      case '<h6>':
        return (
          <>
            <div className="text">
              <h6>{style.text}</h6>
            </div>
            <div className="icon">
              <img
                className={`${classLayout} icon ${classColor}`}
                alt="icon"
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>
            <div className="back"></div>
          </>
        );
      case '<p>':
      default:
        return (
          <>
            <div className="text">
              <p>{style.text}</p>
            </div>
            <div className="icon">
              <img
                className={`${classLayout} icon ${classColor}`}
                alt="icon"
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>
            <div className="back"></div>
          </>
        );
    }
  };

  return (
    <button
      onClick={onClick}
      id={info.labelName || undefined}
      className={`${classLayout}_${classColor}_${imageStatus} default-button`}
    >
      {handleDefault([info, style])}
    </button>
  );
};
export default ButtonDefault;

/*
{
  /* <div className="text">
        <h1>
          <span>{style.text}</span>
        </h1>
      </div>
      <div className="icon">
        <img
          alt="icon"
          style={{
            maskImage: `url(${style.image})`,
            WebkitMaskImage: `url(${style.image})`,
          }}
        ></img>
      </div>
      <div className="back">
        <h1
          style={{
            opacity: '1',
          }}
        >
          <span>{style.text}</span>
        </h1>
      </div>
}

  const handleDefault = (infoStyle: Array<object>) => {
    let imageStatus: 'graphic' | 'missing';
    let classColor: string;
    let classLayout: string;
    if (style.image == null) {
      imageStatus = 'missing';
    } else {
      imageStatus = 'graphic';
    }

    switch (style.size) {
      case '<h1>':
        classColor = createColor(style.shade, style.color);
        classLayout = createLayout(style.size, style.view);
        return (
          <>
            <div className={`${classLayout} text ${classColor} ${imageStatus}`}>
              <h1 className={`${classLayout} text ${classColor}`}>
                <span>{style.text}</span>
              </h1>
            </div>
            <div className={`${classLayout} icon ${classColor} ${imageStatus}`}>
              <img
                className={`${classLayout} icon ${classColor}`}
                alt="icon"
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>
            <div className={`${classLayout} back ${classColor} ${imageStatus}`}>
              <h1
                style={{
                  opacity: '1',
                }}
                className={`${classLayout} back ${classColor}`}
              >
                <span>{style.text}</span>
              </h1>
            </div>
          </>
        );
      case '<h2>':
        classColor = createLayout(style.size, style.view);
        classLayout = createColor(style.shade, style.color);

        return (
          <>
            <div className={`${classLayout} text ${classColor} ${imageStatus}`}>
              <h2 className={`${classLayout} text ${classColor}`}>
                <span>{style.text}</span>
              </h2>
            </div>
            <div className={`${classLayout} icon ${classColor} ${imageStatus}`}>
              <img
                className={`${classLayout} icon ${classColor}`}
                alt="icon"
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>
            <div className={`${classLayout} back ${classColor} ${imageStatus}`}>
              <h2
                style={{
                  opacity: '1',
                }}
                className={`${classLayout} back ${classColor}`}
              >
                <span>{style.text}</span>
              </h2>
            </div>
          </>
        );
      case '<h3>':
        classColor = createLayout(style.size, style.view);
        classLayout = createColor(style.shade, style.color);

        return (
          <>
            <div className={`${classLayout} text ${classColor} ${imageStatus}`}>
              <h3 className={`${classLayout} text ${classColor}`}>
                <span>{style.text}</span>
              </h3>
            </div>
            <div className={`${classLayout} icon ${classColor} ${imageStatus}`}>
              <img
                className={`${classLayout} icon ${classColor}`}
                alt="icon"
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>
            <div className={`${classLayout} back ${classColor} ${imageStatus}`}>
              <h3
                style={{
                  opacity: '1',
                }}
                className={`${classLayout} back ${classColor}`}
              >
                <span>{style.text}</span>
              </h3>
            </div>
          </>
        );
      case '<h4>':
      default:
        classColor = createLayout(style.size, style.view);
        classLayout = createColor(style.shade, style.color);

        return (
          <>
            <div className={`${classLayout} text ${classColor} ${imageStatus}`}>
              <h4 className={`${classLayout} text ${classColor}`}>
                <span>{style.text}</span>
              </h4>
            </div>
            <div className={`${classLayout} icon ${classColor} ${imageStatus}`}>
              <img
                className={`${classLayout} icon ${classColor}`}
                alt="icon"
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>
            <div className={`${classLayout} back ${classColor} ${imageStatus}`}>
              <h4
                style={{
                  opacity: '1',
                }}
                className={`${classLayout} back ${classColor}`}
              >
                <span>{style.text}</span>
              </h4>
            </div>
          </>
        );
      case '<h5>':
        classColor = createLayout(style.size, style.view);
        classLayout = createColor(style.shade, style.color);

        return (
          <>
            <div className={`${classLayout} text ${classColor} ${imageStatus}`}>
              <h5 className={`${classLayout} text ${classColor}`}>
                <span>{style.text}</span>
              </h5>
            </div>
            <div className={`${classLayout} icon ${classColor} ${imageStatus}`}>
              <img
                className={`${classLayout} icon ${classColor}`}
                alt="icon"
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>
            <div className={`${classLayout} back ${classColor} ${imageStatus}`}>
              <h5
                style={{
                  opacity: '1',
                }}
                className={`${classLayout} back ${classColor}`}
              >
                <span>{style.text}</span>
              </h5>
            </div>
          </>
        );
      case '<h6>':
        classColor = createLayout(style.size, style.view);
        classLayout = createColor(style.shade, style.color);

        return (
          <>
            <div className={`${classLayout} text ${classColor} ${imageStatus}`}>
              <h6 className={`${classLayout} text ${classColor}`}>
                <span>{style.text}</span>
              </h6>
            </div>
            <div className={`${classLayout} icon ${classColor} ${imageStatus}`}>
              <img
                className={`${classLayout} icon ${classColor}`}
                alt="icon"
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>
            <div className={`${classLayout} back ${classColor} ${imageStatus}`}>
              <h6
                style={{
                  opacity: '1',
                }}
                className={`${classLayout} back ${classColor}`}
              >
                <span>{style.text}</span>
              </h6>
            </div>
          </>
        );
      case '<p>':
        classColor = createLayout(style.size, style.view);
        classLayout = createColor(style.shade, style.color);
        return (
          <>
            <div className={`${classLayout} text ${classColor} ${imageStatus}`}>
              <p className={`${classLayout} text ${classColor}`}>
                <span>{style.text}</span>
              </p>
            </div>
            <div className={`${classLayout} icon ${classColor} ${imageStatus}`}>
              <img
                className={`${classLayout} icon ${classColor}`}
                alt="icon"
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>
            <div className={`${classLayout} back ${classColor} ${imageStatus}`}>
              <p
                style={{
                  opacity: '1',
                }}
                className={`${classLayout} back ${classColor}`}
              >
                <span>{style.text}</span>
              </p>
            </div>
          </>
        );
    }
  };

  useEffect(() => {
    const typeStyle = stripBrackets(style.type, '{}') as string;
    const sizeStyle = stripBrackets(style.size, '<>') as string;
    const viewStyle = stripBrackets(style.view, '--') as string;
    const shadeStyle = stripBrackets(style.shade, '~~') as string;
    const colorStyle = stripBrackets(style.color, '()') as string;

    setTimeout(() => {
      sizeIcon(style);
    }, 250);

    let reloadHandler = () => {
      setTimeout(() => {
        sizeIcon(style);
      }, 250);
    };
    window.addEventListener('resize', reloadHandler);

    return () => {
      window.removeEventListener('resize', reloadHandler);
    };
  }, [pageName, blockName]);
  */
