//--|🠊 RotationsCanvas.tsx 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-22 · Copied from MeteoritesCanvas.tsx; the <canvas> sits in the midground <figure>, the pickers in the foreground 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import CanvasRotations from '../../../../../../components/Canvas/rotations/Canvas.rotations';
import LabelSelection from '../../../../../../components/Label/selection/Label.selection';
import LabelSwitching from '../../../../../../components/Label/switching/Label.switching';

//--|🠋 Functions 🠋|--\\
import { switchColors, switchShades, toggleClarity } from './RotationsFunctions';

interface InfoProps {
  info: {
    blockName: string;
    labelName: string;
    pageName: string;
  };
}
function RotationsCanvas({ info }: InfoProps) {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';

  let pickerColor = '(orange)' as '(orange)';
  let pickerShade = '~light~' as '~light~'; //--|🠈 Opens on <FigureRotation>'s own recipe, white into -light into -dark 🠈|--\\
  useEffect(() => {
    switchColors(pickerColor, 'rotations');
    //--|🠊 AI Code: Review Please 2026-11-22 · The (colour) and (shade) dropdowns step back until they're hovered, the toggles stay visible, the same on all four canvas pages 🠈|--\\
    const rotationsPickers = document.querySelectorAll(
      `#${pageName}-${blockName} aside[class="rotations-canvas"] section[class*="foreground"] label[class*="colours"], #${pageName}-${blockName} aside[class="rotations-canvas"] section[class*="foreground"] label[class*="shades"]`, //--|🠈 AI Code: Review Please 2026-11-22 · The two dropdowns; the toggles stay visible 🠈|--\\
    ) as NodeListOf<HTMLLabelElement>;
    for (let i = 0; i < rotationsPickers.length; i++) {
      rotationsPickers[i].classList.add('downplay');
    }
  }, [pageName, blockName, labelName]);

  return (
    <aside className="rotations-canvas">
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
          onChange={(event) => switchColors(event.target.value, 'rotations')} //--|🠈 Recolours every <CanvasRotations> on this page 🠈|--\\
        />
        <LabelSelection
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: 'shades',
          }}
          style={{
            view: 'mid-cen',
            shade: '~dark~',
            color: '(mono)',
            clarity: '⟨opaque⟩',
            text: pickerShade,
          }}
          cases={{
            type: '{select}',
            list: ['~dark~', '~light~'], //--|🠈 {select} & {combo} only 🠈|--\\
          }}
          onChange={(event) => switchShades(event.target.value, 'rotations')} //--|🠈 Swaps the tones to the other shade 🠈|--\\
        />
        <fieldset
          //--|🠊 AI Code: Review Please 2026-11-22 · Copied from DefaultButton.tsx's clarify-darkside toggle 🠈|--\\
          className="clarify-rotations"
          onChange={(event: React.FormEvent<HTMLFieldSetElement>): void => {
            //--|🠊 The radio's change bubbles up to the <fieldset>, which hands itself to toggleClarity() 🠈|--\\
            toggleClarity(event.currentTarget, 'rotations');
          }}
        >
          <LabelSwitching
            cases={{
              mark: true,
              type: '{option}',
            }}
            style={{
              shade: '~dark~',
              color: '(mono)',
              clarity: '⟨lucid⟩',
              text: 'Lucid', //--|🠈 {option}: the value toggleClarity() reads, and what a screen reader says 🠈|--\\
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: 'lucid-rotations',
            }}
          />
          <LabelSwitching
            cases={{
              mark: false,
              type: '{option}',
            }}
            style={{
              shade: '~dark~',
              color: '(mono)',
              clarity: '⟨opaque⟩',
              text: 'Opaque', //--|🠈 {option}: the value toggleClarity() reads, and what a screen reader says 🠈|--\\
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: 'opaque-rotations',
            }}
          />
        </fieldset>
      </section>
      <figure className={`${blockName}-midground`}>
        <CanvasRotations
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: 'rotations',
          }}
          style={{
            shade: pickerShade,
            color: '(mono)',
            clarity: '⟨lucid⟩', //--|🠈 Matches the toggle, which opens on Lucid 🠈|--\\
          }}
          cases={{
            turn: 60 as number, //--|🠈 One turn a minute, so the page shows it; an application would use 960 🠈|--\\
          }}
        />
      </figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
}
export default RotationsCanvas;
