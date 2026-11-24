//--|🠊 Canvas_rotations.ts 🠈|--\\
//--|🠊 Figure.rotation.scss: the 45° → 135° → 225° → 315° corners and the left & right edge fades, drawn every frame 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { TheseProps } from './Canvas.rotations';
import { abbrShade, abbrColor, abbrClarity } from '../../components';

//--|🠋 Generate Classes 🠋|--\\
function createClass(style: TheseProps['style']): string {
  const classShade = abbrShade(style.shade);
  const classColor = abbrColor(style.color);
  const classClarity = abbrClarity(style.clarity);
  return `${classShade}_${classColor}_${classClarity}`;
}

//--|🠋 Start the Turn 🠋|--\\
export const turnRotations = (canvas: HTMLCanvasElement, turn: number): (() => void) => {
  const context = canvas.getContext('2d') as CanvasRenderingContext2D;
  const stillMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches as boolean;

  let awake = false as boolean; //--|🠈 Asleep and hidden (.downplay) until the mouse is over it 🠈|--\\
  let startTime = 0 as number;
  let frameId = 0 as number;
  let drawFrame = (time: number): void => {
    switch (true) {
      case !awake:
        return; //--|🠈 Asleep: a frame already asked for draws nothing 🠈|--\\
      default:
        break;
    }
    drawRotations(canvas, context, turn, stillMotion ? 0 : Math.max(0, time - startTime)); //--|🠈 Reduced motion freezes the clock on the first corner, top-right, but still repaints a colour change 🠈|--\\
    frameId = requestAnimationFrame(drawFrame);
  };
  let wakeCanvas = (): void => {
    awake = true;
    startTime = performance.now(); //--|🠈 Reset: the light starts again from the top-right corner 🠈|--\\
    canvas.classList.replace('downplay', 'highlight');
    frameId = requestAnimationFrame(drawFrame);
  };
  let sleepCanvas = (): void => {
    awake = false;
    cancelAnimationFrame(frameId); //--|🠈 Disabled: no more frames until the mouse comes back 🠈|--\\
    canvas.classList.replace('highlight', 'downplay');
  };
  let watchPointer = (event: PointerEvent): void => {
    //--|🠊 The whole page is watched, not the canvas: it may sit under the foreground or let clicks through 🠈|--\\
    const box = canvas.getBoundingClientRect();
    const inside = (box.width > 0 && event.clientX >= box.left && event.clientX <= box.right && event.clientY >= box.top && event.clientY <= box.bottom) as boolean;
    switch (true) {
      case inside && !awake:
        wakeCanvas();
        break;
      case !inside && awake:
        sleepCanvas();
        break;
      default:
        break;
    }
  };
  let losePage = (): void => {
    switch (true) {
      case awake:
        sleepCanvas(); //--|🠈 The mouse left the window 🠈|--\\
        break;
      default:
        break;
    }
  };
  let resizeObserver = new ResizeObserver(() => {
    sizeCanvas(canvas, context);
  });

  resizeObserver.observe(canvas);
  document.addEventListener('pointermove', watchPointer); //--|🠈 Pointer events: a mouse, a pen or a finger; the browser decides how a touch hovers 🠈|--\\
  document.addEventListener('pointerdown', watchPointer); //--|🠈 A tap on the canvas wakes it, a tap elsewhere puts it to sleep 🠈|--\\
  document.documentElement.addEventListener('mouseleave', losePage);
  return () => {
    awake = false;
    cancelAnimationFrame(frameId);
    resizeObserver.disconnect();
    document.removeEventListener('pointermove', watchPointer);
    document.removeEventListener('pointerdown', watchPointer);
    document.documentElement.removeEventListener('mouseleave', losePage);
  };
};

//--|🠋 Match the Screen 🠋|--\\
let sizeCanvas = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void => {
  const pixelRatio = window.devicePixelRatio || 1;
  canvas.width = Math.round(canvas.clientWidth * pixelRatio); //--|🠈 Attributes, not styles: the drawing surface in real pixels, so phones stay sharp 🠈|--\\
  canvas.height = Math.round(canvas.clientHeight * pixelRatio);
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0); //--|🠈 Draw in CSS pixels from here on 🠈|--\\
};

//--|🠋 Draw One Frame 🠋|--\\
//--|🠊 Three soft layers, back to front: the ground, the light turning past the corners, the wide calm centre on top; the old side fades are a quiet vignette 🠈|--\\
let drawRotations = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, turn: number, time: number): void => {
  const width = canvas.clientWidth as number;
  const height = canvas.clientHeight as number;
  const computed = getComputedStyle(canvas) as CSSStyleDeclaration;
  const centre = computed.getPropertyValue('--rotation-one') as string; //--|🠈 The calm middle 🠈|--\\
  const ground = computed.getPropertyValue('--rotation-two') as string; //--|🠈 Everything the light and the centre don't reach 🠈|--\\
  const corner = computed.getPropertyValue('--rotation-three') as string; //--|🠈 The light that turns 🠈|--\\
  const gutter = parseFloat(computed.getPropertyValue('--rotation-gutter')) as number; //--|🠈 The old grid's outer column, set per screen step 🠈|--\\
  const edge = (gutter + (width - gutter * 2) / 3) as number; //--|🠈 The old fades covered the gutter and one of the three middle columns 🠈|--\\
  const groundClarity = parseFloat(computed.getPropertyValue('--rotation-ground')) as number; //--|🠈 ⟨lucid⟩ 1, ⟨opaque⟩ 0: the ground and its vignette 🠈|--\\
  const lightClarity = parseFloat(computed.getPropertyValue('--rotation-light')) as number; //--|🠈 ⟨lucid⟩ 1, ⟨opaque⟩ 0.6: the turning light 🠈|--\\
  const centreClarity = parseFloat(computed.getPropertyValue('--rotation-centre')) as number; //--|🠈 ⟨lucid⟩ 1, ⟨opaque⟩ 0: the calm centre 🠈|--\\
  const spread = 1.25 as number; //--|🠈 The centre reaches a quarter past the edges, so only its soft tail is ever seen 🠈|--\\

  //--|🠊 CSS angles: 0° points up and turns clockwise, so 45° is the top-right corner 🠈|--\\
  let degrees = (45 + ((time / 1000 / turn) % 1) * 360) as number;
  let radians = ((degrees * Math.PI) / 180) as number;
  let axisX = Math.sin(radians) as number;
  let axisY = -Math.cos(radians) as number;

  //--|🠊 1. The ground, cleared first, because ⟨opaque⟩ lets the page show through 🠈|--\\
  context.clearRect(0, 0, width, height);
  context.fillStyle = clearTone(ground, groundClarity);
  context.fillRect(0, 0, width, height);

  //--|🠊 2. The light, on an ellipse through all four corners: at 45° it sits exactly on the top-right one 🠈|--\\
  let lightX = (width / 2 + (axisX * width) / Math.SQRT2) as number;
  let lightY = (height / 2 + (axisY * height) / Math.SQRT2) as number;
  let light = context.createRadialGradient(lightX, lightY, 0, lightX, lightY, Math.max(width, height));
  softStops(light, corner, 1 * lightClarity, 2.5);
  context.fillStyle = light;
  context.fillRect(0, 0, width, height);

  //--|🠊 3. The centre, stretched to the screen's own shape so it spreads evenly to all four sides 🠈|--\\
  context.save();
  context.translate(width / 2, height / 2);
  context.scale(width / 2, height / 2);
  let middle = context.createRadialGradient(0, 0, 0, 0, 0, spread);
  softStops(middle, centre, 0.9 * centreClarity, 1.5);
  context.fillStyle = middle;
  context.fillRect(-1, -1, 2, 2);
  context.restore();

  //--|🠊 4. The old fade-left & fade-right figcaptions, now the ground tone at 30%, so the sides settle instead of glare 🠈|--\\
  let fadeLeft = context.createLinearGradient(0, 0, edge, 0);
  softStops(fadeLeft, ground, 0.3 * groundClarity, 3);
  context.fillStyle = fadeLeft;
  context.fillRect(0, 0, edge, height);

  let fadeRight = context.createLinearGradient(width, 0, width - edge, 0);
  softStops(fadeRight, ground, 0.3 * groundClarity, 3);
  context.fillStyle = fadeRight;
  context.fillRect(width - edge, 0, edge, height);
};

//--|🠋 Soft Stops 🠋|--\\
let softStops = (gradient: CanvasGradient, tone: string, strength: number, bend: number): void => {
  //--|🠊 strength × (1 − t²)^bend: flat at the start, no hard rim at the end; a higher bend lets go sooner 🠈|--\\
  let steps = [0, 0.2, 0.4, 0.6, 0.8, 1] as Array<number>;
  for (let i = 0; i < steps.length; i++) {
    gradient.addColorStop(steps[i], clearTone(tone, strength * Math.pow(1 - steps[i] * steps[i], bend)));
  }
};

//--|🠋 Clear Tone 🠋|--\\
let clearTone = (tone: string, alpha: number): string => {
  //--|🠊 The registered properties compute to 'rgb(r, g, b)', so the channels are always there 🠈|--\\
  const channels = tone.match(/[\d.]+/g) as RegExpMatchArray | null;
  switch (true) {
    case channels === null:
      return 'rgba(0, 0, 0, 0)'; //--|🠈 Before the stylesheet arrives there's no tone yet 🠈|--\\
    default:
      return `rgba(${(channels as RegExpMatchArray)[0]}, ${(channels as RegExpMatchArray)[1]}, ${(channels as RegExpMatchArray)[2]}, ${alpha})`;
  }
};

export default createClass;
