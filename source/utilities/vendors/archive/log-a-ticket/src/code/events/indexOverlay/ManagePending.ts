//--|▼| Tools (Import) |▼|--//
import { DataCreate } from 'code/tools/DataCreate';
import { DataErase } from 'code/tools/DataErase';
import { DataRead } from 'code/tools/DataRead';
import { DataUpdate } from 'code/tools/DataUpdate';

import { GetArray } from 'code/tools/GetArray';
import { GetColor } from 'code/tools/GetColor';
import { GetElement } from 'code/tools/GetElement';
import { GetEvent } from 'code/tools/GetEvent';
import { GetPath } from 'code/tools/GetPath';

import { UseCapify } from 'code/tools/UseCapify';
import { UseDatefy } from 'code/tools/UseDatefy';
import { UseValufy } from 'code/tools/UseValufy';

//--|►| ManagePending |◄|--//
export namespace ManagePending {
  export class initiateEvents {
    constructor() {
      /* First ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      new DataRead.forOverlay('manage-pending');

      /* Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');

      const indexHeader: HTMLElement = document.querySelector('#index-header');
      let logButton: HTMLElement = indexHeader.querySelector('#log-a-ticket button');

      const indexMain: HTMLElement = document.querySelector('#index-main');

      indexMain.style.display = 'none';

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');
      let closeOverlay: HTMLButtonElement = indexOverlay.querySelector('#close-overlay');
      let assignButton: HTMLButtonElement = indexOverlay.querySelector('#assign-ticket button');
      let claimButton: HTMLButtonElement = indexOverlay.querySelector('#claim-ticket button');
      let deleteButton: HTMLButtonElement = indexOverlay.querySelector('#delete-ticket button');
      let moveButton: HTMLButtonElement = indexOverlay.querySelector('#move-ticket button');
      let saveButton: HTMLButtonElement = indexOverlay.querySelector('#save-ticket button');
      let departmentSelect: HTMLSelectElement = indexOverlay.querySelector('#department-form select');
      let colleagueSelect: HTMLSelectElement = indexOverlay.querySelector('#colleague-form select');
      let ticketSubject: HTMLElement = indexOverlay.querySelector('#ticket-subject');
      let ticketDescription: HTMLElement = indexOverlay.querySelector('#ticket-description');
      let datePending: HTMLHeadingElement = indexOverlay.querySelector('#pending-date');
      let dateAssigned: HTMLHeadingElement = indexOverlay.querySelector('#assigned-date');
      let dateDeleted: HTMLHeadingElement = indexOverlay.querySelector('#deleted-date');
      let pendingMark: HTMLDivElement = indexOverlay.querySelector('.pending-mark');
      let assignedMark: HTMLDivElement = indexOverlay.querySelector('.assigned-mark');

      const indexData: HTMLElement = document.querySelector('#index-data');

      /* Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      function toggleDates() {
        var selectedIndex = colleagueSelect.selectedOptions[0].value;
        if (selectedIndex === 'select-colleague') {
          dateAssigned.textContent = 'undefined';
          dateAssigned.className = 'disabled-text';

          pendingMark.style.background = `${GetColor.primaryDark()}`;
          assignedMark.style.background = `${GetColor.primaryMedium()}`;

          dateDeleted.textContent = 'undefined';
          dateDeleted.className = 'disabled-text';
        } else {
          dateAssigned.textContent = `${UseDatefy.forToday('Weekday, 00 Month YYYY')}`;
          dateAssigned.className = '';

          pendingMark.style.background = `${GetColor.primaryMedium()}`;
          assignedMark.style.background = `${GetColor.primaryDark()}`;

          dateDeleted.textContent = 'undefined';
          dateDeleted.className = 'disabled-text';
        }

        if (dateAssigned.textContent === 'undefined' || dateAssigned.textContent === 'undefined') {
          dateAssigned.style.display = 'none';
          dateDeleted.style.display = 'none';
        } else if (dateAssigned.textContent !== 'undefined') {
          dateAssigned.style.display = 'none';
          dateDeleted.style.display = 'none';
        } else if (dateDeleted.textContent !== 'undefined') {
          dateAssigned.style.display = 'none';
          dateDeleted.style.display = 'flex';
        }
      }
      function toggleButton() {
        if (colleagueSelect.value === UseValufy.forString(findUser())) {
          assignButton.parentElement.style.display = 'none';
          assignButton.className = 'disabled-button';

          claimButton.parentElement.style.display = 'grid';
          claimButton.className = '';

          moveButton.parentElement.style.display = 'none';
          moveButton.className = 'disabled-button';
        } else if (colleagueSelect.value === 'select-colleague') {
          assignButton.parentElement.style.display = 'none';
          assignButton.className = 'disabled-button';

          claimButton.parentElement.style.display = 'none';
          claimButton.className = 'disabled-button';

          moveButton.parentElement.style.display = 'grid';
          moveButton.className = '';
        } else if (colleagueSelect.value !== 'select-colleague') {
          assignButton.parentElement.style.display = 'grid';
          assignButton.className = '';

          claimButton.parentElement.style.display = 'none';
          claimButton.className = 'disabled-button';

          moveButton.parentElement.style.display = 'none';
          moveButton.className = 'disabled-button';
        }
      }

      /* Classes ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Events ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      $(assignButton)
        .on('click', () => {
          new DataUpdate.forButton('assign');
        })
        .on('mouseenter', () => {
          if (assignButton.className !== 'disabled-button') {
            dateAssigned.style.display = 'flex';
            assignButton.style.color = `${GetColor.primaryLight()}`;
          } else {
            dateAssigned.style.display = 'none';
            assignButton.style.color = '';
          }
        })
        .on('mouseleave', () => {
          dateAssigned.style.display = 'none';
          assignButton.style.color = '';
        });
      $(claimButton)
        .on('click', () => {
          if (claimButton.className !== 'disabled-button') {
            new DataUpdate.forButton('claim');
          }
        })
        .on('mouseenter', () => {
          if (claimButton.className !== 'disabled-button') {
            dateAssigned.style.display = 'flex';
            claimButton.style.color = `${GetColor.primaryLight()}`;
          } else {
            dateAssigned.style.display = 'none';
            claimButton.style.color = '';
          }
        })
        .on('mouseleave', () => {
          dateAssigned.style.display = 'none';
          claimButton.style.color = '';
        });

      $(deleteButton)
        .on('click', () => {
          new DataUpdate.forButton('assign');
        })
        .on('mouseenter', () => {
          if (deleteButton.className !== 'disabled-button') {
            dateAssigned.style.display = 'none';
            dateAssigned.textContent = 'undefined';
            dateAssigned.className = 'disabled-text';

            dateDeleted.style.display = 'flex';
            dateDeleted.textContent = `${UseDatefy.forToday('Weekday, 00 Month YYYY')}`;
            dateDeleted.className = '';

            deleteButton.parentElement.style.background = `${GetColor.primaryDark()}`;
            pendingMark.style.background = '';
            assignedMark.style.background = '';
          }
        })
        .on('mouseleave', () => {
          if (deleteButton.className !== 'disabled-button') {
            if (colleagueSelect.value !== 'select-colleague') {
              dateAssigned.style.display = 'none';
              dateAssigned.textContent = `${UseDatefy.forToday('Weekday, 00 Month YYYY')}`;
              dateAssigned.className = '';

              dateDeleted.style.display = 'none';
              dateDeleted.textContent = 'undefined';
              dateDeleted.className = 'disabled-text';

              pendingMark.style.background = '';
              assignedMark.style.background = `${GetColor.primaryDark()}`;
            } else {
              dateAssigned.style.display = 'none';
              dateAssigned.textContent = 'undefined';
              dateAssigned.className = 'disabled-text';

              dateDeleted.style.display = 'none';
              dateDeleted.textContent = 'undefined';
              dateDeleted.className = 'disabled-text';

              pendingMark.style.background = `${GetColor.primaryDark()}`;
              assignedMark.style.background = '';
            }
            deleteButton.parentElement.style.background = '';
          }
        });
      $(moveButton)
        .on('click', () => {
          new DataUpdate.forButton('move');
        })
        .on('mouseenter', () => {
          if (assignButton.className !== 'disabled-button') {
            dateAssigned.style.display = 'flex';
            assignButton.style.color = `${GetColor.primaryLight()}`;
          } else {
            dateAssigned.style.display = 'none';
            assignButton.style.color = '';
          }
        })
        .on('mouseleave', () => {
          dateAssigned.style.display = 'none';
          assignButton.style.color = '';
        });
      $(departmentSelect)
        .on('click', () => {
          if (colleagueSelect.value !== UseValufy.forString(findUser())) {
            deleteButton.className = 'disabled-button';
            deleteButton.parentElement.style.background = `${GetColor.primaryMedium()}`;
          } else {
            deleteButton.className = '';
            deleteButton.parentElement.style.background = '';
          }
          toggleDates();
        })
        .on('change', () => {
          toggleButton();
        });

      $(colleagueSelect)
        .on('click', () => {
          if (colleagueSelect.value === 'select-colleague') {
            claimButton.className = 'disabled-button';
          } else if (colleagueSelect.value !== UseValufy.forString(findUser())) {
            deleteButton.className = 'disabled-button';
            deleteButton.parentElement.style.background = `${GetColor.primaryMedium()}`;
          } else {
            deleteButton.className = '';
            deleteButton.parentElement.style.background = '';
          }
          toggleDates();
        })
        .on('change', () => {
          toggleButton();
        });

      /* Done ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      $(dateAssigned).on('change', () => {
        toggleDates();
      });
      $(dateDeleted).on('change', () => {
        toggleDates();
      });
      $(closeOverlay).on('click', () => {
        closeContainer('index-overlay');
      });

      /* Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      toggleDates();

      console.log('--ManagePending.js Loaded');
    }
  }
  function closeContainer(block: String | 'index-header' | 'index-main' | 'index-sidebar' | 'index-overlay') {
    const indexMain: HTMLElement = document.querySelector('#index-main');
    var ticketsMain: HTMLDivElement = indexMain.querySelector('#tickets-container');
    var activeTicket: HTMLElement = ticketsMain.querySelector('.active-ticket');
    var container: HTMLElement = document.querySelector(`#${block}`);
    container.innerHTML = '';
    container.className = '';
    container.style.display = 'none';
    container.className = `default-${block.split('-')[1]}`;
    activeTicket.className = activeTicket.classList[0];

    indexMain.style.display = 'grid';
  }
  function findUser() {
    const indexBody: HTMLBodyElement = document.querySelector('#index-body');
    let userSelect: HTMLSelectElement = indexBody.querySelector('#user-form select');
    let userIndex: number = userSelect.selectedIndex;
    let userName: String = userSelect.children[userIndex].textContent;
    return `${userName}`;
  }
  function getTicket(
    info:
      | String
      | 'ticket-status'
      | 'ticket-rating'
      | 'subject-text'
      | 'description-text'
      | 'sender-name'
      | 'sender-department'
      | 'receiver-name'
      | 'receiver-department'
      | 'date-short'
      | 'date-pending'
      | 'date-assigned'
      | 'date-resolved'
      | 'note-resolved'
      | 'date-deleted'
      | 'note-deleted'
  ) {
    var activeTicket = document.querySelector('#index-main #tickets-container .active-ticket');

    switch (info) {
      case 'ticket-status':
        var ticketStatus: String = activeTicket.children[3].children[0].innerHTML;
        return ticketStatus;
      case 'ticket-rating':
        var ticketRating: String = activeTicket.children[3].children[1].innerHTML;
        return ticketRating;
      case 'subject-text':
        var subjectText: String = activeTicket.children[3].children[2].innerHTML;
        return subjectText;
      case 'description-text':
        var descriptionText: String = activeTicket.children[3].children[3].innerHTML;
        return descriptionText;
      case 'sender-name':
        var senderName: String = activeTicket.children[3].children[4].innerHTML;
        return senderName;
      case 'sender-department':
        var senderDepartment: String = activeTicket.children[3].children[5].innerHTML;
        return senderDepartment;
      case 'receiver-name':
        var receiverName: String = activeTicket.children[3].children[6].innerHTML;
        return receiverName;
      case 'receiver-department':
        var receiverDepartment: String = activeTicket.children[3].children[7].innerHTML;
        return receiverDepartment;
      case 'date-short':
        var dateShort: String = activeTicket.children[3].children[8].innerHTML;
        return dateShort;
      case 'date-pending':
        var datePending: String = activeTicket.children[3].children[9].innerHTML;
        return datePending;
      case 'date-assigned':
        var dateAssigned: String = activeTicket.children[3].children[10].innerHTML;
        return dateAssigned;
      case 'date-resolved':
        var dateResolved: String = activeTicket.children[3].children[11].innerHTML;
        return dateResolved;
      case 'note-resolved':
        var noteResolved: String = activeTicket.children[3].children[12].innerHTML;
        return noteResolved;
      case 'date-deleted':
        var dateDeleted: String = activeTicket.children[3].children[13].innerHTML;
        return dateDeleted;
      case 'note-deleted':
        var noteDeleted: String = activeTicket.children[3].children[14].innerHTML;
        return noteDeleted;
    }
  }
}
