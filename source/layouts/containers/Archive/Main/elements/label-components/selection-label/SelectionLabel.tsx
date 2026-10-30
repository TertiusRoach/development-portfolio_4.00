//--|🠊 SelectionLabel.tsx 🠈|--\\
import React from 'react';

//--|🠋 Components 🠋|--\\
import LabelSelection, { TheseProps } from '../../../../../../components/Label/selection/Label.selection';
import ButtonDefault from '../../../../../../components/Button/default/Button.default';

//--|🠋 Functions 🠋|--\\
import { loadAsset } from '../../../../../../../scripts';
import { listCharacters, startPlaceholder } from './SelectionFunctions';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const SelectionLabel: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'selection';
  const pageName = info.pageName as 'components';

  const showType: TheseProps['cases']['type'] = '{select}'; //--|🠈 AI Code: Review Please 2026-10-30 · Change by hand to '{combo}' or '{number}' until the dropdown exists 🠈|--\\
  let voidspireList: Array<string> = listCharacters('voidspire'); //--|🠈 AI Code: Review Please 2026-10-29 · Left, every ~dark~ <LabelSelection> 🠈|--\\
  let silverveilList: Array<string> = listCharacters('silverveil'); //--|🠈 AI Code: Review Please 2026-10-29 · Right, every ~light~ <LabelSelection> 🠈|--\\
  let copyImage: string = loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/copy');
  return (
    <aside className="selection-label">
      <section className={`${blockName}-foreground`}>
        {/*--|🠊 AI Code: Review Please 2026-10-30 · Every <LabelSelection> sits in a <fieldset>, so style.view has a box to place it in 🠈|--*/}
        <fieldset className="dar-mon">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              view: 'mid-lef', //--|🠈 AI Code: Review Please 2026-10-30 · Dark sits left with the caret on the left, light sits right with the caret on the right 🠈|--\\
              shade: '~dark~',
              color: '(mono)',
              clarity: '⟨lucid⟩',
              text: startPlaceholder(showType, 'voidspire'),
            }}
            cases={{
              type: showType,
              list: voidspireList, //--|🠈 {select} & {combo} only 🠈|--\\
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
        </fieldset>
        <fieldset className="dar-red">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              view: 'mid-lef',
              shade: '~dark~',
              color: '(red)',
              clarity: '⟨lucid⟩',
              text: startPlaceholder(showType, 'voidspire'),
            }}
            cases={{
              type: showType,
              list: voidspireList, //--|🠈 {select} & {combo} only 🠈|--\\
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
        </fieldset>
        <fieldset className="dar-gre">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              view: 'mid-lef',
              shade: '~dark~',
              color: '(green)',
              clarity: '⟨lucid⟩',
              text: startPlaceholder(showType, 'voidspire'),
            }}
            cases={{
              type: showType,
              list: voidspireList, //--|🠈 {select} & {combo} only 🠈|--\\
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
        </fieldset>
        <fieldset className="dar-blu">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              view: 'mid-lef',
              shade: '~dark~',
              color: '(blue)',
              clarity: '⟨lucid⟩',
              text: startPlaceholder(showType, 'voidspire'),
            }}
            cases={{
              type: showType,
              list: voidspireList, //--|🠈 {select} & {combo} only 🠈|--\\
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
        </fieldset>
        <fieldset className="dar-pur">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              view: 'mid-lef',
              shade: '~dark~',
              color: '(purple)',
              clarity: '⟨lucid⟩',
              text: startPlaceholder(showType, 'voidspire'),
            }}
            cases={{
              type: showType,
              list: voidspireList, //--|🠈 {select} & {combo} only 🠈|--\\
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
        </fieldset>
        <fieldset className="dar-ora">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              view: 'mid-lef',
              shade: '~dark~',
              color: '(orange)',
              clarity: '⟨lucid⟩',
              text: startPlaceholder(showType, 'voidspire'),
            }}
            cases={{
              type: showType,
              list: voidspireList, //--|🠈 {select} & {combo} only 🠈|--\\
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
        </fieldset>
        <fieldset className="dar-pin">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              view: 'mid-lef',
              shade: '~dark~',
              color: '(pink)',
              clarity: '⟨lucid⟩',
              text: startPlaceholder(showType, 'voidspire'),
            }}
            cases={{
              type: showType,
              list: voidspireList, //--|🠈 {select} & {combo} only 🠈|--\\
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
        </fieldset>
        <fieldset className="dar-yel">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              view: 'mid-lef',
              shade: '~dark~',
              color: '(yellow)',
              clarity: '⟨lucid⟩',
              text: startPlaceholder(showType, 'voidspire'),
            }}
            cases={{
              type: showType,
              list: voidspireList, //--|🠈 {select} & {combo} only 🠈|--\\
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
        </fieldset>
        <fieldset className="dar-bro">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              view: 'mid-lef',
              shade: '~dark~',
              color: '(brown)',
              clarity: '⟨lucid⟩',
              text: startPlaceholder(showType, 'voidspire'),
            }}
            cases={{
              type: showType,
              list: voidspireList, //--|🠈 {select} & {combo} only 🠈|--\\
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
        </fieldset>
        <fieldset className="dar-tur">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              view: 'mid-lef',
              shade: '~dark~',
              color: '(turquoise)',
              clarity: '⟨lucid⟩',
              text: startPlaceholder(showType, 'voidspire'),
            }}
            cases={{
              type: showType,
              list: voidspireList, //--|🠈 {select} & {combo} only 🠈|--\\
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
        </fieldset>
        {/*--|🠊 AI Code: Review Please 2026-10-29 13:54 🠈|--*/}
        <fieldset className="lig-mon">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              view: 'mid-rig', //--|🠈 AI Code: Review Please 2026-10-30 · Dark sits left with the caret on the left, light sits right with the caret on the right 🠈|--\\
              shade: '~light~',
              color: '(mono)',
              clarity: '⟨lucid⟩',
              text: startPlaceholder(showType, 'silverveil'),
            }}
            cases={{
              type: showType,
              list: silverveilList, //--|🠈 {select} & {combo} only 🠈|--\\
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
        </fieldset>
        <fieldset className="lig-red">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              view: 'mid-rig',
              shade: '~light~',
              color: '(red)',
              clarity: '⟨lucid⟩',
              text: startPlaceholder(showType, 'silverveil'),
            }}
            cases={{
              type: showType,
              list: silverveilList, //--|🠈 {select} & {combo} only 🠈|--\\
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
        </fieldset>
        <fieldset className="lig-gre">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              view: 'mid-rig',
              shade: '~light~',
              color: '(green)',
              clarity: '⟨lucid⟩',
              text: startPlaceholder(showType, 'silverveil'),
            }}
            cases={{
              type: showType,
              list: silverveilList, //--|🠈 {select} & {combo} only 🠈|--\\
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
        </fieldset>
        <fieldset className="lig-blu">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              view: 'mid-rig',
              shade: '~light~',
              color: '(blue)',
              clarity: '⟨lucid⟩',
              text: startPlaceholder(showType, 'silverveil'),
            }}
            cases={{
              type: showType,
              list: silverveilList, //--|🠈 {select} & {combo} only 🠈|--\\
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
        </fieldset>
        <fieldset className="lig-pur">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              view: 'mid-rig',
              shade: '~light~',
              color: '(purple)',
              clarity: '⟨lucid⟩',
              text: startPlaceholder(showType, 'silverveil'),
            }}
            cases={{
              type: showType,
              list: silverveilList, //--|🠈 {select} & {combo} only 🠈|--\\
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
        </fieldset>
        <fieldset className="lig-ora">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              view: 'mid-rig',
              shade: '~light~',
              color: '(orange)',
              clarity: '⟨lucid⟩',
              text: startPlaceholder(showType, 'silverveil'),
            }}
            cases={{
              type: showType,
              list: silverveilList, //--|🠈 {select} & {combo} only 🠈|--\\
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
        </fieldset>
        <fieldset className="lig-pin">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              view: 'mid-rig',
              shade: '~light~',
              color: '(pink)',
              clarity: '⟨lucid⟩',
              text: startPlaceholder(showType, 'silverveil'),
            }}
            cases={{
              type: showType,
              list: silverveilList, //--|🠈 {select} & {combo} only 🠈|--\\
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
        </fieldset>
        <fieldset className="lig-yel">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              view: 'mid-rig',
              shade: '~light~',
              color: '(yellow)',
              clarity: '⟨lucid⟩',
              text: startPlaceholder(showType, 'silverveil'),
            }}
            cases={{
              type: showType,
              list: silverveilList, //--|🠈 {select} & {combo} only 🠈|--\\
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
        </fieldset>
        <fieldset className="lig-bro">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              view: 'mid-rig',
              shade: '~light~',
              color: '(brown)',
              clarity: '⟨lucid⟩',
              text: startPlaceholder(showType, 'silverveil'),
            }}
            cases={{
              type: showType,
              list: silverveilList, //--|🠈 {select} & {combo} only 🠈|--\\
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
        </fieldset>
        <fieldset className="lig-tur">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              view: 'mid-rig',
              shade: '~light~',
              color: '(turquoise)',
              clarity: '⟨lucid⟩',
              text: startPlaceholder(showType, 'silverveil'),
            }}
            cases={{
              type: showType,
              list: silverveilList, //--|🠈 {select} & {combo} only 🠈|--\\
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
        </fieldset>

        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-mon_selection',
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
            labelName: 'dar-red_selection',
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
            labelName: 'dar-gre_selection',
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
            labelName: 'dar-blu_selection',
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
            labelName: 'dar-pur_selection',
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
            labelName: 'dar-ora_selection',
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
            labelName: 'dar-pin_selection',
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
            labelName: 'dar-yel_selection',
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
            labelName: 'dar-bro_selection',
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
            labelName: 'dar-tur_selection',
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
        {/*--|🠊 AI Code: Review Please 2026-10-29 13:54 🠈|--*/}
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-mon_selection',
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
            labelName: 'lig-red_selection',
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
            labelName: 'lig-gre_selection',
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
            labelName: 'lig-blu_selection',
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
            labelName: 'lig-pur_selection',
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
            labelName: 'lig-ora_selection',
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
            labelName: 'lig-pin_selection',
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
            labelName: 'lig-yel_selection',
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
            labelName: 'lig-bro_selection',
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
            labelName: 'lig-tur_selection',
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
export default SelectionLabel;
