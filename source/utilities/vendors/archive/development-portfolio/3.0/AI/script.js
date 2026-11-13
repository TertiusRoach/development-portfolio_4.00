//--|🠊 script.js · AI rebuild of development-portfolio_3.00 (2026-11-10) 🠈|--\\
//--|🠊 Plain JavaScript: React's createElement → document.createElement, jQuery's animate → animateScroll 🠈|--\\

//--|🠋 Content 🠋|--\\
const CONTENT = 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_3.00/main/public/content';
const PROFILE = `${CONTENT}/png-files/profile-picture.png`;
const homeText = {
  title: 'Multimedia Programmer',
  career: 'My Career',
  contact: 'Contact Me',
  subject: 'Welcome to my portfolio,',
  description: [
    'As a Multimedia Programmer, I create immersive websites, captivating animations, and interactive applications, blending cutting-edge technologies with an artistic vision for engaging experiences. My curiosity drives me to experiment with upcoming tools to stay ahead in this fast-paced world of computer technologies. I thrive in collaborative environments, and love to transform abstract ideas into impactful, long-lasting applications.',
    'My strong work ethic and demonstrable skills equip me to excel in this field. I\'m a quick learner, eager to prove myself and bring value to your team. So if you\'re willing to take a chance on me then we can create something extraordinary together. While I may not have a traditional "Computer Science De 😬 gree". Uhm, I shouldn\'t have used those air quotes...take a chance on me?',
    'Well this pitch took an unexpected turn.',
  ],
};

//--|🠋 Orientations: one tree each, like the original's useMediaQuery 🠋|--\\
const QUERIES = {
  desktop: window.matchMedia('(orientation: landscape) and (min-aspect-ratio: 16/9)'),
  mobile: window.matchMedia('(orientation: portrait) and (max-aspect-ratio: 1/1)'),
  tablet: window.matchMedia('(max-aspect-ratio: 16/9) and (min-aspect-ratio: 1/1)'),
};

//--|🠋 Helper: build an element 🠋|--\\
function make(tag, attributes = {}, children = []) {
  const element = document.createElement(tag);
  for (const [key, value] of Object.entries(attributes)) {
    if (key.startsWith('on')) {
      element.addEventListener(key.slice(2).toLowerCase(), value);
    } else {
      element.setAttribute(key, value);
    }
  }
  for (const child of children) {
    if (child === null || child === undefined) continue;
    element.append(child);
  }
  return element;
}

//--|🠋 Scrolling, jQuery's animate with its 'swing' easing 🠋|--\\
let scrollFrame = null;
function animateScroll(element, target, duration) {
  cancelAnimationFrame(scrollFrame);
  const start = element.scrollTop;
  const distance = target - start;
  const began = performance.now();
  const step = (now) => {
    const progress = Math.min((now - began) / duration, 1);
    const swing = 0.5 - Math.cos(progress * Math.PI) / 2;
    element.scrollTop = start + distance * swing;
    if (progress < 1) scrollFrame = requestAnimationFrame(step);
  };
  scrollFrame = requestAnimationFrame(step);
}
//--|🠊 Clicking a section scrolls <main> to it (the original's onMouseClick(e, '<main>')) 🠈|--\\
function scrollToSection(section) {
  const main = section.parentElement;
  const index = Array.from(main.children).indexOf(section);
  animateScroll(main, section.offsetHeight * index, 250);
}
//--|🠊 The buttons scroll two sections down after 250ms (My Career and Contact Me both did this) 🠈|--\\
function scrollTwoDown() {
  const main = document.querySelector('.default-main');
  if (!main) {
    console.log('//--|🠊 Error: No <section> found inside 🠊|--//');
    return;
  }
  setTimeout(() => {
    animateScroll(main, main.scrollTop + 2 * main.offsetHeight, 750);
  }, 250);
}

//--|🠋 Glow Button 🠋|--\\
function glowButton(className, text) {
  const button = make('button', { class: `${className} glow` }, [make('h6', {}, [text]), make('div')]);
  button.addEventListener('mousemove', (event) => {
    const box = button.getBoundingClientRect();
    button.style.setProperty('--x', `${event.clientX - box.left}px`); //--|🠈 Runtime cursor position, can't live in CSS 🠈|--\\
    button.style.setProperty('--y', `${event.clientY - box.top}px`);
  });
  switch (className.split('-')[0]) {
    case 'career':
    case 'contact':
      button.addEventListener('click', scrollTwoDown);
      break;
  }
  return button;
}

//--|🠋 Particle Portrait 🠋|--\\
const REPEL_RADIUS = 50;
const RETURN_SPEED = 0.1;
function particlePortrait(canvas) {
  const context = canvas.getContext('2d');
  const image = new Image();
  const dots = [];
  let mouseX = Infinity;
  let mouseY = Infinity;

  image.crossOrigin = 'anonymous';
  image.src = PROFILE;
  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);
    try {
      const pixels = context.getImageData(0, 0, image.width, image.height).data;
      const rows = Math.round(image.height / 6);
      const columns = Math.round(image.width / 6);
      for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
          const i = 4 * (6 * row * image.width + 6 * column);
          dots.push({
            axisX: Math.floor(Math.random() * columns * 6),
            axisY: Math.floor(Math.random() * rows * 6),
            originX: 6 * column + 3,
            originY: 6 * row + 3,
            color: `rgba(${pixels[i]}, ${pixels[i + 1]}, ${pixels[i + 2]}, ${pixels[i + 3] / 255})`,
          });
        }
      }
      draw();
    } catch (error) {
      console.error('Failed to get image data:', error);
    }
  };

  function draw() {
    if (!canvas.isConnected) return; //--|🠈 Stop once the canvas is removed 🠈|--\\
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (const dot of dots) {
      context.beginPath();
      context.arc(dot.axisX, dot.axisY, 3, 0, 2 * Math.PI);
      context.fillStyle = dot.color;
      context.fill();
    }
    for (const dot of dots) {
      const deltaX = mouseX - dot.axisX;
      const deltaY = mouseY - dot.axisY;
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      if (distance < REPEL_RADIUS) {
        const angle = Math.atan2(deltaY, deltaX);
        const force = (REPEL_RADIUS - distance) / REPEL_RADIUS;
        dot.axisX -= Math.cos(angle) * force * 5;
        dot.axisY -= Math.sin(angle) * force * 5;
      } else {
        dot.axisX += (dot.originX - dot.axisX) * RETURN_SPEED;
        dot.axisY += (dot.originY - dot.axisY) * RETURN_SPEED;
      }
    }
    requestAnimationFrame(draw);
  }

  canvas.addEventListener('mousemove', (event) => {
    const box = canvas.getBoundingClientRect();
    mouseX = (event.clientX - box.left) * (canvas.width / box.width); //--|🠈 Scaled, the canvas is drawn smaller than the image 🠈|--\\
    mouseY = (event.clientY - box.top) * (canvas.height / box.height);
  });
  canvas.addEventListener('mouseleave', () => {
    mouseX = Infinity;
    mouseY = Infinity;
  });
}

//--|🠋 Home Section 🠋|--\\
function homeDesktop(tag) {
  const profile = make('aside', { class: 'home-profile hidden' }, [make('img', { src: PROFILE, alt: 'Tertius Roach' })]);
  const canvas = make('canvas', { class: 'home-profile visible' });
  canvas.addEventListener('click', () => {
    //--|🠊 Fade the particles out, then show the real picture 🠈|--\\
    canvas.classList.replace('visible', 'hidden');
    setTimeout(() => canvas.remove(), 1000);
    profile.classList.replace('hidden', 'visible');
  });
  particlePortrait(canvas);

  return make('div', { class: 'home desktop-landscape' }, [
    make('span', { class: 'home-title' }, [make('h1', { 'data-text': tag.title }, [tag.title])]),
    make('span', { class: 'home-buttons' }, [glowButton('career-button', tag.career), glowButton('contact-button', tag.contact)]),
    make('span', { class: 'home-subject' }, [make('h6', {}, [tag.subject])]),
    make('span', { class: 'home-description' }, [
      make('p', {}, [tag.description[0], make('br'), make('br'), tag.description[1]]),
      make('h6', {}, [tag.description[2]]),
    ]),
    profile,
    canvas,
  ]);
}
function homeMobile(tag) {
  return make('div', { class: 'home mobile-portrait' }, [
    make('aside', { class: 'home-profile' }, [make('img', { src: PROFILE, alt: 'Tertius Roach' })]),
    make('span', { class: 'home-title' }, [make('h3', { 'data-text': tag.title }, [tag.title])]),
    make('span', { class: 'home-button' }, [glowButton('career-button', tag.career)]),
    make('span', { class: 'home-subject' }, [make('h6', {}, [tag.subject])]),
    make('span', { class: 'home-description' }, [make('p', {}, [tag.description[0]])]),
  ]);
}
function homeTablet(tag) {
  return make('div', { class: 'home tablet-square' }, [
    make('span', { class: 'home-title' }, [make('h1', { 'data-text': tag.title }, [tag.title])]),
    make('span', { class: 'home-buttons' }, [glowButton('career-button', tag.career), glowButton('contact-button', tag.contact)]),
    make('span', { class: 'home-subject' }, [make('h3', {}, [tag.subject])]),
    make('span', { class: 'home-description' }, [
      make('p', {}, [tag.description[0], make('br'), make('br'), tag.description[1]]),
      make('h6', {}, [tag.description[2]]),
    ]),
    make('aside', { class: 'home-profile' }, [make('img', { src: PROFILE, alt: 'Tertius Roach' })]),
  ]);
}

//--|🠋 Sections: rebuilt whenever the orientation changes 🠋|--\\
function fillSection(section, className, builders) {
  section.replaceChildren();
  if (QUERIES.desktop.matches) section.append(builders.desktop ? builders.desktop() : make('div', { class: `${className} desktop-landscape` }));
  if (QUERIES.mobile.matches) section.append(builders.mobile ? builders.mobile() : make('div', { class: `${className} mobile-portrait` }));
  if (QUERIES.tablet.matches) section.append(builders.tablet ? builders.tablet() : make('div', { class: `${className} tablet-square` }));
}
function buildSection(className, view, builders) {
  const section = make('section', { class: `${className} ${view}` });
  section.addEventListener('click', () => scrollToSection(section));
  fillSection(section, className, builders);
  for (const query of Object.values(QUERIES)) {
    query.addEventListener('change', () => fillSection(section, className, builders));
  }
  return section;
}

//--|🠋 Blocks, in the original's order and z-index 🠋|--\\
function buildBlock(tag, page, label, block, zIndex, children = []) {
  const element = make(tag, { id: `${page}-${block}`, class: `${label}-${block}` }, children);
  element.style.zIndex = zIndex; //--|🠈 The original set z-index inline too 🠈|--\\
  return element;
}
function buildPage(page, label) {
  const main = buildBlock('main', page, label, 'main', 0, [
    buildSection('home', 'visible', {
      desktop: () => homeDesktop(homeText),
      mobile: () => homeMobile(homeText),
      tablet: () => homeTablet(homeText),
    }),
    buildSection('skills', 'hidden', {}),
    buildSection('contact', 'hidden', {}),
  ]);
  return [
    buildBlock('header', page, label, 'header', 4),
    main,
    buildBlock('footer', page, label, 'footer', 3),
    buildBlock('section', page, label, 'overlay', 5),
    buildBlock('aside', page, label, 'leftbar', 2),
    buildBlock('aside', page, label, 'rightbar', 1),
  ];
}

//--|🠋 Start 🠋|--\\
const pageName = 'index';
const body = document.querySelector(`#${pageName}-body`);
if (!body) {
  const message = `//--|🠊 Add a <div id='${pageName}-body'> inside the <body> HTML tag 🠈|--//`;
  alert(message);
  throw new Error(message);
}
body.append(...buildPage(pageName, 'default'));

//--|🠊 Remove the loading screen 🠈|--\\
const loadingContainer = document.getElementById('loading-container');
const loadingStyle = document.getElementById('loading-style');
if (loadingContainer && loadingStyle) {
  loadingStyle.remove();
  loadingContainer.remove();
} else {
  console.log('//--|🠊 Error: #loading-container and #loading-style not found 🠈|--//');
}
