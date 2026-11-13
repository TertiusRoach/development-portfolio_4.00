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

//--|►| Logged Pending |◄|--//
export namespace LoggedPending {
  export class initiateEvents {
    constructor() {
      /* First ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      new DataRead.forOverlay('logged-pending');

      /* Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');

      const indexHeader: HTMLElement = document.querySelector('#index-header');
      let logAticket: HTMLElement = indexHeader.querySelector('#log-a-ticket button');

      const indexMain: HTMLElement = document.querySelector('#index-main');
      let ticketsContainer: HTMLDivElement = indexMain.querySelector('#tickets-container');
      let activeTicket = ticketsContainer.querySelector('.active-ticket');

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');
      let closeOverlay: HTMLButtonElement = indexOverlay.querySelector('#close-overlay');
      let departmentSelect: HTMLSelectElement = indexOverlay.querySelector('#department-form select');
      let colleagueSelect: HTMLSelectElement = indexOverlay.querySelector('#colleague-form select');
      let ticketSubject: HTMLElement = indexOverlay.querySelector('#ticket-subject');
      let ticketDescription: HTMLElement = indexOverlay.querySelector('#ticket-description');

      let assignButton: HTMLButtonElement = indexOverlay.querySelector('#assign-ticket button');
      let claimButton: HTMLButtonElement = indexOverlay.querySelector('#claim-ticket button');
      let deleteButton: HTMLButtonElement = indexOverlay.querySelector('#delete-ticket button');
      let logButton: HTMLButtonElement = indexOverlay.querySelector('#log-ticket button');
      let moveButton: HTMLButtonElement = indexOverlay.querySelector('#move-ticket button');
      let recycleButton: HTMLButtonElement = indexOverlay.querySelector('#recycle-ticket button');
      let restoreButton: HTMLButtonElement = indexOverlay.querySelector('#restore-ticket button');
      let saveButton: HTMLButtonElement = indexOverlay.querySelector('#save-ticket button');
      let takeButton: HTMLButtonElement = indexOverlay.querySelector('#take-ticket button');
      let unlockButton: HTMLButtonElement = indexOverlay.querySelector('#unlock-ticket button');

      let pendingMark: HTMLDivElement = indexOverlay.querySelector('.pending-mark');
      let assignedMark: HTMLDivElement = indexOverlay.querySelector('.assigned-mark');
      let deletedMark: HTMLDivElement = indexOverlay.querySelector('.deleted-mark');

      let pendingDate: HTMLHeadingElement = indexOverlay.querySelector('#pending-date');
      let assignedDate: HTMLHeadingElement = indexOverlay.querySelector('#assigned-date');
      let deletedDate: HTMLHeadingElement = indexOverlay.querySelector('#deleted-date');

      const indexData: HTMLElement = document.querySelector('#index-data');

      /* Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      function closeContainer(block: String | 'index-header' | 'index-main' | 'index-sidebar' | 'index-overlay') {
        let container: HTMLElement = document.querySelector(`#${block}`);
        container.innerHTML = '';
        container.className = '';
        container.className = `default-${block.split('-')[1]}`;
        container.style.display = 'none';

        var status: String = activeTicket.classList[0];
        activeTicket.className = `${status}`;
        indexMain.style.display = 'grid';
      }
      function toggleButton() {
        let activeTicket = ticketsContainer.querySelector('.active-ticket');
        var ticketStatus: String = activeTicket.children[3].children[0].innerHTML;
        var ticketRating: String = activeTicket.children[3].children[1].innerHTML;
        var subjectText: String = activeTicket.children[3].children[2].innerHTML;
        var descriptionText: String = activeTicket.children[3].children[3].innerHTML;
        var senderName: String = activeTicket.children[3].children[4].innerHTML;
        var senderDepartment: String = activeTicket.children[3].children[5].innerHTML;
        var receiverName: String = activeTicket.children[3].children[6].innerHTML;
        var receiverDepartment: String = activeTicket.children[3].children[7].innerHTML;
        var dateShort: String = activeTicket.children[3].children[8].innerHTML;
        var datePending: String = activeTicket.children[3].children[9].innerHTML;
        var dateAssigned: String = activeTicket.children[3].children[10].innerHTML;
        var dateResolved: String = activeTicket.children[3].children[11].innerHTML;
        var noteResolved: String = activeTicket.children[3].children[12].innerHTML;
        var dateDeleted: String = activeTicket.children[3].children[13].innerHTML;
        var noteDeleted: String = activeTicket.children[3].children[14].innerHTML;

        let liveReceiverDepartment = `${UseCapify.forString('-', `${$(departmentSelect).val()}`)}`;
        if (colleagueSelect.getElementsByTagName('option').length === 1) {
          assignButton.parentElement.style.display = 'none';
          deleteButton.parentElement.style.display = 'grid';
          moveButton.parentElement.style.display = 'none';
          saveButton.parentElement.style.display = 'none';

          assignButton.className = 'disabled-button';
          deleteButton.className = '';
          moveButton.className = 'disabled-button';
          saveButton.className = 'disabled-button';
        } else if (colleagueSelect.value !== 'select-colleague') {
          assignedDate.textContent = `${UseDatefy.forToday('Weekday, 00 Month YYYY')}`;
          // Assign ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ◄ //
          assignButton.parentElement.style.display = 'grid';
          deleteButton.parentElement.style.display = 'none';
          moveButton.parentElement.style.display = 'none';
          saveButton.parentElement.style.display = 'none';

          assignButton.className = '';
          deleteButton.className = 'disabled-button';
          moveButton.className = 'disabled-button';
          saveButton.className = 'disabled-button';

          pendingMark.style.background = `${GetColor.primaryMedium()}`;
          deletedMark.style.background = `${GetColor.primaryMedium()}`;
          assignedMark.style.background = `${GetColor.primaryDark()}`;

          assignedDate.className = '';
        } else if (liveReceiverDepartment !== receiverDepartment) {
          assignButton.parentElement.style.display = 'none';
          deleteButton.parentElement.style.display = 'none';
          moveButton.parentElement.style.display = 'grid';
          saveButton.parentElement.style.display = 'none';

          assignButton.className = 'disabled-button';
          deleteButton.className = 'disabled-button';
          moveButton.className = '';
          saveButton.className = 'disabled-button';

          if (colleagueSelect.value === 'select-colleague') {
            pendingMark.style.background = `${GetColor.primaryDark()}`;
            assignedMark.style.background = `${GetColor.primaryMedium()}`;
            deletedMark.style.background = `${GetColor.primaryMedium()}`;
          } else {
            pendingMark.style.background = `${GetColor.primaryMedium()}`;
            assignedMark.style.background = `${GetColor.primaryDark()}`;
            deletedMark.style.background = `${GetColor.primaryMedium()}`;
          }
        } else if (subjectText !== `${$(ticketSubject).val()}` || descriptionText !== `${$(ticketDescription).val()}`) {
          assignButton.parentElement.style.display = 'none';
          deleteButton.parentElement.style.display = 'none';
          moveButton.parentElement.style.display = 'none';
          saveButton.parentElement.style.display = 'grid';

          assignButton.className = 'disabled-button';
          deleteButton.className = 'disabled-button';
          moveButton.className = 'disabled-button';
          saveButton.className = '';

          saveButton.className = '';
        } else if (colleagueSelect.value === 'select-colleague') {
          pendingMark.style.background = `${GetColor.primaryDark()}`;
          assignedMark.style.background = `${GetColor.primaryMedium()}`;
          deletedMark.style.background = `${GetColor.primaryMedium()}`;

          assignedDate.textContent = undefined;
          // Default: Delete ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ◄ //
          assignButton.parentElement.style.display = 'none';
          deleteButton.parentElement.style.display = 'grid';
          moveButton.parentElement.style.display = 'none';
          saveButton.parentElement.style.display = 'none';

          assignButton.className = 'disabled-button';
          deleteButton.className = '';
          moveButton.className = 'disabled-button';
          saveButton.className = 'disabled-button';
        }
      }
      /* Classes ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Events ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      $(assignButton)
        .on('click', () => {
          if (assignButton.className !== 'disabled-button') {
            new DataUpdate.forButton('assign');
          }
        })
        .on('mouseenter', () => {
          assignButton.style.color = `${GetColor.primaryLight()}`;
          assignedDate.style.display = 'grid';
        })
        .on('mouseleave', () => {
          assignButton.style.color = '';
          assignedDate.style.display = 'none';
        });

      $(deleteButton)
        .on('click', () => {
          if (deleteButton.className !== 'disabled-button') {
            new GetEvent.forPage('delete-overlay', GetPath.forHTML('overlay'));
          }
        })
        .on('mouseenter', () => {
          deletedMark.style.background = `${GetColor.primaryDark()}`;

          pendingMark.style.background = `${GetColor.primaryMedium()}`;
          assignedMark.style.background = `${GetColor.primaryMedium()}`;

          deleteButton.style.color = `${GetColor.deletedDefault()}`;
          deletedDate.textContent = UseDatefy.forToday('Weekday, 00 Month YYYY');
          deletedDate.style.display = 'grid';
          deletedDate.className = '';
        })
        .on('mouseleave', () => {
          pendingMark.style.background = `${GetColor.primaryDark()}`;
          assignedMark.style.background = `${GetColor.primaryMedium()}`;

          deletedMark.style.background = `${GetColor.primaryMedium()}`;

          deleteButton.style.color = '';
          deletedDate.style.display = 'none';
          deletedDate.textContent = 'undefined';
          deletedDate.className = 'disabled-text';
        });

      $(moveButton)
        .on('click', () => {
          if (moveButton.className !== 'disabled-button') {
            new DataUpdate.forButton('move');
          }
        })
        .on('mouseenter', () => {
          moveButton.style.color = `${GetColor.pendingDefault()}`;
        })
        .on('mouseleave', () => {
          moveButton.style.color = '';
        });

      $(saveButton)
        .on('click', () => {
          if (saveButton.className !== 'disabled-button') {
            new DataUpdate.forButton('save');
          }
        })
        .on('mouseenter', () => {
          saveButton.style.color = `${GetColor.secondaryDark()}`;
        })
        .on('mouseleave', () => {
          saveButton.style.color = '';
        });

      $(ticketSubject)
        .on('keydown', () => {})
        .on('keyup', () => {
          toggleButton();
        });
      $(ticketDescription)
        .on('keydown', () => {})
        .on('keyup', () => {
          toggleButton();
        });

      $(departmentSelect).on('click', () => {
        toggleButton();
      });

      $(colleagueSelect).on('click', () => {
        toggleButton();
      });

      $(closeOverlay).on('click', () => {
        closeContainer('index-overlay');
      });
      /* Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      /*--► console.log('--LoggedPending.js Loaded'); ◄--*/
    }
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
