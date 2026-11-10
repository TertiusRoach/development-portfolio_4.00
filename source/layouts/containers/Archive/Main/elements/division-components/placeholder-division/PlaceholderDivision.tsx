//--|🠊 PlaceholderDivision.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../../components/Division/fullscreen/Division.fullscreen';
import DivisionPlaceholder from '../../../../../../components/Division/placeholder/Division.placeholder';
import LabelSelection from '../../../../../../components/Label/selection/Label.selection';

//--|🠋 Functions 🠋|--\\
import { loadAsset } from '../../../../../../tools/utilities';
import { stripBrackets } from '../../../../../../tools/conversions';
import { switchColors } from './PlaceholderFunctions';

interface InfoProps {
  info: {
    blockName: string;
    labelName: string;
    pageName: string;
  };
}
function PlaceholderDivision({ info }: InfoProps) {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';

  let pickerColor = '(orange)' as '(orange)';
  useEffect(() => {
    switchColors(pickerColor, 'placeholder');
    //--|🠊 AI Code: Review Please 2026-11-10 · The colour picker steps back until it's hovered 🠈|--\\
    const colourPickers = document.querySelectorAll(
      `#${pageName}-${blockName} aside[class="placeholder-division"] label[class*="colours"]`,
    ) as NodeListOf<HTMLLabelElement>;
    for (let i = 0; i < colourPickers.length; i++) {
      colourPickers[i].classList.add('downplay');
    }
  }, [pageName, blockName, labelName]);

  return (
    <aside className="placeholder-division">
      <section className={`${blockName}-foreground`}>
        <LabelSelection
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: 'colours',
          }}
          style={{
            view: 'mid-cen',
            shade: '~dark~',
            color: '(mono)',
            clarity: '⟨opaque⟩',
            text: pickerColor,
          }}
          cases={{
            type: '{select}',
            list: ['(mono)', '(red)', '(green)', '(blue)', '(purple)', '(orange)', '(pink)', '(yellow)', '(brown)', '(turquoise)'], //--|🠈 {select} & {combo} only 🠈|--\\
          }}
          onChange={(event) => switchColors(event.target.value, 'placeholder')} //--|🠈 Recolours every <DivisionPlaceholder> with the chosen colour 🠈|--\\
        />
        <DivisionFullscreen
          //--|🠊 <div class="placeholders-main_fullscreen-default"/> 🠈|--\\
          cases={{
            axis: '[y]',
            show: 1 as number,
            call: DivisionPreview as React.ComponentType<InfoProps>,
          }}
          info={{
            labelName: 'preview',
            blockName: info.blockName as '<main>',
            pageName: info.pageName as '[components]',
          }}
          onWheel={(_event: React.WheelEvent<HTMLDivElement>): void => {
            /*
            if (event.deltaY < 0) {
              scrollSide(event.currentTarget as HTMLDivElement, 'view-prev');
            } else if (event.deltaY > 0) {
              scrollSide(event.currentTarget as HTMLDivElement, 'view-next');
            }
            */
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
}

const DivisionPreview: React.FC<InfoProps> = ({ info }) => {
  return (
    <>
      <DivisionPlaceholder
        info={{
          pageName: info.pageName,
          labelName: info.labelName,
          blockName: info.blockName,
        }}
        style={{
          view: '-top-',
          shade: '~dark~',
          color: '(mono)',
          clarity: '⟨lucid⟩',
          text: `[Archive]`,
          image: loadAsset('-svg-', '/archive-images/my-signature/signature-icon/primary-medium'),
        }}
      />
    </>
  );
};
export default PlaceholderDivision;
