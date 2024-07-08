import $ from 'jquery';
import React from 'react';

const IndexRightbar: React.FC = () => {
  console.log('IndexRightbar Loaded');
  let runJquery = () => {
    $('#index-rightbar').on('click', () => {
      var element = document.getElementById('index-rightbar')?.className as string;
      var status = element.split(' ').pop() as string;
      // console.log(status);
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
      <aside id="index-rightbar" className="default-rightbar expanded" style={{ zIndex: 4 }}>
        <article className="rightbar-midground" style={{ zIndex: 1 }}>
          <h1>Build style here.</h1>
        </article>

        <span className="rightbar-foreground" style={{ zIndex: 2, display: 'none' }}></span>
        <span className="rightbar-background" style={{ zIndex: 0, display: 'none' }}></span>
      </aside>
    </>
  );
};

export default IndexRightbar;
