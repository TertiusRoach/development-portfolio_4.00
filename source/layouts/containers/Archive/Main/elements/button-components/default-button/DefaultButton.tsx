//--|🠊 DefaultButton.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './DefaultButton.scss';
import DivisionCarousel from '../../../../../../components/Division/Archive/carousel/Division.carousel';

//--|🠋 Functions 🠋|--\\

//--|🠋 Components 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const DefaultButton: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'component';

  return (
    <>
      <section className={`${info.blockName}-foreground`}>
        <DivisionCarousel
          //--|🠊 <div class="darkside-main_carousel-default"/> 🠈|--\\
          style={{
            axis: '[y]',
            scope: '<two>',
          }}
          cases={{
            call: defaultSize,
          }}
          info={{
            labelName: 'darkside',
            blockName: info.blockName as '<main>',
            pageName: info.pageName as '[components]',
          }}
        />
        <DivisionCarousel
          //--|🠊 <div class="lightside-main_carousel-default"/> 🠈|--\\
          style={{
            axis: '[y]',
            scope: '<two>',
          }}
          cases={{
            call: defaultSize,
          }}
          info={{
            labelName: 'lightside',
            blockName: info.blockName as '<main>',
            pageName: info.pageName as '[components]',
          }}
        />
      </section>
      <figure className={`${info.blockName}-midground`}></figure>
      <div className={`${info.blockName}-background`}>
        <h1 className="display-1">{`<DefaultButton>`}</h1>
      </div>
    </>
  );
};
export default DefaultButton;

function defaultSize({ info }: InfoProps) {
  return (
    <>
      <ViewOne
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'one',
        }}
      />
      <ViewTwo
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'two',
        }}
      />
    </>
  );
}
function ViewOne({ info }: InfoProps) {
  return (
    <section className={`default-${info.blockName}_${info.labelName}`}>
      <h1 className="display-1">ViewOne</h1>
    </section>
  );
}
function ViewTwo({ info }: InfoProps) {
  return (
    <section className={`default-${info.blockName}_${info.labelName}`}>
      <h1 className="display-1">ViewTwo</h1>
    </section>
  );
}
