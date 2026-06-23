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
    default:
      if ('profile' in jane) {
        let imageLink = jane.profile as string;
        let fullName = jane.fullName as string;
        let country = jane.country as string;

        let vocation = jane.permissions[0].vocation;
        let position = jane.permissions[1].position;
        let occupation = jane.permissions[2].occupation;

        return (
          <section className={`${info.labelName}-${info.blockName}_characters-default`}>
            <div className="wrapper">
              <header className="information">
                <div className="profile">
                  <img src={imageLink} alt="" />
                </div>
                <h1 className="full-name">{fullName}</h1>
                <p className="country">{country}</p>
              </header>
              <section className="permissions">
                <div className="vocation">
                  <h6>Vocation</h6>
                  <p>Established</p>
                </div>
                <div className="position">
                  <h6>Position</h6>
                  <p>Manager</p>
                </div>
                <div className="occupation">
                  <h6>Occupation</h6>
                  <p>Specialist</p>
                </div>
              </section>
              <footer className="description">
                <div className="department">
                  <h3>Operational</h3>
                </div>
                <div className="description">
                  <p>
                    Jane is the quintessential "visionary chaos" CEO. She can raise $10 million in a single meeting but sees
                    her employees as resources rather than people. Her purpose is not profit, but the ego-driven thrill of
                    expansion, which she pursues by constantly breaking boundaries. Disruptive technology, the sound of her
                    own voice in an all-hands meeting, the myth of the 80-hour work week. Processes, quarterly reports,
                    anyone who asks for a vacation or a raise. Charisma, uncanny ability to secure funding, strategic
                    ruthlessness. Detached from reality, short attention span, addicted to crisis (she creates them to feel
                    productive). To make the company so big that its success retroactively justifies all the collateral
                    damage.
                  </p>
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
