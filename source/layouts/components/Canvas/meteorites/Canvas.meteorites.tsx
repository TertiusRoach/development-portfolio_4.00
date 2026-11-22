//--|🠊 Canvas.meteorites.tsx 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-22 · The University Tracker rain (rain-main), redrawn on a <canvas> instead of 75 <i> tags 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useRef } from 'react';

//--|🠋 Components 🠋|--\\

//--|🠋 Functions 🠋|--\\
import createClass, { fallMeteorites } from './Canvas_meteorites';

export interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    shade: '~dark~' | '~light~';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)';
  };
}

export function CanvasMeteorites({ info, style }: TheseProps) {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    return fallMeteorites(canvasRef.current as HTMLCanvasElement); //--|🠈 Stops the loop on the flip and when the page closes 🠈|--\\
  }, [pageName, blockName, labelName]);

  return <canvas ref={canvasRef} className={`${labelName}-${blockName}_canvas-meteorites ${createClass(style)} downplay`} aria-hidden="true"></canvas>;
}
export default CanvasMeteorites;
