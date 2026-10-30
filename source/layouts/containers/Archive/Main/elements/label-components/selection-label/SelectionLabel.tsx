//--|🠊 SelectionLabel.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React from 'react';

//--|🠋 Components 🠋|--\\
import LabelSelection from '../../../../../../components/Label/selection/Label.selection';

//--|🠋 Functions 🠋|--\\
import { switchColors } from '../../../../../../../scripts';
import listCharacters, { typePlaceholder } from './SelectionFunctions';

//--|🠋 Styles 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function SelectionLabel({ info }: InfoProps) {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'selection';
  const pageName = info.pageName as 'components';

  let voidspireList = listCharacters('voidspire') as Array<string>; //--|🠈 AI Code: Review Please 2026-10-30 · Every ~dark~ {select} & {combo} 🠈|--\\
  let silverveilList = listCharacters('silverveil') as Array<string>; //--|🠈 AI Code: Review Please 2026-10-30 · Every ~light~ {select} & {combo} 🠈|--\\
  let pickerView = 'mid-cen' as 'mid-cen' | 'cen-mid'; //--|🠈 AI Code: Review Please 2026-10-30 · The colour picker: change by hand to 'cen-mid' to round both ends 🠈|--\\
  return (
    <aside className="selection-label">
      <section className={`${blockName}-foreground`}>
        <LabelSelection
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: 'colours',
          }}
          style={{
            view: pickerView,
            shade: '~dark~',
            color: '(mono)',
            clarity: '⟨lucid⟩',
            text: '(mono)',
          }}
          cases={{
            type: '{select}',
            list: ['(mono)', '(red)', '(green)', '(blue)', '(purple)', '(orange)', '(pink)', '(yellow)', '(brown)', '(turquoise)'], //--|🠈 {select} & {combo} only 🠈|--\\
          }}
          onChange={(event) => switchColors(event.target.value, 'selection')} //--|🠈 AI Code: Review Please 2026-10-30 · Recolours every <LabelSelection> except this one with the chosen colour 🠈|--\\
        />
        <div className="select">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: 'luc-sel-dar',
            }}
            style={{
              view: 'mid-lef', //--|🠈 AI Code: Review Please 2026-10-30 · ~dark~: round around the caret on the left, sharp on the right 🠈|--\\

              shade: '~dark~',
              color: '(mono)',
              clarity: '⟨lucid⟩',
              text: typePlaceholder('{select}'),
            }}
            cases={{
              type: '{select}',
              list: voidspireList, //--|🠈 {select} & {combo} only 🠈|--\\
            }}
          />
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: 'opa-sel-dar',
            }}
            style={{
              view: 'mid-lef', //--|🠈 AI Code: Review Please 2026-10-30 · ~dark~: round around the caret on the left, sharp on the right 🠈|--\\

              shade: '~dark~',
              color: '(mono)',
              clarity: '⟨opaque⟩',
              text: typePlaceholder('{select}'),
            }}
            cases={{
              type: '{select}',
              list: voidspireList, //--|🠈 {select} & {combo} only 🠈|--\\
            }}
          />

          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: 'luc-sel-lig',
            }}
            style={{
              view: 'mid-rig', //--|🠈 AI Code: Review Please 2026-10-30 · ~light~: sharp on the left, round around the caret on the right 🠈|--\\

              shade: '~light~',
              color: '(mono)',
              clarity: '⟨lucid⟩',
              text: typePlaceholder('{select}'),
            }}
            cases={{
              type: '{select}',
              list: silverveilList, //--|🠈 {select} & {combo} only 🠈|--\\
            }}
          />
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: 'opa-sel-lig',
            }}
            style={{
              view: 'mid-rig', //--|🠈 AI Code: Review Please 2026-10-30 · ~light~: sharp on the left, round around the caret on the right 🠈|--\\

              shade: '~light~',
              color: '(mono)',
              clarity: '⟨opaque⟩',
              text: typePlaceholder('{select}'),
            }}
            cases={{
              type: '{select}',
              list: silverveilList, //--|🠈 {select} & {combo} only 🠈|--\\
            }}
          />
        </div>
        <div className="combo">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: 'luc-com-dar',
            }}
            style={{
              view: 'mid-lef', //--|🠈 AI Code: Review Please 2026-10-30 · ~dark~: round around the caret on the left, sharp on the right 🠈|--\\

              shade: '~dark~',
              color: '(mono)',
              clarity: '⟨lucid⟩',
              text: typePlaceholder('{combo}'),
            }}
            cases={{
              type: '{combo}',
              list: voidspireList, //--|🠈 {select} & {combo} only 🠈|--\\
            }}
          />
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: 'opa-com-dar',
            }}
            style={{
              view: 'mid-lef', //--|🠈 AI Code: Review Please 2026-10-30 · ~dark~: round around the caret on the left, sharp on the right 🠈|--\\

              shade: '~dark~',
              color: '(mono)',
              clarity: '⟨opaque⟩',
              text: typePlaceholder('{combo}'),
            }}
            cases={{
              type: '{combo}',
              list: voidspireList, //--|🠈 {select} & {combo} only 🠈|--\\
            }}
          />

          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: 'luc-com-lig',
            }}
            style={{
              view: 'mid-rig', //--|🠈 AI Code: Review Please 2026-10-30 · ~light~: sharp on the left, round around the caret on the right 🠈|--\\

              shade: '~light~',
              color: '(mono)',
              clarity: '⟨lucid⟩',
              text: typePlaceholder('{combo}'),
            }}
            cases={{
              type: '{combo}',
              list: silverveilList, //--|🠈 {select} & {combo} only 🠈|--\\
            }}
          />
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: 'opa-com-lig',
            }}
            style={{
              view: 'mid-rig', //--|🠈 AI Code: Review Please 2026-10-30 · ~light~: sharp on the left, round around the caret on the right 🠈|--\\

              shade: '~light~',
              color: '(mono)',
              clarity: '⟨opaque⟩',
              text: typePlaceholder('{combo}'),
            }}
            cases={{
              type: '{combo}',
              list: silverveilList, //--|🠈 {select} & {combo} only 🠈|--\\
            }}
          />
        </div>
        <div className="number">
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: 'luc-num-dar',
            }}
            style={{
              view: 'mid-lef', //--|🠈 AI Code: Review Please 2026-10-30 · ~dark~: round around the caret on the left, sharp on the right 🠈|--\\

              shade: '~dark~',
              color: '(mono)',
              clarity: '⟨lucid⟩',
              text: typePlaceholder('{number}'),
            }}
            cases={{
              type: '{number}',
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: 'opa-num-dar',
            }}
            style={{
              view: 'mid-lef', //--|🠈 AI Code: Review Please 2026-10-30 · ~dark~: round around the caret on the left, sharp on the right 🠈|--\\

              shade: '~dark~',
              color: '(mono)',
              clarity: '⟨opaque⟩',
              text: typePlaceholder('{number}'),
            }}
            cases={{
              type: '{number}',
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />

          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: 'luc-num-lig',
            }}
            style={{
              view: 'mid-rig', //--|🠈 AI Code: Review Please 2026-10-30 · ~light~: sharp on the left, round around the caret on the right 🠈|--\\

              shade: '~light~',
              color: '(mono)',
              clarity: '⟨lucid⟩',
              text: typePlaceholder('{number}'),
            }}
            cases={{
              type: '{number}',
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
          <LabelSelection
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: 'opa-num-lig',
            }}
            style={{
              view: 'mid-rig', //--|🠈 AI Code: Review Please 2026-10-30 · ~light~: sharp on the left, round around the caret on the right 🠈|--\\

              shade: '~light~',
              color: '(mono)',
              clarity: '⟨opaque⟩',
              text: typePlaceholder('{number}'),
            }}
            cases={{
              type: '{number}',
              min: 0, //--|🠈 {number} only 🠈|--\\
              max: 24, //--|🠈 Hours in a day 🠈|--\\
              step: 0.5, //--|🠈 Half-hour steps 🠈|--\\
            }}
          />
        </div>
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
}
export default SelectionLabel;
