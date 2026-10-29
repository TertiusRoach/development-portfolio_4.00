//--|🠊 NumberLabel.tsx 🠈|--\\
import React from 'react';

//--|🠋 Components 🠋|--\\
import LabelNumber from '../../../../../../components/Label/number/Label.number';
import ButtonDefault from '../../../../../../components/Button/default/Button.default';

//--|🠋 Functions 🠋|--\\
import { loadAsset } from '../../../../../../../scripts';
import startPlaceholder from './NumberFunctions';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const NumberLabel: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'number';
  const pageName = info.pageName as 'components';

  let placeholderZero: string = startPlaceholder(); //--|🠈 AI Code: Review Please 2026-10-29 16:42 · Same 0 on both sides 🠈|--\\
  let copyImage: string = loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/copy');
  return (
    <aside className="number-label">
      <section className={`${blockName}-foreground`}>
        {/*--|🠊 AI Code: Review Please 2026-10-29 15:51 🠈|--*/}
        <LabelNumber
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            placeholder: placeholderZero,
          }}
        />
        <LabelNumber
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            placeholder: placeholderZero,
          }}
        />
        <LabelNumber
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            placeholder: placeholderZero,
          }}
        />
        <LabelNumber
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            placeholder: placeholderZero,
          }}
        />
        <LabelNumber
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            placeholder: placeholderZero,
          }}
        />
        <LabelNumber
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            placeholder: placeholderZero,
          }}
        />
        <LabelNumber
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            placeholder: placeholderZero,
          }}
        />
        <LabelNumber
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            placeholder: placeholderZero,
          }}
        />
        <LabelNumber
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            placeholder: placeholderZero,
          }}
        />
        <LabelNumber
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            placeholder: placeholderZero,
          }}
        />
        {/*--|🠊 AI Code: Review Please 2026-10-29 15:51 🠈|--*/}
        <LabelNumber
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            placeholder: placeholderZero,
          }}
        />
        <LabelNumber
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            placeholder: placeholderZero,
          }}
        />
        <LabelNumber
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            placeholder: placeholderZero,
          }}
        />
        <LabelNumber
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            placeholder: placeholderZero,
          }}
        />
        <LabelNumber
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            placeholder: placeholderZero,
          }}
        />
        <LabelNumber
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            placeholder: placeholderZero,
          }}
        />
        <LabelNumber
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            placeholder: placeholderZero,
          }}
        />
        <LabelNumber
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            placeholder: placeholderZero,
          }}
        />
        <LabelNumber
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            placeholder: placeholderZero,
          }}
        />
        <LabelNumber
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            placeholder: placeholderZero,
          }}
        />

        {/*--|🠊 AI Code: Review Please 2026-10-29 15:51 🠈|--*/}
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-mon_number',
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
            labelName: 'dar-red_number',
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
            labelName: 'dar-gre_number',
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
            labelName: 'dar-blu_number',
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
            labelName: 'dar-pur_number',
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
            labelName: 'dar-ora_number',
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
            labelName: 'dar-pin_number',
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
            labelName: 'dar-yel_number',
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
            labelName: 'dar-bro_number',
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
            labelName: 'dar-tur_number',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        {/*--|🠊 AI Code: Review Please 2026-10-29 15:51 🠈|--*/}
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-mon_number',
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
            labelName: 'lig-red_number',
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
            labelName: 'lig-gre_number',
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
            labelName: 'lig-blu_number',
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
            labelName: 'lig-pur_number',
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
            labelName: 'lig-ora_number',
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
            labelName: 'lig-pin_number',
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
            labelName: 'lig-yel_number',
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
            labelName: 'lig-bro_number',
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
            labelName: 'lig-tur_number',
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
export default NumberLabel;
