//--|🠊 SpotlightFigure.tsx 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-22 · Moved from canvas-components/spotlight-canvas/: <CanvasSpotlight> is now <FigureSpotlight>, the first page of the [archive] <Figure> group 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-22 · Copied from MeteoritesCanvas.tsx; the <canvas> sits centred in the midground <figure>, the pickers in the foreground, the dropdowns hidden until hovered 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import FigureSpotlight from '../../../../../../components/Figure/spotlight/Figure.spotlight';
import LabelSelection from '../../../../../../components/Label/selection/Label.selection';

//--|🠋 Functions 🠋|--\\
import { loadAsset } from '../../../../../../tools/utilities';
import { switchColors, switchShades } from './SpotlightFunctions';

interface InfoProps {
  info: {
    blockName: string;
    labelName: string;
    pageName: string;
  };
}
function SpotlightFigure({ info }: InfoProps) {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';

  let pickerColor = '(orange)' as '(orange)';
  let pickerShade = '~dark~' as '~dark~';
  useEffect(() => {
    switchColors(pickerColor, 'spotlight');
    //--|🠊 AI Code: Review Please 2026-11-22 · The (colour) and (shade) dropdowns step back until they're hovered, the toggles stay visible, the same as the canvas pages 🠈|--\\
    const spotlightPickers = document.querySelectorAll(
      `#${pageName}-${blockName} aside[class="spotlight-figure"] section[class*="foreground"] label[class*="colours"], #${pageName}-${blockName} aside[class="spotlight-figure"] section[class*="foreground"] label[class*="shades"]`, //--|🠈 AI Code: Review Please 2026-11-22 · The two dropdowns; the toggles stay visible 🠈|--\\
    ) as NodeListOf<HTMLLabelElement>;
    for (let i = 0; i < spotlightPickers.length; i++) {
      spotlightPickers[i].classList.add('downplay');
    }
  }, [pageName, blockName, labelName]);

  return (
    <aside className="spotlight-figure">
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
          onChange={(event) => switchColors(event.target.value, 'spotlight')} //--|🠈 Recolours every <FigureSpotlight> on this page 🠈|--\\
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
          onChange={(event) => switchShades(event.target.value, 'spotlight')} //--|🠈 Swaps the tones to the other shade 🠈|--\\
        />
      </section>
      <figure className={`${blockName}-midground`}>
        <FigureSpotlight
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: 'spotlight',
          }}
          style={{
            shade: pickerShade,
            color: '(mono)',
          }}
          cases={{
            image: loadAsset('-png-', '/archive-images/résumé-images/profile-pictures/money-picture') as string, //--|🠈 The 2.00 circular-profile photo (same file), a transparent cut-out, so the head rises over the disk 🠈|--\\
          }}
        />
      </figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
}
export default SpotlightFigure;
