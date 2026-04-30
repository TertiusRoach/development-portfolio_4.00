//--|🠊 DefaultButton.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './DefaultButton.scss';
import DivisionCarousel from '../../../../../../components/Division/carousel/Division.carousel';

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

  return (
    <aside className={`${labelName}-${blockName}`}>
      <section className={`${blockName}-foreground`}>
        <div className={`${labelName}-container`}>
          <aside className={`${labelName}-dark`}>
            <DivisionCarousel
              //--|🠊 <div class="profile-header_carousel"/> 🠈|--\\
              style={{
                axis: '[y]',
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
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
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
  return <section></section>;
}
function ViewTwo({ info }: InfoProps) {
  return <section></section>;
}
function ViewThr({ info }: InfoProps) {
  return <section></section>;
}
function ViewFou({ info }: InfoProps) {
  return <section></section>;
}
function ViewFiv({ info }: InfoProps) {
  return <section></section>;
}
function ViewSix({ info }: InfoProps) {
  return <section></section>;
}
function ViewPar({ info }: InfoProps) {
  return <section></section>;
}
