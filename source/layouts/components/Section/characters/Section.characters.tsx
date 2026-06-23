//--|🠊 Section.characters.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Section.characters.scss';

//--|🠋 Functions 🠋|--\\
import { returnProfiles } from './Section_characters';
import type { CharacterReferences } from './Section_characters';

//--|🠋 Components 🠋|--\\

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  cases: {
    profile:
      | 'jane'
      | 'malik'
      | 'dimitri'
      | 'dale'
      | 'alaric'
      | 'conrad'
      | 'daniel'
      | 'kady'
      | 'seamus'
      | 'hammad'
      | 'tasneem'
      | 'elliot'
      | 'sipho'
      | 'zuberi'
      | 'nyra'
      | 'victor'
      | 'danish'
      | 'aelin';
  };
}

const SectionCharacters: React.FC<TheseProps> = ({ info }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  let jane = returnProfiles(pageName as 'components', blockName as 'main')[0] as CharacterReferences | HTMLElement;
  let mali = returnProfiles(pageName as 'components', blockName as 'main')[1] as CharacterReferences | HTMLElement;
  let dimi = returnProfiles(pageName as 'components', blockName as 'main')[2];
  let dale = returnProfiles(pageName as 'components', blockName as 'main')[3];
  let alar = returnProfiles(pageName as 'components', blockName as 'main')[4];
  let conr = returnProfiles(pageName as 'components', blockName as 'main')[5];
  let dani = returnProfiles(pageName as 'components', blockName as 'main')[6];
  let kady = returnProfiles(pageName as 'components', blockName as 'main')[7];
  let seam = returnProfiles(pageName as 'components', blockName as 'main')[8];
  let hamm = returnProfiles(pageName as 'components', blockName as 'main')[9];
  let tasn = returnProfiles(pageName as 'components', blockName as 'main')[10];
  let elli = returnProfiles(pageName as 'components', blockName as 'main')[11];
  let siph = returnProfiles(pageName as 'components', blockName as 'main')[12];
  let zube = returnProfiles(pageName as 'components', blockName as 'main')[13];
  let nyra = returnProfiles(pageName as 'components', blockName as 'main')[14];
  let vict = returnProfiles(pageName as 'components', blockName as 'main')[15];
  let cope = returnProfiles(pageName as 'components', blockName as 'main')[16];
  let aeli = returnProfiles(pageName as 'components', blockName as 'main')[17];

  switch (pageName) {
    case 'components':
    default: {
      let profile: string = '';
      let fullName: string = '';
      let country: string = '';

      let headOfDept: boolean;
      let department: string = '';
      let description: string = '';

      let vocation: string = '';
      let position: string = '';
      let occupation: string = '';

      if ('profile' in jane) {
        profile = jane.profile as string;
        fullName = jane.fullName as string;
        country = jane.country as string;

        department = jane.department[1] as string;
        headOfDept = jane.department[0] as boolean;

        vocation = jane.permissions[0].vocation as string;
        position = jane.permissions[1].position as string;
        occupation = jane.permissions[2].occupation as string;

        description = jane.description as string;
      } else if ('profile' in mali) {
        profile = mali.profile as string;
        fullName = mali.fullName as string;
        country = mali.country as string;

        department = mali.department[1] as string;
        headOfDept = mali.department[0] as boolean;

        vocation = mali.permissions[0].vocation as string;
        position = mali.permissions[1].position as string;
        occupation = mali.permissions[2].occupation as string;

        description = mali.description as string;
      } else if ('profile' in dimi) {
        profile = dimi.profile as string;
        fullName = dimi.fullName as string;
        country = dimi.country as string;

        department = dimi.department[1] as string;
        headOfDept = dimi.department[0] as boolean;

        vocation = dimi.permissions[0].vocation as string;
        position = dimi.permissions[1].position as string;
        occupation = dimi.permissions[2].occupation as string;

        description = dimi.description as string;
      } else if ('profile' in dale) {
        profile = dale.profile as string;
        fullName = dale.fullName as string;
        country = dale.country as string;

        department = dale.department[1] as string;
        headOfDept = dale.department[0] as boolean;

        vocation = dale.permissions[0].vocation as string;
        position = dale.permissions[1].position as string;
        occupation = dale.permissions[2].occupation as string;

        description = dale.description as string;
      } else if ('profile' in alar) {
        profile = alar.profile as string;
        fullName = alar.fullName as string;
        country = alar.country as string;

        department = alar.department[1] as string;
        headOfDept = alar.department[0] as boolean;

        vocation = alar.permissions[0].vocation as string;
        position = alar.permissions[1].position as string;
        occupation = alar.permissions[2].occupation as string;

        description = alar.description as string;
      } else if ('profile' in conr) {
        profile = conr.profile as string;
        fullName = conr.fullName as string;
        country = conr.country as string;

        department = conr.department[1] as string;
        headOfDept = conr.department[0] as boolean;

        vocation = conr.permissions[0].vocation as string;
        position = conr.permissions[1].position as string;
        occupation = conr.permissions[2].occupation as string;

        description = conr.description as string;
      } else if ('profile' in dani) {
        profile = dani.profile as string;
        fullName = dani.fullName as string;
        country = dani.country as string;

        department = dani.department[1] as string;
        headOfDept = dani.department[0] as boolean;

        vocation = dani.permissions[0].vocation as string;
        position = dani.permissions[1].position as string;
        occupation = dani.permissions[2].occupation as string;

        description = dani.description as string;
      } else if ('profile' in kady) {
        profile = kady.profile as string;
        fullName = kady.fullName as string;
        country = kady.country as string;

        department = kady.department[1] as string;
        headOfDept = kady.department[0] as boolean;

        vocation = kady.permissions[0].vocation as string;
        position = kady.permissions[1].position as string;
        occupation = kady.permissions[2].occupation as string;

        description = kady.description as string;
      } else if ('profile' in seam) {
        profile = seam.profile as string;
        fullName = seam.fullName as string;
        country = seam.country as string;

        department = seam.department[1] as string;
        headOfDept = seam.department[0] as boolean;

        vocation = seam.permissions[0].vocation as string;
        position = seam.permissions[1].position as string;
        occupation = seam.permissions[2].occupation as string;

        description = seam.description as string;
      } else if ('profile' in hamm) {
        profile = hamm.profile as string;
        fullName = hamm.fullName as string;
        country = hamm.country as string;

        department = hamm.department[1] as string;
        headOfDept = hamm.department[0] as boolean;

        vocation = hamm.permissions[0].vocation as string;
        position = hamm.permissions[1].position as string;
        occupation = hamm.permissions[2].occupation as string;

        description = hamm.description as string;
      } else if ('profile' in tasn) {
        profile = tasn.profile as string;
        fullName = tasn.fullName as string;
        country = tasn.country as string;

        department = tasn.department[1] as string;
        headOfDept = tasn.department[0] as boolean;

        vocation = tasn.permissions[0].vocation as string;
        position = tasn.permissions[1].position as string;
        occupation = tasn.permissions[2].occupation as string;

        description = tasn.description as string;
      } else if ('profile' in elli) {
        profile = elli.profile as string;
        fullName = elli.fullName as string;
        country = elli.country as string;

        department = elli.department[1] as string;
        headOfDept = elli.department[0] as boolean;

        vocation = elli.permissions[0].vocation as string;
        position = elli.permissions[1].position as string;
        occupation = elli.permissions[2].occupation as string;

        description = elli.description as string;
      } else if ('profile' in siph) {
        profile = siph.profile as string;
        fullName = siph.fullName as string;
        country = siph.country as string;

        department = siph.department[1] as string;
        headOfDept = siph.department[0] as boolean;

        vocation = siph.permissions[0].vocation as string;
        position = siph.permissions[1].position as string;
        occupation = siph.permissions[2].occupation as string;

        description = siph.description as string;
      } else if ('profile' in zube) {
        profile = zube.profile as string;
        fullName = zube.fullName as string;
        country = zube.country as string;

        department = zube.department[1] as string;
        headOfDept = zube.department[0] as boolean;

        vocation = zube.permissions[0].vocation as string;
        position = zube.permissions[1].position as string;
        occupation = zube.permissions[2].occupation as string;

        description = zube.description as string;
      } else if ('profile' in nyra) {
        profile = nyra.profile as string;
        fullName = nyra.fullName as string;
        country = nyra.country as string;

        department = nyra.department[1] as string;
        headOfDept = nyra.department[0] as boolean;

        vocation = nyra.permissions[0].vocation as string;
        position = nyra.permissions[1].position as string;
        occupation = nyra.permissions[2].occupation as string;

        description = nyra.description as string;
      } else if ('profile' in vict) {
        profile = vict.profile as string;
        fullName = vict.fullName as string;
        country = vict.country as string;

        department = vict.department[1] as string;
        headOfDept = vict.department[0] as boolean;

        vocation = vict.permissions[0].vocation as string;
        position = vict.permissions[1].position as string;
        occupation = vict.permissions[2].occupation as string;

        description = vict.description as string;
      } else if ('profile' in cope) {
        profile = cope.profile as string;
        fullName = cope.fullName as string;
        country = cope.country as string;

        department = cope.department[1] as string;
        headOfDept = cope.department[0] as boolean;

        vocation = cope.permissions[0].vocation as string;
        position = cope.permissions[1].position as string;
        occupation = cope.permissions[2].occupation as string;

        description = cope.description as string;
      } else if ('profile' in aeli) {
        profile = aeli.profile as string;
        fullName = aeli.fullName as string;
        country = aeli.country as string;

        department = aeli.department[1] as string;
        headOfDept = aeli.department[0] as boolean;

        vocation = aeli.permissions[0].vocation as string;
        position = aeli.permissions[1].position as string;
        occupation = aeli.permissions[2].occupation as string;

        description = aeli.description as string;
      }

      return (
        <section className={`${info.labelName}-${info.blockName}_characters-default`}>
          <div className="wrapper">
            <header className="information">
              <div className="profile">
                <img src={profile} alt="" />
              </div>
              <h1 className="full-name">{fullName}</h1>
              <p className="country">{country}</p>
            </header>
            <section className="permissions">
              <div className="vocation">
                <h6>Vocation</h6>
                <p>{vocation}</p>
              </div>
              <div className="position">
                <h6>Position</h6>
                <p>{position}</p>
              </div>
              <div className="occupation">
                <h6>Occupation</h6>
                <p>{occupation}</p>
              </div>
            </section>
            <footer className="description">
              <div className="department">
                <h3>{department}</h3>
              </div>
              <div className="description">
                <p>{description}</p>
              </div>
            </footer>
          </div>
        </section>
      );
    }
  }
};
export default SectionCharacters;

let randomizeCharacter = () => {};
