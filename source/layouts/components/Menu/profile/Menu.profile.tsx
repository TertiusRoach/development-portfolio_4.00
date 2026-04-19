//--|🠊 Menu.profile.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Menu.profile.scss';
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Functions 🠋|--\\
import { expandLeftbar, expandHeader } from '../../../scripts/overtime';
import { viewDisplay } from './Menu_profile';
import { scrollTable } from '../../Table/clocking/Table_clocking';

// import { scrollTable } from '../../Table/tracking/Table_tracking';

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';
import ButtonRouting from '../../Button/routing/Button.routing';
import ButtonProfile from '../../Button/profile/Button.profile';
interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const MenuProfile: React.FC<TheseProps> = ({ info }) => {
  const pageName: string = info.pageName as 'overtime';
  const blockName: string = info.blockName as 'header';
  const labelName: string = info.labelName as 'profile';

  useEffect(() => {}, [pageName, blockName]);

  let svgPath: { [key: string]: string[] } = {
    jane_lester: [
      'jane-lester',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/original/jane-lester.png',
    ],
    hammad_dean: [
      'hammad-dean',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/original/hammad-dean.png',
    ],
    dimitri_lewis: [
      'dimitri-lewis',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/original/dimitri-lewis.png',
    ],
    dale_sutton: [
      'dale-sutton',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/original/dale-sutton.png',
    ],
    alaric_voss: [
      'alaric-voss',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/original/alaric-voss.png',
    ],
    conrad_guy: [
      'conrad-guy',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/original/conrad-guy.png',
    ],
    daniel_meyers: [
      'daniel-meyers',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/original/daniel-meyers.png',
    ],
    kady_deacon: [
      'kady-deacon',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/original/kady-deacon.png',
    ],
    seamus_odonnell: [
      'seamus-odonnell',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/original/seamus-odonnell.png',
    ],
    sipho_dlamini: [
      'sipho-dlamini',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/original/sipho-dlamini.png',
    ],
    tasneem_kemp: [
      'tasneem-kemp',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/original/tasneem-kemp.png',
    ],
    danish_copeland: [
      'danish-copeland',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/original/danish-copeland.png',
    ],
    elliot_crane: [
      'elliot-crane',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/original/elliot-crane.png',
    ],
    zuberi_thorne: [
      'zuberi-thorne',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/original/zuberi-thorne.png',
    ],
    nyra_solari: [
      'nyra-solari',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/original/nyra-solari.png',
    ],
    victor_langston: [
      'victor-langston',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/original/victor-langston.png',
    ],
    aelin_darrow: [
      'aelin-darrow',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/original/aelin-darrow.png',
    ],
    malik_tremaine_carter: [
      'malik-tremaine-carter',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/original/malik-tremaine-carter.png',
    ],
    randomize_character: [
      'randomize-character',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/original/radomize-character.png',
    ],
  };

  return (
    <menu className={`${labelName}-${blockName}`}>
      <li className="left-side">
        {/*--|🠊 Jane Lester 🠈|--*/}
        <ButtonProfile
          style={{
            size: '<h1>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath.jane_lester[1]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: `${svgPath.jane_lester[0]}`,
          }}
        />

        {/*--|🠊 Malik Tremaine Carter 🠈|--*/}
        <ButtonProfile
          style={{
            size: '<p>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath.malik_tremaine_carter[1]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: `${svgPath.malik_tremaine_carter[0]}`,
          }}
        />
        {/*--|🠊 Dimitri Lewis 🠈|--*/}
        <ButtonProfile
          style={{
            size: '<p>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath.dimitri_lewis[1]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: `${svgPath.dimitri_lewis[0]}`,
          }}
        />
        {/*--|🠊 Dale Sutton 🠈|--*/}
        <ButtonProfile
          style={{
            size: '<p>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath.dale_sutton[1]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: `${svgPath.dale_sutton[0]}`,
          }}
        />
        {/*--|🠊 Alaric Voss 🠈|--*/}
        <ButtonProfile
          style={{
            size: '<p>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath.alaric_voss[1]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: `${svgPath.alaric_voss[0]}`,
          }}
        />
        {/*--|🠊 Conrad Guy 🠈|--*/}
        <ButtonProfile
          style={{
            size: '<p>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath.conrad_guy[1]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: `${svgPath.conrad_guy[0]}`,
          }}
        />
        {/*--|🠊 Daniel Meyers 🠈|--*/}
        <ButtonProfile
          style={{
            size: '<p>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath.daniel_meyers[1]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: `${svgPath.daniel_meyers[0]}`,
          }}
        />
        {/*--|🠊 Kady Deacon 🠈|--*/}
        <ButtonProfile
          style={{
            size: '<p>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath.kady_deacon[1]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: `${svgPath.kady_deacon[0]}`,
          }}
        />
        {/*--|🠊 Seamus O'Donnell 🠈|--*/}
        <ButtonProfile
          style={{
            size: '<p>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath.seamus_odonnell[1]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: `${svgPath.seamus_odonnell[0]}`,
          }}
        />
      </li>
      <li className="right-side">
        {/*--|🠊 Hammad Dean 🠈|--*/}
        <ButtonProfile
          style={{
            size: '<h1>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath.hammad_dean[1]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: `${svgPath.hammad_dean[0]}`,
          }}
        />
        {/*--|🠊 Tasneem Kemp 🠈|--*/}
        <ButtonProfile
          style={{
            size: '<p>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath.tasneem_kemp[1]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: `${svgPath.tasneem_kemp[0]}`,
          }}
        />
        {/*--|🠊 Danish Copeland 🠈|--*/}
        <ButtonProfile
          style={{
            size: '<p>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath.danish_copeland[1]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: `${svgPath.danish_copeland[0]}`,
          }}
        />
        {/*--|🠊 Elliot Crane 🠈|--*/}
        <ButtonProfile
          style={{
            size: '<p>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath.elliot_crane[1]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: `${svgPath.elliot_crane[0]}`,
          }}
        />
        {/*--|🠊 Zuberi Thorne 🠈|--*/}
        <ButtonProfile
          style={{
            size: '<p>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath.zuberi_thorne[1]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: `${svgPath.zuberi_thorne[0]}`,
          }}
        />
        {/*--|🠊 Aelin Darrow 🠈|--*/}
        <ButtonProfile
          style={{
            size: '<p>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath.aelin_darrow[1]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: `${svgPath.aelin_darrow[0]}`,
          }}
        />
        {/*--|🠊 Victor Langston 🠈|--*/}
        <ButtonProfile
          style={{
            size: '<p>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath.victor_langston[1]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: `${svgPath.victor_langston[0]}`,
          }}
        />
        {/*--|🠊 Nyra Solari 🠈|--*/}
        <ButtonProfile
          style={{
            size: '<p>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath.nyra_solari[1]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: `${svgPath.nyra_solari[0]}`,
          }}
        />
        {/*--|🠊 Sipho Dlamini 🠈|--*/}
        <ButtonProfile
          style={{
            size: '<p>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath.sipho_dlamini[1]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: `${svgPath.sipho_dlamini[0]}`,
          }}
        />
      </li>
    </menu>
  );
};
export default MenuProfile;
