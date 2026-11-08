//--|🠊 Section.demonstration.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\

//--|🠋 Functions 🠋|--\\
import returnInfo, { createClass, randomApps } from './Section_demonstration';

//--|🠊 AI Code: Review Please 2026-11-08 · Exported so Section_demonstration.ts reads the types instead of repeating them 🠈|--\\
export interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    shade: '~dark~' | '~light~';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)';
  };
  cases: {
    apps: 'track-a-day' | 'log-a-ticket' | 'find-a-link' | Array<string>;
  };
}

export function SectionDemonstration({ info, style, cases }: TheseProps) {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  let casesApps = randomApps(cases.apps);
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
}
export default SectionDemonstration;
