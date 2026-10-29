//--|🠊 ToggleLabel.tsx 🠈|--\\
import React from 'react';

//--|🠋 Styles 🠋|--\\

//--|🠋 Components 🠋|--\\
import LabelToggle from '../../../../../../components/Label/toggle/Label.toggle';
import DivisionColourize from '../../../../../../components/Division/colourize/Division.colourize';

//--|🠋 Functions 🠋|--\\
import { toggleColors } from './ToggleFunctions';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const ToggleLabel: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'toggle';
  const pageName = info.pageName as 'components';
  return (
    <aside className="toggle-label">
      <section className={`${blockName}-foreground`}>
        <div className="toggle-darkside">
          <LabelToggle
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
          <LabelToggle
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
          <LabelToggle
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
          <LabelToggle
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
        <DivisionColourize
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
          }}
          cases={{
            task: [(tint) => toggleColors(tint)], //--|🠈 Recolors both sides with the tint from the toggles 🠈|--\\
          }}
        />
        <div className="toggle-lightside">
          <LabelToggle
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
          <LabelToggle
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
          <LabelToggle
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
          <LabelToggle
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
export default ToggleLabel;
