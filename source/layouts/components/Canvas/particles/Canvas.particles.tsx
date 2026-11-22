//--|🠊 Canvas.particles.tsx 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-22 · development-portfolio_3.00's Canvas.propel: a picture broken into dots that fly home and dodge the pointer 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useRef } from 'react';

//--|🠋 Components 🠋|--\\

//--|🠋 Functions 🠋|--\\
import createClass, { propelParticles } from './Canvas_particles';

export interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    shade: '~dark~' | '~light~';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)';
    clarity: '⟨lucid⟩' | '⟨opaque⟩'; //--|🠈 AI Code: Review Please 2026-11-22 · ⟨opaque⟩ hidden until hovered, ⟨lucid⟩ shown and running from the start on ArticleLoading's card 🠈|--\\
  };
  cases: {
    image: string; //--|🠈 A loadAsset() path: an .svg of plain <path>s, a .gif that writes itself, or a .png/.jpg read by its transparency 🠈|--\\
    still?: string; //--|🠈 Optional: shown instead of a .gif where the browser has no ImageDecoder 🠈|--\\
    fps?: number; //--|🠈 Optional: a .gif's speed when the file has no real delay of its own (0 or 10ms); 15 if left out 🠈|--\\
  };
}

export function CanvasParticles({ info, style, cases }: TheseProps) {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    return propelParticles(canvasRef.current as HTMLCanvasElement, cases.image, cases.still || '', cases.fps || 15); //--|🠈 Stops the loop, the fetch and the pointer listeners on the flip and when the page closes 🠈|--\\
  }, [pageName, blockName, labelName, cases.image, cases.still, cases.fps]);

  return <canvas ref={canvasRef} className={`${labelName}-${blockName}_canvas-particles ${createClass(style)} downplay`} aria-hidden="true"></canvas>;
}
export default CanvasParticles;
