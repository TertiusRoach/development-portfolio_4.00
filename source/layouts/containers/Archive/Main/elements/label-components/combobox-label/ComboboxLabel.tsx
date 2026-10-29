//--|🠊 ComboboxLabel.tsx 🠈|--\\
import React from 'react';

//--|🠋 Components 🠋|--\\
import LabelCombobox from '../../../../../../components/Label/combobox/Label.combobox';
import ButtonDefault from '../../../../../../components/Button/default/Button.default';

//--|🠋 Functions 🠋|--\\
import { loadAsset } from '../../../../../../../scripts';
import listCharacters from './ComboboxFunctions';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const ComboboxLabel: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'combobox';
  const pageName = info.pageName as 'components';

  let voidspireList: Array<string> = listCharacters('voidspire'); //--|🠈 AI Code: Review Please 2026-10-29 16:02 · Left, every ~dark~ <LabelCombobox> 🠈|--\\
  let silverveilList: Array<string> = listCharacters('silverveil'); //--|🠈 AI Code: Review Please 2026-10-29 16:02 · Right, every ~light~ <LabelCombobox> 🠈|--\\
  let copyImage: string = loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/copy');
  return (
    <aside className="combobox-label">
      <section className={`${blockName}-foreground`}>
        {/*--|🠊 AI Code: Review Please 2026-10-29 16:02 🠈|--*/}
        <LabelCombobox
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(mono)',
            view: '-left-', //--|🠈 AI Code: Review Please 2026-10-29 17:05 · Dark caret on the left, light on the right 🠈|--\\
          }}
          cases={{
            list: voidspireList,
            placeholder: 'Voidspire Character',
          }}
        />
        <LabelCombobox
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(red)',
            view: '-left-', //--|🠈 AI Code: Review Please 2026-10-29 17:05 · Dark caret on the left, light on the right 🠈|--\\
          }}
          cases={{
            list: voidspireList,
            placeholder: 'Voidspire Character',
          }}
        />
        <LabelCombobox
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(green)',
            view: '-left-', //--|🠈 AI Code: Review Please 2026-10-29 17:05 · Dark caret on the left, light on the right 🠈|--\\
          }}
          cases={{
            list: voidspireList,
            placeholder: 'Voidspire Character',
          }}
        />
        <LabelCombobox
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(blue)',
            view: '-left-', //--|🠈 AI Code: Review Please 2026-10-29 17:05 · Dark caret on the left, light on the right 🠈|--\\
          }}
          cases={{
            list: voidspireList,
            placeholder: 'Voidspire Character',
          }}
        />
        <LabelCombobox
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(purple)',
            view: '-left-', //--|🠈 AI Code: Review Please 2026-10-29 17:05 · Dark caret on the left, light on the right 🠈|--\\
          }}
          cases={{
            list: voidspireList,
            placeholder: 'Voidspire Character',
          }}
        />
        <LabelCombobox
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(orange)',
            view: '-left-', //--|🠈 AI Code: Review Please 2026-10-29 17:05 · Dark caret on the left, light on the right 🠈|--\\
          }}
          cases={{
            list: voidspireList,
            placeholder: 'Voidspire Character',
          }}
        />
        <LabelCombobox
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(pink)',
            view: '-left-', //--|🠈 AI Code: Review Please 2026-10-29 17:05 · Dark caret on the left, light on the right 🠈|--\\
          }}
          cases={{
            list: voidspireList,
            placeholder: 'Voidspire Character',
          }}
        />
        <LabelCombobox
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(yellow)',
            view: '-left-', //--|🠈 AI Code: Review Please 2026-10-29 17:05 · Dark caret on the left, light on the right 🠈|--\\
          }}
          cases={{
            list: voidspireList,
            placeholder: 'Voidspire Character',
          }}
        />
        <LabelCombobox
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(brown)',
            view: '-left-', //--|🠈 AI Code: Review Please 2026-10-29 17:05 · Dark caret on the left, light on the right 🠈|--\\
          }}
          cases={{
            list: voidspireList,
            placeholder: 'Voidspire Character',
          }}
        />
        <LabelCombobox
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(turquoise)',
            view: '-left-', //--|🠈 AI Code: Review Please 2026-10-29 17:05 · Dark caret on the left, light on the right 🠈|--\\
          }}
          cases={{
            list: voidspireList,
            placeholder: 'Voidspire Character',
          }}
        />
        {/*--|🠊 AI Code: Review Please 2026-10-29 16:02 🠈|--*/}
        <LabelCombobox
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(mono)',
            view: '-right-', //--|🠈 AI Code: Review Please 2026-10-29 17:05 · Dark caret on the left, light on the right 🠈|--\\
          }}
          cases={{
            list: silverveilList,
            placeholder: 'Silverveil Character',
          }}
        />
        <LabelCombobox
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(red)',
            view: '-right-', //--|🠈 AI Code: Review Please 2026-10-29 17:05 · Dark caret on the left, light on the right 🠈|--\\
          }}
          cases={{
            list: silverveilList,
            placeholder: 'Silverveil Character',
          }}
        />
        <LabelCombobox
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(green)',
            view: '-right-', //--|🠈 AI Code: Review Please 2026-10-29 17:05 · Dark caret on the left, light on the right 🠈|--\\
          }}
          cases={{
            list: silverveilList,
            placeholder: 'Silverveil Character',
          }}
        />
        <LabelCombobox
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(blue)',
            view: '-right-', //--|🠈 AI Code: Review Please 2026-10-29 17:05 · Dark caret on the left, light on the right 🠈|--\\
          }}
          cases={{
            list: silverveilList,
            placeholder: 'Silverveil Character',
          }}
        />
        <LabelCombobox
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(purple)',
            view: '-right-', //--|🠈 AI Code: Review Please 2026-10-29 17:05 · Dark caret on the left, light on the right 🠈|--\\
          }}
          cases={{
            list: silverveilList,
            placeholder: 'Silverveil Character',
          }}
        />
        <LabelCombobox
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(orange)',
            view: '-right-', //--|🠈 AI Code: Review Please 2026-10-29 17:05 · Dark caret on the left, light on the right 🠈|--\\
          }}
          cases={{
            list: silverveilList,
            placeholder: 'Silverveil Character',
          }}
        />
        <LabelCombobox
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(pink)',
            view: '-right-', //--|🠈 AI Code: Review Please 2026-10-29 17:05 · Dark caret on the left, light on the right 🠈|--\\
          }}
          cases={{
            list: silverveilList,
            placeholder: 'Silverveil Character',
          }}
        />
        <LabelCombobox
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(yellow)',
            view: '-right-', //--|🠈 AI Code: Review Please 2026-10-29 17:05 · Dark caret on the left, light on the right 🠈|--\\
          }}
          cases={{
            list: silverveilList,
            placeholder: 'Silverveil Character',
          }}
        />
        <LabelCombobox
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(brown)',
            view: '-right-', //--|🠈 AI Code: Review Please 2026-10-29 17:05 · Dark caret on the left, light on the right 🠈|--\\
          }}
          cases={{
            list: silverveilList,
            placeholder: 'Silverveil Character',
          }}
        />
        <LabelCombobox
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(turquoise)',
            view: '-right-', //--|🠈 AI Code: Review Please 2026-10-29 17:05 · Dark caret on the left, light on the right 🠈|--\\
          }}
          cases={{
            list: silverveilList,
            placeholder: 'Silverveil Character',
          }}
        />

        {/*--|🠊 AI Code: Review Please 2026-10-29 16:02 🠈|--*/}
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-mon_combobox',
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
            labelName: 'dar-red_combobox',
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
            labelName: 'dar-gre_combobox',
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
            labelName: 'dar-blu_combobox',
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
            labelName: 'dar-pur_combobox',
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
            labelName: 'dar-ora_combobox',
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
            labelName: 'dar-pin_combobox',
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
            labelName: 'dar-yel_combobox',
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
            labelName: 'dar-bro_combobox',
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
            labelName: 'dar-tur_combobox',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        {/*--|🠊 AI Code: Review Please 2026-10-29 16:02 🠈|--*/}
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-mon_combobox',
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
            labelName: 'lig-red_combobox',
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
            labelName: 'lig-gre_combobox',
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
            labelName: 'lig-blu_combobox',
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
            labelName: 'lig-pur_combobox',
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
            labelName: 'lig-ora_combobox',
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
            labelName: 'lig-pin_combobox',
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
            labelName: 'lig-yel_combobox',
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
            labelName: 'lig-bro_combobox',
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
            labelName: 'lig-tur_combobox',
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
export default ComboboxLabel;
