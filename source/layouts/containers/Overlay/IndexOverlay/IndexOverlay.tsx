import $ from 'jquery';
import React from 'react';

const IndexOverlay: React.FC = () => {
  console.log('IndexOverlay Loaded');
  let runJquery = () => {
    $('#index-overlay').on('click', () => {
      var element = document.getElementById('index-overlay')?.className as string;
      var status = element.split(' ').pop() as string;
      // console.log(status);
      switch (status) {
        case 'visible':
          $('#index-overlay.visible').toggleClass('hidden');
          $('#index-overlay.visible').removeClass('visible');
          setTimeout(() => {
            $('#index-overlay').css('display', 'none');
          }, 1000);
          break;
        case 'hidden':
          $('#index-overlay.hidden').toggleClass('visible');
          $('#index-overlay.hidden').removeClass('hidden');
          setTimeout(() => {
            $('#index-overlay').css('display', '');
          }, 1000);
          break;
        default:
          alert('ERROR!');
      }
    });
  };
  setTimeout(runJquery, 1000);
  return (
    <>
      <section id="index-overlay" className="default-overlay visible" style={{ zIndex: 3 }}>
        <article className="overlay-midground" style={{ zIndex: 1 }}>
          <h1>Build style here.</h1>
        </article>

        <span className="overlay-foreground" style={{ zIndex: 2, display: 'none' }}></span>
        <span className="overlay-background" style={{ zIndex: 0, display: 'none' }}></span>
      </section>
    </>
  );
};

export default IndexOverlay;
