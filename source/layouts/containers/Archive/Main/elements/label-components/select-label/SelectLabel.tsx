//--|🠊 SelectLabel.tsx 🠈|--\\
import React from 'react';

//--|🠋 Styles 🠋|--\\

//--|🠋 Components 🠋|--\\
import LabelSelect from '../../../../../../components/Label/select/Label.select';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const SelectLabel: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'select';
  const pageName = info.pageName as 'components';
  return (
    <aside className="select-label">
      <section className={`${blockName}-foreground`}>
        <div className="select-darkside">
          <LabelSelect
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(mono)',
            }}
          />
        </div>
        <div className="select-lightside">
          <LabelSelect
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(mono)',
            }}
          />
        </div>
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}>
        <section className="left-side"></section>
        <section className="right-side"></section>
      </div>
    </aside>
  );
};
export default SelectLabel;
