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
