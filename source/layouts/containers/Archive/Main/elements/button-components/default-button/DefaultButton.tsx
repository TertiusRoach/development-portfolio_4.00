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
    <aside className={`${labelName}-${blockName}`}>
      <section className={`${labelName}-foreground`}>
        <div className={`${labelName}-container`}>
          <aside className={`${labelName}-dark`}>
            <DivisionCarousel
              //--|🠊 <div class="profile-header_carousel"/> 🠈|--\\
              style={{
                axis: '[y]',
                scope: '<two>',
              }}
              cases={{
                call: defaultSize,
              }}
              info={{
                labelName: 'view-size',
                blockName: info.blockName as '<main>',
                pageName: info.pageName as '[components]',
              }}
            />
          </aside>
          <aside className={`${labelName}-light`}></aside>
        </div>

        <h1 className="display-1">{`<DefaultButton>`}</h1>
      </section>
      <figure className={`${labelName}-midground`}></figure>
      <div className={`${labelName}-background`}></div>
    </aside>
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
  return <section className={`default-${info.blockName}_${info.labelName}`}></section>;
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
