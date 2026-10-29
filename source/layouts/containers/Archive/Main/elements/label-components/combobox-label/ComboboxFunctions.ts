//--|🠊 combobox-label/ComboboxFunctions.ts 🠈|--\\
//--|🠋 Character Lists 🠋|--\\
export function listCharacters(company: 'voidspire' | 'silverveil'): Array<string> {
  //--|🠊 AI Code: Review Please 2026-10-29 16:02 · Names and order from CHARACTERS.md, like SelectFunctions.ts without Randomize Character: you can type anyone 🠈|--\\
  const companyList: Record<'voidspire' | 'silverveil', Array<string>> = {
    //--|🠊 Left (~dark~): 01 - 09 🠈|--\\
    voidspire: [
      'Jane Lester',
      'Malik Tremaine Carter',
      'Dimitri Lewis',
      'Dale Sutton',
      'Dr. Alaric Voss',
      'Conrad Guy',
      'Daniel Meyers',
      'Ms. Kady Deacon',
      "Seamus O'Donnell",
    ],
    //--|🠊 Right (~light~): 10 - 18 🠈|--\\
    silverveil: [
      'Hammad Dean',
      'Tasneem Kemp',
      'Elliot Crane',
      'Sipho Dlamini',
      'Zuberi Thorne',
      'Nyra Solari',
      'Victor Langston',
      'Danish Copeland',
      'Aelin Darrow',
    ],
  };

  return companyList[company];
}
export default listCharacters;
