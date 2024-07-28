// //--|🠋 index.ts 🠋|--//
// import { getSVG, getPNG } from '../modules/utilities/getFile';

// type Block = '<header>' | '<main>' | '<footer>' | '<overlay>' | '<leftbar>' | '<rightbar>';
// type Style = 'highlight' | 'downplay';
// type Alignment = 'left' | 'center' | 'right';
// type Icon = { dark: 'dark'; medium: 'medium'; light: 'light' };

// interface ButtonElement {
//   href?: string;
//   align: Alignment;
//   state?: 'active' | '';
//   label: string;
//   style: Style;
//   block: Block | string;
//   text: string;
//   icon?: Icon;
// }

// interface Criteria {
//   buildDesign: string;
//   buildAxis: string;
//   buildElement: string;
// }

// interface CriteriaResult {
//   button: ButtonElement;
//   criteria: Criteria;
// }

// // Capitalize the first letter of a string
// function capitalize(text: string): string {
//   return text.charAt(0).toUpperCase() + text.slice(1);
// }

// // Define the getCriteria function
// export function getCriteria(block: Block, label: string): CriteriaResult | null {
//   const capitalizedLabel = capitalize(label);
//   const icon = getSVG(label) as Icon;
//   const defaultCriteria = {
//     buildDesign: '<fade>',
//     buildAxis: '<horizontal>',
//     buildElement: '<buttons>',
//   };

//   const buttonElements = {
//     '<header>': {
//       home: {
//         button: {
//           href: '',
//           align: 'left',
//           state: 'active',
//           label,
//           style: 'downplay',
//           block,
//           text: capitalizedLabel,
//           icon,
//         },
//         criteria: defaultCriteria,
//       },
//       default: {
//         button: {
//           href: '',
//           state: '',
//           align: 'left',
//           label,
//           style: 'downplay',
//           block,
//           text: capitalizedLabel,
//           icon,
//         },
//         criteria: defaultCriteria,
//       },
//     },
//     '<main>': {
//       career: {
//         button: {
//           state: '',
//           align: 'center',
//           label,
//           block: 'overlay',
//           style: 'downplay',
//           text: 'My Career',
//         },
//         criteria: defaultCriteria,
//       },
//       projects: {
//         button: {
//           state: '',
//           align: 'center',
//           label,
//           block: 'rightbar',
//           style: 'downplay',
//           text: 'My Projects',
//         },
//         criteria: defaultCriteria,
//       },
//       leftbar: {
//         button: {
//           state: '',
//           align: 'left',
//           label,
//           style: 'downplay',
//           block: label,
//           text: `View ${capitalizedLabel}`,
//           icon,
//         },
//         criteria: defaultCriteria,
//       },
//       overlay: {
//         button: {
//           state: '',
//           align: 'center',
//           label,
//           block,
//           style: 'highlight',
//           text: `View ${capitalizedLabel}`,
//           icon,
//         },
//         criteria: defaultCriteria,
//       },
//       rightbar: {
//         button: {
//           state: '',
//           align: 'right',
//           label,
//           block: label,
//           style: 'downplay',
//           text: `View ${capitalizedLabel}`,
//           icon,
//         },
//         criteria: defaultCriteria,
//       },
//     },
//     '<footer>': {
//       github: {
//         button: {
//           text: 'GitHub',
//           align: 'center',
//           label,
//           style: 'downplay',
//           block,
//           href: 'https://github.com/TertiusRoach',
//           icon,
//         },
//         criteria: {
//           buildDesign: '<fade>',
//           buildAxis: '<horizontal>',
//           buildElement: '<anchors>',
//         },
//       },
//       linkedin: {
//         button: {
//           text: 'LinkedIn',
//           align: 'center',
//           label,
//           style: 'highlight',
//           block,
//           href: 'https://www.linkedin.com/in/tertius-roach/',
//           icon,
//         },
//         criteria: {
//           buildDesign: '<fade>',
//           buildAxis: '<horizontal>',
//           buildElement: '<anchors>',
//         },
//       },
//       youtube: {
//         button: {
//           text: 'YouTube',
//           align: 'center',
//           label,
//           style: 'downplay',
//           block,
//           href: 'https://www.youtube.com/@TertiusRoach',
//           icon,
//         },
//         criteria: {
//           buildDesign: '<fade>',
//           buildAxis: '<horizontal>',
//           buildElement: '<anchors>',
//         },
//       },
//     },
//   }[block];

//   if (buttonElements) {
//     if (label in buttonElements) {
//       return buttonElements[label];
//     } else if ('default' in buttonElements) {
//       return buttonElements['default'];
//     }
//   }

//   return null;
// }

// // Example usage
// const desktopElements = {
//   criteria1: getCriteria('<main>', 'leftbar')?.button as ButtonElement[],
//   criteria2: getCriteria('<main>', 'overlay')?.button as ButtonElement[],
//   criteria3: getCriteria('<main>', 'rightbar')?.button as ButtonElement[],
// };
// /*
// // Define the getElements function
// export function getCriteria(
//   block: '<header>' | '<main>' | '<footer>' | '<overlay>' | '<leftbar>' | '<rightbar>',
//   label: string
// ) {
//   switch (block) {
//     case '<header>':
//       if (label === 'home') {
//         return {
//           button: {
//             href: '',
//             align: 'left',
//             state: 'active',
//             label: `${label}`,
//             style: 'downplay',
//             block: `${block}`,
//             text: `${label.charAt(0).toUpperCase() + label.slice(1)}`,
//             icon: getSVG(`${label}`) as { dark: 'dark'; medium: 'medium'; light: 'light' },
//           },
//           criteria: {
//             buildDesign: '<fade>',
//             buildAxis: '<horizontal>',
//             buildElement: '<buttons>',
//           },
//         };
//       } else {
//         return {
//           button: {
//             href: '',
//             state: '',
//             align: 'left',
//             label: `${label}`,
//             style: 'downplay',
//             block: `${block}`,
//             text: `${label.charAt(0).toUpperCase() + label.slice(1)}`,
//             icon: getSVG(`${label}`) as { dark: 'dark'; medium: 'medium'; light: 'light' },
//           },
//           criteria: {
//             buildDesign: '<fade>',
//             buildAxis: '<horizontal>',
//             buildElement: '<buttons>',
//           },
//         } as Object;
//       }
//     case '<main>':
//       if (label === 'leftbar') {
//         return {
//           button: {
//             state: '',
//             align: 'left',
//             label: `${label}`,
//             style: 'downplay',
//             block: `${label}`,
//             text: `View ${label.charAt(0).toUpperCase() + label.slice(1)}`,
//             icon: getSVG(`${label}`) as { dark: 'dark'; medium: 'medium'; light: 'light' },
//           },
//           criteria: {
//             buildDesign: '<fade>',
//             buildAxis: '<horizontal>',
//             buildElement: '<buttons>',
//           },
//         };
//       } else if (label === 'overlay') {
//         return {
//           button: {
//             state: '',
//             align: 'center',
//             label: `${label}`,
//             block: `${block}`,
//             style: 'highlight',
//             text: `View ${label.charAt(0).toUpperCase() + label.slice(1)}`,
//             icon: getSVG('overlay') as { dark: 'dark'; medium: 'medium'; light: 'light' },
//           },
//           criteria: {
//             buildDesign: '<fade>',
//             buildAxis: '<horizontal>',
//             buildElement: '<buttons>',
//           },
//         };
//       } else if (label === 'rightbar') {
//         return {
//           button: {
//             state: '',
//             align: 'right',
//             label: `${label}`,
//             block: `${label}`,
//             style: 'downplay',
//             text: `View ${label.charAt(0).toUpperCase() + label.slice(1)}`,
//             icon: getSVG('overlay') as { dark: 'dark'; medium: 'medium'; light: 'light' },
//           },
//           criteria: {
//             buildDesign: '<fade>',
//             buildAxis: '<horizontal>',
//             buildElement: '<buttons>',
//           },
//         };
//       }
//       break;
//     case '<footer>':
//       if (label === 'github') {
//         return {
//           anchor: {
//             text: 'GitHub',
//             align: 'center',
//             label: `${label}`,
//             style: 'downplay',
//             block: `${block}`,
//             href: 'https://github.com/TertiusRoach',
//             icon: getSVG(`${label}`) as { dark: 'dark'; medium: 'medium'; light: 'light' },
//           },
//           criteria: {
//             buildDesign: '<fade>',
//             buildAxis: '<horizontal>',
//             buildElement: '<anchors>',
//           },
//         };
//       } else if (label === 'linkedin') {
//         return {
//           anchor: {
//             text: 'LinkedIn',
//             align: 'center',
//             label: `${label}`,
//             style: 'highlight',
//             block: `${block}`,
//             href: 'https://www.linkedin.com/in/tertius-roach/',
//             icon: getSVG(`${label}`) as { dark: 'dark'; medium: 'medium'; light: 'light' },
//           },
//           criteria: {
//             buildDesign: '<fade>',
//             buildAxis: '<horizontal>',
//             buildElement: '<anchors>',
//           },
//         };
//       } else if (label === 'youtube') {
//         return {
//           anchor: {
//             text: 'YouTube',
//             align: 'center',
//             label: `${label}`,
//             style: 'downplay',
//             block: `${block}`,
//             href: 'https://www.youtube.com/@TertiusRoach',
//             icon: getSVG(`${label}`) as { dark: 'dark'; medium: 'medium'; light: 'light' },
//           },
//           criteria: {
//             buildDesign: '<fade>',
//             buildAxis: '<horizontal>',
//             buildElement: '<anchors>',
//           },
//         };
//       }
//       break;
//     case '<overlay>':
//       break;
//     case '<leftbar>':
//       break;
//     case '<rightbar>':
//       break;
//   }
// }
// */
