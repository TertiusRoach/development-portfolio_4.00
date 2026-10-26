//--|🠊 ProfileButton.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import LabelToggle from '../../../../../../components/Label/toggle/Label.toggle';
import ButtonProfile from '../../../../../../components/Button/profile/Button.profile';

//--|🠋 Functions 🠋|--\\
import { checkScreen, loadAsset } from '../../../../../../../scripts';

//--|🠋 Styles 🠋|--\\
import './ProfileButton.scss';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const ProfileButton: React.FC<InfoProps> = ({ info }) => {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'profile';
  const pageName = info.pageName as 'components';

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  switch (getOrientation) {
    case 'landscape':
      return (
        <aside className="profile-button">
          <section className={`${blockName}-foreground`}>
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h1>',
                color: '(mono)',
                shade: '~dark~',
                view: '-square-',
                type: '{button}',
                image: loadAsset('-png-', '/archive-images/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h4>',
                color: '(mono)',
                shade: '~dark~',
                view: '-square-',
                type: '{button}',
                image: loadAsset('-png-', '/archive-images/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<p>',
                color: '(mono)',
                shade: '~dark~',
                view: '-square-',
                type: '{button}',
                image: loadAsset('-png-', '/archive-images/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h1>',
                color: '(mono)',
                shade: '~dark~',
                view: '-circle-',
                type: '{button}',
                image: loadAsset('-png-', '/archive-images/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h4>',
                color: '(mono)',
                shade: '~dark~',
                view: '-circle-',
                type: '{button}',
                image: loadAsset('-png-', '/archive-images/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<p>',
                color: '(mono)',
                shade: '~dark~',
                view: '-circle-',
                type: '{button}',
                image: loadAsset('-png-', '/archive-images/character-testing/original/randomize-character'),
              }}
            />

            <div
              className="toggle-colors"
              onClick={(event: React.MouseEvent<HTMLElement>): void => {
                // toggleColors(event.currentTarget as HTMLElement);
              }}
            >
              <LabelToggle
                style={{ type: '{toggle}', shade: '~dark~', color: '(red)' }}
                info={{ pageName: pageName, blockName: blockName, labelName: labelName }}
              />
              <LabelToggle
                style={{ type: '{toggle}', shade: '~dark~', color: '(green)' }}
                info={{ pageName: pageName, blockName: blockName, labelName: labelName }}
              />
              <LabelToggle
                style={{ type: '{toggle}', shade: '~dark~', color: '(blue)' }}
                info={{ pageName: pageName, blockName: blockName, labelName: labelName }}
              />
            </div>

            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h1>',
                color: '(mono)',
                shade: '~light~',
                view: '-square-',
                type: '{button}',
                image: loadAsset('-png-', '/archive-images/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h4>',
                color: '(mono)',
                shade: '~light~',
                view: '-square-',
                type: '{button}',
                image: loadAsset('-png-', '/archive-images/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<p>',
                color: '(mono)',
                shade: '~light~',
                view: '-square-',
                type: '{button}',
                image: loadAsset('-png-', '/archive-images/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h1>',
                color: '(mono)',
                shade: '~light~',
                view: '-circle-',
                type: '{button}',
                image: loadAsset('-png-', '/archive-images/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h4>',
                color: '(mono)',
                shade: '~light~',
                view: '-circle-',
                type: '{button}',
                image: loadAsset('-png-', '/archive-images/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<p>',
                color: '(mono)',
                shade: '~light~',
                view: '-circle-',
                type: '{button}',
                image: loadAsset('-png-', '/archive-images/character-testing/original/randomize-character'),
              }}
            />
          </section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
    case 'portrait':
      return (
        <aside className="profile-button">
          <section className={`${blockName}-foreground`}></section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
  }
};
export default ProfileButton;
