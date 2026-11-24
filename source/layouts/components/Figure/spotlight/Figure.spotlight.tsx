//--|🠊 Figure.spotlight.tsx 🠈|--\\
//--|🠊 Was <CanvasSpotlight>: a <Figure> is a picture a script draws that's always on show, so it skips the <Canvas> hover-sleep rule; it still draws on a <canvas> 🠈|--\\
//--|🠊 development-portfolio_2.00's résumé profile: two rings turning opposite ways, the photo floating over them 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useRef } from 'react';

//--|🠋 Components 🠋|--\\

//--|🠋 Functions 🠋|--\\
import createClass, { spinSpotlight } from './Figure_spotlight';

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
  cases: {
    image: string; //--|🠈 A loadAsset() path to a cut-out photo, a transparent .png 🠈|--\\
  };
}

export function FigureSpotlight({ info, style, cases }: TheseProps) {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    return spinSpotlight(canvasRef.current as HTMLCanvasElement, cases.image); //--|🠈 Stops the loop and the hover listeners on the flip and when the page closes 🠈|--\\
  }, [pageName, blockName, labelName, cases.image]);

  return <canvas ref={canvasRef} className={`${labelName}-${blockName}_figure-spotlight ${createClass(style)}`} aria-hidden="true"></canvas>;
}
export default FigureSpotlight;
