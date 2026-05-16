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
        {/* <DivisionCarousel
          //--|🠊 <div class="profile-header_carousel"/> 🠈|--\\
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
        /> */}
      </section>
      <figure className={`${info.blockName}-midground`}></figure>
      <div className={`${info.blockName}-background`}>
        <h1 className="display-1">{`<DefaultButton>`}</h1>
      </div>
      {/* // <section className={`${labelName}-wrapper`}>
  
      // </section> */}
      {/* <aside className={`${info.blockName}-darkside`}>
            
          </aside>
          <aside className={`${info.blockName}-lightside`}></aside> */}
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
      <ViewThr
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'thr',
        }}
      />
      <ViewFou
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'fou',
        }}
      />
      <ViewFiv
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'fiv',
        }}
      />
      <ViewSix
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'six',
        }}
      />
      <ViewPar
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'par',
        }}
      />
    </>
  );
}
function ViewOne({ info }: InfoProps) {
  return (
    <section className={`default-${info.blockName}_${info.labelName}`}>
      <div className={`${info.blockName}-container`}>
        <section className={`${info.blockName}-foreground`}>
          <aside className={`${info.blockName}-darkside`}></aside>
          <aside className={`${info.blockName}-lightside`}></aside>
        </section>
        <figure className={`${info.blockName}-midground`}></figure>
        <div className={`${info.blockName}-background`}>
          <h1 className="display-1">{`<DefaultButton>`}</h1>
        </div>
      </div>
    </section>
  );
}
function ViewTwo({ info }: InfoProps) {
  return <section className={`default-${info.blockName}_${info.labelName}`}></section>;
}
function ViewThr({ info }: InfoProps) {
  return <section className={`default-${info.blockName}_${info.labelName}`}></section>;
}
function ViewFou({ info }: InfoProps) {
  return <section className={`default-${info.blockName}_${info.labelName}`}></section>;
}
function ViewFiv({ info }: InfoProps) {
  return <section className={`default-${info.blockName}_${info.labelName}`}></section>;
}
function ViewSix({ info }: InfoProps) {
  return <section className={`default-${info.blockName}_${info.labelName}`}></section>;
}
function ViewPar({ info }: InfoProps) {
  return <section className={`default-${info.blockName}_${info.labelName}`}></section>;
}
