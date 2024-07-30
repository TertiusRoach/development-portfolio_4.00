import React from 'react';
import './Anchor.text.scss';

interface TextProps {
  text: string;
  state: 'downplay' | 'highlight';
  align: 'left' | 'center' | 'right';
  references: {
    name: string;
    href: string;
    icon: string;
    target: string;
  };
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';

  // click?: (element: React.MouseEvent<HTMLElement>) => void;
}
const AnchorText: React.FC<TextProps> = ({ block, state, align, references, text }) => {
  const className = `${block}-button ${state} ${align}` as string;
  return (
    <a className={className} href={references.href} target={references.target}>
      {renderAnchor(block, `${text}`, align, references)}
    </a>
  );
};
export default AnchorText;

function renderAnchor(
  _block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar',
  icon: string,
  align: 'left' | 'center' | 'right',
  references: {
    name: string;
    href: string;
    icon: string;
    target: string;
  }
) {
  if (icon !== 'undefined' || '') {
    return (
      <>
        <img className={`${align}`} style={{ zIndex: 1 }} src={references.icon} alt={references.name} />
        <span className="button-background" style={{ zIndex: 0 }}></span>
      </>
    );
  } else {
    return <>{/* <h3>{text}</h3> */}</>;
  }
}
