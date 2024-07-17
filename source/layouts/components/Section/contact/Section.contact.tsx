// Section.contact.tsx
import React from 'react';
import './Section.contact.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import DivisionWorking from '../../Division/working/Division.working';
// interface ContactProps {
//   info: {
//     resolution: string;
//     orientation: string;
//     identification: string;
//   };
//   icons: {
//     working: string;
//     close: string;
//     download: string;
//     home: string;
//     skills: string;
//     contact: string;
//     projects: string;
//     career: string;
//     viewOverlay: string;
//     viewLeftbar: string;
//     viewRightbar: string;
//     signatureStacked: string;
//     signatureAdjacent: string;
//     gitHub: string;
//     youTube: string;
//     linkedIn: string;
//   };
// }
// const SectionContact: React.FC<ContactProps> = ({ info, icons }) => {
//   let width = info.resolution.split('x')[0];
//   let height = info.resolution.split('x')[1];
//   let working = icons.working as string;

//   /*
//   console.log(`Width: ${width}`);
//   console.log(`Height: ${height}`);

//   console.log(info.orientation);
//   console.log(info.identification);
//   */

//   return (
//     <section id={`${info.identification}-contact`} style={{ height: `${height}px`, width: `${width}px` }}>
//       <DivisionWorking align="right" info={info} icon={working} />

//       {/*--|🠋 Desktop (Landscape) 🠋|--*/}
//       {useMediaQuery({ query: '(orientation: landscape)' }) && (
//         <>{/* <DivisionWorking align="center" info={info} icon={working} /> */}</>
//       )}

//       {/*--|🠋 Mobile (Portrait) 🠋|--*/}
//       {useMediaQuery({ query: '(orientation: portrait)' }) && (
//         <>{/* <DivisionWorking align="center" info={info} icon={working} /> */}</>
//       )}
//     </section>
//   );
// };
// export default SectionContact;
interface ContactProps {
  state?: 'active';
  info: {
    resolution: string;
    orientation: string;
    identification: string;
  };
  icons: {
    home: string;
    close: string;
    career: string;
    skills: string;
    contact: string;
    working: string;
    projects: string;
    download: string;

    viewOverlay: string;
    viewLeftbar: string;
    viewRightbar: string;

    signatureStacked: string;
    signatureAdjacent: string;

    gitHub: string;
    youTube: string;
    linkedIn: string;
  };
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';
}
const SectionContact: React.FC<ContactProps> = ({ info, icons, block, state }) => {
  setTimeout(runJquery, 1000);
  let width = info.resolution.split('x')[0];
  let height = info.resolution.split('x')[1];

  let working = icons.working as string;
  let leftbar = icons.viewLeftbar as string;
  let overlay = icons.viewOverlay as string;
  let rightbar = icons.viewRightbar as string;
  return (
    <section
      id={state === 'active' ? `${block}-active` : ''}
      className={`${block}-contact`}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <DivisionWorking align="center" text="Contact" info={info} icon={working} />

      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: landscape)' }) && (
        <>{/* <DivisionWorking align="center" info={info} icon={working} /> */}</>
      )}

      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: portrait)' }) && (
        <>{/* <DivisionWorking align="center" info={info} icon={working} /> */}</>
      )}
    </section>
  );
};
export default SectionContact;

function runJquery() {
  // console.log('Yay, jQuery!');
}
