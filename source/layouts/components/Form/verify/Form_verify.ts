//--|🠊 Form_verify.ts 🠈|--//
export function defineButton(button: 'verify', info: { blockName: string; pageName: string }) {
  const { blockName, pageName } = info;
  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'verify':
      return {
        fontSize: '<h3>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'text' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'light' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'landing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/91a25e4fa1bea9a24a757fad615acb2b7da41fc0/source/assets/svg-files/landing-page/key.svg',
      };
  }
}

export function closeLeftbar(pageName: 'landing' | string) {
  let closeVerify = document.querySelector('.verify-close') as HTMLElement;
  let leftbar = document.querySelector(`#${pageName}-leftbar`) as HTMLElement;

  if (closeVerify && leftbar) {
    var closeClick = () => {
      leftbar.classList.remove('expanded'); // Remove '.expanded'
      leftbar.classList.toggle('collapsed'); // Toggle '.collapsed'
    };

    closeVerify.addEventListener('click', closeClick);
    return () => closeVerify.removeEventListener('click', closeClick);
  }
}

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
