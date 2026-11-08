//--|🠊 SelectionLabel.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import LabelSelection from '../../../../../../components/Label/selection/Label.selection';

//--|🠋 Functions 🠋|--\\
import { checkScreen } from '../../../../../../tools/synching';
import listCharacters, { typePlaceholder, switchColors } from './SelectionFunctions';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function SelectionLabel({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'selection';
  const pageName = info.pageName as 'components';

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let voidspireList = listCharacters('voidspire') as Array<string>; //--|🠈 Every ~dark~ {select} & {combo} 🠈|--\\
  let silverveilList = listCharacters('silverveil') as Array<string>; //--|🠈 Every ~light~ {select} & {combo} 🠈|--\\
  let pickerView = 'mid-cen' as 'mid-cen' | 'cen-mid'; //--|🠈 The colour picker: change by hand to 'cen-mid' to round both ends 🠈|--\\
  switch (getOrientation) {
    case 'landscape':
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
              onChange={(event) => switchColors(event.target.value, 'selection')} //--|🠈 Recolours every <LabelSelection> except this one with the chosen colour 🠈|--\\
            />
            <div className="select">
              <LabelSelection
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-sel-dar',
                }}
                style={{
                  view: 'mid-lef', //--|🠈 ~dark~: round around the caret on the left, sharp on the right 🠈|--\\
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
                  view: 'mid-lef', //--|🠈 ~dark~: round around the caret on the left, sharp on the right 🠈|--\\
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
                  view: 'mid-rig', //--|🠈 ~light~: sharp on the left, round around the caret on the right 🠈|--\\
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
                  view: 'mid-rig', //--|🠈 ~light~: sharp on the left, round around the caret on the right 🠈|--\\
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
                  view: 'mid-lef', //--|🠈 ~dark~: round around the caret on the left, sharp on the right 🠈|--\\
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
                  view: 'mid-lef', //--|🠈 ~dark~: round around the caret on the left, sharp on the right 🠈|--\\
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
                  view: 'mid-rig', //--|🠈 ~light~: sharp on the left, round around the caret on the right 🠈|--\\
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
                  view: 'mid-rig', //--|🠈 ~light~: sharp on the left, round around the caret on the right 🠈|--\\
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
                  view: 'mid-lef', //--|🠈 ~dark~: round around the caret on the left, sharp on the right 🠈|--\\
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: typePlaceholder('{number}'),
                }}
                cases={{
                  type: '{number}',
                }}
              />
              <LabelSelection
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-num-dar',
                }}
                style={{
                  view: 'mid-lef', //--|🠈 ~dark~: round around the caret on the left, sharp on the right 🠈|--\\
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: typePlaceholder('{number}'),
                }}
                cases={{
                  type: '{number}',
                }}
              />

              <LabelSelection
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-num-lig',
                }}
                style={{
                  view: 'mid-rig', //--|🠈 ~light~: sharp on the left, round around the caret on the right 🠈|--\\
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: typePlaceholder('{number}'),
                }}
                cases={{
                  type: '{number}',
                }}
              />
              <LabelSelection
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-num-lig',
                }}
                style={{
                  view: 'mid-rig', //--|🠈 ~light~: sharp on the left, round around the caret on the right 🠈|--\\
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: typePlaceholder('{number}'),
                }}
                cases={{
                  type: '{number}',
                }}
              />
            </div>
          </section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
    case 'portrait':
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
              onChange={(event) => switchColors(event.target.value, 'selection')} //--|🠈 Recolours every <LabelSelection> except this one with the chosen colour 🠈|--\\
            />
            <div className="select">
              <LabelSelection
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-sel-dar',
                }}
                style={{
                  view: 'mid-lef', //--|🠈 ~dark~: round around the caret on the left, sharp on the right 🠈|--\\
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
                  view: 'mid-lef', //--|🠈 ~dark~: round around the caret on the left, sharp on the right 🠈|--\\
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
                  view: 'mid-rig', //--|🠈 ~light~: sharp on the left, round around the caret on the right 🠈|--\\
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
                  view: 'mid-rig', //--|🠈 ~light~: sharp on the left, round around the caret on the right 🠈|--\\
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
                  view: 'mid-lef', //--|🠈 ~dark~: round around the caret on the left, sharp on the right 🠈|--\\
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
                  view: 'mid-lef', //--|🠈 ~dark~: round around the caret on the left, sharp on the right 🠈|--\\
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
                  view: 'mid-rig', //--|🠈 ~light~: sharp on the left, round around the caret on the right 🠈|--\\
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
                  view: 'mid-rig', //--|🠈 ~light~: sharp on the left, round around the caret on the right 🠈|--\\
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
                  view: 'mid-lef', //--|🠈 ~dark~: round around the caret on the left, sharp on the right 🠈|--\\
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: typePlaceholder('{number}'),
                }}
                cases={{
                  type: '{number}',
                }}
              />
              <LabelSelection
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-num-dar',
                }}
                style={{
                  view: 'mid-lef', //--|🠈 ~dark~: round around the caret on the left, sharp on the right 🠈|--\\
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: typePlaceholder('{number}'),
                }}
                cases={{
                  type: '{number}',
                }}
              />

              <LabelSelection
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-num-lig',
                }}
                style={{
                  view: 'mid-rig', //--|🠈 ~light~: sharp on the left, round around the caret on the right 🠈|--\\
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: typePlaceholder('{number}'),
                }}
                cases={{
                  type: '{number}',
                }}
              />
              <LabelSelection
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-num-lig',
                }}
                style={{
                  view: 'mid-rig', //--|🠈 ~light~: sharp on the left, round around the caret on the right 🠈|--\\
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: typePlaceholder('{number}'),
                }}
                cases={{
                  type: '{number}',
                }}
              />
            </div>
          </section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
  }
}
export default SelectionLabel;
