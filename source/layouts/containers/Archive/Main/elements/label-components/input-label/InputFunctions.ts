//--|🠊 input-label/InputFunctions.ts 🠈|--\\
//--|🠋 Placeholders 🠋|--\\
export function listPlaceholders(company: 'voidspire' | 'silverveil'): Array<string> {
  //--|🠊 AI Code: Review Please 2026-10-29 15:49 · One per colour, in colour order, matching the type each row of InputLabel.tsx uses 🠈|--\\
  //--|🠊 Names from CHARACTERS.md; .test is a reserved domain, so no address can be real 🠈|--\\
  const companyList: Record<'voidspire' | 'silverveil', Array<string>> = {
    //--|🠊 Left (~dark~): 01 - 09 🠈|--\\
    voidspire: [
      'Jane Lester', //--|🠈 {text} 🠈|--\\
      'malik.carter@voidspire.test', //--|🠈 {email} 🠈|--\\
      "Dimitri Lewis's Password", //--|🠈 {password} 🠈|--\\
      'Search for Dale Sutton', //--|🠈 {search} 🠈|--\\
      'voidspire.test/alaric-voss', //--|🠈 {url} 🠈|--\\
      "Conrad Guy's Phone", //--|🠈 {tel} 🠈|--\\
      'Daniel Meyers', //--|🠈 {text} 🠈|--\\
      'kady.deacon@voidspire.test', //--|🠈 {email} 🠈|--\\
      "Seamus O'Donnell's Password", //--|🠈 {password} 🠈|--\\
      'Search Voidspire', //--|🠈 {search} 🠈|--\\
    ],
    //--|🠊 Right (~light~): 10 - 18 🠈|--\\
    silverveil: [
      'Hammad Dean', //--|🠈 {text} 🠈|--\\
      'tasneem.kemp@silverveil.test', //--|🠈 {email} 🠈|--\\
      "Elliot Crane's Password", //--|🠈 {password} 🠈|--\\
      'Search for Sipho Dlamini', //--|🠈 {search} 🠈|--\\
      'silverveil.test/zuberi-thorne', //--|🠈 {url} 🠈|--\\
      "Nyra Solari's Phone", //--|🠈 {tel} 🠈|--\\
      'Victor Langston', //--|🠈 {text} 🠈|--\\
      'danish.copeland@silverveil.test', //--|🠈 {email} 🠈|--\\
      "Aelin Darrow's Password", //--|🠈 {password} 🠈|--\\
      'Search Silverveil', //--|🠈 {search} 🠈|--\\
    ],
  };

  return companyList[company];
}
export default listPlaceholders;
