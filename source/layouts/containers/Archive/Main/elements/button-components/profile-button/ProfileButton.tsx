//--|🠊 ProfileButton.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonProfile from '../../../../../../components/Button/profile/Button.profile';
import DivisionColourize from '../../../../../../components/Division/colourize/Division.colourize';

//--|🠋 Functions 🠋|--\\
import { toggleColors } from './ProfileFunctions';
import { checkScreen, loadAsset } from '../../../../../../../scripts';

//--|🠋 Styles 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function ProfileButton({ info }: InfoProps) {
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
                image: loadAsset('-png-', '/archive-images/character-testing/original/randomize-character'),
              }}
            />

            <DivisionColourize
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
              style={{
                shade: '~dark~',
              }}
              cases={{
                task: [(tint) => toggleColors(tint)], //--|🠈 Recolors <ButtonProfile> with the tint from the toggles 🠈|--\\
              }}
            />

            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h1>',
                color: '(mono)',
                shade: '~light~',
                view: '-square-',
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
          <section className={`${blockName}-foreground`}>
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h1>',
                color: '(mono)',
                shade: '~dark~',
                view: '-square-',
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
                image: loadAsset('-png-', '/archive-images/character-testing/original/randomize-character'),
              }}
            />

            <DivisionColourize
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
              style={{
                shade: '~dark~',
              }}
              cases={{
                task: [(tint) => toggleColors(tint)], //--|🠈 Recolors <ButtonProfile> with the tint from the toggles 🠈|--\\
              }}
            />

            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h1>',
                color: '(mono)',
                shade: '~light~',
                view: '-square-',
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
                image: loadAsset('-png-', '/archive-images/character-testing/original/randomize-character'),
              }}
            />
          </section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
  }
}
export default ProfileButton;
