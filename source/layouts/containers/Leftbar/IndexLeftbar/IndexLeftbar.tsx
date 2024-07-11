import $ from 'jquery';
import React from 'react';
import { useEffect } from 'react';
import { getResolution, getOrientation, getIdentification } from '../../../../scripts/index';

interface InfoProps {
  resolution: string;
  orientation: 'landscape' | 'portrait' | string;
  identification: string;
}
const IndexLeftbar: React.FC<InfoProps> = () => {
  setTimeout(runJquery, 1000);

  return (
    <>
      <aside id="index-leftbar" className="default-leftbar collapsed" style={{ zIndex: 5 }}>
        <header className="leftbar-foreground" style={{ zIndex: 2 }}></header>
        <footer className="leftbar-midground" style={{ zIndex: 1 }}></footer>

        <div className="leftbar-background" style={{ zIndex: 0 }}>
          <ul></ul>
          <article></article>
        </div>
      </aside>
    </>
  );
  console.log('IndexLeftbar Loaded');
};
export default IndexLeftbar;

function runJquery() {
  console.log(`Leftbar: ${getResolution()}`);
  console.log(`Leftbar: ${getOrientation()}`);
  console.log(`Leftbar: ${getIdentification()}`);

  const toggleState = () => {
    let element = document.getElementById('index-leftbar')?.className as string;
    let status = element.split(' ').pop() as string;
    switch (status) {
      case 'expanded':
        $('#index-leftbar.expanded').toggleClass('collapsed');
        $('#index-leftbar.expanded').removeClass('expanded');
        break;
      case 'collapsed':
        $('#index-leftbar.collapsed').toggleClass('expanded');
        $('#index-leftbar.collapsed').removeClass('collapsed');
        break;
      default:
        alert('ERROR!');
    }
  };
  $('#index-leftbar div[class*="background"] article').on('click', () => {
    if (getOrientation().includes('landscape')) {
      toggleState();
    }
  });
  $('#index-leftbar footer[class*="midground"]').on('click', () => {
    if (getOrientation().includes('portrait')) {
      toggleState();
    }
  });
}
