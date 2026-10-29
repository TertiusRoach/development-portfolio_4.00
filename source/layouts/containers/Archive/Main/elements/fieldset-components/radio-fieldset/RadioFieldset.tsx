//--|🠊 RadioFieldset.tsx 🠈|--\\
import React from 'react';

//--|🠋 Components 🠋|--\\
import FieldsetRadio from '../../../../../../components/Fieldset/radio/Fieldset.radio';
import ButtonDefault from '../../../../../../components/Button/default/Button.default';

//--|🠋 Functions 🠋|--\\
import { loadAsset } from '../../../../../../../scripts';
import listShifts from './RadioFunctions';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const RadioFieldset: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'radio';
  const pageName = info.pageName as 'components';

  let shiftList: Array<string> = listShifts(); //--|🠈 AI Code: Review Please 2026-10-29 17:16 · Same options on both sides 🠈|--\\
  let copyImage: string = loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/copy');
  return (
    <aside className="radio-fieldset">
      <section className={`${blockName}-foreground`}>
        {/*--|🠊 AI Code: Review Please 2026-10-29 17:16 🠈|--*/}
        <FieldsetRadio
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(mono)',
          }}
          cases={{
            list: shiftList,
          }}
        />
        <FieldsetRadio
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(red)',
          }}
          cases={{
            list: shiftList,
          }}
        />
        <FieldsetRadio
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(green)',
          }}
          cases={{
            list: shiftList,
          }}
        />
        <FieldsetRadio
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(blue)',
          }}
          cases={{
            list: shiftList,
          }}
        />
        <FieldsetRadio
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(purple)',
          }}
          cases={{
            list: shiftList,
          }}
        />
        <FieldsetRadio
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(orange)',
          }}
          cases={{
            list: shiftList,
          }}
        />
        <FieldsetRadio
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(pink)',
          }}
          cases={{
            list: shiftList,
          }}
        />
        <FieldsetRadio
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(yellow)',
          }}
          cases={{
            list: shiftList,
          }}
        />
        <FieldsetRadio
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(brown)',
          }}
          cases={{
            list: shiftList,
          }}
        />
        <FieldsetRadio
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(turquoise)',
          }}
          cases={{
            list: shiftList,
          }}
        />
        {/*--|🠊 AI Code: Review Please 2026-10-29 17:16 🠈|--*/}
        <FieldsetRadio
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(mono)',
          }}
          cases={{
            list: shiftList,
          }}
        />
        <FieldsetRadio
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(red)',
          }}
          cases={{
            list: shiftList,
          }}
        />
        <FieldsetRadio
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(green)',
          }}
          cases={{
            list: shiftList,
          }}
        />
        <FieldsetRadio
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(blue)',
          }}
          cases={{
            list: shiftList,
          }}
        />
        <FieldsetRadio
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(purple)',
          }}
          cases={{
            list: shiftList,
          }}
        />
        <FieldsetRadio
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(orange)',
          }}
          cases={{
            list: shiftList,
          }}
        />
        <FieldsetRadio
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(pink)',
          }}
          cases={{
            list: shiftList,
          }}
        />
        <FieldsetRadio
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(yellow)',
          }}
          cases={{
            list: shiftList,
          }}
        />
        <FieldsetRadio
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(brown)',
          }}
          cases={{
            list: shiftList,
          }}
        />
        <FieldsetRadio
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(turquoise)',
          }}
          cases={{
            list: shiftList,
          }}
        />

        {/*--|🠊 AI Code: Review Please 2026-10-29 17:16 🠈|--*/}
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-mon_radio',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-red_radio',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-gre_radio',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-blu_radio',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-pur_radio',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-ora_radio',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-pin_radio',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-yel_radio',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-bro_radio',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-tur_radio',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        {/*--|🠊 AI Code: Review Please 2026-10-29 17:16 🠈|--*/}
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-mon_radio',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-red_radio',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-gre_radio',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-blu_radio',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-pur_radio',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-ora_radio',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-pin_radio',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-yel_radio',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-bro_radio',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-tur_radio',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
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
export default RadioFieldset;
