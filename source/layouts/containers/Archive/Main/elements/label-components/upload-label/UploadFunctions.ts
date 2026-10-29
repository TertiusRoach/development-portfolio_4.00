//--|🠊 upload-label/UploadFunctions.ts 🠈|--\\
//--|🠋 File Types 🠋|--\\
export function listAccepts(): Array<string> {
  //--|🠊 AI Code: Review Please 2026-10-29 16:44 · One per colour, in colour order: what each picker lets you choose, the last one takes anything 🠈|--\\
  const acceptList: Array<string> = [
    '.pdf', //--|🠈 A sick note or a contract 🠈|--\\
    '.png',
    '.jpg',
    '.docx',
    '.xlsx',
    '.csv', //--|🠈 A timesheet export 🠈|--\\
    '.txt',
    'image/*', //--|🠈 Any picture 🠈|--\\
    '.pdf,.png,.jpg',
    '', //--|🠈 Any file 🠈|--\\
  ];

  return acceptList;
}
export default listAccepts;
