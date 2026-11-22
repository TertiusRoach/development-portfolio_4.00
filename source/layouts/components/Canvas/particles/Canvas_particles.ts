//--|🠊 Canvas_particles.ts 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-22 · Canvas.propel.ts from 3.00: REPEL_SPEED 5, REPEL_RADIUS 50, RETURN_SPEED 0.1, PARTICLE_DIAMETER 6, measured at the 6px desktop dot 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-22 · Three kinds of picture: an .svg (Path2D, as before), a .gif (ImageDecoder, written live frame by frame) and any other image (.png, .jpg) 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { TheseProps } from './Canvas.particles';
import { abbrShade, abbrColor, abbrClarity } from '../../components';

interface Particle {
  originX: number; //--|🠈 Home: a dot's place in the picture 🠈|--\\
  originY: number;
  axisX: number; //--|🠈 Where it is now 🠈|--\\
  axisY: number;
  awayX: number; //--|🠈 Where it drifts while the .gif has cleared it 🠈|--\\
  awayY: number;
  point: number; //--|🠈 Its place on the grid, looked up in every .gif frame's ink 🠈|--\\
  present: boolean;
  scale: number; //--|🠈 0 to 1: a .gif's dot grows in and shrinks out 🠈|--\\
}
interface Picture {
  kind: 'shape' | 'image' | 'frames';
  paths: Array<Path2D>; //--|🠈 'shape': the .svg's <path>s 🠈|--\\
  image: HTMLImageElement | null; //--|🠈 'image': a .png, .jpg or the like 🠈|--\\
  bytes: ArrayBuffer | null; //--|🠈 'frames': the .gif itself, decoded again whenever the size changes 🠈|--\\
  width: number; //--|🠈 Its own size, so the picture keeps its shape 🠈|--\\
  height: number;
}
interface Playback {
  frameCount: number; //--|🠈 0 for a still picture 🠈|--\\
  frameTime: number; //--|🠈 Milliseconds per frame 🠈|--\\
  inked: Array<Uint8Array>; //--|🠈 One per .gif frame: 1 where a grid point is inked, so a dot can leave and come back as the letters move 🠈|--\\
}

//--|🠋 Generate Classes 🠋|--\\
function createClass(style: TheseProps['style']): string {
  const classShade = abbrShade(style.shade);
  const classColor = abbrColor(style.color);
  const classClarity = abbrClarity(style.clarity);
  return `${classShade}_${classColor}_${classClarity}`;
}

//--|🠋 Start the Propel 🠋|--\\
export const propelParticles = (canvas: HTMLCanvasElement, image: string, still: string, fps: number): (() => void) => {
  const context = canvas.getContext('2d') as CanvasRenderingContext2D;
  const stillMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches as boolean;

  let stopped = false as boolean;
  let awake = false as boolean; //--|🠈 AI Code: Review Please 2026-11-22 · Asleep and hidden (.downplay) until the mouse is over it: nothing loads, nothing moves 🠈|--\\
  let loading = false as boolean;
  let buildCount = 0 as number; //--|🠈 Every resize starts a new build; an older one that finishes late is thrown away 🠈|--\\
  let picture = null as Picture | null;
  let template = null as { particles: Array<Particle>; playback: Playback } | null; //--|🠈 The sampled dots, kept untouched: a .gif is decoded once per size, not on every hover 🠈|--\\
  let particles = [] as Array<Particle>;
  let playback = { frameCount: 0, frameTime: 1000 / fps, inked: [] } as Playback;
  let startTime = 0 as number; //--|🠈 The .gif starts from its first frame once the dots are ready 🠈|--\\
  let pointerX = Infinity as number;
  let pointerY = Infinity as number;
  let pointerInside = false as boolean;
  let frameId = 0 as number;
  let isLucid = (): boolean => canvas.className.includes('_luc'); //--|🠈 AI Code: Review Please 2026-11-22 · Read live, so the Lucid/Opaque toggle works without a reload 🠈|--\\

  let spawnParticles = (): void => {
    //--|🠊 Reset: fresh copies of the template, so the dots fly in again, or the .gif starts again from frame 0 🠈|--\\
    const width = canvas.clientWidth as number;
    const height = canvas.clientHeight as number;
    let fresh = [] as Array<Particle>;
    let ready = template as { particles: Array<Particle>; playback: Playback };
    for (let i = 0; i < ready.particles.length; i++) {
      let particle = ready.particles[i] as Particle;
      fresh.push({
        ...particle,
        axisX: stillMotion ? particle.originX : Math.random() * width, //--|🠈 3.00 started every dot somewhere random 🠈|--\\
        axisY: stillMotion ? particle.originY : Math.random() * height,
      });
    }
    particles = fresh;
    playback = ready.playback;
    startTime = performance.now();
  };
  let buildParticles = async (): Promise<void> => {
    buildCount++;
    const thisBuild = buildCount as number;
    switch (true) {
      case picture === null:
        return; //--|🠈 The picture hasn't arrived yet 🠈|--\\
      default:
        break;
    }
    try {
      const built = await sampleParticles(canvas, picture as Picture, stillMotion, fps);
      switch (true) {
        case stopped || thisBuild !== buildCount:
          return; //--|🠈 The page closed, or a newer size took over while this one decoded 🠈|--\\
        default:
          template = built;
      }
      switch (true) {
        case awake:
          spawnParticles();
          break;
        default:
          break; //--|🠈 The mouse left while it decoded: the template waits for the next hover 🠈|--\\
      }
    } catch {
      console.log(`|🠊 Warning: <CanvasParticles> couldn't break ${image} into dots, components/Canvas/particles/Canvas_particles.ts 🠈|`);
    }
  };
  let drawFrame = (time: number): void => {
    switch (true) {
      case !awake:
        return; //--|🠈 Asleep: a frame already asked for draws nothing 🠈|--\\
      default:
        break;
    }
    let elapsed = Math.max(0, time - startTime) as number;
    let frame = (playback.frameCount > 0 ? Math.floor(elapsed / playback.frameTime) % playback.frameCount : -1) as number; //--|🠈 -1: a still picture 🠈|--\\
    switch (true) {
      case !stillMotion:
        moveParticles(canvas, particles, playback, frame, pointerX, pointerY);
        break;
      default:
        break; //--|🠈 Reduced motion: the dots sit at home and don't dodge; a .gif shows the frame it holds longest 🠈|--\\
    }
    drawParticles(canvas, context, particles);
    frameId = requestAnimationFrame(drawFrame);
  };
  let wakeCanvas = (): void => {
    awake = true;
    canvas.classList.replace('downplay', 'highlight');
    switch (true) {
      case template !== null:
        spawnParticles();
        break;
      case picture !== null:
        buildParticles(); //--|🠈 The size changed while it slept 🠈|--\\
        break;
      case !loading:
        loading = true;
        loadPicture(image, still).then((loaded) => {
          //--|🠊 The first hover: only now is the picture fetched 🠈|--\\
          switch (true) {
            case stopped:
              return; //--|🠈 The page closed while the picture was on its way 🠈|--\\
            default:
              picture = loaded;
              buildParticles();
          }
        });
        break;
      default:
        break; //--|🠈 Still on its way from an earlier hover 🠈|--\\
    }
    frameId = requestAnimationFrame(drawFrame);
  };
  let sleepCanvas = (): void => {
    awake = false;
    cancelAnimationFrame(frameId); //--|🠈 Disabled: no more frames until the mouse comes back 🠈|--\\
    canvas.classList.replace('highlight', 'downplay');
    particles = []; //--|🠈 Reset: the next hover starts from the template again 🠈|--\\
    pointerX = Infinity;
    pointerY = Infinity;
  };
  let watchPointer = (event: MouseEvent): void => {
    //--|🠊 The whole page is watched, not the canvas: it may sit under the foreground 🠈|--\\
    const box = canvas.getBoundingClientRect();
    const inside = (box.width > 0 && event.clientX >= box.left && event.clientX <= box.right && event.clientY >= box.top && event.clientY <= box.bottom) as boolean;
    pointerInside = inside;
    switch (true) {
      case inside && !awake:
        wakeCanvas();
        break;
      case !inside && awake && !isLucid():
        sleepCanvas(); //--|🠈 ⟨lucid⟩ never sleeps 🠈|--\\
        break;
      default:
        break;
    }
    pointerX = event.clientX - box.left; //--|🠈 CSS pixels, the same as the dots, so no scaling like 3.00 needed 🠈|--\\
    pointerY = event.clientY - box.top;
  };
  let losePage = (): void => {
    pointerInside = false;
    pointerX = Infinity;
    pointerY = Infinity;
    switch (true) {
      case awake && !isLucid():
        sleepCanvas(); //--|🠈 The mouse left the window 🠈|--\\
        break;
      default:
        break;
    }
  };
  let resizeObserver = new ResizeObserver(() => {
    sizeCanvas(canvas, context);
    template = null; //--|🠈 A new size is a new grid 🠈|--\\
    switch (true) {
      case awake:
        buildParticles();
        break;
      default:
        break; //--|🠈 Asleep: rebuilt on the next hover 🠈|--\\
    }
  });

  let classObserver = new MutationObserver(() => {
    //--|🠊 The class changed: the clarity toggle, a colour or this script's own .downplay / .highlight swap 🠈|--\\
    switch (true) {
      case isLucid() && !awake:
        wakeCanvas(); //--|🠈 ⟨lucid⟩: shown from the start 🠈|--\\
        break;
      case !isLucid() && awake && !pointerInside:
        sleepCanvas(); //--|🠈 Back to ⟨opaque⟩ with the mouse elsewhere 🠈|--\\
        break;
      default:
        break;
    }
  });

  resizeObserver.observe(canvas);
  classObserver.observe(canvas, { attributes: true, attributeFilter: ['class'] });
  switch (true) {
    case isLucid():
      wakeCanvas();
      break;
    default:
      break;
  }
  document.addEventListener('mousemove', watchPointer);
  document.documentElement.addEventListener('mouseleave', losePage);
  return () => {
    stopped = true;
    awake = false;
    cancelAnimationFrame(frameId);
    resizeObserver.disconnect();
    classObserver.disconnect();
    document.removeEventListener('mousemove', watchPointer);
    document.documentElement.removeEventListener('mouseleave', losePage);
  };
};

//--|🠋 Load the Picture 🠋|--\\
let loadPicture = async (image: string, still: string): Promise<Picture | null> => {
  const extension = (image.split('?')[0].split('.').pop() as string).toLowerCase() as string;
  const canDecode = ('ImageDecoder' in window) as boolean; //--|🠈 Chrome, Edge and Firefox; Safari only lately 🠈|--\\
  try {
    switch (true) {
      case extension === 'svg':
        return await loadShape(image);
      case extension === 'gif' && canDecode:
        return await loadFrames(image);
      case extension === 'gif' && still !== '':
        console.log(`|🠊 Warning: this browser can't read a .gif frame by frame, so <CanvasParticles> shows cases.still instead 🠈|`);
        return await loadPicture(still, '');
      case extension === 'gif':
        console.log(`|🠊 Warning: this browser can't read a .gif frame by frame, and <CanvasParticles> has no cases.still to fall back on 🠈|`);
        return null;
      default:
        return await loadImage(image);
    }
  } catch {
    console.log(`|🠊 Warning: <CanvasParticles> couldn't read ${image}, components/Canvas/particles/Canvas_particles.ts 🠈|`);
    return null;
  }
};
let loadShape = async (image: string): Promise<Picture> => {
  //--|🠊 The .svg is read as text and its paths rebuilt with Path2D: no <img>, so no tainted canvas and no missing size in Firefox 🠈|--\\
  const response = await fetch(image);
  const markup = await response.text();
  const parsed = new DOMParser().parseFromString(markup, 'image/svg+xml');
  const viewBox = (parsed.documentElement.getAttribute('viewBox') as string).split(/[\s,]+/).map(Number);
  const pathTags = parsed.querySelectorAll('path') as NodeListOf<SVGPathElement>;

  let paths = [] as Array<Path2D>;
  for (let i = 0; i < pathTags.length; i++) {
    paths.push(new Path2D(pathTags[i].getAttribute('d') as string));
  }
  return { kind: 'shape', paths: paths, image: null, bytes: null, width: viewBox[2], height: viewBox[3] };
};
let loadFrames = async (image: string): Promise<Picture> => {
  //--|🠊 The .gif is kept as bytes and read with ImageDecoder, one whole frame at a time, so the canvas is never tainted 🠈|--\\
  const response = await fetch(image);
  const bytes = await response.arrayBuffer();
  const decoder = new ImageDecoder({ data: bytes, type: 'image/gif' });
  const first = await decoder.decode({ frameIndex: 0 });
  const width = first.image.displayWidth as number;
  const height = first.image.displayHeight as number;
  first.image.close();
  decoder.close();
  return { kind: 'frames', paths: [], image: null, bytes: bytes, width: width, height: height };
};
let loadImage = (image: string): Promise<Picture> => {
  //--|🠊 Any other image, the way 3.00 loaded its photo: crossOrigin, so the hidden canvas can still be read; the dots follow its transparency 🠈|--\\
  return new Promise((resolve, reject) => {
    const photo = new Image();
    photo.crossOrigin = 'anonymous';
    photo.onload = () => resolve({ kind: 'image', paths: [], image: photo, bytes: null, width: photo.naturalWidth, height: photo.naturalHeight });
    photo.onerror = () => reject();
    photo.src = image;
  });
};

//--|🠋 Match the Screen 🠋|--\\
let sizeCanvas = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void => {
  const pixelRatio = window.devicePixelRatio || 1;
  canvas.width = Math.round(canvas.clientWidth * pixelRatio); //--|🠈 Attributes, not styles: the drawing surface in real pixels, so phones stay sharp 🠈|--\\
  canvas.height = Math.round(canvas.clientHeight * pixelRatio);
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0); //--|🠈 Draw in CSS pixels from here on 🠈|--\\
};

//--|🠋 Break the Picture into Dots 🠋|--\\
let sampleParticles = async (canvas: HTMLCanvasElement, picture: Picture, stillMotion: boolean, fps: number): Promise<{ particles: Array<Particle>; playback: Playback }> => {
  const width = Math.round(canvas.clientWidth) as number;
  const height = Math.round(canvas.clientHeight) as number;
  const diameter = parseFloat(getComputedStyle(canvas).getPropertyValue('--particles-size')) as number; //--|🠈 Set per screen step in Canvas.particles.scss 🠈|--\\
  const scale = (Math.min(width / picture.width, height / picture.height) * (picture.kind === 'frames' ? 1 : 0.9)) as number; //--|🠈 Fits the picture with 5% to spare on each side, keeps its shape; a .gif fills it, like the loading screen's <img>, its margins are in the file 🠈|--\\
  const isFrames = (picture.kind === 'frames') as boolean;
  switch (true) {
    case width === 0 || height === 0 || !(diameter > 0):
      return { particles: [], playback: { frameCount: 0, frameTime: 1000 / fps, inked: [] } }; //--|🠈 Not on screen yet, or no stylesheet: nothing to sample 🠈|--\\
    default:
      break;
  }

  //--|🠊 A hidden canvas of our own, in CSS pixels: the picture is painted there and read back 🠈|--\\
  let sketch = document.createElement('canvas');
  sketch.width = width;
  sketch.height = height;
  let sketchContext = sketch.getContext('2d', { willReadFrequently: true }) as CanvasRenderingContext2D;
  sketchContext.translate((width - picture.width * scale) / 2, (height - picture.height * scale) / 2);
  sketchContext.scale(scale, scale);

  //--|🠊 The grid: one point per dot, read for ink after every paint 🠈|--\\
  let columns = Math.floor(width / diameter) as number;
  let rows = Math.floor(height / diameter) as number;
  let readInk = (): Array<boolean> => {
    const pixels = sketchContext.getImageData(0, 0, width, height).data;
    let inked = [] as Array<boolean>;
    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        let centreX = Math.round(column * diameter + diameter / 2) as number;
        let centreY = Math.round(row * diameter + diameter / 2) as number;
        inked.push(pixels[(centreY * width + centreX) * 4 + 3] > 127); //--|🠈 More than half inside the picture 🠈|--\\
      }
    }
    return inked;
  };
  let clearSketch = (): void => {
    sketchContext.save();
    sketchContext.setTransform(1, 0, 0, 1, 0, 0);
    sketchContext.clearRect(0, 0, width, height);
    sketchContext.restore();
  };

  let fullest = [] as Array<boolean>; //--|🠈 The picture, or the .gif frame it holds longest 🠈|--\\
  let everInked = new Uint8Array(columns * rows) as Uint8Array; //--|🠈 Every point any .gif frame inks: those get a dot 🠈|--\\
  let playback = { frameCount: 0, frameTime: 1000 / fps, inked: [] } as Playback; //--|🠈 cases.fps, unless the file has a real delay of its own 🠈|--\\
  let decoder = null as ImageDecoder | null;
  let heldFrame = 0 as number;
  let heldLength = 0 as number;
  let runStart = 0 as number;
  switch (picture.kind) {
    case 'shape':
      for (let i = 0; i < picture.paths.length; i++) {
        sketchContext.fill(picture.paths[i]);
      }
      fullest = readInk();
      break;
    case 'image':
      sketchContext.drawImage(picture.image as HTMLImageElement, 0, 0, picture.width, picture.height);
      fullest = readInk();
      break;
    case 'frames':
      decoder = new ImageDecoder({ data: picture.bytes as ArrayBuffer, type: 'image/gif' });
      await decoder.tracks.ready;
      playback.frameCount = (decoder.tracks.selectedTrack as ImageTrack).frameCount;
      for (let frame = 0; frame < playback.frameCount; frame++) {
        let decoded = await decoder.decode({ frameIndex: frame });
        switch (true) {
          case frame === 0 && (decoded.image.duration as number) > 10000:
            playback.frameTime = (decoded.image.duration as number) / 1000; //--|🠈 Microseconds to milliseconds; 10ms or less is a placeholder browsers ignore too 🠈|--\\
            break;
          default:
            break;
        }
        clearSketch();
        sketchContext.drawImage(decoded.image, 0, 0, picture.width, picture.height);
        decoded.image.close();
        let inked = readInk();
        let frameInk = new Uint8Array(inked.length) as Uint8Array;
        for (let point = 0; point < inked.length; point++) {
          frameInk[point] = inked[point] ? 1 : 0;
          everInked[point] = everInked[point] | frameInk[point];
        }
        playback.inked.push(frameInk);

        //--|🠊 Reduced motion: the picture the .gif holds longest, like the finished logo, not a frame mid-move 🠈|--\\
        switch (true) {
          case frame > 0 && !matchFrames(playback.inked[runStart], frameInk):
            runStart = frame; //--|🠈 Something moved: a new run starts 🠈|--\\
            break;
          default:
            break;
        }
        switch (true) {
          case frame - runStart + 1 > heldLength && frameInk.indexOf(1) !== -1:
            heldLength = frame - runStart + 1;
            heldFrame = runStart;
            break;
          default:
            break;
        }
      }
      fullest = Array.from(playback.inked[heldFrame] || [], (ink) => ink === 1);
      decoder.close();
      break;
  }

  //--|🠊 A dot for every point the picture ever inks 🠈|--\\
  let writes = (isFrames && !stillMotion) as boolean; //--|🠈 Only a moving .gif plays; reduced motion gets the frame it holds longest, still 🠈|--\\
  let particles = [] as Array<Particle>;
  for (let point = 0; point < columns * rows; point++) {
    let originX = Math.round((point % columns) * diameter + diameter / 2) as number;
    let originY = Math.round(Math.floor(point / columns) * diameter + diameter / 2) as number;
    let isInked = (writes ? everInked[point] === 1 : fullest[point] === true) as boolean;
    switch (true) {
      case !isInked:
        break;
      default:
        particles.push({
          originX: originX,
          originY: originY,
          axisX: stillMotion ? originX : Math.random() * width, //--|🠈 3.00 started every dot somewhere random 🠈|--\\
          axisY: stillMotion ? originY : Math.random() * height,
          awayX: originX,
          awayY: originY,
          point: point,
          present: !writes, //--|🠈 A .gif's dots wait for their frame 🠈|--\\
          scale: writes ? 0 : 1,
        });
    }
  }
  return { particles: particles, playback: writes ? playback : { frameCount: 0, frameTime: playback.frameTime, inked: [] } };
};

//--|🠊 Two frames match when under 2% of their ink differs: a held picture still flickers by a dot or two at its edges 🠈|--\\
let matchFrames = (first: Uint8Array, second: Uint8Array): boolean => {
  let differ = 0 as number;
  let ink = 0 as number;
  for (let point = 0; point < first.length; point++) {
    differ += first[point] !== second[point] ? 1 : 0;
    ink += first[point];
  }
  return differ <= Math.max(1, ink * 0.02);
};

//--|🠋 Move the Dots 🠋|--\\
let moveParticles = (canvas: HTMLCanvasElement, particles: Array<Particle>, playback: Playback, frame: number, pointerX: number, pointerY: number): void => {
  const diameter = parseFloat(getComputedStyle(canvas).getPropertyValue('--particles-size')) as number;
  const radius = ((50 * diameter) / 6) as number; //--|🠈 REPEL_RADIUS 50 at the 6px dot, so the reach scales with the dots 🠈|--\\
  const speed = ((5 * diameter) / 6) as number; //--|🠈 REPEL_SPEED 5 at the 6px dot 🠈|--\\

  for (let i = 0; i < particles.length; i++) {
    let particle = particles[i] as Particle;
    let shouldShow = (frame === -1 || playback.inked[frame][particle.point] === 1) as boolean;

    //--|🠊 Its .gif frame inks it: born a dot or two from home; the ink moves on: leaves a few dots away, so moving letters slide instead of scatter 🠈|--\\
    switch (true) {
      case shouldShow && !particle.present:
        particle.present = true;
        particle.axisX = particle.originX + (Math.random() - 0.5) * diameter * 4;
        particle.axisY = particle.originY + (Math.random() - 0.5) * diameter * 4;
        break;
      case !shouldShow && particle.present:
        particle.present = false;
        particle.awayX = particle.originX + (Math.random() - 0.5) * diameter * 8;
        particle.awayY = particle.originY + (Math.random() - 0.5) * diameter * 8;
        break;
      default:
        break;
    }

    let towardsX = (pointerX - particle.axisX) as number;
    let towardsY = (pointerY - particle.axisY) as number;
    let distance = Math.sqrt(towardsX * towardsX + towardsY * towardsY) as number;
    let angle = Math.atan2(towardsY, towardsX) as number;
    let force = ((radius - distance) / radius) as number;
    switch (true) {
      case !particle.present:
        //--|🠊 Leaving: drifts away and shrinks to nothing 🠈|--\\
        particle.axisX += (particle.awayX - particle.axisX) * 0.1;
        particle.axisY += (particle.awayY - particle.axisY) * 0.1;
        particle.scale += (0 - particle.scale) * 0.15;
        break;
      case distance < radius:
        //--|🠊 Too close: pushed straight away from the pointer, harder the closer it is 🠈|--\\
        particle.axisX -= Math.cos(angle) * force * speed;
        particle.axisY -= Math.sin(angle) * force * speed;
        particle.scale += (1 - particle.scale) * 0.15;
        break;
      default:
        //--|🠊 Free: a tenth of the way home every frame, RETURN_SPEED 0.1 🠈|--\\
        particle.axisX += (particle.originX - particle.axisX) * 0.1;
        particle.axisY += (particle.originY - particle.axisY) * 0.1;
        particle.scale += (1 - particle.scale) * 0.15;
        break;
    }
  }
};

//--|🠋 Draw One Frame 🠋|--\\
let drawParticles = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, particles: Array<Particle>): void => {
  const width = canvas.clientWidth as number;
  const height = canvas.clientHeight as number;
  const computed = getComputedStyle(canvas) as CSSStyleDeclaration;
  const diameter = parseFloat(computed.getPropertyValue('--particles-size')) as number;
  const toneStart = computed.getPropertyValue('--particles-one') as string;
  const toneEnd = computed.getPropertyValue('--particles-two') as string;

  context.clearRect(0, 0, width, height);
  //--|🠊 Every dot in one path and one fill: a gradient across the whole picture instead of 3.00's colour per dot 🠈|--\\
  let tone = context.createLinearGradient(0, 0, width, height);
  tone.addColorStop(0, toneStart);
  tone.addColorStop(1, toneEnd);
  context.beginPath();
  for (let i = 0; i < particles.length; i++) {
    let size = ((diameter / 2) * particles[i].scale) as number;
    switch (true) {
      case size < 0.1:
        break; //--|🠈 Gone, or not born yet 🠈|--\\
      default:
        context.moveTo(particles[i].axisX + size, particles[i].axisY);
        context.arc(particles[i].axisX, particles[i].axisY, size, 0, Math.PI * 2);
    }
  }
  context.fillStyle = tone;
  context.fill();
};

export default createClass;
