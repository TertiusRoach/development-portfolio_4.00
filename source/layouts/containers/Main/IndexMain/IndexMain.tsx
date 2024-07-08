import $ from 'jquery';
import React from 'react';

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
      console.log('Overlay Button Clicked');
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
      <button className="leftbar-button">
        <h1>leftbar-button</h1>
      </button>
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
