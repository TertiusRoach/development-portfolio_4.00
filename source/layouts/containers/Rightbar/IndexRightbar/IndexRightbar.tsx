import $ from 'jquery';
import React from 'react';
import { getResolution, getOrientation, getIdentification } from '../../../../scripts/index';

interface InfoProps {
  icons: Object;

  resolution?: string;
  orientation?: 'landscape' | 'portrait' | string;
  identification?: string;
}
const IndexRightbar: React.FC<InfoProps> = () => {
  setTimeout(runJquery, 1000);

  return (
    <>
      <aside id="index-rightbar" className="default-rightbar collapsed" style={{ zIndex: 5 }}>
        <header className="rightbar-foreground" style={{ zIndex: 2 }}></header>
        <footer className="rightbar-midground" style={{ zIndex: 1 }}></footer>

        <div className="rightbar-background" style={{ zIndex: 0 }}>
          <ul></ul>
          <article></article>
        </div>
      </aside>
    </>
  );
  console.log('IndexRightbar Loaded');
};
export default IndexRightbar;

function runJquery() {
  console.log(`Rightbar: ${getResolution()}`);
  console.log(`Rightbar: ${getOrientation()}`);
  console.log(`Rightbar: ${getIdentification()}`);

  const toggleState = () => {
    let element = document.getElementById('index-rightbar')?.className as string;
    let status = element.split(' ').pop() as string;
    switch (status) {
      case 'expanded':
        $('#index-rightbar.expanded').toggleClass('collapsed');
        $('#index-rightbar.expanded').removeClass('expanded');
        break;
      case 'collapsed':
        $('#index-rightbar.collapsed').toggleClass('expanded');
        $('#index-rightbar.collapsed').removeClass('collapsed');
        break;
      default:
        alert('ERROR!');
    }
  };
  $('#index-rightbar div[class*="background"] article').on('click', () => {
    if (getOrientation().includes('landscape')) {
      toggleState();
    }
  });
  $('#index-rightbar footer[class*="midground"]').on('click', () => {
    if (getOrientation().includes('portrait')) {
      toggleState();
    }
  });
}
