//--|🠊 Division.default.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Division.default.scss';

//--|🠋 Functions 🠋|--\\
import testBlock from './Division_default';

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}

const DivisionDefault: React.FC<TheseProps> = ({ info }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  let link: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c0f9e3fa69d4960a533a7b73f357ad97886280f1';
  return (
    <div className={`${info.labelName}-${info.blockName}_division-default`}>
      <ButtonDefault
        style={{
          size: '<h3>',
          view: '-center-',
          shade: '~dark~',
          color: '(mono)',
          type: '{button}',
          text: '<Main>',
          image: `${link}/source/assets/svg-files/archive-images/font-awesome/6.5.1/solid/house.svg` as string,
        }}
        info={{
          pageName: pageName as string,
          blockName: blockName as string,
          labelName: 'test-main-block',
        }}
        onClick={(): void => {
          testBlock(info.pageName, '<main>', info.labelName);
        }}
      />

      <ButtonDefault
        style={{
          size: '<h3>',
          view: '-center-',
          shade: '~dark~',
          color: '(mono)',
          type: '{button}',
          text: '<Header>',
          image: `${link}/source/assets/svg-files/archive-images/font-awesome/6.5.1/solid/head-side.svg` as string,
        }}
        info={{
          pageName: pageName as string,
          blockName: blockName as string,
          labelName: 'test-head-block',
        }}
        onClick={(): void => {
          testBlock(info.pageName, '<header>', info.labelName);
        }}
      />
      <ButtonDefault
        style={{
          size: '<h3>',
          view: '-center-',
          shade: '~dark~',
          color: '(mono)',
          type: '{button}',
          text: '<Footer>',
          image: `${link}/source/assets/svg-files/archive-images/font-awesome/6.5.1/solid/shoe-prints.svg` as string,
        }}
        info={{
          pageName: pageName as string,
          blockName: blockName as string,
          labelName: 'test-foot-block',
        }}
        onClick={(): void => {
          testBlock(info.pageName, '<footer>', info.labelName);
        }}
      />

      <ButtonDefault
        style={{
          size: '<h3>',
          view: '-center-',
          shade: '~dark~',
          color: '(mono)',
          type: '{button}',
          text: '<Overlay>',
          image: `${link}/source/assets/svg-files/archive-images/font-awesome/6.5.1/solid/layer-group.svg` as string,
        }}
        info={{
          pageName: pageName as string,
          blockName: blockName as string,
          labelName: 'test-over-block',
        }}
        onClick={(): void => {
          testBlock(info.pageName, '<overlay>', info.labelName);
        }}
      />
      <ButtonDefault
        style={{
          size: '<h3>',
          view: '-left-',
          shade: '~dark~',
          color: '(mono)',
          type: '{button}',
          text: '<Leftbar>',
          image: `${link}/source/assets/svg-files/archive-images/font-awesome/6.5.1/solid/left-to-line.svg` as string,
        }}
        info={{
          pageName: pageName as string,
          blockName: blockName as string,
          labelName: 'test-left-block',
        }}
        onClick={(): void => {
          testBlock(info.pageName, '<leftbar>', info.labelName);
        }}
      />
      <ButtonDefault
        style={{
          size: '<h3>',
          view: '-right-',
          shade: '~dark~',
          color: '(mono)',
          type: '{button}',
          text: '<Rightbar>',
          image: `${link}/source/assets/svg-files/archive-images/font-awesome/6.5.1/solid/right-to-line.svg` as string,
        }}
        info={{
          pageName: pageName as string,
          blockName: blockName as string,
          labelName: 'test-right-block',
        }}
        onClick={(): void => {
          testBlock(info.pageName, '<rightbar>', info.labelName);
        }}
      />
    </div>
  );
};
export default DivisionDefault;
