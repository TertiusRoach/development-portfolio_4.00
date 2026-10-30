//--|🠊 selection-label/SelectionFunctions.ts 🠈|--\\
//--|🠋 Character Lists 🠋|--\\
export function listCharacters(company: 'voidspire' | 'silverveil'): Array<string> {
  //--|🠊 AI Code: Review Please 2026-10-29 · Names and order from CHARACTERS.md, both lists end with Randomize Character 🠈|--\\
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
      'Randomize Character',
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
      'Randomize Character',
    ],
  };

  return companyList[company];
}
//--|🠋 Placeholders 🠋|--\\
export function startPlaceholder(type: '{select}' | '{combo}' | '{number}', company: 'voidspire' | 'silverveil'): string {
  //--|🠊 AI Code: Review Please 2026-10-30 · {number} starts at 0 like the old <LabelNumber> page, {combo} names the company like the old <LabelCombobox> page 🠈|--\\
  if (type === '{number}') {
    return '0';
  }
  return company === 'voidspire' ? 'Voidspire Character' : 'Silverveil Character';
}
export default listCharacters;
