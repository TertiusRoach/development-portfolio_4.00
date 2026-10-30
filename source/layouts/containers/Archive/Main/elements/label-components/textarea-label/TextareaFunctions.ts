//--|🠊 textarea-label/TextareaFunctions.ts 🠈|--\\
//--|🠋 Placeholders 🠋|--\\
export function listPlaceholders(company: 'voidspire' | 'silverveil'): Array<string> {
  //--|🠊 AI Code: Review Please 2026-10-29 15:53 · A note with a leave request, names and order from CHARACTERS.md, both lists end with the company 🠈|--\\
  const companyList: Record<'voidspire' | 'silverveil', Array<string>> = {
    //--|🠊 Left (~dark~): 01 - 09 🠈|--\\
    voidspire: [
      "Jane Lester's Leave Note",
      "Malik Tremaine Carter's Leave Note",
      "Dimitri Lewis's Leave Note",
      "Dale Sutton's Leave Note",
      "Dr. Alaric Voss's Leave Note",
      "Conrad Guy's Leave Note",
      "Daniel Meyers's Leave Note",
      "Ms. Kady Deacon's Leave Note",
      "Seamus O'Donnell's Leave Note",
      'Voidspire Leave Note',
    ],
    //--|🠊 Right (~light~): 10 - 18 🠈|--\\
    silverveil: [
      "Hammad Dean's Leave Note",
      "Tasneem Kemp's Leave Note",
      "Elliot Crane's Leave Note",
      "Sipho Dlamini's Leave Note",
      "Zuberi Thorne's Leave Note",
      "Nyra Solari's Leave Note",
      "Victor Langston's Leave Note",
      "Danish Copeland's Leave Note",
      "Aelin Darrow's Leave Note",
      'Silverveil Leave Note',
    ],
  };

  return companyList[company];
}
//--|🠋 Inputs 🠋|--\\
export function listInputs(): Array<string> {
  //--|🠊 AI Code: Review Please 2026-10-30 · The old <LabelInput> page's order, both sides use the same list 🠈|--\\
  return ['{text}', '{email}', '{password}', '{search}', '{url}', '{tel}', '{text}', '{email}', '{password}', '{search}'];
}
export default listPlaceholders;
