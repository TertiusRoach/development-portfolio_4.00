//--|🠊 TextareaLabel.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React from 'react';

//--|🠋 Components 🠋|--\\
import LabelTextarea, { TheseProps } from '../../../../../../components/Label/textarea/Label.textarea';
import ButtonDefault from '../../../../../../components/Button/default/Button.default';

//--|🠋 Functions 🠋|--\\
import { loadAsset } from '../../../../../../../scripts';
import listPlaceholders, { listInputs } from './TextareaFunctions';

//--|🠋 Styles 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function TextareaLabel({ info }: InfoProps) {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'textarea';
  const pageName = info.pageName as 'components';

  let voidspireList = listPlaceholders('voidspire') as Array<string>; //--|🠈 AI Code: Review Please 2026-10-29 15:53 · Left, every ~dark~ <LabelTextarea> 🠈|--\\
  let silverveilList = listPlaceholders('silverveil') as Array<string>; //--|🠈 AI Code: Review Please 2026-10-29 15:53 · Right, every ~light~ <LabelTextarea> 🠈|--\\
  const showType: TheseProps['cases']['type'] = '{text}'; //--|🠈 AI Code: Review Please 2026-10-30 · Change by hand to '{input}' or '{block}' until the dropdown exists 🠈|--\\
  let inputList = listInputs() as Array<string>; //--|🠈 AI Code: Review Please 2026-10-30 · Every <fieldset>'s data-input, only {input} reads it 🠈|--\\
  let copyImage = loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/copy') as string;
  return (
    <aside className="textarea-label">
      <section className={`${blockName}-foreground`}>
        {/*--|🠊 AI Code: Review Please 2026-10-30 · Every <LabelTextarea> sits in a <fieldset>, so data-input can be tested 🠈|--*/}
        <fieldset className="dar-mon" data-input={inputList[0]}>
          <LabelTextarea
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(mono)',
              clarity: '⟨opaque⟩',
              text: voidspireList[0],
            }}
            cases={{
              type: showType,
            }}
          />
        </fieldset>
        <fieldset className="dar-red" data-input={inputList[1]}>
          <LabelTextarea
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(red)',
              clarity: '⟨opaque⟩',
              text: voidspireList[1],
            }}
            cases={{
              type: showType,
            }}
          />
        </fieldset>
        <fieldset className="dar-gre" data-input={inputList[2]}>
          <LabelTextarea
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(green)',
              clarity: '⟨opaque⟩',
              text: voidspireList[2],
            }}
            cases={{
              type: showType,
            }}
          />
        </fieldset>
        <fieldset className="dar-blu" data-input={inputList[3]}>
          <LabelTextarea
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(blue)',
              clarity: '⟨opaque⟩',
              text: voidspireList[3],
            }}
            cases={{
              type: showType,
            }}
          />
        </fieldset>
        <fieldset className="dar-pur" data-input={inputList[4]}>
          <LabelTextarea
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(purple)',
              clarity: '⟨opaque⟩',
              text: voidspireList[4],
            }}
            cases={{
              type: showType,
            }}
          />
        </fieldset>
        <fieldset className="dar-ora" data-input={inputList[5]}>
          <LabelTextarea
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(orange)',
              clarity: '⟨opaque⟩',
              text: voidspireList[5],
            }}
            cases={{
              type: showType,
            }}
          />
        </fieldset>
        <fieldset className="dar-pin" data-input={inputList[6]}>
          <LabelTextarea
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(pink)',
              clarity: '⟨opaque⟩',
              text: voidspireList[6],
            }}
            cases={{
              type: showType,
            }}
          />
        </fieldset>
        <fieldset className="dar-yel" data-input={inputList[7]}>
          <LabelTextarea
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(yellow)',
              clarity: '⟨opaque⟩',
              text: voidspireList[7],
            }}
            cases={{
              type: showType,
            }}
          />
        </fieldset>
        <fieldset className="dar-bro" data-input={inputList[8]}>
          <LabelTextarea
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(brown)',
              clarity: '⟨opaque⟩',
              text: voidspireList[8],
            }}
            cases={{
              type: showType,
            }}
          />
        </fieldset>
        <fieldset className="dar-tur" data-input={inputList[9]}>
          <LabelTextarea
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(turquoise)',
              clarity: '⟨opaque⟩',
              text: voidspireList[9],
            }}
            cases={{
              type: showType,
            }}
          />
        </fieldset>
        {/*--|🠊 AI Code: Review Please 2026-10-30 · Every <LabelTextarea> sits in a <fieldset>, so data-input can be tested 🠈|--*/}
        <fieldset className="lig-mon" data-input={inputList[0]}>
          <LabelTextarea
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(mono)',
              clarity: '⟨opaque⟩',
              text: silverveilList[0],
            }}
            cases={{
              type: showType,
            }}
          />
        </fieldset>
        <fieldset className="lig-red" data-input={inputList[1]}>
          <LabelTextarea
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(red)',
              clarity: '⟨opaque⟩',
              text: silverveilList[1],
            }}
            cases={{
              type: showType,
            }}
          />
        </fieldset>
        <fieldset className="lig-gre" data-input={inputList[2]}>
          <LabelTextarea
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(green)',
              clarity: '⟨opaque⟩',
              text: silverveilList[2],
            }}
            cases={{
              type: showType,
            }}
          />
        </fieldset>
        <fieldset className="lig-blu" data-input={inputList[3]}>
          <LabelTextarea
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(blue)',
              clarity: '⟨opaque⟩',
              text: silverveilList[3],
            }}
            cases={{
              type: showType,
            }}
          />
        </fieldset>
        <fieldset className="lig-pur" data-input={inputList[4]}>
          <LabelTextarea
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(purple)',
              clarity: '⟨opaque⟩',
              text: silverveilList[4],
            }}
            cases={{
              type: showType,
            }}
          />
        </fieldset>
        <fieldset className="lig-ora" data-input={inputList[5]}>
          <LabelTextarea
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(orange)',
              clarity: '⟨opaque⟩',
              text: silverveilList[5],
            }}
            cases={{
              type: showType,
            }}
          />
        </fieldset>
        <fieldset className="lig-pin" data-input={inputList[6]}>
          <LabelTextarea
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(pink)',
              clarity: '⟨opaque⟩',
              text: silverveilList[6],
            }}
            cases={{
              type: showType,
            }}
          />
        </fieldset>
        <fieldset className="lig-yel" data-input={inputList[7]}>
          <LabelTextarea
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(yellow)',
              clarity: '⟨opaque⟩',
              text: silverveilList[7],
            }}
            cases={{
              type: showType,
            }}
          />
        </fieldset>
        <fieldset className="lig-bro" data-input={inputList[8]}>
          <LabelTextarea
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(brown)',
              clarity: '⟨opaque⟩',
              text: silverveilList[8],
            }}
            cases={{
              type: showType,
            }}
          />
        </fieldset>
        <fieldset className="lig-tur" data-input={inputList[9]}>
          <LabelTextarea
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(turquoise)',
              clarity: '⟨opaque⟩',
              text: silverveilList[9],
            }}
            cases={{
              type: showType,
            }}
          />
        </fieldset>

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
            clarity: '⟨lucid⟩',
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
            clarity: '⟨lucid⟩',
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
            clarity: '⟨lucid⟩',
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
            clarity: '⟨lucid⟩',
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
            clarity: '⟨lucid⟩',
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
            clarity: '⟨lucid⟩',
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
            clarity: '⟨lucid⟩',
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
            clarity: '⟨lucid⟩',
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
            clarity: '⟨lucid⟩',
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
            clarity: '⟨lucid⟩',
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
            clarity: '⟨lucid⟩',
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
            clarity: '⟨lucid⟩',
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
            clarity: '⟨lucid⟩',
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
            clarity: '⟨lucid⟩',
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
            clarity: '⟨lucid⟩',
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
            clarity: '⟨lucid⟩',
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
            clarity: '⟨lucid⟩',
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
            clarity: '⟨lucid⟩',
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
            clarity: '⟨lucid⟩',
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
}
export default TextareaLabel;
