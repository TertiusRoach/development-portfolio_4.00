//--|🠊 Section.demonstration.tsx 🠈|--\\

//--|🠋 Functions 🠋|--\\
import returnInfo, { createClass } from './Section_demonstration';

//--|🠋 Components 🠋|--\\

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    shade: '~dark~' | '~light~';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(orange)' | '(pink)' | '(brown)' | '(turquoise)';
  };
  cases: {
    apps: 'track-a-day' | 'log-a-ticket' | 'find-a-link' | Array<string>;
  };
}

const SectionDemonstration: React.FC<TheseProps> = ({ info, style, cases }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  let casesApps: string | Array<string> = 'tralogfin';
  if (typeof cases.apps === 'string') {
    casesApps = cases.apps as 'track-a-day' | 'log-a-ticket' | 'find-a-link';
  } else if (typeof cases.apps === 'object') {
    casesApps = cases.apps[Math.floor(Math.random() * cases.apps.length)] as 'track-a-day' | 'log-a-ticket' | 'find-a-link';
  }

  return (
    <section className={`${info.labelName}-${info.blockName}_demonstration-default ${createClass(style)}`}>
      <div className="wrap-card">
        <span className="branding">
          <img
            alt={cases.apps as 'track-a-day' | 'log-a-ticket' | 'find-a-link'}
            style={{
              maskImage: `url(${returnInfo(casesApps).branding})`,
              WebkitMaskImage: `url(${returnInfo(casesApps).branding})`,
            }}
          ></img>
        </span>
        <h1 className="application">{returnInfo(casesApps).appName}</h1>
        <p className="description">{returnInfo(casesApps).description}</p>
      </div>
    </section>
  );
};
export default SectionDemonstration;
