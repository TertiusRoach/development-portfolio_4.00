//--|🠊 Canvas.rotations.tsx 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-22 · <FigureRotation>'s four cross-fading corners, redrawn as one gradient that keeps turning 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useRef } from 'react';

//--|🠋 Components 🠋|--\\

//--|🠋 Functions 🠋|--\\
import createClass, { turnRotations } from './Canvas_rotations';

export interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    shade: '~dark~' | '~light~';
    clarity: '⟨lucid⟩' | '⟨opaque⟩'; //--|🠈 AI Code: Review Please 2026-11-22 · ⟨opaque⟩ is see-through: only the turning light is left 🠈|--\\
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)';
  };
  cases: {
    turn: number; //--|🠈 Seconds for one full turn: 960 is <FigureRotation>'s 240s per corner 🠈|--\\
  };
}

export function CanvasRotations({ info, style, cases }: TheseProps) {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    return turnRotations(canvasRef.current as HTMLCanvasElement, cases.turn); //--|🠈 Stops the loop on the flip and when the page closes 🠈|--\\
  }, [pageName, blockName, labelName, cases.turn]);

  return <canvas ref={canvasRef} className={`${labelName}-${blockName}_canvas-rotations ${createClass(style)} downplay`} aria-hidden="true"></canvas>;
}
export default CanvasRotations;
