//--|🠊 Article.bank-time.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './Article.bank-time.scss';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
  };
}

const BankTime: React.FC<TheseProps> = ({ info }) => {
  console.log(info.pageName);
  console.log(info.blockName);

  /*
  const blockName = stripBrackets(info.blockName, '<>') as string;
  const pageName = stripBrackets(info.pageName, '[]') as string;
  */
  // useEffect(() => {}, [pageName, blockName]);

  return (
    <article className="bank-time">
      <dl>
        <dt className="workweek">Workweek</dt>
        <dd className="workweek">--:--</dd>

        <dt className="completed">Completed</dt>
        <dd className="completed">--:--</dd>

        <dt className="remaining">Remaining</dt>
        <dd className="remaining">--:--</dd>

        <dt className="acquired">Acquired</dt>
        <dd className="acquired">--:--</dd>
      </dl>
    </article>
  );
};
/*
//--|🠋 Functions 🠋|--\\
import { createClass } from './Button_default';
import { stripBrackets } from '../../../scripts/buttons';


const ButtonDefault: React.FC<TheseProps> = ({
  info,
  style,
  onClick,

  // onBlur,  
  // onFocus,  
  // onMouseUp,  
  // onTouchEnd,  
  // onMouseDown,  
  // onTouchStart,  
  // onMouseEnter,  
  // onMouseLeave,  
  // onDoubleClick,  
  // onAnimationEnd,  
  // onTransitionEnd,  
  // onKeyUp,  
  // onKeyDown,  
  // onContextMenu,  

}) => {
  //--|🠊 Identifiers 🠈|--\\
  const blockName = stripBrackets(info.blockName, '<>') as string;
  const pageName = stripBrackets(info.pageName, '[]') as string;
  //--|🠊 Render Body 🠈|--\\
  const handleDefault = (info: TheseProps['info'], style: TheseProps['style']) => {
    switch (style.size) {
      case '<h1>':
        return (
          <>
            <div className="text">
              <h1>
                <span>{style.text}</span>
              </h1>
            </div>
            <div className="icon">
              <img
                alt={style.image ? 'icon' : ''}
                style={{
                  ...(style.image
                    ? {
                        maskImage: `url(${style.image})`,
                        WebkitMaskImage: `url(${style.image})`,
                      }
                    : {}),
                }}
              ></img>
            </div>
            <div className="back">
              <canvas className="animation"></canvas>
            </div>
          </>
        );
      case '<h2>':
        return (
          <>
            <div className="text">
              <h2>
                <span>{style.text}</span>
              </h2>
            </div>
            <div className="icon">
              <img
                alt={style.image ? 'icon' : ''}
                style={{
                  ...(style.image
                    ? {
                        maskImage: `url(${style.image})`,
                        WebkitMaskImage: `url(${style.image})`,
                      }
                    : {}),
                }}
              ></img>
            </div>
            <div className="back">
              <canvas className="animation"></canvas>
            </div>
          </>
        );
      case '<h3>':
        return (
          <>
            <div className="text">
              <h3>
                <span>{style.text}</span>
              </h3>
            </div>
            <div className="icon">
              <img
                alt={style.image ? 'icon' : ''}
                style={{
                  ...(style.image
                    ? {
                        maskImage: `url(${style.image})`,
                        WebkitMaskImage: `url(${style.image})`,
                      }
                    : {}),
                }}
              ></img>
            </div>
            <div className="back">
              <canvas className="animation"></canvas>
            </div>
          </>
        );
      case '<h4>':
        return (
          <>
            <div className="text">
              <h4>
                <span>{style.text}</span>
              </h4>
            </div>
            <div className="icon">
              <img
                alt={style.image ? 'icon' : ''}
                style={{
                  ...(style.image
                    ? {
                        maskImage: `url(${style.image})`,
                        WebkitMaskImage: `url(${style.image})`,
                      }
                    : {}),
                }}
              ></img>
            </div>
            <div className="back">
              <canvas className="animation"></canvas>
            </div>
          </>
        );
      case '<h5>':
        return (
          <>
            <div className="text">
              <h5>
                <span>{style.text}</span>
              </h5>
            </div>
            <div className="icon">
              <img
                alt={style.image ? 'icon' : ''}
                style={{
                  ...(style.image
                    ? {
                        maskImage: `url(${style.image})`,
                        WebkitMaskImage: `url(${style.image})`,
                      }
                    : {}),
                }}
              ></img>
            </div>
            <div className="back">
              <canvas className="animation"></canvas>
            </div>
          </>
        );
      case '<h6>':
        return (
          <>
            <div className="text">
              <h6>
                <span>{style.text}</span>
              </h6>
            </div>
            <div className="icon">
              <img
                alt={style.image ? 'icon' : ''}
                style={{
                  ...(style.image
                    ? {
                        maskImage: `url(${style.image})`,
                        WebkitMaskImage: `url(${style.image})`,
                      }
                    : {}),
                }}
              ></img>
            </div>
            <div className="back">
              <canvas className="animation"></canvas>
            </div>
          </>
        );
      case '<p>':
      default:
        return (
          <>
            <div className="text">
              <p>
                <span>{style.text}</span>
              </p>
            </div>
            <div className="icon">
              <img
                alt={style.image ? 'icon' : ''}
                style={{
                  ...(style.image
                    ? {
                        maskImage: `url(${style.image})`,
                        WebkitMaskImage: `url(${style.image})`,
                      }
                    : {}),
                }}
              ></img>
            </div>
            <div className="back">
              <canvas className="animation"></canvas>
            </div>
          </>
        );
    }
  };

  useEffect(() => {}, [pageName, blockName]);

  return (
    <button
      onClick={onClick}
      id={info.labelName || undefined}
      aria-disabled={style.type === '{disabled}'}
      className={`default-button ${createClass(style as TheseProps['style'])}`}
    >
      {handleDefault(info, style)}
    </button>
  );
};

*/
export default BankTime;
