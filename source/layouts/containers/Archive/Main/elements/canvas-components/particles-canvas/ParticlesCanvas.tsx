//--|🠊 ParticlesCanvas.tsx 🠈|--\\
//--|🠊 Copied from SpotlightCanvas.tsx; the <canvas> sits centred in the midground <figure>, the pickers in the foreground, the dropdowns hidden until hovered 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import CanvasParticles from '../../../../../../components/Canvas/particles/Canvas.particles';
import LabelSelection from '../../../../../../components/Label/selection/Label.selection';

//--|🠋 Functions 🠋|--\\
import { loadAsset } from '../../../../../../tools/utilities';
import { switchColors, switchShades } from './ParticlesFunctions';

interface InfoProps {
  info: {
    blockName: string;
    labelName: string;
    pageName: string;
  };
}
function ParticlesCanvas({ info }: InfoProps) {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';

  let pickerColor = '(orange)' as '(orange)';
  let pickerShade = '~dark~' as '~dark~';
  useEffect(() => {
    switchColors(pickerColor, 'particles');
    //--|🠊 The (colour) and (shade) dropdowns step back until they're hovered, the toggles stay visible, the same on all four canvas pages 🠈|--\\
    const particlesPickers = document.querySelectorAll(
      `#${pageName}-${blockName} aside[class="particles-canvas"] section[class*="foreground"] label[class*="colours"], #${pageName}-${blockName} aside[class="particles-canvas"] section[class*="foreground"] label[class*="shades"]`, //--|🠈 The two dropdowns; the toggles stay visible 🠈|--\\
    ) as NodeListOf<HTMLLabelElement>;
    for (let i = 0; i < particlesPickers.length; i++) {
      particlesPickers[i].classList.add('downplay');
    }
  }, [pageName, blockName, labelName]);

  return (
    <aside className="particles-canvas">
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
          onChange={(event) => switchColors(event.target.value, 'particles')} //--|🠈 Recolours every <CanvasParticles> on this page 🠈|--\\
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
          onChange={(event) => switchShades(event.target.value, 'particles')} //--|🠈 Swaps the tones to the other shade 🠈|--\\
        />
      </section>
      <figure className={`${blockName}-midground`}>
        <CanvasParticles
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: 'particles',
          }}
          style={{
            shade: pickerShade,
            color: '(mono)',
          }}
          cases={{
            image: loadAsset('-gif-', '/trinity-apps/1280x720%2C%2015fps/1280x720%2C%2015fps_black') as string, //--|🠈 The TraLogFin logo .gif in 720p: T and F slide in, L drops, all three join; only its transparency is read 🠈|--\\
            still: loadAsset('-svg-', '/tralogfin-application/pick-a-page/logo-black') as string, //--|🠈 The logo .svg, for browsers without ImageDecoder 🠈|--\\
            fps: 15, //--|🠈 The file has no delay of its own; its folder says 15fps 🠈|--\\
          }}
        />
      </figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
}
export default ParticlesCanvas;
