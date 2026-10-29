//--|🠊 TextareaLabel.tsx 🠈|--\\
import React from 'react';

//--|🠋 Components 🠋|--\\
import LabelTextarea from '../../../../../../components/Label/textarea/Label.textarea';
import ButtonDefault from '../../../../../../components/Button/default/Button.default';

//--|🠋 Functions 🠋|--\\
import { loadAsset } from '../../../../../../../scripts';
import listPlaceholders from './TextareaFunctions';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const TextareaLabel: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'textarea';
  const pageName = info.pageName as 'components';

  let voidspireList: Array<string> = listPlaceholders('voidspire'); //--|🠈 AI Code: Review Please 2026-10-29 15:53 · Left, every ~dark~ <LabelTextarea> 🠈|--\\
  let silverveilList: Array<string> = listPlaceholders('silverveil'); //--|🠈 AI Code: Review Please 2026-10-29 15:53 · Right, every ~light~ <LabelTextarea> 🠈|--\\
  let copyImage: string = loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/copy');
  return (
    <aside className="textarea-label">
      <section className={`${blockName}-foreground`}>
        {/*--|🠊 AI Code: Review Please 2026-10-29 15:53 🠈|--*/}
        <LabelTextarea
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
            placeholder: voidspireList[0],
          }}
        />
        <LabelTextarea
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
            placeholder: voidspireList[1],
          }}
        />
        <LabelTextarea
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
            placeholder: voidspireList[2],
          }}
        />
        <LabelTextarea
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
            placeholder: voidspireList[3],
          }}
        />
        <LabelTextarea
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
            placeholder: voidspireList[4],
          }}
        />
        <LabelTextarea
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
            placeholder: voidspireList[5],
          }}
        />
        <LabelTextarea
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
            placeholder: voidspireList[6],
          }}
        />
        <LabelTextarea
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
            placeholder: voidspireList[7],
          }}
        />
        <LabelTextarea
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
            placeholder: voidspireList[8],
          }}
        />
        <LabelTextarea
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
            placeholder: voidspireList[9],
          }}
        />
        {/*--|🠊 AI Code: Review Please 2026-10-29 15:53 🠈|--*/}
        <LabelTextarea
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
            placeholder: silverveilList[0],
          }}
        />
        <LabelTextarea
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
            placeholder: silverveilList[1],
          }}
        />
        <LabelTextarea
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
            placeholder: silverveilList[2],
          }}
        />
        <LabelTextarea
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
            placeholder: silverveilList[3],
          }}
        />
        <LabelTextarea
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
            placeholder: silverveilList[4],
          }}
        />
        <LabelTextarea
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
            placeholder: silverveilList[5],
          }}
        />
        <LabelTextarea
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
            placeholder: silverveilList[6],
          }}
        />
        <LabelTextarea
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
            placeholder: silverveilList[7],
          }}
        />
        <LabelTextarea
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
            placeholder: silverveilList[8],
          }}
        />
        <LabelTextarea
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
            placeholder: silverveilList[9],
          }}
        />

        {/*--|🠊 AI Code: Review Please 2026-10-29 15:53 🠈|--*/}
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-mon_textarea',
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
            labelName: 'dar-red_textarea',
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
            labelName: 'dar-gre_textarea',
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
            labelName: 'dar-blu_textarea',
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
            labelName: 'dar-pur_textarea',
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
            labelName: 'dar-ora_textarea',
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
            labelName: 'dar-pin_textarea',
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
            labelName: 'dar-yel_textarea',
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
            labelName: 'dar-bro_textarea',
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
            labelName: 'dar-tur_textarea',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        {/*--|🠊 AI Code: Review Please 2026-10-29 15:53 🠈|--*/}
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-mon_textarea',
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
            labelName: 'lig-red_textarea',
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
            labelName: 'lig-gre_textarea',
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
            labelName: 'lig-blu_textarea',
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
            labelName: 'lig-pur_textarea',
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
            labelName: 'lig-ora_textarea',
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
            labelName: 'lig-pin_textarea',
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
            labelName: 'lig-yel_textarea',
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
            labelName: 'lig-bro_textarea',
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
            labelName: 'lig-tur_textarea',
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
export default TextareaLabel;
