import $ from 'jquery';
import React from 'react';
interface InfoProps {
  resolution: string;
  orientation: string | 'landscape' | 'portrait' | boolean;
  identification: string;
}
const IndexOverlay: React.FC<InfoProps> = () => {
  let runJquery = () => {
    $('#index-overlay').on('click', () => {
      var element = document.getElementById('index-overlay') as HTMLElement;
      var safety: boolean = element?.className.includes('blocked');
      var status = element?.className.split(' ').pop() as string;
      if (!safety) {
        switch (status) {
          case 'visible':
            $('#index-overlay.visible').addClass('blocked');
            $('#index-overlay.visible').toggleClass('hidden');
            $('#index-overlay.visible').removeClass('visible');
            setTimeout(() => {
              $('#index-overlay').css('display', 'none');
              $('#index-overlay').removeClass('blocked');
            }, 1000);
            break;
          case 'hidden':
            $('#index-overlay.hidden').addClass('blocked');
            $('#index-overlay.hidden').toggleClass('visible');
            $('#index-overlay.hidden').removeClass('hidden');
            setTimeout(() => {
              $('#index-overlay').css('display', '');
              $('#index-overlay.hidden').removeClass('blocked');
            }, 1000);
            break;
          default:
            alert('ERROR!');
        }
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
  console.log('IndexOverlay Loaded');
};

export default IndexOverlay;
