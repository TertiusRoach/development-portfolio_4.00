//--|🠊 Figure_spotlight.ts 🠈|--\\
//--|🠊 The 2.00 résumé's .home-profile (default-main.scss), measured at 1080px high: the outer ring is 861px, so every size below is a share of 861 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { TheseProps } from './Figure.spotlight';
import { abbrShade, abbrColor } from '../../components';

//--|🠋 Generate Classes 🠋|--\\
function createClass(style: TheseProps['style']): string {
  const classShade = abbrShade(style.shade);
  const classColor = abbrColor(style.color);
  return `${classShade}_${classColor}`;
}

//--|🠋 Start the Spin 🠋|--\\
export const spinSpotlight = (canvas: HTMLCanvasElement, image: string): (() => void) => {
  const context = canvas.getContext('2d') as CanvasRenderingContext2D;
  const stillMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches as boolean;
  const portrait = new Image();
  portrait.src = image;

  let hoverTarget = 0 as number; //--|🠈 0 at rest, 1 while the pointer is on the circle 🠈|--\\
  let ringsNow = 0 as number; //--|🠈 The rings open over 0.5s, the old figure::before transition 🠈|--\\
  let photoNow = 0 as number; //--|🠈 The photo grows over 5s, the old img transition 🠈|--\\
  let lastTime = 0 as number;
  let frameId = 0 as number;
  let drawFrame = (time: number): void => {
    let elapsed = (lastTime === 0 ? 0 : time - lastTime) as number;
    lastTime = time;
    ringsNow = easeTowards(ringsNow, hoverTarget, elapsed / 500);
    photoNow = easeTowards(photoNow, hoverTarget, elapsed / 5000);
    drawSpotlight(canvas, context, portrait, smoothStep(ringsNow), smoothStep(photoNow), stillMotion ? 0 : time); //--|🠈 Reduced motion freezes the spin, the hover still answers 🠈|--\\
    frameId = requestAnimationFrame(drawFrame);
  };
  let enterSpotlight = (): void => {
    hoverTarget = 1;
  };
  let leaveSpotlight = (): void => {
    hoverTarget = 0;
  };
  let resizeObserver = new ResizeObserver(() => {
    sizeCanvas(canvas, context);
  });

  canvas.addEventListener('mouseenter', enterSpotlight);
  canvas.addEventListener('mouseleave', leaveSpotlight);
  resizeObserver.observe(canvas);
  frameId = requestAnimationFrame(drawFrame);
  return () => {
    cancelAnimationFrame(frameId);
    resizeObserver.disconnect();
    canvas.removeEventListener('mouseenter', enterSpotlight);
    canvas.removeEventListener('mouseleave', leaveSpotlight);
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
let drawSpotlight = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, portrait: HTMLImageElement, rings: number, photo: number, time: number): void => {
  const width = canvas.clientWidth as number;
  const height = canvas.clientHeight as number;
  const computed = getComputedStyle(canvas) as CSSStyleDeclaration;
  const barLight = computed.getPropertyValue('--spotlight-one') as string; //--|🠈 The old $primary-light 25% 🠈|--\\
  const barDark = computed.getPropertyValue('--spotlight-two') as string; //--|🠈 The old $primary-dark 75% 🠈|--\\
  const inner = computed.getPropertyValue('--spotlight-inner') as string; //--|🠈 The old figure::after, the page's own $primary-dark 🠈|--\\
  const glow = computed.getPropertyValue('--spotlight-glow') as string; //--|🠈 The old drop-shadow, $primary-medium at 25% 🠈|--\\
  const unit = (Math.min(width, height) / 861) as number; //--|🠈 One old pixel 🠈|--\\
  const rem = (16 * unit) as number;
  const centreX = (width / 2) as number;
  const centreY = (height / 2) as number;

  context.clearRect(0, 0, width, height);

  //--|🠊 .outer-circle: 861px, inset -1rem 6rem → -1.25rem 0 on hover, clockwise every 90s; ::after inset 0.25rem 0 leaves crescents top & bottom 🠈|--\\
  drawRing(context, {
    centreX: centreX,
    centreY: centreY,
    size: 861 * unit,
    barWidth: 861 * unit - 12 * rem * (1 - rings),
    barHeight: 861 * unit + 2 * rem + 0.5 * rem * rings,
    angle: ((time / 90000) % 1) * Math.PI * 2,
    flip: 1,
    insetX: 0,
    insetY: 0.25 * rem,
    barLight: barLight,
    barDark: barDark,
    inner: inner,
    glow: '',
    glowBlur: 0,
  });

  //--|🠊 .inner-circle: 674px, inset -0.5rem 4rem → -1.25rem 0 on hover, anti-clockwise every 45s; ::after inset 0 0.25rem leaves crescents left & right, with a 4rem glow 🠈|--\\
  drawRing(context, {
    centreX: centreX,
    centreY: centreY,
    size: 674 * unit,
    barWidth: 674 * unit - 8 * rem * (1 - rings),
    barHeight: 674 * unit + 1 * rem + 1.5 * rem * rings,
    angle: -((time / 45000) % 1) * Math.PI * 2,
    flip: -1,
    insetX: 0.25 * rem,
    insetY: 0,
    barLight: barLight,
    barDark: barDark,
    inner: inner,
    glow: glow,
    glowBlur: 4 * rem,
  });

  //--|🠊 .profile-circle img: 75% of 80vh, 85% on hover, unclipped, lifted by the old margin-bottom: 5% 🠈|--\\
  let photoSize = ((648 + 86 * photo) * unit) as number;
  switch (true) {
    case portrait.complete && portrait.naturalWidth > 0:
      context.drawImage(portrait, centreX - photoSize / 2, centreY - photoSize / 2 - 22 * unit, photoSize, photoSize);
      break;
    default:
      break; //--|🠈 Still loading: the rings turn on their own until the photo arrives 🠈|--\\
  }
};

//--|🠋 Draw One Ring 🠋|--\\
interface RingParts {
  centreX: number;
  centreY: number;
  size: number;
  barWidth: number;
  barHeight: number;
  angle: number;
  flip: 1 | -1; //--|🠈 90deg on the outer ring, -90deg on the inner one 🠈|--\\
  insetX: number;
  insetY: number;
  barLight: string;
  barDark: string;
  inner: string;
  glow: string;
  glowBlur: number;
}
let drawRing = (context: CanvasRenderingContext2D, ring: RingParts): void => {
  //--|🠊 The old figure was its own layer, so the ring is drawn whole, then its glow is laid underneath 🠈|--\\
  context.save();
  switch (true) {
    case ring.glowBlur > 0:
      context.shadowColor = ring.glow;
      context.shadowBlur = ring.glowBlur;
      break;
    default:
      break;
  }
  //--|🠊 The disk, figure::after: an ellipse, because its inset only trims one axis 🠈|--\\
  context.beginPath();
  context.ellipse(ring.centreX, ring.centreY, ring.size / 2 - ring.insetX, ring.size / 2 - ring.insetY, 0, 0, Math.PI * 2);
  context.fillStyle = ring.inner;
  context.fill();
  context.restore();

  //--|🠊 The bar, figure::before, clipped to the figure's circle and drawn only where the disk doesn't cover it 🠈|--\\
  context.save();
  context.beginPath();
  context.arc(ring.centreX, ring.centreY, ring.size / 2, 0, Math.PI * 2);
  context.ellipse(ring.centreX, ring.centreY, ring.size / 2 - ring.insetX, ring.size / 2 - ring.insetY, 0, 0, Math.PI * 2, true);
  context.clip('evenodd');
  context.translate(ring.centreX, ring.centreY);
  context.rotate(ring.angle);
  let bar = context.createLinearGradient((-ring.flip * ring.barWidth) / 2, 0, (ring.flip * ring.barWidth) / 2, 0);
  bar.addColorStop(0.25, ring.barLight);
  bar.addColorStop(0.75, ring.barDark);
  context.fillStyle = bar;
  context.fillRect(-ring.barWidth / 2, -ring.barHeight / 2, ring.barWidth, ring.barHeight);
  context.restore();
};

//--|🠋 Easing 🠋|--\\
let easeTowards = (now: number, target: number, step: number): number => {
  switch (true) {
    case now < target:
      return Math.min(target, now + step);
    case now > target:
      return Math.max(target, now - step);
    default:
      return now;
  }
};
let smoothStep = (progress: number): number => {
  return progress * progress * (3 - 2 * progress); //--|🠈 Slow in, slow out, close to the old cubic-bezier(0.4, 0, 0.2, 1) 🠈|--\\
};

export default createClass;
