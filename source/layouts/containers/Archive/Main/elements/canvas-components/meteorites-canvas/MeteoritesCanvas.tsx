//--|🠊 MeteoritesCanvas.tsx 🠈|--\\
//--|🠊 Copied from PlaceholderDivision.tsx; the <canvas> sits in the midground <figure>, the pickers in the foreground 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import CanvasMeteorites from '../../../../../../components/Canvas/meteorites/Canvas.meteorites';
import LabelSelection from '../../../../../../components/Label/selection/Label.selection';

//--|🠋 Functions 🠋|--\\
import { switchColors, switchShades } from './MeteoritesFunctions';

interface InfoProps {
  info: {
    blockName: string;
    labelName: string;
    pageName: string;
  };
}
function MeteoritesCanvas({ info }: InfoProps) {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';

  let pickerColor = '(orange)' as '(orange)';
  let pickerShade = '~dark~' as '~dark~';
  useEffect(() => {
    switchColors(pickerColor, 'meteorites');
    //--|🠊 The (colour) and (shade) dropdowns step back until they're hovered, the toggles stay visible, the same on all four canvas pages 🠈|--\\
    const meteoritesPickers = document.querySelectorAll(
      `#${pageName}-${blockName} aside[class="meteorites-canvas"] section[class*="foreground"] label[class*="colours"], #${pageName}-${blockName} aside[class="meteorites-canvas"] section[class*="foreground"] label[class*="shades"]`, //--|🠈 The two dropdowns; the toggles stay visible 🠈|--\\
    ) as NodeListOf<HTMLLabelElement>;
    for (let i = 0; i < meteoritesPickers.length; i++) {
      meteoritesPickers[i].classList.add('downplay');
    }
  }, [pageName, blockName, labelName]);

  return (
    <aside className="meteorites-canvas">
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
          onChange={(event) => switchColors(event.target.value, 'meteorites')} //--|🠈 Recolours every <CanvasMeteorites> on this page 🠈|--\\
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
          onChange={(event) => switchShades(event.target.value, 'meteorites')} //--|🠈 Swaps the tones to the other shade 🠈|--\\
        />
      </section>
      <figure className={`${blockName}-midground`}>
        <CanvasMeteorites
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: 'meteorites',
          }}
          style={{
            shade: pickerShade,
            color: '(mono)',
          }}
        />
      </figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
}
export default MeteoritesCanvas;
