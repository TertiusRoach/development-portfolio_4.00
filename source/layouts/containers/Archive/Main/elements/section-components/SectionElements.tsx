//--|🠊 SectionElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './SectionElements.scss';

//--|🠋 Components 🠋|--\\
import DivisionCarousel from '../../../../../components/Division/carousel/Division.carousel';

//--|🠋 Elements 🠋|--\\
import ProfilesSection from './profiles-section/ProfilesSection';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}

const SectionElements: React.FC<InfoProps> = ({ info }) => {
  return (
    <section className={`${info.labelName}-${info.blockName}`}>
      <DivisionCarousel
        cases={{
          axis: '[x]',
          call: SectionComponents as React.ComponentType<InfoProps>,
        }}
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: info.labelName,
        }}
      />
    </section>
  );
};

function SectionComponents({ info }: InfoProps) {
  const pageName = info.pageName;
  const blockName = info.blockName;
  const labelName = info.labelName;
  return (
    <>
      <ProfilesSection info={{ labelName: 'profiles' as string, pageName: pageName, blockName: blockName }} />
    </>
  );
}
export default SectionElements;
