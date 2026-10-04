//--|🠊 Division.testing.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';

//--|🠋 Functions 🠋|--\\
import testBlock from './Division_testing';
import { loadAsset } from '../../../../scripts';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    shade: '~dark~' | '~medium~' | '~light~';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(turquoise)';
  };
}

const DivisionTesting: React.FC<TheseProps> = ({ info, style }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  return (
    <div className={`${info.labelName}-${info.blockName}_division-testing`}>
      <ButtonDefault
        style={{
          size: '<h3>',
          view: '-center-',
          type: '{button}',
          text: '<Main>',
          shade: style.shade,
          color: style.color,
          image: loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/house') as string,
        }}
        info={{
          pageName: pageName as string,
          blockName: blockName as string,
          labelName: 'test-main-block',
        }}
        onClick={(): void => {
          testBlock(info.pageName, '<main>');
        }}
      />

      <ButtonDefault
        style={{
          size: '<h3>',
          view: '-center-',
          type: '{button}',
          text: '<Header>',
          shade: style.shade,
          color: style.color,
          image: loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/head-side') as string,
        }}
        info={{
          pageName: pageName as string,
          blockName: blockName as string,
          labelName: 'test-head-block',
        }}
        onClick={(): void => {
          testBlock(info.pageName, '<header>');
        }}
      />
      <ButtonDefault
        style={{
          size: '<h3>',
          view: '-center-',
          type: '{button}',
          text: '<Footer>',
          shade: style.shade,
          color: style.color,
          image: loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/shoe-prints') as string,
        }}
        info={{
          pageName: pageName as string,
          blockName: blockName as string,
          labelName: 'test-foot-block',
        }}
        onClick={(): void => {
          testBlock(info.pageName, '<footer>');
        }}
      />

      <ButtonDefault
        style={{
          size: '<h3>',
          view: '-center-',
          type: '{button}',
          text: '<Overlay>',
          shade: style.shade,
          color: style.color,
          image: loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/layer-group') as string,
        }}
        info={{
          pageName: pageName as string,
          blockName: blockName as string,
          labelName: 'test-over-block',
        }}
        onClick={(): void => {
          testBlock(info.pageName, '<overlay>');
        }}
      />
      <ButtonDefault
        style={{
          size: '<h3>',
          view: '-left-',
          type: '{button}',
          text: '<Leftbar>',
          shade: style.shade,
          color: style.color,
          image: loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/left-to-line') as string,
        }}
        info={{
          pageName: pageName as string,
          blockName: blockName as string,
          labelName: 'test-left-block',
        }}
        onClick={(): void => {
          testBlock(info.pageName, '<leftbar>');
        }}
      />
      <ButtonDefault
        style={{
          size: '<h3>',
          view: '-right-',
          type: '{button}',
          text: '<Rightbar>',
          shade: style.shade,
          color: style.color,
          image: loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/right-to-line') as string,
        }}
        info={{
          pageName: pageName as string,
          blockName: blockName as string,
          labelName: 'test-right-block',
        }}
        onClick={(): void => {
          testBlock(info.pageName, '<rightbar>');
        }}
      />
    </div>
  );
};
export default DivisionTesting;
