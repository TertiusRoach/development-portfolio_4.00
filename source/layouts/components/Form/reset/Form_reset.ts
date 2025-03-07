export function closeRightbar(pageName: 'landing' | string) {
  let closeReset = document.querySelector('.reset-close') as HTMLElement;
  let rightbar = document.querySelector(`#${pageName}-rightbar`) as HTMLElement;

  if (closeReset && rightbar) {
    var closeClick = () => {
      rightbar.classList.remove('expanded'); // Remove '.expanded'
      rightbar.classList.toggle('collapsed'); // Toggle '.collapsed'
    };

    closeReset.addEventListener('click', closeClick);
    return () => closeReset.removeEventListener('click', closeClick);
  }
}
