import $ from 'jquery';
import React from 'react';
interface InfoProps {
  icons: Object;

  resolution?: string;
  orientation?: string | 'landscape' | 'portrait';
  identification?: string;
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
            $('#index-overlay.hidden').removeClass('blocked');
            $('#index-overlay.hidden').toggleClass('visible');
            $('#index-overlay.hidden').removeClass('hidden');
            setTimeout(() => {
              $('#index-overlay').css('display', '');
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
      <section id="index-overlay" className="default-overlay hidden" style={{ zIndex: 3, display: 'none' }}>
        <header className="overlay-foreground" style={{ zIndex: 2 }}></header>

        <div className="overlay-midground" style={{ zIndex: 1 }}>
          <h1>Build style here.</h1>
        </div>

        <footer className="overlay-background" style={{ zIndex: 0 }}></footer>
      </section>
    </>
  );
  console.log('IndexOverlay Loaded');
};
export default IndexOverlay;
