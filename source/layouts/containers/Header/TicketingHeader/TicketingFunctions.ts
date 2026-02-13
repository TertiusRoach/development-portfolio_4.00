//--|🠊 Header/TicketingFunctions.ts 🠈|--\\
export function expandHeader(pageName: string) {
  const buttonsHeader = document.getElementById(`${pageName}-header`) as HTMLElement;
  if (buttonsHeader.classList.contains('unfolded')) {
    buttonsHeader.classList.add('expanded');
    buttonsHeader.classList.remove('unfolded');
  } else if (buttonsHeader.classList.contains('expanded')) {
    buttonsHeader.classList.add('collapsed');
    buttonsHeader.classList.remove('expanded');
  }
}
export function loadSoftware(blockAction: 'overtime' | 'ticketing' | 'hyperlink') {
  const ticketingBody = document.getElementById('ticketing-body') as HTMLDivElement;
  const activateBody = document.getElementById(`${blockAction}-body`) as HTMLDivElement;

  if (ticketingBody.classList.contains('active')) {
    ticketingBody.classList.add('asleep');
    ticketingBody.classList.remove('active');

    activateBody.classList.add('active');
    activateBody.classList.remove('asleep');
  }
}
