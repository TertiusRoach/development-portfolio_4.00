import React from 'react';
import './Button.fade.scss';
interface FadeProps {
  label: string;
  state: 'downplay' | 'highlight';
  align: 'left' | 'center' | 'right';
  text: string;
  icon?: string;

  // click?: (element: React.MouseEvent<HTMLElement>) => void;
}
const ButtonFade: React.FC<FadeProps> = ({ label, state, align, text, icon }) => {
  /*
  console.log(`Label: ${label}`);
  console.log(`State: ${state}`);
  console.log(`Align: ${align}`);
  console.log(`Text: ${text}`);
  */
  console.log(`Icon: ${!icon}`);
  let renderButton = () => {
    switch (!icon) {
      case false:
        return (
          <>
            <h3>{text}</h3>
            <img src={icon} alt={text} />
          </>
        );
      case true:
        return (
          <>
            <h3>{text}</h3>
          </>
        );
    }
  };
  return <button className={`${label} ${state} ${align}`}>{renderButton()}</button>;
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
