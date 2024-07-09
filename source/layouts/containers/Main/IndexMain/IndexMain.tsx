import $ from 'jquery';
import React from 'react';

import ButtonFade from '../../../components/Button/fade/Button.fade';

const IndexMain: React.FC = () => {
  console.log('IndexMain Loaded');
  let runJquery = () => {
    $('#index-main .leftbar-button').on('click', () => {
      console.log('Leftbar Button Clicked');
      var element = document.getElementById('index-leftbar')?.className as string;
      var status = element.split(' ').pop() as string;
      // console.log(status);
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
    });
    $('#index-main .overlay-button').on('click', () => {
      // console.log('Overlay Button Clicked');

      var element = document.getElementById('index-overlay') as HTMLElement;
      var safety: boolean = element?.className.includes('blocked');
      var status = element?.className.split(' ').pop() as string;
      if (!safety) {
        switch (status) {
          case 'visible':
            $('#index-overlay.visible').addClass('blocked');
            $('#index-overlay.visible').toggleClass('hidden');
            setTimeout(() => {
              $('#index-overlay').css('display', 'none');
              $('#index-overlay').removeClass('blocked');
              $('#index-overlay').removeClass('visible');
            }, 1000);
            break;
          case 'hidden':
            $('#index-overlay.hidden').css('display', 'grid');
            $('#index-overlay.hidden').addClass('blocked');
            $('#index-overlay.hidden').toggleClass('visible');
            setTimeout(() => {
              $('#index-overlay').removeClass('hidden');
              $('#index-overlay').removeClass('blocked');
            }, 1000);
            break;
          default:
            alert('ERROR!');
        }
      }
    });
    $('#index-main .rightbar-button').on('click', () => {
      console.log('Rightbar Button Clicked');
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
    <main id="index-main" className="default-main" style={{ zIndex: 0 }}>
      <ButtonFade label="leftbar-button" state="downplay" align="left" text="Leftbar Button" icon="" />
      {/* <button className="leftbar-button">
        <h1>leftbar-button</h1>
      </button> */}
      <button className="overlay-button">
        <h1>overlay-button</h1>
      </button>
      <button className="rightbar-button">
        <h1>rightbar-button</h1>
      </button>
    </main>
  );
};

export default IndexMain;
