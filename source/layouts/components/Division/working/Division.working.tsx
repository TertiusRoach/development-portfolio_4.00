// Section.home.tsx
import React from 'react';
import './Division.working.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

interface HomeProps {
  info: {
    resolution: string;
    orientation: string;
    identification: string;
  };
  icon: string;
  align?: 'top' | 'right' | 'bottom' | 'left' | 'center';
}
const DivisionWorking: React.FC<HomeProps> = ({ info, icon, align }) => {
  let width = info.resolution.split('x')[0];
  let height = info.resolution.split('x')[1];
  return (
    <div>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: landscape)' }) && (
        <>
          <div style={{ height: `${height}px`, width: `${height}px` }}>
            <div className="working-icon">
              <div className={align} style={{ height: `${height}px`, width: `${width}px` }}>
                <h1 style={{ height: `${height}px`, width: `${width}px` }} className="display-1">
                  Working
                </h1>
                <img style={{ height: `${height}px`, width: `${height}px` }} src={icon} alt="Working" />
              </div>
            </div>
          </div>
        </>
      )}

      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: portrait)' }) && (
        <>
          {/* <div style={{ height: `${height}px`, width: `${width}px` }}>
            <div className="working-icon">
              <div className={align} style={{ height: `${height}px`, width: `${width}px` }}>
                <h1 className="display-1" style={{ height: `${height}px`, width: `${Number(width) - 16}px` }}>
                  Working
                </h1>
              </div>
            </div>
          </div>
          <div style={{ height: `${height}px`, width: `${width}px` }}>
            <div className="working-icon">
              <div className={align} style={{ height: `${height}px`, width: `${width}px` }}>
                <img style={{ height: `${height}px`, width: `${width}px` }} src={icon} alt="Working" />
              </div>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default DivisionWorking;
