// Anchor.fade.tsx
import './Anchor.fade.scss';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getSVG } from '../../../../modules/utilities/getFile';

interface FadeProps {
  href: string;
  text: string;
  state: 'active' | '';
  target: '_blank' | string;
  style: 'downplay' | 'highlight';
  align: 'left' | 'center' | 'right' | string;
  label: 'home' | 'skills' | 'contact' | string;
  icon: { dark: string; medium: string; light: string };
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
}
const AnchorFade: React.FC<FadeProps> = ({ state, target, href, style, block, align, text, label }) => {
  const [viewStyle, setStyle] = useState<'downplay' | 'highlight'>(style);

  let className = `${block}-${label} ${align}`;
  let setActive = state === 'active' ? `${block}-active` : '';
  let icon = getSVG(`${label}`) as { dark: string; medium: string; light: string };

  let mouseEnter: () => void;
  let mouseLeave: () => void;
  switch (style) {
    case 'highlight':
      mouseEnter = () => setStyle('downplay');
      mouseLeave = () => setStyle('highlight');
      break;
    case 'downplay':
      mouseEnter = () => setStyle('highlight');
      mouseLeave = () => setStyle('downplay');
      break;
  }
  console.log(href);
  return (
    <a
      href={href}
      id={setActive}
      target={target}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className={`${className} ${viewStyle}`}
    >
      {renderAnchor(text, style, align, icon, block)}
    </a>
  );
};

function renderAnchor(
  text: string | undefined,
  style: 'downplay' | 'highlight',
  align: 'left' | 'center' | 'right' | string,
  icon: { dark: string; medium: string; light: string },
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string
) {
  let desktopDevice = useMediaQuery({ query: '(orientation: landscape)' });
  let mobileDevice = useMediaQuery({ query: '(orientation: portrait)' });
  return (
    <>
      {desktopDevice && (
        <>
          <h3 className={`${align} ${block}`} style={{ zIndex: 3 }}>
            {text}
          </h3>
          <div className={`${style}`}>
            <img className={`${align} primary-light`} style={{ zIndex: 2 }} src={`${icon.light}`} alt={text} />
            <img className={`${align} primary-medium`} style={{ zIndex: 1 }} src={`${icon.medium}`} alt={text} />
          </div>
        </>
      )}
      {mobileDevice && (
        <>
          <h6 className={`${align} ${block} display-6`} style={{ zIndex: 3 }}>
            {text}
          </h6>
          <div className={`${style}`}>
            <img className={`${align} primary-light`} style={{ zIndex: 2 }} src={`${icon.light}`} alt={text} />
            <img className={`${align} primary-medium`} style={{ zIndex: 1 }} src={`${icon.medium}`} alt={text} />
          </div>
        </>
      )}
      <span className="anchor-background" style={{ zIndex: 0 }}></span>
    </>
  );
}

export default AnchorFade;
