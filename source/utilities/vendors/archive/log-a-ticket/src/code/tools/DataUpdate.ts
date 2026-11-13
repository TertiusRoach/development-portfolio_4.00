//--|▼| Tools (Import) |▼|--//
import { GetArray } from 'code/tools/GetArray';
import { GetColor } from 'code/tools/GetColor';
import { GetElement } from 'code/tools/GetElement';
import { GetEvent } from 'code/tools/GetEvent';
import { GetPath } from 'code/tools/GetPath';

import { UseCapify } from 'code/tools/UseCapify';
import { UseDatefy } from 'code/tools/UseDatefy';
import { UseValufy } from 'code/tools/UseValufy';

//--|►| DataUpdate (Tool) |◄|--//
export namespace DataUpdate {
  export class forButton {
    constructor(type: 'assign' | 'claim' | 'delete' | 'log' | 'move' | 'recycle' | 'resolve' | 'restore' | 'save' | 'take' | 'unlock') {
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');

      const indexHeader: HTMLElement = document.querySelector('#index-header');

      const indexMain: HTMLElement = document.querySelector('#index-main');
      let ticketsContainer: HTMLDivElement = indexMain.querySelector('#tickets-container');
      let activeTicket = ticketsContainer.querySelector('.active-ticket');

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');
      let liveNote: HTMLTextAreaElement = indexOverlay.querySelector('section #ticket-note');
      let liveSubject: HTMLInputElement = indexOverlay.querySelector('#ticket-subject');
      let liveDescription: HTMLElement = indexOverlay.querySelector('#ticket-description');
      let liveReceiverName: HTMLSelectElement = indexOverlay.querySelector('#colleague-form select');
      let liveReceiverDepartment: HTMLSelectElement = indexOverlay.querySelector('#department-form select');

      const indexData: HTMLElement = document.querySelector('#index-data');
      let ticketsData: HTMLDivElement = indexData.querySelector('#tickets-data');
      let ticketsCollection: HTMLCollection = ticketsData.getElementsByTagName('article');
      let ticketsTotal: Number = ticketsCollection.length;

      let departmentsData: HTMLDivElement = indexData.querySelector('#departments-data');
      let departmentsCollection: HTMLCollection = departmentsData.getElementsByTagName('article');
      let departmentsTotal: Number = departmentsCollection.length;

      let employeesData: HTMLDivElement = indexData.querySelector('#employees-data');
      let employeesCollection: HTMLCollection = employeesData.getElementsByTagName('article');
      let employeesTotal: Number = employeesCollection.length;

      if (indexOverlay.className !== 'log-overlay') {
        markTicket();

        var markedTicket: HTMLElement = ticketsData.querySelector('.active-data');
        var ticketHeader: HTMLElement = markedTicket.querySelector('header');
        var dateDisplay: HTMLParagraphElement = ticketHeader.getElementsByTagName('p')[0];
        var subjectDisplay: HTMLParagraphElement = ticketHeader.getElementsByTagName('p')[1];
        var receiverDisplay: HTMLParagraphElement = ticketHeader.getElementsByTagName('p')[2];

        var ticketFooter: HTMLElement = markedTicket.querySelector('footer');

        var statusInfo: HTMLParagraphElement = ticketFooter.querySelector('.ticket-status');
        var ratingInfo: HTMLParagraphElement = ticketFooter.querySelector('.ticket-rating');
        var subjectInfo: HTMLParagraphElement = ticketFooter.querySelector('.subject-text');
        var descriptionInfo: HTMLParagraphElement = ticketFooter.querySelector('.description-text');
        var senderNameInfo: HTMLParagraphElement = ticketFooter.querySelector('.sender-name');
        var senderDepartmentInfo: HTMLParagraphElement = ticketFooter.querySelector('.sender-department');
        var receiverNameInfo: HTMLParagraphElement = ticketFooter.querySelector('.receiver-name');
        var receiverDepartmentInfo: HTMLParagraphElement = ticketFooter.querySelector('.receiver-department');
        var dateShortInfo: HTMLParagraphElement = ticketFooter.querySelector('.date-short');
        var datePendingInfo: HTMLParagraphElement = ticketFooter.querySelector('.date-pending');
        var dateAssignedInfo: HTMLParagraphElement = ticketFooter.querySelector('.date-assigned');
        var dateResolvedInfo: HTMLParagraphElement = ticketFooter.querySelector('.date-resolved');
        var noteResolvedInfo: HTMLParagraphElement = ticketFooter.querySelector('.note-resolved');
        var dateDeletedInfo: HTMLParagraphElement = ticketFooter.querySelector('.date-deleted');
        var noteDeletedInfo: HTMLParagraphElement = ticketFooter.querySelector('.note-deleted');
      }
      switch (type) {
        case 'assign':
          if (indexOverlay.className === 'log-overlay') {
            //--▼ Add ticket to end of data container: Only applies for 'log-overlay' ▼--//
            var status: String = `${updateData('status', 'Assigned')}`;
            var subject: String = `${updateData('subject', 'Assigned')}`;
            var receiverName: String = `${updateData('receiver', 'Assigned')}`;
            var dateShort: String = `${updateData('date-short', 'Assigned')}`;

            $(ticketsData).append(
              `<article class="ticket ${status.toLowerCase()}">
                <header>
                  <p class="shortdate">${dateShort}</p>
                  <p class="subject">${subject}</p>
                  <p class="receiver">${receiverName}</p>
                </header>                  
                <footer>
                  <p class="ticket-status">${updateData('status', 'Assigned')}</p>
                  <p class="ticket-rating">${updateData('rating', 'Assigned')}</p>
                  <p class="subject-text">${updateData('subject', 'Assigned')}</p>
                  <p class="description-text">${updateData('description', 'Assigned')}</p>
                  <p class="sender-name">${updateData('sender', 'Assigned')}</p>
                  <p class="sender-department">${updateData('sender-department', 'Assigned')}</p>
                  <p class="receiver-name">${updateData('receiver', 'Assigned')}</p>
                  <p class="receiver-department">${updateData('receiver-department', 'Assigned')}</p>
                  <p class="date-short">${updateData('date-short', 'Assigned')}</p>
                  <p class="date-pending">${updateData('date-pending', 'Assigned')}</p>
                  <p class="date-assigned">${updateData('date-assigned', 'Assigned')}</p>
                  <p class="date-resolved">${updateData('date-resolved', 'Assigned')}</p>
                  <p class="note-resolved">${updateData('resolved-note', 'Assigned')}</p>
                  <p class="date-deleted">${updateData('date-deleted', 'Assigned')}</p>
                  <p class="note-deleted">${updateData('deleted-note', 'Assigned')}</p>
                </footer>
              </article>`
            );

            closeContainer();
            refreshBlocks();
          } else {
            //--▼ Update ticket inside data container: Default response ▼--//
            markedTicket.className = 'assigned';
            statusInfo.textContent = 'Assigned';

            receiverNameInfo.textContent = `${UseCapify.forString('-', liveReceiverName.value)}`;
            receiverDepartmentInfo.textContent = `${UseCapify.forString('-', liveReceiverDepartment.value)}`;
            dateAssignedInfo.textContent = UseDatefy.forToday('Weekday, 00 Month YYYY');

            closeContainer();
            refreshBlocks();
          }
          //--► console.log('Assign Ticket'); ◄--//
          break;
        case 'claim':
          //--▼ Default response for 'assign', 'claim' and 'take' ▼--//
          markedTicket.className = 'assigned';
          statusInfo.textContent = 'Assigned';

          receiverNameInfo.textContent = `${UseCapify.forString('-', liveReceiverName.value)}`;
          receiverDepartmentInfo.textContent = `${UseCapify.forString('-', liveReceiverDepartment.value)}`;
          dateAssignedInfo.textContent = UseDatefy.forToday('Weekday, 00 Month YYYY');

          closeContainer();
          refreshBlocks();
          //--► console.log('Claim Ticket'); ◄--//
          console.log('Claim Ticket');
          break;
        case 'delete':
          markedTicket.className = 'deleted';
          statusInfo.textContent = 'Deleted';
          dateDeletedInfo.textContent = UseDatefy.forToday('Weekday, 00 Month YYYY');
          noteDeletedInfo.textContent = `${$(liveNote).val()}`;

          closeContainer();
          refreshBlocks();
          //--► console.log('Delete Ticket'); ◄--//
          break;
        case 'log':
          var status: String = `${updateData('status', 'Pending')}`;
          var subject: String = `${updateData('subject', 'Pending')}`;
          var dateShort: String = `${updateData('date-short', 'Pending')}`;
          var receiverName: String = `${updateData('receiver', 'Pending')}`;
          var receiverDepartment: String = `${updateData('receiver-department', 'Pending')}`;

          $(ticketsData).append(
            `<article class="ticket ${status.toLowerCase()}">
              <header>
                <p class="shortdate">${dateShort}</p>
                <p class="subject">${subject}</p>
                <p class="receiver">${receiverDefault(receiverName, receiverDepartment)}</p>
              </header>                  
              <footer>
                <p class="ticket-status">${updateData('status', 'Pending')}</p>
                <p class="ticket-rating">${updateData('rating', 'Pending')}</p>
                <p class="subject-text">${updateData('subject', 'Pending')}</p>
                <p class="description-text">${updateData('description', 'Pending')}</p>
                <p class="sender-name">${updateData('sender', 'Pending')}</p>
                <p class="sender-department">${updateData('sender-department', 'Pending')}</p>
                <p class="receiver-name">${updateData('receiver', 'Pending')}</p>
                <p class="receiver-department">${updateData('receiver-department', 'Pending')}</p>
                <p class="date-short">${updateData('date-short', 'Pending')}</p>
                <p class="date-pending">${updateData('date-pending', 'Pending')}</p>
                <p class="date-assigned">${updateData('date-assigned', 'Pending')}</p>
                <p class="date-resolved">${updateData('date-resolved', 'Pending')}</p>
                <p class="note-resolved">${updateData('resolved-note', 'Pending')}</p>
                <p class="date-deleted">${updateData('date-deleted', 'Pending')}</p>
                <p class="note-deleted">${updateData('deleted-note', 'Pending')}</p>
              </footer>
            </article>`
          );

          refreshBlocks();
          closeContainer();
          //--► console.log('Log Ticket'); ◄--//
          console.log('Log Ticket');
          break;
        case 'move':
          //--▼ This resets the 'active-data' article to none ▼--//
          markedTicket.className = 'pending';
          statusInfo.textContent = 'Pending';

          receiverDepartmentInfo.textContent = `${UseCapify.forString('-', liveReceiverDepartment.value)}`;
          descriptionInfo.textContent = `${$(liveDescription).val()}
          
          Ticket moved to ${findDepartment(findUser())} on ${UseDatefy.forToday('Weekday, 00 Month YYYY')}`;
          datePendingInfo.textContent = UseDatefy.forToday('Weekday, 00 Month YYYY');

          closeContainer();
          refreshBlocks();
          //--► console.log('Move Ticket'); ◄--//
          break;
        case 'recycle':
          markedTicket.className = 'assigned';
          statusInfo.textContent = 'Assigned';

          descriptionInfo.textContent = `${$(liveDescription).val()}
          
          Ticket recycled by ${findUser()} on ${UseDatefy.forToday('Weekday, 00 Month YYYY')}`;
          dateAssignedInfo.textContent = UseDatefy.forToday('Weekday, 00 Month YYYY');

          closeContainer();
          refreshBlocks();
          //--► console.log('Recycle Ticket'); ◄--//
          break;
        case 'resolve':
          //--▼ From Assigned to... ▼--//
          markedTicket.className = 'resolved';
          statusInfo.textContent = 'Resolved';

          dateResolvedInfo.textContent = UseDatefy.forToday('Weekday, 00 Month YYYY');
          noteResolvedInfo.textContent = `${$(liveNote).val()}`;

          closeContainer();
          refreshBlocks();
          //--► console.log('Resolve Ticket'); ◄--//
          break;
        case 'restore':
          markedTicket.className = 'pending';
          statusInfo.textContent = 'Pending';

          closeContainer();
          refreshBlocks();
          //--► console.log('Restore Ticket'); ◄--//
          break;
        case 'save':
          markedTicket.className = 'pending';
          statusInfo.textContent = 'Pending';
          subjectInfo.textContent = `${$(liveSubject).val()}`;
          descriptionInfo.textContent = `${$(liveDescription).val()}`;
          datePendingInfo.textContent = UseDatefy.forToday('Weekday, 00 Month YYYY');

          closeContainer();
          refreshBlocks();
          //--► console.log('Save Ticket'); ◄--//
          break;
        case 'take':
          markedTicket.className = 'assigned';
          statusInfo.textContent = 'Assigned';

          receiverDisplay.textContent = `${findUser()}`;
          receiverNameInfo.textContent = `${findUser()}`;
          receiverDepartmentInfo.textContent = `${findDepartment(findUser())}`;

          descriptionInfo.textContent = `${$(liveDescription).val()}
          
          Taken over by ${findUser()} on ${UseDatefy.forToday('Weekday, 00 Month YYYY')}`;

          closeContainer();
          refreshBlocks();
          //--► console.log('Take Ticket'); ◄--//
          break;
        case 'unlock':
          markedTicket.className = 'assigned';
          statusInfo.textContent = 'Assigned';

          closeContainer();
          refreshBlocks();
          //--► console.log('Unlock Ticket'); ◄--//
          break;
      }
    }
  }

  /* ▼ A=-=-=A ▼ */
  function updateData(
    info:
      | 'status'
      | 'rating'
      | 'subject'
      | 'description'
      | 'sender'
      | 'sender-department'
      | 'receiver'
      | 'receiver-department'
      | 'date-short'
      | 'date-pending'
      | 'date-assigned'
      | 'date-resolved'
      | 'resolved-note'
      | 'date-deleted'
      | 'deleted-note',
    status: 'Pending' | 'Assigned' | 'Resolved' | 'Deleted'
  ) {
    const indexBody: HTMLBodyElement = document.querySelector('#index-body');

    const indexHeader: HTMLElement = document.querySelector('#index-header');

    const indexMain: HTMLElement = document.querySelector('#index-main');

    const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

    const indexData: HTMLElement = document.querySelector('#index-data');
    let employeesContainer: HTMLDivElement = indexData.querySelector('#employees-data');
    let employeesTotal: Number = employeesContainer.children.length;

    let liveStatus: String;
    let liveRating: undefined | number;
    let liveSubject: String | JQuery<String>;
    let liveDescription: String | JQuery<String>;
    let liveSenderName: String | JQuery<String>;
    let liveSenderDepartment: String | JQuery<String>;
    let liveReceiverName: String | undefined;
    let liveReceiverDepartment: String | undefined;
    let liveDateShort: String;
    let liveDatePending: String;
    let liveDateAssigned: String;
    let liveDateResolved: String;
    let liveNoteResolved: String;
    let liveDateDeleted: String;
    let liveNoteDeleted: String;
    switch (status) {
      case 'Pending':
        switch (info) {
          case 'status':
            liveStatus = `${status}`;
            return liveStatus;
          case 'rating':
            liveRating = undefined;
            return liveRating;
          case 'subject':
            liveSubject = `${$('#ticket-subject').val()}`;
            return liveSubject;
          case 'description':
            liveDescription = `${$('#ticket-description').val()}`;
            return liveDescription;
          case 'sender':
            liveSenderName = `${UseCapify.forString('-', `${$('#user-form select').val()}`)}`;
            return liveSenderName;
          case 'sender-department':
            const indexData: HTMLElement = document.querySelector('#index-data');
            let employeesContainer: HTMLDivElement = indexData.querySelector('#employees-data');
            let employeesTotal: Number = employeesContainer.children.length;
            liveSenderName = `${UseCapify.forString('-', `${$('#user-form select').val()}`)}`;
            for (let i = 0; i < employeesTotal; i++) {
              if (`${findEmployee(i, 'first-name')} ${findEmployee(i, 'last-name')}` === liveSenderName) {
                liveSenderDepartment = findEmployee(i, 'department');
                return liveSenderDepartment;
              }
            }
          case 'receiver':
            var colleagueSelect: HTMLSelectElement = document.querySelector('#index-overlay #colleague-form select');
            switch ('undefined') {
              case colleagueSelect.value:
                liveReceiverName = undefined;
                break;
              default:
                liveReceiverName = UseCapify.forString('-', colleagueSelect.value);
            }
            return;
          case 'receiver-department':
            var departmentSelect: HTMLSelectElement = document.querySelector('#index-overlay #department-form select');
            liveReceiverDepartment = UseCapify.forString('-', departmentSelect.value);
            return liveReceiverDepartment;
          case 'date-short':
            liveDateShort = UseDatefy.forToday('2000-01-01');
            return liveDateShort;
          case 'date-pending':
            var pendingDate: HTMLElement = document.querySelector('#index-overlay #pending-date');
            liveDatePending = pendingDate.innerText;
            return liveDatePending;
          case 'date-assigned':
            liveDateAssigned = undefined;
            return liveDateAssigned;
          case 'date-resolved':
            liveDateResolved = undefined;
            return liveDateResolved;
          case 'resolved-note':
            liveNoteResolved = undefined;
            return liveNoteResolved;
          case 'date-deleted':
            liveDateDeleted = undefined;
            return liveDateDeleted;
          case 'deleted-note':
            liveNoteDeleted = undefined;
            return liveNoteDeleted;
        }
      case 'Assigned':
        switch (info) {
          case 'status':
            liveStatus = `${status}`;
            return liveStatus;
          case 'rating':
            liveRating = undefined;
            return liveRating;
          case 'subject':
            liveSubject = `${$('#ticket-subject').val()}`;
            return liveSubject;
          case 'description':
            liveDescription = `${$('#ticket-description').val()}`;
            return liveDescription;
          case 'sender':
            liveSenderName = `${UseCapify.forString('-', `${$('#user-form select').val()}`)}`;
            return liveSenderName;
          case 'sender-department':
            liveSenderName = `${UseCapify.forString('-', `${$('#user-form select').val()}`)}`;
            for (let i = 0; i < employeesTotal; i++) {
              if (`${findEmployee(i, 'first-name')} ${findEmployee(i, 'last-name')}` === liveSenderName) {
                liveSenderDepartment = findEmployee(i, 'department');
                return liveSenderDepartment;
              }
            }
          case 'receiver':
            var colleagueSelect: HTMLSelectElement = document.querySelector('#index-overlay #ticket-container footer #colleague-form select');
            switch (colleagueSelect) {
              case null:
                liveReceiverName = undefined;
              default:
                liveReceiverName = UseCapify.forString('-', colleagueSelect.value);
            }

            return liveReceiverName;
          case 'receiver-department':
            var departmentSelect: HTMLSelectElement = document.querySelector('#index-overlay #department-form select');
            liveReceiverDepartment = UseCapify.forString('-', departmentSelect.value);
            return liveReceiverDepartment;
          case 'date-short':
            liveDateShort = UseDatefy.forToday('2000-01-01');
            return liveDateShort;
          case 'date-pending':
            var pendingDate: HTMLElement = document.querySelector('#index-overlay #pending-date');
            liveDatePending = pendingDate.innerText;
            return liveDatePending;
          case 'date-assigned':
            var assignedDate: HTMLElement = document.querySelector('#index-overlay #assigned-date');
            liveDateAssigned = assignedDate.innerText;
            return liveDateAssigned;
          case 'date-resolved':
            liveDateResolved = undefined;
            return liveDateResolved;
          case 'resolved-note':
            liveNoteResolved = undefined;
            return liveNoteResolved;
          case 'date-deleted':
            liveDateDeleted = undefined;
            return liveDateDeleted;
          case 'deleted-note':
            liveNoteDeleted = undefined;
            return liveNoteDeleted;
        }
      case 'Resolved':
        break;
      case 'Deleted':
        break;
    }
  }
  /* ▼ B=-=-=B ▼ */
  /* ▼ C=-=-=C ▼ */
  function closeContainer() {
    const indexHeader: HTMLElement = document.querySelector('#index-header');
    const indexMain: HTMLElement = document.querySelector('#index-main');
    const indexOverlay: HTMLElement = document.querySelector('#index-overlay');
    let logAticket: HTMLButtonElement = indexHeader.querySelector('#log-a-ticket button');

    indexOverlay.className = 'default-overlay';
    indexOverlay.style.display = 'none';
    indexMain.style.display = 'grid';
    indexOverlay.innerHTML = '';
    logAticket.className = '';
  }
  /* ▼ D=-=-=D ▼ */
  /* ▼ E=-=-=E ▼ */
  /* ▼ F=-=-=F ▼ */
  function findDepartment(employeeName: String) {
    const employeesData: HTMLDivElement = document.querySelector('#employees-data');
    let employeesCollection: HTMLCollection = employeesData.getElementsByTagName('article');
    let employeesTotal: Number = employeesData.getElementsByTagName('article').length;
    for (let i = 0; i < employeesTotal; i++) {
      let firstName: String = employeesCollection[i].children[0].textContent;
      let middleName: String = employeesCollection[i].children[1].textContent;
      let lastName: String = employeesCollection[i].children[2].textContent;
      let department: String = employeesCollection[i].children[3].textContent;
      let occupation: String = employeesCollection[i].children[4].textContent;
      let role: String = employeesCollection[i].children[5].textContent;

      let employeeName: String = `${firstName} ${lastName}`;
      if (employeeName === employeeName) {
        return department;
      }
    }
  }
  function findEmployee(index: number, data: String | 'first-name' | 'middle-name' | 'last-name' | 'department' | 'occupation' | 'role') {
    const employeesData: HTMLDivElement = document.querySelector('#employees-data');
    let employeesCollection: HTMLCollection = employeesData.getElementsByTagName('article');
    let employeesTotal: Number = employeesData.getElementsByTagName('article').length;

    let firstName: String = employeesCollection[index].children[0].textContent;
    let middleName: String = employeesCollection[index].children[1].textContent;
    let lastName: String = employeesCollection[index].children[2].textContent;
    let department: String = employeesCollection[index].children[3].textContent;
    let occupation: String = employeesCollection[index].children[4].textContent;
    let role: String = employeesCollection[index].children[5].textContent;
    switch (data) {
      case 'first-name':
        return firstName;
      case 'middle-name':
        return middleName;
      case 'last-name':
        return lastName;
      case 'department':
        return department;
      case 'occupation':
        return occupation;
      case 'role':
        return role;
    }
  }
  function findUser() {
    const indexBody: HTMLBodyElement = document.querySelector('#index-body');
    let userSelect: HTMLSelectElement = indexBody.querySelector('#user-form select');
    let userIndex: number = userSelect.selectedIndex;
    let userName: String = userSelect.children[userIndex].textContent;
    return `${userName}`;
  }
  /* ▼ G=-=-=G ▼ */
  function activeTicket(
    info:
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
    const activeTicket = document.querySelector('#index-main #tickets-container .active-ticket');
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
  function activeData(
    info:
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
  ) {}
  /* ▼ H=-=-=H ▼ */
  /* ▼ I=-=-=I ▼ */
  /* ▼ J=-=-=J ▼ */
  /* ▼ K=-=-=K ▼ */
  /* ▼ L=-=-=L ▼ */
  /* ▼ M=-=-=M ▼ */
  function markTicket() {
    const indexData: HTMLElement = document.querySelector('#index-data');
    let ticketsData: HTMLDivElement = indexData.querySelector('#tickets-data');
    let ticketsCollection: HTMLCollection = ticketsData.getElementsByTagName('article');

    for (let i = 0; i < ticketsCollection.length; i++) {
      let booleanArray: Array<boolean> = [];

      var status: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[0].textContent}`;
      if (status.toLowerCase() === activeTicket('ticket-status')) {
        booleanArray.push(true);
      } else {
        booleanArray.push(false);
      }

      var rating: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[1].textContent}`;
      if (rating === activeTicket('ticket-rating')) {
        booleanArray.push(true);
      } else {
        booleanArray.push(false);
      }

      var subject: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[2].textContent}`;
      if (subject === activeTicket('subject-text')) {
        booleanArray.push(true);
      } else {
        booleanArray.push(false);
      }

      var description: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[3].textContent}`;
      if (description === activeTicket('description-text')) {
        booleanArray.push(true);
      } else {
        booleanArray.push(false);
      }

      var senderName: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[4].textContent}`;
      if (senderName === activeTicket('sender-name')) {
        booleanArray.push(true);
      } else {
        booleanArray.push(false);
      }

      var senderDepartment: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[5].textContent}`;
      if (senderDepartment === activeTicket('sender-department')) {
        booleanArray.push(true);
      } else {
        booleanArray.push(false);
      }

      var receiverName: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[6].textContent}`;
      if (receiverName === activeTicket('receiver-name')) {
        booleanArray.push(true);
      } else {
        booleanArray.push(false);
      }

      var receiverDepartment: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[7].textContent}`;
      if (receiverDepartment === activeTicket('receiver-department')) {
        booleanArray.push(true);
      } else {
        booleanArray.push(false);
      }

      var dateShort: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[8].textContent}`;
      if (dateShort === activeTicket('date-short')) {
        booleanArray.push(true);
      } else {
        booleanArray.push(false);
      }

      var datePending: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[9].textContent}`;
      if (datePending === activeTicket('date-pending')) {
        booleanArray.push(true);
      } else {
        booleanArray.push(false);
      }

      var dateAssigned: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[10].textContent}`;
      if (dateAssigned === activeTicket('date-assigned')) {
        booleanArray.push(true);
      } else {
        booleanArray.push(false);
      }

      var dateResolved: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[11].textContent}`;
      if (dateResolved === activeTicket('date-resolved')) {
        booleanArray.push(true);
      } else {
        booleanArray.push(false);
      }

      var noteResolved: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[12].textContent}`;
      if (noteResolved === activeTicket('note-resolved')) {
        booleanArray.push(true);
      } else {
        booleanArray.push(false);
      }

      var dateDeleted: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[13].textContent}`;
      if (dateDeleted === activeTicket('date-deleted')) {
        booleanArray.push(true);
      } else {
        booleanArray.push(false);
      }

      var noteDeleted: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[14].textContent}`;
      if (noteDeleted === activeTicket('note-deleted')) {
        booleanArray.push(true);
      } else {
        booleanArray.push(false);
      }

      //--▼ Counts true values within boolean array ▼--//
      let countBoolean: Number = booleanArray.filter(Boolean).length;
      if (countBoolean === 15) {
        let status = ticketsData.children[i].className;
        ticketsData.children[i].className = `${status} active-data`;
        break;
      }
    }
  }
  /* ▼ N=-=-=N ▼ */
  /* ▼ O=-=-=O ▼ */
  /* ▼ P=-=-=P ▼ */
  /* ▼ Q=-=-=Q ▼ */
  /* ▼ R=-=-=R ▼ */
  function receiverDefault(receiverName: String | `${undefined}`, receiverDepartment: String) {
    switch (receiverName) {
      case `${undefined}`:
        return receiverDepartment;
      default:
        return receiverName;
    }
  }
  function refreshBlocks() {
    const indexMain: HTMLElement = document.querySelector('#index-main');
    let mainClass: String = indexMain.className;

    const indexData: HTMLElement = document.querySelector('#index-data');
    let ticketsData: HTMLDivElement = indexData.querySelector('#tickets-data');
    let ticketsCollection: HTMLCollection = ticketsData.getElementsByTagName('article');

    new GetEvent.forPage('default-header', GetPath.forHTML('header'));
    switch (mainClass) {
      case 'colleague-main':
        new GetEvent.forPage('colleague-main', GetPath.forHTML('main'));
        //--► Select active colleague inside get event...I think. ◄--//
        new GetEvent.forPage('employees-sidebar', GetPath.forHTML('sidebar'));
        break;
      case 'logged-main':
        new GetEvent.forPage('logged-main', GetPath.forHTML('main'));
        new GetEvent.forPage('coworkers-sidebar', GetPath.forHTML('sidebar'));
        break;
      case 'manage-main':
        new GetEvent.forPage('manage-main', GetPath.forHTML('main'));
        new GetEvent.forPage('employees-sidebar', GetPath.forHTML('sidebar'));
        break;
      case 'user-main':
        new GetEvent.forPage('user-main', GetPath.forHTML('main'));
        new GetEvent.forPage('employees-sidebar', GetPath.forHTML('sidebar'));
        break;
    }
  }
  /* ▼ S=-=-=S ▼ */
  /* ▼ T=-=-=T ▼ */
  /* ▼ U=-=-=U ▼ */
  /* ▼ V=-=-=V ▼ */
  /* ▼ W=-=-=W ▼ */
  /* ▼ X=-=-=X ▼ */
  /* ▼ Y=-=-=Y ▼ */
  /* ▼ Z=-=-=Z ▼ */
}
