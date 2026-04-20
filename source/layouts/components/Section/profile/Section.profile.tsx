//--|🠊 Section.profile.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Section.profile.scss';
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Functions 🠋|--\\
import { viewDisplay } from './Section_profile';
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
const SectionProfile = <T extends Info>({ info, cases }: TheseProps<T>) => {
  const pageName: string = info.pageName as 'overtime';
  const blockName: string = info.blockName as 'header';
  const labelName: string = info.labelName as 'profile';

  useEffect(() => {}, [pageName, blockName]);

  let svgPath: Array<String> = ['', '', ''];

  return <section className={`${labelName}-${blockName} ${cases.user}`}></section>;
};
export default SectionProfile;
