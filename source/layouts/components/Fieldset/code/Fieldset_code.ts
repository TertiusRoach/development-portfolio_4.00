//--|🠊 Fieldset_code.ts 🠈|--//
export function reactChange(
  index: number,
  value: string,
  code: string[],
  setCode: React.Dispatch<React.SetStateAction<string[]>>,
  inputsRef: React.RefObject<(HTMLInputElement | null)[]>
) {
  // 🔹 Move Functions Outside of FormVerify
  if (!/^[A-Za-z0-9]?$/.test(value)) return;

  const newCode = [...code];
  newCode[index] = value;
  setCode(newCode);

  if (value && index < 3) {
    inputsRef.current?.[index + 1]?.focus();
  }
}
export function reactKeydown(
  index: number,
  event: React.KeyboardEvent<HTMLInputElement>,
  code: string[],
  inputsRef: React.RefObject<(HTMLInputElement | null)[]>
) {
  if (event.key === 'Backspace' && !code[index] && index > 0) {
    inputsRef.current?.[index - 1]?.focus();
  }
}
export function reactPaste(
  event: React.ClipboardEvent<HTMLInputElement>,
  setCode: React.Dispatch<React.SetStateAction<string[]>>,
  inputsRef: React.RefObject<(HTMLInputElement | null)[]>
) {
  event.preventDefault();
  const pasteData = event.clipboardData.getData('text').slice(0, 4).replace(/\W/g, '');
  if (pasteData.length === 4) {
    setCode(pasteData.split(''));
    inputsRef.current?.[3]?.focus(); // Move focus to the last field
  }
}
