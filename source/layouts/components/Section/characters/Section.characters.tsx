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
      | 'aelin'
      | string
      | number;
  };
}

const SectionCharacters: React.FC<TheseProps> = ({ info, cases }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  let profile: string = '';
  let fullName: string = '';
  let country: string = '';

  let headOfDept: boolean;
  let department: string = '';
  let description: string = '';

  let vocation: string = '';
  let position: string = '';
  let occupation: string = '';

  switch (cases.profile) {
    case 1:
    case 'jane':
      let jane = returnProfiles(pageName as 'components', blockName as 'main')[0] as CharacterReferences;

      profile = jane.profile as string;
      fullName = jane.fullName as string;
      country = jane.country as string;

      department = jane.department[1] as string;
      headOfDept = jane.department[0] as boolean;

      vocation = jane.permissions[0].vocation as string;
      position = jane.permissions[1].position as string;
      occupation = jane.permissions[2].occupation as string;

      description = jane.description as string;
      break;
    case 1:
    case 'malik':
      let mali = returnProfiles(pageName as 'components', blockName as 'main')[1] as CharacterReferences;

      profile = mali.profile as string;
      fullName = mali.fullName as string;
      country = mali.country as string;

      department = mali.department[1] as string;
      headOfDept = mali.department[0] as boolean;

      vocation = mali.permissions[0].vocation as string;
      position = mali.permissions[1].position as string;
      occupation = mali.permissions[2].occupation as string;

      description = mali.description as string;
      break;
    case 2:
    case 'dimitri':
      let dimi = returnProfiles(pageName as 'components', blockName as 'main')[2] as CharacterReferences;

      profile = dimi.profile as string;
      fullName = dimi.fullName as string;
      country = dimi.country as string;

      department = dimi.department[1] as string;
      headOfDept = dimi.department[0] as boolean;

      vocation = dimi.permissions[0].vocation as string;
      position = dimi.permissions[1].position as string;
      occupation = dimi.permissions[2].occupation as string;

      description = dimi.description as string;
      break;
    case 3:
    case 'dale':
      let dale = returnProfiles(pageName as 'components', blockName as 'main')[3] as CharacterReferences;

      profile = dale.profile as string;
      fullName = dale.fullName as string;
      country = dale.country as string;

      department = dale.department[1] as string;
      headOfDept = dale.department[0] as boolean;

      vocation = dale.permissions[0].vocation as string;
      position = dale.permissions[1].position as string;
      occupation = dale.permissions[2].occupation as string;

      description = dale.description as string;
      break;
    case 4:
    case 'alaric':
      let alar = returnProfiles(pageName as 'components', blockName as 'main')[4] as CharacterReferences;

      profile = alar.profile as string;
      fullName = alar.fullName as string;
      country = alar.country as string;

      department = alar.department[1] as string;
      headOfDept = alar.department[0] as boolean;

      vocation = alar.permissions[0].vocation as string;
      position = alar.permissions[1].position as string;
      occupation = alar.permissions[2].occupation as string;

      description = alar.description as string;
      break;
    case 5:
    case 'conrad':
      let conr = returnProfiles(pageName as 'components', blockName as 'main')[5] as CharacterReferences;

      profile = conr.profile as string;
      fullName = conr.fullName as string;
      country = conr.country as string;

      department = conr.department[1] as string;
      headOfDept = conr.department[0] as boolean;

      vocation = conr.permissions[0].vocation as string;
      position = conr.permissions[1].position as string;
      occupation = conr.permissions[2].occupation as string;

      description = conr.description as string;
      break;
    case 6:
    case 'daniel':
      let dani = returnProfiles(pageName as 'components', blockName as 'main')[6] as CharacterReferences;

      profile = dani.profile as string;
      fullName = dani.fullName as string;
      country = dani.country as string;

      department = dani.department[1] as string;
      headOfDept = dani.department[0] as boolean;

      vocation = dani.permissions[0].vocation as string;
      position = dani.permissions[1].position as string;
      occupation = dani.permissions[2].occupation as string;

      description = dani.description as string;
      break;
    case 7:
    case 'kady':
      let kady = returnProfiles(pageName as 'components', blockName as 'main')[7] as CharacterReferences;

      profile = kady.profile as string;
      fullName = kady.fullName as string;
      country = kady.country as string;

      department = kady.department[1] as string;
      headOfDept = kady.department[0] as boolean;

      vocation = kady.permissions[0].vocation as string;
      position = kady.permissions[1].position as string;
      occupation = kady.permissions[2].occupation as string;

      description = kady.description as string;
      break;
    case 8:
    case 'seamus':
      let seam = returnProfiles(pageName as 'components', blockName as 'main')[8] as CharacterReferences;

      profile = seam.profile as string;
      fullName = seam.fullName as string;
      country = seam.country as string;

      department = seam.department[1] as string;
      headOfDept = seam.department[0] as boolean;

      vocation = seam.permissions[0].vocation as string;
      position = seam.permissions[1].position as string;
      occupation = seam.permissions[2].occupation as string;

      description = seam.description as string;
    case 9:
    case 'hammad':
      let hamm = returnProfiles(pageName as 'components', blockName as 'main')[9] as CharacterReferences;

      profile = hamm.profile as string;
      fullName = hamm.fullName as string;
      country = hamm.country as string;

      department = hamm.department[1] as string;
      headOfDept = hamm.department[0] as boolean;

      vocation = hamm.permissions[0].vocation as string;
      position = hamm.permissions[1].position as string;
      occupation = hamm.permissions[2].occupation as string;

      description = hamm.description as string;

      break;
    case 10:
    case 'tasneem':
      let tasn = returnProfiles(pageName as 'components', blockName as 'main')[10] as CharacterReferences;

      profile = tasn.profile as string;
      fullName = tasn.fullName as string;
      country = tasn.country as string;

      department = tasn.department[1] as string;
      headOfDept = tasn.department[0] as boolean;

      vocation = tasn.permissions[0].vocation as string;
      position = tasn.permissions[1].position as string;
      occupation = tasn.permissions[2].occupation as string;

      description = tasn.description as string;
      break;
    case 'elliot':
    case 11:
      let elli = returnProfiles(pageName as 'components', blockName as 'main')[11] as CharacterReferences;

      profile = elli.profile as string;
      fullName = elli.fullName as string;
      country = elli.country as string;

      department = elli.department[1] as string;
      headOfDept = elli.department[0] as boolean;

      vocation = elli.permissions[0].vocation as string;
      position = elli.permissions[1].position as string;
      occupation = elli.permissions[2].occupation as string;

      description = elli.description as string;
      break;
    case 'sipho':
    case 12:
      let siph = returnProfiles(pageName as 'components', blockName as 'main')[12] as CharacterReferences;

      profile = siph.profile as string;
      fullName = siph.fullName as string;
      country = siph.country as string;

      department = siph.department[1] as string;
      headOfDept = siph.department[0] as boolean;

      vocation = siph.permissions[0].vocation as string;
      position = siph.permissions[1].position as string;
      occupation = siph.permissions[2].occupation as string;

      description = siph.description as string;
      break;
    case 'zuberi':
    case 13:
      let zube = returnProfiles(pageName as 'components', blockName as 'main')[13] as CharacterReferences;

      profile = zube.profile as string;
      fullName = zube.fullName as string;
      country = zube.country as string;

      department = zube.department[1] as string;
      headOfDept = zube.department[0] as boolean;

      vocation = zube.permissions[0].vocation as string;
      position = zube.permissions[1].position as string;
      occupation = zube.permissions[2].occupation as string;

      description = zube.description as string;
      break;
    case 'nyra':
    case 14:
      let nyra = returnProfiles(pageName as 'components', blockName as 'main')[14] as CharacterReferences;

      profile = nyra.profile as string;
      fullName = nyra.fullName as string;
      country = nyra.country as string;

      department = nyra.department[1] as string;
      headOfDept = nyra.department[0] as boolean;

      vocation = nyra.permissions[0].vocation as string;
      position = nyra.permissions[1].position as string;
      occupation = nyra.permissions[2].occupation as string;

      description = nyra.description as string;
      break;
    case 'victor':
    case 15:
      let vict = returnProfiles(pageName as 'components', blockName as 'main')[15] as CharacterReferences;

      profile = vict.profile as string;
      fullName = vict.fullName as string;
      country = vict.country as string;

      department = vict.department[1] as string;
      headOfDept = vict.department[0] as boolean;

      vocation = vict.permissions[0].vocation as string;
      position = vict.permissions[1].position as string;
      occupation = vict.permissions[2].occupation as string;

      description = vict.description as string;
      break;
    case 'danish':
    case 16:
      let cope = returnProfiles(pageName as 'components', blockName as 'main')[16] as CharacterReferences;

      profile = cope.profile as string;
      fullName = cope.fullName as string;
      country = cope.country as string;

      department = cope.department[1] as string;
      headOfDept = cope.department[0] as boolean;

      vocation = cope.permissions[0].vocation as string;
      position = cope.permissions[1].position as string;
      occupation = cope.permissions[2].occupation as string;

      description = cope.description as string;
      break;
    case 'aelin':
    case 17:
      let aeli = returnProfiles(pageName as 'components', blockName as 'main')[17] as CharacterReferences;

      profile = aeli.profile as string;
      fullName = aeli.fullName as string;
      country = aeli.country as string;

      department = aeli.department[1] as string;
      headOfDept = aeli.department[0] as boolean;

      vocation = aeli.permissions[0].vocation as string;
      position = aeli.permissions[1].position as string;
      occupation = aeli.permissions[2].occupation as string;

      description = aeli.description as string;
      break;
    default:
      let rand = returnProfiles(pageName as 'components', blockName as 'main')[18] as CharacterReferences;

      profile = rand.profile as string;
      fullName = rand.fullName as string;
      country = rand.country as string;

      department = rand.department[1] as string;
      headOfDept = rand.department[0] as boolean;

      vocation = rand.permissions[0].vocation as string;
      position = rand.permissions[1].position as string;
      occupation = rand.permissions[2].occupation as string;

      description = rand.description as string;
  }

  switch (pageName) {
    case 'components':
    default: {
      return (
        <section className={`${info.labelName}-${info.blockName}_characters-${info.labelName}`}>
          <div className="wrapper">
            <header className="information">
              <div className="profile">
                <img src={profile} alt={profile} />
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
