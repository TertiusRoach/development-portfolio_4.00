//--|🠊 Navigation.default.tsx 🠈|--\\

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonRouting from '../../Button/routing/Button.routing';

//--|🠋 Functions 🠋|--\\

//--|🠋 Styles 🠋|--\\
import './Navigation.default.scss';

interface TheseProps {
  info: {
    pageName: 'components' | 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
    blockName: 'main' | 'header' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';
    labelName: 'default' | string;
  };
  style: {
    shade: '~dark~' | '~light~';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
    view: 'top-lef' | 'top-rig' | 'bot-rig' | 'bot-lef';
  };
}
const NavigationDefault: React.FC<TheseProps> = ({ info }) => {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  let imageLink =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c0f9e3fa69d4960a533a7b73f357ad97886280f1/source/assets/svg-files/archive-images/font-awesome/6.5.1/solid/star.svg' as string;
  switch (blockName) {
    case 'main':
      return (
        <nav className={`${labelName}-${blockName}_navigation-default`}>
          <ol className={`hori-X-${labelName}`}></ol>
          <ul className={`vert-Y-${labelName}`}>
            <li className="top-lef">
              <ButtonRouting
                style={{
                  image: imageLink,
                  size: '<h1>',
                  view: 'top-lef',
                  color: '(mono)',
                  shade: '~light~',
                  type: '{button}',
                }}
                info={{
                  pageName: info.pageName,
                  blockName: info.blockName,
                  labelName: `${pageName}-${blockName}-${labelName}-navigation`,
                }}
              />
            </li>
            <li className="top-rig">
              <ButtonRouting
                style={{
                  image: imageLink,
                  size: '<h1>',
                  view: 'top-rig',
                  color: '(mono)',
                  shade: '~light~',
                  type: '{button}',
                }}
                info={{
                  pageName: info.pageName,
                  blockName: info.blockName,
                  labelName: `${pageName}-${blockName}-${labelName}-navigation`,
                }}
              />
            </li>

            <li className="bot-rig">
              <ButtonRouting
                style={{
                  image: imageLink,
                  size: '<h1>',
                  view: 'bot-rig',
                  color: '(mono)',
                  shade: '~light~',
                  type: '{button}',
                }}
                info={{
                  pageName: info.pageName,
                  blockName: info.blockName,
                  labelName: `${pageName}-${blockName}-${labelName}-navigation`,
                }}
              />
            </li>

            <li className="bot-lef">
              <ButtonRouting
                style={{
                  image: imageLink,
                  size: '<h1>',
                  view: 'bot-lef',
                  color: '(mono)',
                  shade: '~light~',
                  type: '{button}',
                }}
                info={{
                  pageName: info.pageName,
                  blockName: info.blockName,
                  labelName: `${pageName}-${blockName}-${labelName}-navigation`,
                }}
              />
            </li>
          </ul>
        </nav>
      );
    case 'header':
      return (
        <nav className={`${labelName}-${blockName}_navigation-default`}>
          <ol className={`hori-X-${labelName}`}></ol>
          <ul className={`vert-Y-${labelName}`}></ul>
        </nav>
      );
    case 'footer':
      return (
        <nav className={`${labelName}-${blockName}_navigation-default`}>
          <ol className={`hori-X-${labelName}`}></ol>
          <ul className={`vert-Y-${labelName}`}></ul>
        </nav>
      );
    case 'overlay':
      return (
        <nav className={`${labelName}-${blockName}_navigation-default`}>
          <ol className={`hori-X-${labelName}`}></ol>
          <ul className={`vert-Y-${labelName}`}></ul>
        </nav>
      );
    case 'leftbar':
      return (
        <nav className={`${labelName}-${blockName}_navigation-default`}>
          <ol className={`hori-X-${labelName}`}></ol>
          <ul className={`vert-Y-${labelName}`}></ul>
        </nav>
      );
    case 'rightbar':
      return (
        <nav className={`${labelName}-${blockName}_navigation-default`}>
          <ol className={`hori-X-${labelName}`}></ol>
          <ul className={`vert-Y-${labelName}`}></ul>
        </nav>
      );
  }

  return (
    <nav className={`${labelName}-${blockName}_navigation-default`}>
      <ol className={`hori-X-${labelName}`}></ol>
      <ul className={`vert-Y-${labelName}`}></ul>
    </nav>
  );
};
export default NavigationDefault;
