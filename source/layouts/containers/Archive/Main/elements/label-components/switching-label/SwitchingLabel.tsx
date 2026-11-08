//--|🠊 SwitchingLabel.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import LabelSelection from '../../../../../../components/Label/selection/Label.selection';
import LabelSwitching from '../../../../../../components/Label/switching/Label.switching';

//--|🠋 Functions 🠋|--\\
import { checkScreen } from '../../../../../../tools/synching';
import { switchColors } from './SwitchingFunctions';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function SwitchingLabel({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = info.blockName as 'main';
  const pageName = info.pageName as 'components';
  const labelName = info.labelName as 'switching';

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let pickerView = 'mid-cen' as 'mid-cen' | 'cen-mid'; //--|🠈 The colour picker: change by hand to 'cen-mid' to round both ends 🠈|--\\
  switch (getOrientation) {
    case 'landscape':
      return (
        <aside className="switching-label">
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
              onChange={(event) => switchColors(event.target.value, 'switching')} //--|🠈 Recolours every <LabelSwitching> with the chosen colour 🠈|--\\
            />
            <div className="toggle">
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-tog-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                }}
                cases={{
                  type: '{toggle}',
                }}
              />
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-tog-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                }}
                cases={{
                  type: '{toggle}',
                }}
              />

              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-tog-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                }}
                cases={{
                  type: '{toggle}',
                }}
              />
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-tog-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                }}
                cases={{
                  type: '{toggle}',
                }}
              />
            </div>
            <div className="check">
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-che-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                }}
                cases={{
                  type: '{check}',
                }}
              />
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-che-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                }}
                cases={{
                  type: '{check}',
                }}
              />

              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-che-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                }}
                cases={{
                  type: '{check}',
                }}
              />
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-che-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                }}
                cases={{
                  type: '{check}',
                }}
              />
            </div>
            {/*--|🠊 A <fieldset>, not a <div>, so the four {option}s share one data-group 🠈|--*/}
            <fieldset className="option">
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-opt-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: 'Lucid Dark', //--|🠈 {option}: the value, read aloud 🠈|--\\
                }}
                cases={{
                  type: '{option}',
                }}
              />
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-opt-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: 'Opaque Dark', //--|🠈 {option}: the value, read aloud 🠈|--\\
                }}
                cases={{
                  type: '{option}',
                }}
              />

              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-opt-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: 'Lucid Light', //--|🠈 {option}: the value, read aloud 🠈|--\\
                }}
                cases={{
                  type: '{option}',
                }}
              />
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-opt-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: 'Opaque Light', //--|🠈 {option}: the value, read aloud 🠈|--\\
                }}
                cases={{
                  type: '{option}',
                }}
              />
            </fieldset>
            <div className="chip">
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-chi-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: 'Lucid Dark', //--|🠈 {chip}: the words 🠈|--\\
                }}
                cases={{
                  type: '{chip}',
                }}
              />
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-chi-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: 'Opaque Dark', //--|🠈 {chip}: the words 🠈|--\\
                }}
                cases={{
                  type: '{chip}',
                }}
              />

              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-chi-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: 'Lucid Light', //--|🠈 {chip}: the words 🠈|--\\
                }}
                cases={{
                  type: '{chip}',
                }}
              />
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-chi-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: 'Opaque Light', //--|🠈 {chip}: the words 🠈|--\\
                }}
                cases={{
                  type: '{chip}',
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
        <aside className="switching-label">
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
              onChange={(event) => switchColors(event.target.value, 'switching')} //--|🠈 Recolours every <LabelSwitching> with the chosen colour 🠈|--\\
            />
            <div className="toggle">
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-tog-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                }}
                cases={{
                  type: '{toggle}',
                }}
              />
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-tog-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                }}
                cases={{
                  type: '{toggle}',
                }}
              />

              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-tog-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                }}
                cases={{
                  type: '{toggle}',
                }}
              />
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-tog-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                }}
                cases={{
                  type: '{toggle}',
                }}
              />
            </div>
            <div className="check">
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-che-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                }}
                cases={{
                  type: '{check}',
                }}
              />
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-che-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                }}
                cases={{
                  type: '{check}',
                }}
              />

              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-che-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                }}
                cases={{
                  type: '{check}',
                }}
              />
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-che-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                }}
                cases={{
                  type: '{check}',
                }}
              />
            </div>
            {/*--|🠊 A <fieldset>, not a <div>, so the four {option}s share one data-group 🠈|--*/}
            <fieldset className="option">
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-opt-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: 'Lucid Dark', //--|🠈 {option}: the value, read aloud 🠈|--\\
                }}
                cases={{
                  type: '{option}',
                }}
              />
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-opt-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: 'Opaque Dark', //--|🠈 {option}: the value, read aloud 🠈|--\\
                }}
                cases={{
                  type: '{option}',
                }}
              />

              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-opt-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: 'Lucid Light', //--|🠈 {option}: the value, read aloud 🠈|--\\
                }}
                cases={{
                  type: '{option}',
                }}
              />
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-opt-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: 'Opaque Light', //--|🠈 {option}: the value, read aloud 🠈|--\\
                }}
                cases={{
                  type: '{option}',
                }}
              />
            </fieldset>
            <div className="chip">
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-chi-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: 'Lucid Dark', //--|🠈 {chip}: the words 🠈|--\\
                }}
                cases={{
                  type: '{chip}',
                }}
              />
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-chi-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: 'Opaque Dark', //--|🠈 {chip}: the words 🠈|--\\
                }}
                cases={{
                  type: '{chip}',
                }}
              />

              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-chi-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: 'Lucid Light', //--|🠈 {chip}: the words 🠈|--\\
                }}
                cases={{
                  type: '{chip}',
                }}
              />
              <LabelSwitching
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-chi-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: 'Opaque Light', //--|🠈 {chip}: the words 🠈|--\\
                }}
                cases={{
                  type: '{chip}',
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
export default SwitchingLabel;
