// Section.home.tsx
import './Division.working.scss';
import React, { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

interface HomeProps {
  info: {
    resolution: string;
    orientation: string;
    identification: string;
  };
  icon: string;
  align: 'top' | 'right' | 'bottom' | 'left' | 'center';
}
const DivisionWorking: React.FC<HomeProps> = ({ info, icon, align }) => {
  const divisionReference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divisionReference.current) {
      const width = info.resolution.split('x')[0];
      const height = info.resolution.split('x')[1];

      const element = divisionReference.current.parentElement;
      if (element) {
        console.log(element.nodeName);
        // Additional logic with element if needed
      }

      // console.log(icon);
      // console.log(align);
    }
  }, [info, icon, align]);
  // let element = document.querySelector('.working-division').parentElement.nodeName as HTMLDivElement | null;

  /*
  let width = info.resolution.split('x')[0];
  let height = info.resolution.split('x')[1];
  console.log(icon);
  console.log(align);
  */
  return <div className="working-division" ref={divisionReference}></div>;
};

export default DivisionWorking;

// {/*--|🠋 Desktop (Landscape) 🠋|--*/}
// {useMediaQuery({ query: '(orientation: landscape)' }) && (
//   // <>
//   //   <div style={{ height: `${height}px`, width: `${height}px` }}>
//   //     <div className="working-icon">
//   //       <div className={align} style={{ height: `${height}px`, width: `${width}px` }}>
//   //         <h1 className="display-1" style={{ height: `${height}px`, width: `${width}px` }}>
//   //           Working
//   //         </h1>
//   //         <img style={{ height: `${height}px`, width: `${height}px` }} src={icon} alt="Working" />
//   //       </div>
//   //     </div>
//   //   </div>
//   // </>
// )}

// {/*--|🠋 Mobile (Portrait) 🠋|--*/}
// {useMediaQuery({ query: '(orientation: portrait)' }) && (
//   // <>
//   //   <div style={{ height: `${height}px`, width: `${width}px` }}>
//   //     <div className="working-icon" style={{ height: `${height}px`, width: `${width}px` }}>
//   //       <div className={align}>
//   //         <h1 className="display-1" style={{ height: `${height}px`, width: `${width}px` }}>
//   //           Working
//   //         </h1>
//   //         <img style={{ height: `${width}px`, width: `${width}px` }} src={icon} alt="Working" />
//   //       </div>
//   //     </div>
//   //   </div>
//   // </>
// )}
