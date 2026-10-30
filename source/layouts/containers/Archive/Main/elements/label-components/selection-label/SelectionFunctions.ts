//--|🠊 selection-label/SelectionFunctions.ts 🠈|--\\
//--|🠋 Character Lists 🠋|--\\
function listCharacters(company: 'voidspire' | 'silverveil'): Array<string> {
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
export const typePlaceholder = (type: '{select}' | '{combo}' | '{number}'): string => {
  //--|🠊 AI Code: Review Please 2026-10-30 · Every <LabelSelection> is named after its cases.type; {number} shows 0 until a number is typed 🠈|--\\
  const placeholderMap: Record<string, string> = {
    '{select}': 'Select',
    '{combo}': 'Combo',
    '{number}': '0',
  };

  return placeholderMap[type];
};
export default listCharacters;
