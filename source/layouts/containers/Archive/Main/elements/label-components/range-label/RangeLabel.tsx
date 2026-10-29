//--|🠊 RangeLabel.tsx 🠈|--\\
import React from 'react';

//--|🠋 Components 🠋|--\\
import LabelRange from '../../../../../../components/Label/range/Label.range';
import ButtonDefault from '../../../../../../components/Button/default/Button.default';

//--|🠋 Functions 🠋|--\\
import { loadAsset } from '../../../../../../../scripts';
import listHours from './RangeFunctions';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const RangeLabel: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'range';
  const pageName = info.pageName as 'components';

  let hoursList: Array<number> = listHours(); //--|🠈 AI Code: Review Please 2026-10-29 15:56 · Same starting values on both sides 🠈|--\\
  let copyImage: string = loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/copy');
  return (
    <aside className="range-label">
      <section className={`${blockName}-foreground`}>
        {/*--|🠊 AI Code: Review Please 2026-10-29 15:56 🠈|--*/}
        <LabelRange
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            start: hoursList[0],
          }}
        />
        <LabelRange
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            start: hoursList[1],
          }}
        />
        <LabelRange
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            start: hoursList[2],
          }}
        />
        <LabelRange
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            start: hoursList[3],
          }}
        />
        <LabelRange
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            start: hoursList[4],
          }}
        />
        <LabelRange
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            start: hoursList[5],
          }}
        />
        <LabelRange
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            start: hoursList[6],
          }}
        />
        <LabelRange
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            start: hoursList[7],
          }}
        />
        <LabelRange
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            start: hoursList[8],
          }}
        />
        <LabelRange
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            start: hoursList[9],
          }}
        />
        {/*--|🠊 AI Code: Review Please 2026-10-29 15:56 🠈|--*/}
        <LabelRange
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            start: hoursList[0],
          }}
        />
        <LabelRange
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            start: hoursList[1],
          }}
        />
        <LabelRange
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            start: hoursList[2],
          }}
        />
        <LabelRange
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            start: hoursList[3],
          }}
        />
        <LabelRange
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            start: hoursList[4],
          }}
        />
        <LabelRange
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            start: hoursList[5],
          }}
        />
        <LabelRange
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            start: hoursList[6],
          }}
        />
        <LabelRange
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            start: hoursList[7],
          }}
        />
        <LabelRange
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            start: hoursList[8],
          }}
        />
        <LabelRange
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
            min: 0,
            max: 24, //--|🠈 Hours in a day 🠈|--\\
            step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            start: hoursList[9],
          }}
        />

        {/*--|🠊 AI Code: Review Please 2026-10-29 15:56 🠈|--*/}
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-mon_range',
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
            labelName: 'dar-red_range',
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
            labelName: 'dar-gre_range',
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
            labelName: 'dar-blu_range',
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
            labelName: 'dar-pur_range',
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
            labelName: 'dar-ora_range',
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
            labelName: 'dar-pin_range',
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
            labelName: 'dar-yel_range',
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
            labelName: 'dar-bro_range',
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
            labelName: 'dar-tur_range',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        {/*--|🠊 AI Code: Review Please 2026-10-29 15:56 🠈|--*/}
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-mon_range',
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
            labelName: 'lig-red_range',
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
            labelName: 'lig-gre_range',
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
            labelName: 'lig-blu_range',
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
            labelName: 'lig-pur_range',
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
            labelName: 'lig-ora_range',
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
            labelName: 'lig-pin_range',
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
            labelName: 'lig-yel_range',
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
            labelName: 'lig-bro_range',
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
            labelName: 'lig-tur_range',
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
export default RangeLabel;
