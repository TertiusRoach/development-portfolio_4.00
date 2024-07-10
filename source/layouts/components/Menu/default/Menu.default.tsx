import React from 'react';
import './Button.fade.scss';

interface FadeProps {
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';
  state: 'downplay' | 'highlight';
  align: 'left' | 'center' | 'right';
  text: string;
  icon?: string;

  // click?: (element: React.MouseEvent<HTMLElement>) => void;
}
const ButtonFade: React.FC<FadeProps> = ({ block, state, align, text, icon }) => {
  /*
  console.log(`Label: ${label}`);
  console.log(`State: ${state}`);
  console.log(`Align: ${align}`);
  console.log(`Text: ${text}`);
  */
  // console.log(`Icon: ${!icon}`);
  let renderButton = (
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar',
    icon: string,
    align: 'left' | 'center' | 'right'
  ) => {
    if (icon !== 'undefined' || '') {
      return (
        <>
          <h3 className={`${align}`} style={{ zIndex: 2 }}>
            {text}
          </h3>
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
  const className = `${block}-button ${state} ${align}` as string;
  return <button className={className}>{renderButton(block, `${icon}`, align)}</button>;
};
export default ButtonFade;

/*

*/
/*
const ButtonFade: React.FC<FadeProps> = ({ className, icon, text, state, click: wrapperFunction }) => {
  let selectors: string = `${className} fade${state ? ` ${state}` : ''}`;
  //--|🠊 ? - Is a Ternary Operator and it checks if state has a value. 🠈|--//
  //--|🠊 : - Is an Else Operator and adds nothing if the state has a falsy value. 🠈|--//
  return (
    <button className={selectors}>
      <img onClick={wrapperFunction} src={icon} alt={text.toLowerCase()} />
      <h6 onClick={wrapperFunction}>{text}</h6>
    </button>
  );
};

*/
