//--|🠊 TextareaLabel.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import LabelTextarea from '../../../../../../components/Label/textarea/Label.textarea';
import LabelSelection from '../../../../../../components/Label/selection/Label.selection';

//--|🠋 Functions 🠋|--\\
import { checkScreen } from '../../../../../../../scripts';
import typePlaceholder, { listInputs, switchColors } from './TextareaFunctions';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function TextareaLabel({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'textarea';
  const pageName = info.pageName as 'components';

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let inputList = listInputs() as Array<string>; //--|🠈 Every {input} <fieldset>'s data-input 🠈|--\\
  let pickerView = 'mid-cen' as 'mid-cen' | 'cen-mid'; //--|🠈 The colour picker: change by hand to 'cen-mid' to round both ends 🠈|--\\
  switch (getOrientation) {
    case 'landscape':
      return (
        <aside className="textarea-label">
          <section className={`${blockName}-foreground`}>
            <LabelSelection
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: 'colours',
              }}
              style={{
                view: pickerView as 'mid-cen' | 'cen-mid',
                shade: '~dark~',
                color: '(mono)',
                clarity: '⟨lucid⟩',
                text: '(mono)',
              }}
              cases={{
                type: '{select}',
                list: ['(mono)', '(red)', '(green)', '(blue)', '(purple)', '(orange)', '(pink)', '(yellow)', '(brown)', '(turquoise)'], //--|🠈 {select} & {combo} only 🠈|--\\
              }}
              onChange={(event) => switchColors(event.target.value, 'textarea')} //--|🠈 Recolours every <LabelTextarea> with the chosen colour 🠈|--\\
            />
            <div className="text">
              <LabelTextarea
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-tex-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: typePlaceholder('{text}'),
                }}
                cases={{
                  type: '{text}',
                }}
              />
              <LabelTextarea
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-tex-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: typePlaceholder('{text}'),
                }}
                cases={{
                  type: '{text}',
                }}
              />

              <LabelTextarea
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-tex-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: typePlaceholder('{text}'),
                }}
                cases={{
                  type: '{text}',
                }}
              />
              <LabelTextarea
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-tex-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: typePlaceholder('{text}'),
                }}
                cases={{
                  type: '{text}',
                }}
              />
            </div>
            <div className="input">
              {/*--|🠊 Every {input} sits in its own <fieldset>, so each one tests a different data-input 🠈|--*/}
              <fieldset className="luc-inp-dar" data-input={inputList[0]}>
                <LabelTextarea
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                    labelName: 'luc-inp-dar',
                  }}
                  style={{
                    shade: '~dark~',
                    color: '(mono)',
                    clarity: '⟨lucid⟩',
                    text: typePlaceholder('{input}', inputList[0]),
                  }}
                  cases={{
                    type: '{input}',
                  }}
                />
              </fieldset>
              <fieldset className="opa-inp-dar" data-input={inputList[1]}>
                <LabelTextarea
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                    labelName: 'opa-inp-dar',
                  }}
                  style={{
                    shade: '~dark~',
                    color: '(mono)',
                    clarity: '⟨opaque⟩',
                    text: typePlaceholder('{input}', inputList[1]),
                  }}
                  cases={{
                    type: '{input}',
                  }}
                />
              </fieldset>

              <fieldset className="luc-inp-lig" data-input={inputList[2]}>
                <LabelTextarea
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                    labelName: 'luc-inp-lig',
                  }}
                  style={{
                    shade: '~light~',
                    color: '(mono)',
                    clarity: '⟨lucid⟩',
                    text: typePlaceholder('{input}', inputList[2]),
                  }}
                  cases={{
                    type: '{input}',
                  }}
                />
              </fieldset>
              <fieldset className="opa-inp-lig" data-input={inputList[3]}>
                <LabelTextarea
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                    labelName: 'opa-inp-lig',
                  }}
                  style={{
                    shade: '~light~',
                    color: '(mono)',
                    clarity: '⟨opaque⟩',
                    text: typePlaceholder('{input}', inputList[3]),
                  }}
                  cases={{
                    type: '{input}',
                  }}
                />
              </fieldset>
            </div>
            {/*--|🠊 A <fieldset>, not a <div>, so typing moves to the next {block} like a security code 🠈|--*/}
            <fieldset className="block">
              <LabelTextarea
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-blo-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: typePlaceholder('{block}'),
                }}
                cases={{
                  type: '{block}',
                }}
              />
              <LabelTextarea
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-blo-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: typePlaceholder('{block}'),
                }}
                cases={{
                  type: '{block}',
                }}
              />

              <LabelTextarea
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-blo-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: typePlaceholder('{block}'),
                }}
                cases={{
                  type: '{block}',
                }}
              />
              <LabelTextarea
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-blo-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: typePlaceholder('{block}'),
                }}
                cases={{
                  type: '{block}',
                }}
              />
            </fieldset>
          </section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
    case 'portrait':
      return (
        <aside className="textarea-label">
          <section className={`${blockName}-foreground`}>
            <LabelSelection
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: 'colours',
              }}
              style={{
                view: pickerView as 'mid-cen' | 'cen-mid',
                shade: '~dark~',
                color: '(mono)',
                clarity: '⟨lucid⟩',
                text: '(mono)',
              }}
              cases={{
                type: '{select}',
                list: ['(mono)', '(red)', '(green)', '(blue)', '(purple)', '(orange)', '(pink)', '(yellow)', '(brown)', '(turquoise)'], //--|🠈 {select} & {combo} only 🠈|--\\
              }}
              onChange={(event) => switchColors(event.target.value, 'textarea')} //--|🠈 Recolours every <LabelTextarea> with the chosen colour 🠈|--\\
            />
            <div className="text">
              <LabelTextarea
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-tex-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: typePlaceholder('{text}'),
                }}
                cases={{
                  type: '{text}',
                }}
              />
              <LabelTextarea
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-tex-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: typePlaceholder('{text}'),
                }}
                cases={{
                  type: '{text}',
                }}
              />

              <LabelTextarea
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-tex-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: typePlaceholder('{text}'),
                }}
                cases={{
                  type: '{text}',
                }}
              />
              <LabelTextarea
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-tex-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: typePlaceholder('{text}'),
                }}
                cases={{
                  type: '{text}',
                }}
              />
            </div>
            <div className="input">
              {/*--|🠊 Every {input} sits in its own <fieldset>, so each one tests a different data-input 🠈|--*/}
              <fieldset className="luc-inp-dar" data-input={inputList[0]}>
                <LabelTextarea
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                    labelName: 'luc-inp-dar',
                  }}
                  style={{
                    shade: '~dark~',
                    color: '(mono)',
                    clarity: '⟨lucid⟩',
                    text: typePlaceholder('{input}', inputList[0]),
                  }}
                  cases={{
                    type: '{input}',
                  }}
                />
              </fieldset>
              <fieldset className="opa-inp-dar" data-input={inputList[1]}>
                <LabelTextarea
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                    labelName: 'opa-inp-dar',
                  }}
                  style={{
                    shade: '~dark~',
                    color: '(mono)',
                    clarity: '⟨opaque⟩',
                    text: typePlaceholder('{input}', inputList[1]),
                  }}
                  cases={{
                    type: '{input}',
                  }}
                />
              </fieldset>

              <fieldset className="luc-inp-lig" data-input={inputList[2]}>
                <LabelTextarea
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                    labelName: 'luc-inp-lig',
                  }}
                  style={{
                    shade: '~light~',
                    color: '(mono)',
                    clarity: '⟨lucid⟩',
                    text: typePlaceholder('{input}', inputList[2]),
                  }}
                  cases={{
                    type: '{input}',
                  }}
                />
              </fieldset>
              <fieldset className="opa-inp-lig" data-input={inputList[3]}>
                <LabelTextarea
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                    labelName: 'opa-inp-lig',
                  }}
                  style={{
                    shade: '~light~',
                    color: '(mono)',
                    clarity: '⟨opaque⟩',
                    text: typePlaceholder('{input}', inputList[3]),
                  }}
                  cases={{
                    type: '{input}',
                  }}
                />
              </fieldset>
            </div>
            {/*--|🠊 A <fieldset>, not a <div>, so typing moves to the next {block} like a security code 🠈|--*/}
            <fieldset className="block">
              <LabelTextarea
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-blo-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: typePlaceholder('{block}'),
                }}
                cases={{
                  type: '{block}',
                }}
              />
              <LabelTextarea
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-blo-dar',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: typePlaceholder('{block}'),
                }}
                cases={{
                  type: '{block}',
                }}
              />

              <LabelTextarea
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'luc-blo-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: typePlaceholder('{block}'),
                }}
                cases={{
                  type: '{block}',
                }}
              />
              <LabelTextarea
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opa-blo-lig',
                }}
                style={{
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: typePlaceholder('{block}'),
                }}
                cases={{
                  type: '{block}',
                }}
              />
            </fieldset>
          </section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
  }
}
export default TextareaLabel;
