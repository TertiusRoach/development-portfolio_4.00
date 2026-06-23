//--|🠊 Section.characters.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Section.characters.scss';

//--|🠋 Functions 🠋|--\\

//--|🠋 Components 🠋|--\\

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
type CharacterReferences = {
  key: [
    number,
    (
      | string
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
    ),
  ];
  fullName:
    | 'Jane Lester'
    | 'Malik Tremaine Carter'
    | 'Dimitri Lewis'
    | 'Dale Sutton'
    | 'Dr. Alaric Voss'
    | 'Conrad Guy'
    | 'Daniel Meyers'
    | 'Ms. Kady Deacon'
    | "Seamus O'Donnell"
    | 'Hammad Dean'
    | 'Tasneem Kemp'
    | 'Sipho Dlamini'
    | 'Elliot Crane'
    | 'Zuberi Thorne'
    | 'Nyra Solari'
    | 'Victor Langston'
    | 'Danish Copeland'
    | 'Aelin Darrow';
  country: string;
  department: [boolean, string];
  description: string;
  profile: string;
  permissions: [
    { vocation: 'Established' | 'Freelancing' },
    { position: 'Employee' | 'Manager' },
    { occupation: 'Specialist' | 'Technician' },
  ];
};
const SectionCharacters: React.FC<TheseProps> = ({ info }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  switch (pageName) {
    case 'components':
    default:
      return (
        <section className={`${info.labelName}-${info.blockName}_characters-default`}>
          <div className="wrapper">
            <header className="information">
              <img src="" alt="" />
              <h1 className="full-name">full-name</h1>
              <p className="country">South Africa</p>
            </header>
            <section className="permissions">
              <div className="vocation">
                <h6>Vocation</h6>
                <p>Established or Freelancing</p>
              </div>
              <div className="position">
                <h6>Position</h6>
                <p>Employee or Manager</p>
              </div>
              <div className="occupation">
                <h6>Occupation</h6>
                <p>Specialist or Technician</p>
              </div>
            </section>
            <footer className="description">
              <h3 className="department">Operational</h3>
              <p className="description">LOREMIPSUM!</p>
            </footer>
          </div>
        </section>
      );
  }
  if (pageName === 'components') {
  }
};
export default SectionCharacters;

let randomizeCharacters = (pageName: 'components', blockName: 'main'): Array<CharacterReferences | HTMLElement> => {
  //--|🠋 Characters 🠋|--\\
  let characters: Array<CharacterReferences> = [
    {
      fullName: 'Jane Lester',
      department: [true, 'Owner/CEO'],
      country: 'United States (Silicon Valley Origin)',
      description: '',
      profile: '',
      permissions: [{ vocation: 'Established' }, { position: 'Employee' }, { occupation: 'Specialist' }],
      key: [1, 'jane'],
    },
    {
      fullName: 'Malik Tremaine Carter',
      department: [false, 'Coordination'],
      country: 'Canada',
      description: '',
      profile: '',
      permissions: [{ vocation: 'Established' }, { position: 'Employee' }, { occupation: 'Specialist' }],
      key: [2, 'malik'],
    },
    {
      fullName: 'Dimitri Lewis',
      department: [false, 'Technical'],
      country: 'Greece',
      description: '',
      profile: '',
      permissions: [{ vocation: 'Established' }, { position: 'Employee' }, { occupation: 'Specialist' }],
      key: [3, 'dimitri'],
    },
    {
      fullName: 'Dale Sutton',
      department: [false, 'Technical'],
      country: 'Canada',
      description: '',
      profile: '',
      permissions: [{ vocation: 'Established' }, { position: 'Employee' }, { occupation: 'Specialist' }],
      key: [4, 'dale'],
    },
    {
      fullName: 'Dr. Alaric Voss',
      department: [true, 'Technical'],
      country: 'Germany',
      description: '',
      profile: '',
      permissions: [{ vocation: 'Established' }, { position: 'Employee' }, { occupation: 'Specialist' }],
      key: [5, 'alaric'],
    },
    {
      fullName: 'Conrad Guy',
      department: [true, 'Admin'],
      country: 'South Africa',
      description: '',
      profile: '',
      permissions: [{ vocation: 'Established' }, { position: 'Employee' }, { occupation: 'Specialist' }],
      key: [6, 'conrad'],
    },
    {
      fullName: 'Daniel Meyers',
      department: [false, 'Admin'],
      country: 'United Kingdom',
      description: '',
      profile: '',
      permissions: [{ vocation: 'Established' }, { position: 'Employee' }, { occupation: 'Specialist' }],
      key: [7, 'daniel'],
    },
    {
      fullName: 'Ms. Kady Deacon',
      department: [false, 'Admin'],
      country: 'United Kingdom',
      description: '',
      profile: '',
      permissions: [{ vocation: 'Established' }, { position: 'Employee' }, { occupation: 'Specialist' }],
      key: [8, 'kady'],
    },
    {
      fullName: "Seamus O'Donnell",
      department: [true, 'Maintenance'],
      country: 'Ireland',
      description: '',
      profile: '',
      permissions: [{ vocation: 'Established' }, { position: 'Employee' }, { occupation: 'Specialist' }],
      key: [9, 'seamus'],
    },
    {
      fullName: 'Hammad Dean',
      department: [true, 'Technical'],
      country: 'United Arab Emirates',
      description: '',
      profile: '',
      permissions: [{ vocation: 'Established' }, { position: 'Employee' }, { occupation: 'Specialist' }],
      key: [10, 'hammad'],
    },
    {
      fullName: 'Tasneem Kemp',
      department: [false, 'Maintenance'],
      country: 'India',
      description: '',
      profile: '',
      permissions: [{ vocation: 'Established' }, { position: 'Employee' }, { occupation: 'Specialist' }],
      key: [11, 'tasneem'],
    },
    {
      fullName: 'Sipho Dlamini',
      department: [false, 'Maintenance'],
      country: 'South Africa',
      description: '',
      profile: '',
      permissions: [{ vocation: 'Established' }, { position: 'Employee' }, { occupation: 'Specialist' }],
      key: [12, 'elliot'],
    },
    {
      fullName: 'Elliot Crane',
      department: [true, 'Operational'],
      country: 'United States',
      description: '',
      profile: '',
      permissions: [{ vocation: 'Established' }, { position: 'Employee' }, { occupation: 'Specialist' }],
      key: [13, 'sipho'],
    },
    {
      fullName: 'Zuberi Thorne',
      department: [false, 'Operational'],
      country: 'South Africa',
      description: '',
      profile: '',
      permissions: [{ vocation: 'Established' }, { position: 'Employee' }, { occupation: 'Specialist' }],
      key: [14, 'zuberi'],
    },
    {
      fullName: 'Nyra Solari',
      department: [false, 'Operational'],
      country: 'China',
      description: '',
      profile: '',
      permissions: [{ vocation: 'Established' }, { position: 'Employee' }, { occupation: 'Specialist' }],
      key: [15, 'nyra'],
    },
    {
      fullName: 'Victor Langston',
      department: [false, 'Operational'],
      country: 'United States',
      description: '',
      profile: '',
      permissions: [{ vocation: 'Established' }, { position: 'Employee' }, { occupation: 'Specialist' }],
      key: [16, 'victor'],
    },
    {
      fullName: 'Danish Copeland',
      department: [true, 'Human Resources'],
      country: 'Australia',
      description: '',
      profile: '',
      permissions: [{ vocation: 'Established' }, { position: 'Employee' }, { occupation: 'Specialist' }],
      key: [17, 'danish'],
    },
    {
      fullName: 'Aelin Darrow',
      department: [true, 'Coordination'],
      country: 'United Kingdom',
      description: '',
      profile: '',
      permissions: [{ vocation: 'Established' }, { position: 'Employee' }, { occupation: 'Specialist' }],
      key: [18, 'aelin'],
    },
  ];

  //--|🠋 HTML Element (always last) 🠋|--\\
  let element: HTMLElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  return [...characters, element];
};
