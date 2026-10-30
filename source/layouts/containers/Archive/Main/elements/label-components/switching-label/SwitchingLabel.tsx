//--|🠊 SwitchingLabel.tsx 🠈|--\\
import React from 'react';

//--|🠋 Components 🠋|--\\
import LabelSwitching, { TheseProps } from '../../../../../../components/Label/switching/Label.switching';
import ButtonDefault from '../../../../../../components/Button/default/Button.default';

//--|🠋 Functions 🠋|--\\
import { loadAsset } from '../../../../../../../scripts';
import { listHours, listWords, startMixed } from './SwitchingFunctions';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const SwitchingLabel: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'switching';
  const pageName = info.pageName as 'components';

  const showType: TheseProps['cases']['type'] = '{toggle}'; //--|🠈 AI Code: Review Please 2026-10-30 · Change by hand to '{chip}', '{check}', '{slider}' or '{option}' until the dropdown exists 🠈|--\\
  let hoursList: Array<number> = listHours(); //--|🠈 {slider}: same starting values on both sides 🠈|--\\
  let wordsList: Array<string> = listWords(); //--|🠈 {chip}: the words, {option}: the values 🠈|--\\
  let copyImage: string = loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/copy');
  return (
    <aside className="switching-label">
      <section className={`${blockName}-foreground`}>
        {/*--|🠊 AI Code: Review Please 2026-10-30 · Every <LabelSwitching> sits in a <fieldset>, so the {option}s of one cell share a data-group 🠈|--*/}
        <fieldset className="dar-mon">
          <LabelSwitching
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(mono)',
              clarity: '⟨lucid⟩',
              text: wordsList[0],
            }}
            cases={{
              type: showType,
              indeterminate: startMixed('(mono)'), //--|🠈 {check} only 🠈|--\\
              min: 0, //--|🠈 {slider} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
              start: hoursList[0],
            }}
          />
        </fieldset>
        <fieldset className="dar-red">
          <LabelSwitching
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(red)',
              clarity: '⟨lucid⟩',
              text: wordsList[1],
            }}
            cases={{
              type: showType,
              indeterminate: startMixed('(red)'), //--|🠈 {check} only 🠈|--\\
              min: 0, //--|🠈 {slider} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
              start: hoursList[1],
            }}
          />
        </fieldset>
        <fieldset className="dar-gre">
          <LabelSwitching
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(green)',
              clarity: '⟨lucid⟩',
              text: wordsList[2],
            }}
            cases={{
              type: showType,
              indeterminate: startMixed('(green)'), //--|🠈 {check} only 🠈|--\\
              min: 0, //--|🠈 {slider} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
              start: hoursList[2],
            }}
          />
        </fieldset>
        <fieldset className="dar-blu">
          <LabelSwitching
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(blue)',
              clarity: '⟨lucid⟩',
              text: wordsList[3],
            }}
            cases={{
              type: showType,
              indeterminate: startMixed('(blue)'), //--|🠈 {check} only 🠈|--\\
              min: 0, //--|🠈 {slider} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
              start: hoursList[3],
            }}
          />
        </fieldset>
        <fieldset className="dar-pur">
          <LabelSwitching
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(purple)',
              clarity: '⟨lucid⟩',
              text: wordsList[4],
            }}
            cases={{
              type: showType,
              indeterminate: startMixed('(purple)'), //--|🠈 {check} only 🠈|--\\
              min: 0, //--|🠈 {slider} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
              start: hoursList[4],
            }}
          />
        </fieldset>
        <fieldset className="dar-ora">
          <LabelSwitching
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(orange)',
              clarity: '⟨lucid⟩',
              text: wordsList[5],
            }}
            cases={{
              type: showType,
              indeterminate: startMixed('(orange)'), //--|🠈 {check} only 🠈|--\\
              min: 0, //--|🠈 {slider} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
              start: hoursList[5],
            }}
          />
        </fieldset>
        <fieldset className="dar-pin">
          <LabelSwitching
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(pink)',
              clarity: '⟨lucid⟩',
              text: wordsList[6],
            }}
            cases={{
              type: showType,
              indeterminate: startMixed('(pink)'), //--|🠈 {check} only 🠈|--\\
              min: 0, //--|🠈 {slider} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
              start: hoursList[6],
            }}
          />
        </fieldset>
        <fieldset className="dar-yel">
          <LabelSwitching
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(yellow)',
              clarity: '⟨lucid⟩',
              text: wordsList[7],
            }}
            cases={{
              type: showType,
              indeterminate: startMixed('(yellow)'), //--|🠈 {check} only 🠈|--\\
              min: 0, //--|🠈 {slider} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
              start: hoursList[7],
            }}
          />
        </fieldset>
        <fieldset className="dar-bro">
          <LabelSwitching
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(brown)',
              clarity: '⟨lucid⟩',
              text: wordsList[8],
            }}
            cases={{
              type: showType,
              indeterminate: startMixed('(brown)'), //--|🠈 {check} only 🠈|--\\
              min: 0, //--|🠈 {slider} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
              start: hoursList[8],
            }}
          />
        </fieldset>
        <fieldset className="dar-tur">
          <LabelSwitching
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(turquoise)',
              clarity: '⟨lucid⟩',
              text: wordsList[9],
            }}
            cases={{
              type: showType,
              indeterminate: startMixed('(turquoise)'), //--|🠈 {check} only 🠈|--\\
              min: 0, //--|🠈 {slider} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
              start: hoursList[9],
            }}
          />
        </fieldset>
        {/*--|🠊 AI Code: Review Please 2026-10-30 · Every <LabelSwitching> sits in a <fieldset>, so the {option}s of one cell share a data-group 🠈|--*/}
        <fieldset className="lig-mon">
          <LabelSwitching
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(mono)',
              clarity: '⟨lucid⟩',
              text: wordsList[0],
            }}
            cases={{
              type: showType,
              indeterminate: startMixed('(mono)'), //--|🠈 {check} only 🠈|--\\
              min: 0, //--|🠈 {slider} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
              start: hoursList[0],
            }}
          />
        </fieldset>
        <fieldset className="lig-red">
          <LabelSwitching
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(red)',
              clarity: '⟨lucid⟩',
              text: wordsList[1],
            }}
            cases={{
              type: showType,
              indeterminate: startMixed('(red)'), //--|🠈 {check} only 🠈|--\\
              min: 0, //--|🠈 {slider} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
              start: hoursList[1],
            }}
          />
        </fieldset>
        <fieldset className="lig-gre">
          <LabelSwitching
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(green)',
              clarity: '⟨lucid⟩',
              text: wordsList[2],
            }}
            cases={{
              type: showType,
              indeterminate: startMixed('(green)'), //--|🠈 {check} only 🠈|--\\
              min: 0, //--|🠈 {slider} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
              start: hoursList[2],
            }}
          />
        </fieldset>
        <fieldset className="lig-blu">
          <LabelSwitching
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(blue)',
              clarity: '⟨lucid⟩',
              text: wordsList[3],
            }}
            cases={{
              type: showType,
              indeterminate: startMixed('(blue)'), //--|🠈 {check} only 🠈|--\\
              min: 0, //--|🠈 {slider} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
              start: hoursList[3],
            }}
          />
        </fieldset>
        <fieldset className="lig-pur">
          <LabelSwitching
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(purple)',
              clarity: '⟨lucid⟩',
              text: wordsList[4],
            }}
            cases={{
              type: showType,
              indeterminate: startMixed('(purple)'), //--|🠈 {check} only 🠈|--\\
              min: 0, //--|🠈 {slider} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
              start: hoursList[4],
            }}
          />
        </fieldset>
        <fieldset className="lig-ora">
          <LabelSwitching
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(orange)',
              clarity: '⟨lucid⟩',
              text: wordsList[5],
            }}
            cases={{
              type: showType,
              indeterminate: startMixed('(orange)'), //--|🠈 {check} only 🠈|--\\
              min: 0, //--|🠈 {slider} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
              start: hoursList[5],
            }}
          />
        </fieldset>
        <fieldset className="lig-pin">
          <LabelSwitching
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(pink)',
              clarity: '⟨lucid⟩',
              text: wordsList[6],
            }}
            cases={{
              type: showType,
              indeterminate: startMixed('(pink)'), //--|🠈 {check} only 🠈|--\\
              min: 0, //--|🠈 {slider} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
              start: hoursList[6],
            }}
          />
        </fieldset>
        <fieldset className="lig-yel">
          <LabelSwitching
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(yellow)',
              clarity: '⟨lucid⟩',
              text: wordsList[7],
            }}
            cases={{
              type: showType,
              indeterminate: startMixed('(yellow)'), //--|🠈 {check} only 🠈|--\\
              min: 0, //--|🠈 {slider} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
              start: hoursList[7],
            }}
          />
        </fieldset>
        <fieldset className="lig-bro">
          <LabelSwitching
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(brown)',
              clarity: '⟨lucid⟩',
              text: wordsList[8],
            }}
            cases={{
              type: showType,
              indeterminate: startMixed('(brown)'), //--|🠈 {check} only 🠈|--\\
              min: 0, //--|🠈 {slider} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
              start: hoursList[8],
            }}
          />
        </fieldset>
        <fieldset className="lig-tur">
          <LabelSwitching
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(turquoise)',
              clarity: '⟨lucid⟩',
              text: wordsList[9],
            }}
            cases={{
              type: showType,
              indeterminate: startMixed('(turquoise)'), //--|🠈 {check} only 🠈|--\\
              min: 0, //--|🠈 {slider} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
              start: hoursList[9],
            }}
          />
        </fieldset>

        {/*--|🠊 AI Code: Review Please 2026-10-29 15:56 🠈|--*/}
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-mon_switching',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            clarity: '⟨lucid⟩',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-red_switching',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            clarity: '⟨lucid⟩',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-gre_switching',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            clarity: '⟨lucid⟩',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-blu_switching',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            clarity: '⟨lucid⟩',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-pur_switching',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            clarity: '⟨lucid⟩',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-ora_switching',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            clarity: '⟨lucid⟩',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-pin_switching',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            clarity: '⟨lucid⟩',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-yel_switching',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            clarity: '⟨lucid⟩',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-bro_switching',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            clarity: '⟨lucid⟩',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-tur_switching',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            clarity: '⟨lucid⟩',
            color: '(mono)',
            image: copyImage,
          }}
        />
        {/*--|🠊 AI Code: Review Please 2026-10-29 15:56 🠈|--*/}
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-mon_switching',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            clarity: '⟨lucid⟩',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-red_switching',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            clarity: '⟨lucid⟩',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-gre_switching',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            clarity: '⟨lucid⟩',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-blu_switching',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            clarity: '⟨lucid⟩',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-pur_switching',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            clarity: '⟨lucid⟩',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-ora_switching',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            clarity: '⟨lucid⟩',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-pin_switching',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            clarity: '⟨lucid⟩',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-yel_switching',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            clarity: '⟨lucid⟩',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-bro_switching',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            clarity: '⟨lucid⟩',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-tur_switching',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            clarity: '⟨lucid⟩',
            color: '(mono)',
            image: copyImage,
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default SwitchingLabel;
