//--|🠊 Canvas_meteorites.ts 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-22 · rainEffect() from University Tracker's index-main.ts: same counts, widths, speeds and three tones, drawn every frame 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { TheseProps } from './Canvas.meteorites';
import { abbrShade, abbrColor } from '../../components';

interface Meteorite {
  left: number; //--|🠈 0 to 1, a share of the width, so a resize keeps the spread 🠈|--\\
  width: number; //--|🠈 0.2px to 5.2px 🠈|--\\
  delay: number; //--|🠈 0s to 20s ahead, the old negative animation-delay 🠈|--\\
  duration: number; //--|🠈 4s to 9s per fall 🠈|--\\
  layer: 'front' | 'back';
}

//--|🠋 Generate Classes 🠋|--\\
function createClass(style: TheseProps['style']): string {
  const classShade = abbrShade(style.shade);
  const classColor = abbrColor(style.color);
  return `${classShade}_${classColor}`;
}

//--|🠋 Start the Fall 🠋|--\\
export const fallMeteorites = (canvas: HTMLCanvasElement): (() => void) => {
  const context = canvas.getContext('2d') as CanvasRenderingContext2D;
  const stillMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches as boolean;
  const meteorites = [...createMeteorites(10, 'back'), ...createMeteorites(65, 'front')] as Array<Meteorite>; //--|🠈 The old rain-bottom (10, blurred) and rain-top (65) 🠈|--\\

  let frameId = 0 as number;
  let drawFrame = (time: number): void => {
    drawMeteorites(canvas, context, meteorites, time);
    if (!stillMotion) {
      frameId = requestAnimationFrame(drawFrame);
    }
  };
  let resizeObserver = new ResizeObserver(() => {
    sizeCanvas(canvas, context);
    drawMeteorites(canvas, context, meteorites, performance.now()); //--|🠈 A resize clears the canvas, so reduced motion gets its still frame back 🠈|--\\
  });

  resizeObserver.observe(canvas);
  frameId = requestAnimationFrame(drawFrame);
  return () => {
    cancelAnimationFrame(frameId);
    resizeObserver.disconnect();
  };
};

//--|🠋 Build the Meteorites 🠋|--\\
let createMeteorites = (amount: number, layer: 'front' | 'back'): Array<Meteorite> => {
  let meteorites = [] as Array<Meteorite>;
  for (let i = 0; i < amount; i++) {
    meteorites.push({
      left: Math.random(),
      width: 0.2 + Math.random() * 5,
      delay: Math.random() * 20,
      duration: 4 + Math.random() * 5,
      layer: layer,
    });
  }
  return meteorites;
};

//--|🠋 Match the Screen 🠋|--\\
let sizeCanvas = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void => {
  const pixelRatio = window.devicePixelRatio || 1;
  canvas.width = Math.round(canvas.clientWidth * pixelRatio); //--|🠈 Attributes, not styles: the drawing surface in real pixels, so phones stay sharp 🠈|--\\
  canvas.height = Math.round(canvas.clientHeight * pixelRatio);
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0); //--|🠈 Draw in CSS pixels from here on 🠈|--\\
};

//--|🠋 Draw One Frame 🠋|--\\
let drawMeteorites = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, meteorites: Array<Meteorite>, time: number): void => {
  const width = canvas.clientWidth as number;
  const height = canvas.clientHeight as number;
  const computed = getComputedStyle(canvas) as CSSStyleDeclaration;
  const length = parseFloat(computed.getPropertyValue('--meteor-length')) as number; //--|🠈 Set per screen step in Canvas.meteorites.scss 🠈|--\\
  const tones = [
    computed.getPropertyValue('--meteor-one'),
    computed.getPropertyValue('--meteor-two'),
    computed.getPropertyValue('--meteor-three'),
  ] as Array<string>; //--|🠈 The old nth-child(3n + 1), (3n + 2) and (3n + 3) 🠈|--\\

  context.clearRect(0, 0, width, height);
  for (let i = 0; i < meteorites.length; i++) {
    let meteorite = meteorites[i] as Meteorite;
    let progress = (((time / 1000 + meteorite.delay) / meteorite.duration) % 1) as number;
    let axisX = (meteorite.left * width) as number;
    let axisY = (-length + progress * (height + length)) as number; //--|🠈 Enters above the top, leaves below the bottom 🠈|--\\
    let tone = tones[i % 3] as string;

    let gradient = context.createLinearGradient(0, axisY, 0, axisY + length);
    gradient.addColorStop(0, fadeTone(tone)); //--|🠈 The same colour at 0 alpha, so the tail never greys out 🠈|--\\
    gradient.addColorStop(1, tone);

    context.filter = meteorite.layer === 'back' ? 'blur(2px)' : 'none';
    context.fillStyle = gradient;
    context.beginPath();
    context.roundRect(axisX, axisY, meteorite.width, length, [0, 0, 5, 5]); //--|🠈 The old border-bottom radii 🠈|--\\
    context.fill();
  }
  context.filter = 'none';
};

//--|🠋 Clear Tone 🠋|--\\
let fadeTone = (tone: string): string => {
  //--|🠊 The registered properties compute to 'rgb(r, g, b)', so the channels are always there 🠈|--\\
  const channels = tone.match(/[\d.]+/g) as RegExpMatchArray | null;
  switch (true) {
    case channels === null:
      return 'rgba(0, 0, 0, 0)'; //--|🠈 Before the stylesheet arrives there's no tone yet 🠈|--\\
    default:
      return `rgba(${(channels as RegExpMatchArray)[0]}, ${(channels as RegExpMatchArray)[1]}, ${(channels as RegExpMatchArray)[2]}, 0)`;
  }
};

export default createClass;
