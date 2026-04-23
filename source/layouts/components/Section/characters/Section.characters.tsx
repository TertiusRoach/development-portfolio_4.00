//--|🠊 Section.characters.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Section.characters.scss';
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Functions 🠋|--\\
import { viewDisplay } from './Section_characters';
import { expandLeftbar, collapseHeader } from '../../../scripts/overtime';
import { previewElement } from '../../Division/carousel/Division_carousel';

import { scrollTable } from '../../Table/clocking/Table_clocking';

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';
import ButtonRouting from '../../Button/routing/Button.routing';
interface TheseProps<Names extends Info> {
  info: Names;
  cases: {
    user: 'randomize-character' | 'jane-lester' | 'hammad-dean';
    // call: React.ComponentType<{ info: Names }>;
    // level: '<fore>' | '<mid>' | '<back>';
    // view: '-top-' | '-bot-' | '-lef-' | '-rig-' | '-cen-' | '-mid-' | '-nul-';
  };
}

interface Info {
  pageName: string;
  blockName: string;
  labelName: string;
}
const SectionCharacters = <T extends Info>({ info, cases }: TheseProps<T>) => {
  const pageName: string = info.pageName as 'overtime';
  const blockName: string = info.blockName as 'header';
  const labelName: string = info.labelName as 'characters';

  useEffect(() => {}, [pageName, blockName]);

  let svgPath: Array<String> = ['', '', ''];

  return (
    <section className={`${labelName}-${blockName} ${cases.user}`}>
      <article>
        <img
          src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/archive-images/trinity-apps/track-a-day/primary-light.svg"
          alt="Track a Day"
        />
        <h4>Track a Day</h4>
        <p>
          Protect your time and use it for rest because that's your most valuable currency.
          <br />
          <br />
          Built to log overtime faster than anyone can complain about it.
          <br />
          <br />
          Because fair treatment leads to happier teams and accountable employers leads to long-term growth.
        </p>
      </article>
    </section>
  );
};
export default SectionCharacters;
