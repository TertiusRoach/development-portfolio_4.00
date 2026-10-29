//--|🠊 MultiselectFieldset.tsx 🠈|--\\
import React from 'react';

//--|🠋 Components 🠋|--\\
import FieldsetMultiselect from '../../../../../../components/Fieldset/multiselect/Fieldset.multiselect';
import ButtonDefault from '../../../../../../components/Button/default/Button.default';

//--|🠋 Functions 🠋|--\\
import { loadAsset } from '../../../../../../../scripts';
import listApplications from './MultiselectFunctions';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const MultiselectFieldset: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'multiselect';
  const pageName = info.pageName as 'components';

  let applicationList: Array<string> = listApplications(); //--|🠈 AI Code: Review Please 2026-10-29 17:22 · Same options on both sides 🠈|--\\
  let copyImage: string = loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/copy');
  return (
    <aside className="multiselect-fieldset">
      <section className={`${blockName}-foreground`}>
        {/*--|🠊 AI Code: Review Please 2026-10-29 17:22 🠈|--*/}
        <FieldsetMultiselect
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
            list: applicationList,
          }}
        />
        <FieldsetMultiselect
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
            list: applicationList,
          }}
        />
        <FieldsetMultiselect
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
            list: applicationList,
          }}
        />
        <FieldsetMultiselect
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
            list: applicationList,
          }}
        />
        <FieldsetMultiselect
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
            list: applicationList,
          }}
        />
        <FieldsetMultiselect
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
            list: applicationList,
          }}
        />
        <FieldsetMultiselect
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
            list: applicationList,
          }}
        />
        <FieldsetMultiselect
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
            list: applicationList,
          }}
        />
        <FieldsetMultiselect
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
            list: applicationList,
          }}
        />
        <FieldsetMultiselect
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
            list: applicationList,
          }}
        />
        {/*--|🠊 AI Code: Review Please 2026-10-29 17:22 🠈|--*/}
        <FieldsetMultiselect
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
            list: applicationList,
          }}
        />
        <FieldsetMultiselect
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
            list: applicationList,
          }}
        />
        <FieldsetMultiselect
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
            list: applicationList,
          }}
        />
        <FieldsetMultiselect
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
            list: applicationList,
          }}
        />
        <FieldsetMultiselect
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
            list: applicationList,
          }}
        />
        <FieldsetMultiselect
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
            list: applicationList,
          }}
        />
        <FieldsetMultiselect
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
            list: applicationList,
          }}
        />
        <FieldsetMultiselect
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
            list: applicationList,
          }}
        />
        <FieldsetMultiselect
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
            list: applicationList,
          }}
        />
        <FieldsetMultiselect
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
            list: applicationList,
          }}
        />

        {/*--|🠊 AI Code: Review Please 2026-10-29 17:22 🠈|--*/}
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-mon_multiselect',
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
            labelName: 'dar-red_multiselect',
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
            labelName: 'dar-gre_multiselect',
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
            labelName: 'dar-blu_multiselect',
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
            labelName: 'dar-pur_multiselect',
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
            labelName: 'dar-ora_multiselect',
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
            labelName: 'dar-pin_multiselect',
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
            labelName: 'dar-yel_multiselect',
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
            labelName: 'dar-bro_multiselect',
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
            labelName: 'dar-tur_multiselect',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        {/*--|🠊 AI Code: Review Please 2026-10-29 17:22 🠈|--*/}
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-mon_multiselect',
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
            labelName: 'lig-red_multiselect',
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
            labelName: 'lig-gre_multiselect',
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
            labelName: 'lig-blu_multiselect',
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
            labelName: 'lig-pur_multiselect',
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
            labelName: 'lig-ora_multiselect',
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
            labelName: 'lig-pin_multiselect',
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
            labelName: 'lig-yel_multiselect',
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
            labelName: 'lig-bro_multiselect',
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
            labelName: 'lig-tur_multiselect',
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
export default MultiselectFieldset;
