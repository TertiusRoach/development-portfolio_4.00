import $ from 'jquery';
import React from 'react';
interface InfoProps {
  resolution: string;
  orientation: string | 'landscape' | 'portrait' | boolean;
  identification: string;
}
const IndexRightbar: React.FC<InfoProps> = () => {
  let runJquery = () => {
    $('#index-rightbar span[class*="background"]').on('click', () => {
      var element = document.getElementById('index-rightbar')?.className as string;
      var status = element.split(' ').pop() as string;
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
    });
  };
  setTimeout(runJquery, 1000);
  return (
    <>
      <aside id="index-rightbar" className="default-rightbar collapsed" style={{ zIndex: 4 }}>
        <article className="rightbar-midground" style={{ zIndex: 1 }}>
          <h1>Build style here.</h1>
        </article>

        <span className="rightbar-foreground" style={{ zIndex: 2, display: 'none' }}></span>
        <span className="rightbar-background" style={{ zIndex: 0 }}></span>
      </aside>
    </>
  );
  console.log('IndexRightbar Loaded');
};

export default IndexRightbar;
