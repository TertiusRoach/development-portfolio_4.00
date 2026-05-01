//--|🠊 DefaultNavigation.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './DefaultNavigation.scss';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../../../scripts';
import NavigationDefault from '../../../../../../components/Navigation/Archive/review/default/Navigation.default';

//--|🠋 Components 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const DefaultNavigation: React.FC<InfoProps> = ({ info }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';

  return (
    <aside className={`${labelName}-${blockName}`}>
      <section className={`${blockName}-foreground`}>
        <NavigationDefault
          //--|🠊 <nav class="default-header"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default DefaultNavigation;
