// Aside.rightbar.tsx
import $ from 'jquery';
import './Aside.rightbar.scss';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import ButtonFade from '../../Button/fade/Button.fade';
import { getSVG } from '../../../../modules/utilities/getFile';

interface RightbarProps {
  labelName: 'default';
  stateType: 'active' | '';
  blockName: 'rightbar' | 'coworkers' | 'employees' | string;

  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}
const AsideRightbar: React.FC<RightbarProps> = ({ labelName, blockName, info }) => {
  const jQueryTimer: number = 5000;
  const block = `${blockName}` as 'rightbar';
  const label: string = `${labelName}` as 'rightbar';
  const page: String = info.identification as String;
  useEffect(() => {
    let jQueryLoad = () => {
      jQueryRightbar(page, block);
    };
    window.addEventListener('resize', jQueryLoad);
    setTimeout(() => jQueryRightbar(page, block), jQueryTimer);
    return () => {
      window.removeEventListener('resize', jQueryLoad);
    };
  }, []);
  return (
    <aside id={`${page}-${block}`} className={`${label}-${block} collapsed`} style={{ zIndex: 5 }}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: landscape)' }) as boolean) && (
        <>
          <header className={`${label}-foreground`} style={{ zIndex: 2 }}>
            {/* <ButtonFade
              text=""
              state=""
              label="close"
              align="center"
              block="rightbar"
              style="highlight"
              icon={getSVG('close') as { dark: string; medium: string; light: string }}
            /> */}
          </header>
          <div className={`${label}-background`} style={{ zIndex: 0 }}>
            <menu>
              <a target="_blank" className="left" href="https://github.com/TertiusRoach">
                <h3>GitHub</h3>
                <img src={getSVG('github').medium as string} alt="github" />
              </a>

              <a target="_blank" className="center" href="">
                <h3>LinkedIn</h3>
                <img src={getSVG('linkedin').medium as string} alt="linkedin" />
              </a>
              <a target="_blank" className="right" href="">
                <h3>YouTube</h3>
                <img src={getSVG('youtube').medium as string} alt="youtube" />
              </a>
            </menu>
            <section></section>
          </div>
          <footer className={`${label}-midground`} style={{ zIndex: 1 }}></footer>
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: portrait)' }) as boolean) && (
        <>
          <header className={`${label}-foreground`} style={{ zIndex: 2 }}></header>
          <div className={`${label}-background`} style={{ zIndex: 0 }}>
            <menu>
              <a target="_blank" className="left" href="https://github.com/TertiusRoach">
                <h6 className="display-3">GitHub</h6>
                <img src={getSVG('github').medium as string} alt="github" />
              </a>

              <a target="_blank" className="center" href="">
                <h6 className="display-3">LinkedIn</h6>
                <img src={getSVG('linkedin').medium as string} alt="linkedin" />
              </a>
              <a target="_blank" className="right" href="">
                <h6 className="display-3">YouTube</h6>
                <img src={getSVG('youtube').medium as string} alt="youtube" />
              </a>
            </menu>
            <section></section>
          </div>
          <footer className={`${label}-midground`} style={{ zIndex: 1 }}>
            {/* <ButtonFade
              text=""
              state=""
              label="close"
              align="center"
              block="rightbar"
              style="highlight"
              icon={getSVG('close') as { dark: string; medium: string; light: string }}
            /> */}
          </footer>
        </>
      )}
    </aside>
  );
};
export default AsideRightbar;
let jQueryRightbar = function (pageName: String, blockName: String) {
  const containerElement = `${pageName}-${blockName}` as String;
  $(`#${containerElement} button[class*="close"]`).on('click', () => {
    let safety = document.getElementById(`${pageName}-${blockName}`)?.className as string;
    if (!safety.includes('blocked')) {
      $(`#${containerElement}.expanded`).addClass('collapsed');
      $(`#${containerElement}.collapsed`).removeClass('expanded');
    }
  });
  return console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
};

// interface LeftbarProps {
//   labelName: 'default';
//   stateType: 'active' | '';
//   blockName: 'leftbar' | 'coworkers' | 'employees' | string;

//   info: {
//     resolution: String;
//     orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
//     identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
//   };
// }
// const AsideLeftbar: React.FC<LeftbarProps> = ({ labelName, blockName, info }) => {
//   const jQueryTimer: number = 4000;
//   const block = `${blockName}` as 'leftbar';
//   const label: string = `${labelName}` as 'leftbar';
//   const page: String = info.identification as String;
//   useEffect(() => {
//     let jQueryLoad = () => {
//       jQueryLeftbar(page, block);
//     };
//     window.addEventListener('resize', jQueryLoad);
//     setTimeout(() => jQueryLeftbar(page, block), jQueryTimer);
//     return () => {
//       window.removeEventListener('resize', jQueryLoad);
//     };
//   }, []);
//   return (
//     <aside id={`index-leftbar`} className={`${labelName}-${blockName} collapsed`} style={{ zIndex: 5 }}>
//       {/*--|🠋 Desktop (Landscape) 🠋|--*/}
//       {(useMediaQuery({ query: '(orientation: landscape)' }) as boolean) && (
//         <>
//           <header className={`${labelName}-foreground`} style={{ zIndex: 2 }}>
//             {/* <ButtonFade
//               text=""
//               state=""
//               label="close"
//               align="center"
//               block="rightbar"
//               style="highlight"
//               icon={getSVG('close') as { dark: string; medium: string; light: string }}
//             /> */}
//           </header>
//           <div className={`${labelName}-background`} style={{ zIndex: 0 }}>
//             <menu>
//               <a target="_blank" className="right" href="https://www.linkedin.com/in/tertius-roach/">
//                 <h3>LinkedIn</h3>
//                 <img src={getSVG('linkedin').medium as string} alt="linkedin" />
//               </a>
//               <a target="_blank" className="center" href="https://github.com/TertiusRoach">
//                 <h3>GitHub</h3>
//                 <img src={getSVG('github').medium as string} alt="github" />
//               </a>
//               <a target="_blank" className="left" href="https://www.youtube.com/@TertiusRoach">
//                 <h3>YouTube</h3>
//                 <img src={getSVG('youtube').medium as string} alt="youtube" />
//               </a>
//             </menu>
//             <section></section>
//           </div>
//           <footer className={`${labelName}-midground`} style={{ zIndex: 1 }}></footer>
//         </>
//       )}
//       {/*--|🠋 Mobile (Portrait) 🠋|--*/}
//       {(useMediaQuery({ query: '(orientation: portrait)' }) as boolean) && (
//         <>
//           <header className="leftbar-foreground" style={{ zIndex: 2 }}></header>
//           <div className="leftbar-background" style={{ zIndex: 0 }}>
//             <menu>
//               <a target="_blank" className="right" href="https://www.linkedin.com/in/tertius-roach/">
//                 <h6 className="display-3">LinkedIn</h6>
//                 <img src={getSVG('linkedin').medium as string} alt="linkedin" />
//               </a>
//               <a target="_blank" className="center" href="https://github.com/TertiusRoach">
//                 <h6 className="display-3">GitHub</h6>
//                 <img src={getSVG('github').medium as string} alt="github" />
//               </a>
//               <a target="_blank" className="left" href="https://www.youtube.com/@TertiusRoach">
//                 <h6 className="display-3">YouTube</h6>
//                 <img src={getSVG('youtube').medium as string} alt="youtube" />
//               </a>
//             </menu>
//             <section></section>
//           </div>
//           <footer className="leftbar-midground" style={{ zIndex: 1 }}>
//             {/* <ButtonFade
//               text=""
//               state=""
//               label="close"
//               align="center"
//               block="rightbar"
//               style="highlight"
//               icon={getSVG('close') as { dark: string; medium: string; light: string }}
//             /> */}
//           </footer>
//         </>
//       )}
//     </aside>
//   );
// };
// export default AsideLeftbar;
// let jQueryLeftbar = function (pageName: String, blockName: String) {
//   const containerElement = `${pageName}-${blockName}` as String;
//   $(`#${containerElement} button[class*="close"]`).on('click', () => {
//     let safety = document.getElementById(`${pageName}-${blockName}`)?.className as string;
//     if (!safety.includes('blocked')) {
//       $(`#${containerElement}.expanded`).addClass('collapsed');
//       $(`#${containerElement}.collapsed`).removeClass('expanded');

//       $(`#${pageName}-header`).removeClass('disabled');
//       $(`#${pageName}-main section`).removeClass('disabled');
//       $(`#${pageName}-footer`).removeClass('disabled');
//     }
//   });
//   console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
// };
