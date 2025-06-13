//--|🠊 Section.buttons.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Section.buttons.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/overtime';
import { defineButton } from './Section_buttons';
//--|🠉 Functions 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonDefault from '../../Button/archive/default/Button.default';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    pageName: '[buttons]' | string;
    blockName: '<main>' | string;
    roleName?: string;
  };
}
const SectionButtons: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';

  const handleButtons = (select: string) => {
    console.log(select);
  };

  useEffect(() => {
    const header = document.querySelector(`#${pageName}-header`) as HTMLElement;
    const selects = header?.querySelectorAll('select') || ({} as NodeListOf<HTMLSelectElement>);

    function logSelectValues() {
      selects.forEach((select) => {
        handleButtons(select.value);
      });
    }

    selects.forEach((select) => {
      select.addEventListener('change', logSelectValues);
    });
  }, [pageName, blockName]);

  return (
    <section className="buttons-section">
      <div className="h1-size"></div>
      <div className="h2-size"></div>
      <div className="h3-size"></div>
      <div className="h4-size"></div>
      <div className="h5-size"></div>
      <div className="h6-size"></div>
      <div className="p-size"></div>

      {/* <div className="buttons-dark">
        <button>Top</button>
        <button>Bottom</button>

        <button>Left</button>
        <button>Right</button>
        <button>Center</button>

        <button>Text</button>
        <button>Icon</button>
      </div> */}

      {/* <div className="buttons-medium">
        <button>Top</button>
        <button>Bottom</button>

        <button>Left</button>
        <button>Right</button>
        <button>Center</button>

        <button>Text</button>
        <button>Icon</button>
      </div> */}

      {/* <div className="buttons-light">
        <button>Top</button>
        <button>Bottom</button>

        <button>Left</button>
        <button>Right</button>
        <button>Center</button>

        <button>Text</button>
        <button>Icon</button>
      </div> */}
    </section>
  );
};
export default SectionButtons;

/*
    let styleSelect = document.querySelector(`#${pageName}-header #style-select`) as HTMLSelectElement;
    let sizeSelect = document.querySelector(`#${pageName}-header #size-select`) as HTMLSelectElement;
    let colorSelect = document.querySelector(`#${pageName}-header #color-select`) as HTMLSelectElement;

    styleSelect.addEventListener('change', function () {
      console.log(styleSelect.value);
      console.log(sizeSelect.value);
      console.log(colorSelect.value);
    });
    sizeSelect.addEventListener('change', function () {
      console.log(styleSelect.value);
      console.log(sizeSelect.value);
      console.log(colorSelect.value);
    });
    colorSelect.addEventListener('change', function () {
      console.log(styleSelect.value);
      console.log(sizeSelect.value);
      console.log(colorSelect.value);
    });
    */
/*
    console.log(styleSelect);
    console.log(sizeSelect);
    console.log(colorSelect);
    */
// const stateName: 'highlight' | 'downplay' = 'downplay';
