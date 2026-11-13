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

//--|►| UserAssigned |◄|--//
export namespace UserAssigned {
  export class initiateEvents {
    constructor() {
      /* First ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      new DataRead.forOverlay('user-assigned');

      /* Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');

      const indexHeader: HTMLElement = document.querySelector('#index-header');
      let logButton: HTMLElement = indexHeader.querySelector('#log-a-ticket button');

      const indexMain: HTMLElement = document.querySelector('#index-main');
      indexMain.style.display = 'none';

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');
      let closeOverlay: HTMLButtonElement = indexOverlay.querySelector('#close-overlay');
      let deleteButton: HTMLButtonElement = indexOverlay.querySelector('#delete-ticket button');
      let resolveButton: HTMLButtonElement = indexOverlay.querySelector('#resolve-ticket button');

      let datePending: HTMLHeadingElement = indexOverlay.querySelector('#pending-date');
      let dateAssigned: HTMLHeadingElement = indexOverlay.querySelector('#assigned-date');
      let dateResolved: HTMLHeadingElement = indexOverlay.querySelector('#resolved-date');
      let dateDeleted: HTMLHeadingElement = indexOverlay.querySelector('#deleted-date');

      let assignedMark: HTMLDivElement = indexOverlay.querySelector('.assigned-mark');
      let resolvedMark: HTMLDivElement = indexOverlay.querySelector('.resolved-mark');
      let deletedMark: HTMLDivElement = indexOverlay.querySelector('.deleted-mark');

      const indexData: HTMLElement = document.querySelector('#index-data');

      /* Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Classes ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Events ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      $(resolveButton)
        .on('click', () => {
          if (resolveButton.className !== 'disabled-button') {
            new GetEvent.forPage('resolve-overlay', GetPath.forHTML('overlay'));
          }
        })
        .on('mouseenter', () => {
          resolveButton.style.color = `${GetColor.resolvedDefault()}`;
          assignedMark.style.background = `${GetColor.primaryMedium()}`;
          resolvedMark.style.background = `${GetColor.primaryDark()}`;

          dateResolved.style.display = 'flex';
          dateResolved.className = '';
          dateResolved.textContent = `${UseDatefy.forToday('Weekday, 00 Month YYYY')}`;
        })
        .on('mouseleave', () => {
          resolveButton.style.color = '';
          assignedMark.style.background = `${GetColor.primaryDark()}`;
          resolvedMark.style.background = `${GetColor.primaryMedium()}`;

          dateResolved.className = 'disabled-text';
          dateResolved.textContent = `${undefined}`;
          dateResolved.style.display = 'none';
        });

      $(deleteButton)
        .on('click', () => {
          new GetEvent.forPage('delete-overlay', GetPath.forHTML('overlay'));
        })
        .on('mouseenter', () => {
          assignedMark.style.background = `${GetColor.primaryMedium()}`;
          deleteButton.parentElement.style.background = `${GetColor.primaryDark()}`;

          dateDeleted.className = '';
          dateDeleted.textContent = `${UseDatefy.forToday('Weekday, 00 Month YYYY')}`;
          dateDeleted.style.display = 'flex';
        })
        .on('mouseleave', () => {
          assignedMark.style.background = `${GetColor.primaryDark()}`;
          deleteButton.parentElement.style.background = '';

          dateDeleted.style.display = 'none';
          dateDeleted.className = 'disabled-text';
          dateDeleted.textContent = `${undefined}`;
        });

      $(closeOverlay).on('click', () => {
        closeContainer('index-overlay');
      });

      /* Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      console.log('--UserAssigned.js Loaded');
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
