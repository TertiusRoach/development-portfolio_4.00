//--|🠊 textarea-label/TextareaFunctions.ts 🠈|--\\
//--|🠋 Placeholders 🠋|--\\
function typePlaceholder(type: '{text}' | '{input}' | '{block}', input?: string): string {
  //--|🠊 AI Code: Review Please 2026-10-30 · Every <LabelTextarea> is named after its cases.type; {block} is one security-code character, so it shows a dash 🠈|--\\
  const placeholderMap: Record<string, string> = {
    '{text}': 'Text',
    '{input}': 'Input',
    '{block}': '-',
  };
  const inputMap: Record<string, string> = {
    '{text}': 'Text',
    '{email}': 'Email',
    '{password}': 'Password',
    '{search}': 'Search',
    '{url}': 'Website',
    '{tel}': 'Phone number',
  };

  if (type === '{input}' && input) {
    return `${inputMap[input]} ${placeholderMap[type]}`; //--|🠈 AI Code: Review Please 2026-10-30 · Its data-input, then its cases.type: 'Email Input' 🠈|--\\
  }
  return placeholderMap[type];
}
//--|🠋 Inputs 🠋|--\\
export const listInputs = (): Array<string> => {
  //--|🠊 AI Code: Review Please 2026-10-30 · The old <LabelInput> page's order, the {input} row uses the first four 🠈|--\\
  return ['{text}', '{email}', '{password}', '{search}', '{url}', '{tel}', '{text}', '{email}', '{password}', '{search}'];
};
export default typePlaceholder;
