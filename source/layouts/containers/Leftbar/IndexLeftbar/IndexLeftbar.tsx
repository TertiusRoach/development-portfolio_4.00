import $ from 'jquery';
import React from 'react';

const IndexLeftbar: React.FC = () => {
  console.log('IndexLeftbar Loaded');
  let runJquery = () => {
    $('#index-leftbar').on('click', () => {
      var element = document.getElementById('index-leftbar')?.className as string;
      var status = element.split(' ').pop() as string;
      // console.log(status);

      if (status === 'expanded') {
        $('.expanded').toggleClass('collapsed');
        $('.expanded').removeClass('expanded');
      } else if (status === 'collapsed') {
        $('.collapsed').toggleClass('expanded');
        $('.collapsed').removeClass('collapsed');
      } else {
        alert('ERROR!');
      }
    });
  };
  setTimeout(runJquery, 1000);

  return (
    <>
      <aside id="index-leftbar" className="default-leftbar expanded" style={{ zIndex: 5 }}>
        <article className="leftbar-midground" style={{ zIndex: 1 }}>
          <h1>Build style here.</h1>
        </article>

        <span className="leftbar-foreground" style={{ zIndex: 2, display: 'none' }}></span>
        <span className="leftbar-background" style={{ zIndex: 0, display: 'none' }}></span>
      </aside>
    </>
  );
};

export default IndexLeftbar;
