//--|🠊 ParticlesCanvas.tsx 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-22 · Copied from SpotlightCanvas.tsx; the <canvas> sits centred in the midground <figure>, the pickers in the foreground, always visible 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import CanvasParticles from '../../../../../../components/Canvas/particles/Canvas.particles';
import LabelSelection from '../../../../../../components/Label/selection/Label.selection';
import LabelSwitching from '../../../../../../components/Label/switching/Label.switching';

//--|🠋 Functions 🠋|--\\
import { loadAsset } from '../../../../../../tools/utilities';
import { switchColors, switchShades, toggleClarity } from './ParticlesFunctions';

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
        <div className="toggles">
          {/*--|🠊 AI Code: Review Please 2026-11-22 · The shade picker and the clarity toggle side by side at the bottom 🠈|--*/}
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
          <fieldset
            //--|🠊 AI Code: Review Please 2026-11-22 · Copied from RotationsCanvas.tsx's clarify-rotations toggle; opens on Opaque, the hover version 🠈|--\\
            className="clarify-particles"
            onChange={(event: React.FormEvent<HTMLFieldSetElement>): void => {
              //--|🠊 The radio's change bubbles up to the <fieldset>, which hands itself to toggleClarity() 🠈|--\\
              toggleClarity(event.currentTarget, 'particles');
            }}
          >
            <LabelSwitching
              cases={{
                mark: false,
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
                labelName: 'lucid-particles',
              }}
            />
            <LabelSwitching
              cases={{
                mark: true,
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
                labelName: 'opaque-particles',
              }}
            />
          </fieldset>
        </div>
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
            clarity: '⟨opaque⟩', //--|🠈 Matches the toggle, which opens on Opaque: hidden until hovered 🠈|--\\
          }}
          cases={{
            image: loadAsset('-gif-', '/trinity-apps/3840x2160%2C%2025fps/3840x2160%2C%2025fps_black') as string, //--|🠈 The TraLogFin logo .gif in 4K: T and F slide in, L drops, all three join; only its transparency is read 🠈|--\\
            still: loadAsset('-svg-', '/tralogfin-application/pick-a-page/logo-black') as string, //--|🠈 The logo .svg, for browsers without ImageDecoder 🠈|--\\
            fps: 25, //--|🠈 The file has no delay of its own; its folder says 25fps 🠈|--\\
          }}
        />
      </figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
}
export default ParticlesCanvas;
