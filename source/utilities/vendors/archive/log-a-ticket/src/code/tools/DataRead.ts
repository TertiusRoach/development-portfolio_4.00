//--|▼| Tools (Import) |▼|--//
import { GetArray } from 'code/tools/GetArray';
import { GetColor } from 'code/tools/GetColor';
import { GetElement } from 'code/tools/GetElement';
import { GetEvent } from 'code/tools/GetEvent';
import { GetPath } from 'code/tools/GetPath';

import { UseCapify } from 'code/tools/UseCapify';
import { UseDatefy } from 'code/tools/UseDatefy';
import { UseValufy } from 'code/tools/UseValufy';

//--|►| DataRead (Tool) |◄|--//
export namespace DataRead {
  export class forMain {
    constructor(page: 'colleague-main' | 'coworker-main' | 'logged-main' | 'manage-main' | 'user-main', status: 'pending' | 'assigned' | 'resolved' | 'deleted' | 'everything') {
      /* First ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');
      let userSelect: HTMLSelectElement = indexBody.querySelector('#user-form select');
      // let userName: String = userSelect.selectedOptions[0].textContent;

      const indexHeader: HTMLElement = document.querySelector('#index-header');

      const indexMain: HTMLElement = document.querySelector('#index-main');
      let ticketsMain: HTMLDivElement = indexMain.querySelector('#tickets-container');
      let loggedHeader: HTMLElement = indexMain.querySelector('#logged-header h1');
      let manageHeader: HTMLElement = indexMain.querySelector('#manage-header h1');
      let coworkerHeader: HTMLElement = indexMain.querySelector('#coworker-header h1');
      let colleagueHeader: HTMLElement = indexMain.querySelector('#colleague-name');
      let userHeader: HTMLElement = indexMain.querySelector('#user-name');

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');

      const indexData: HTMLElement = document.querySelector('#index-data');
      let employeesData: HTMLDivElement = indexData.querySelector('#employees-data');
      let employeesCollection: HTMLCollection = employeesData.getElementsByTagName('article');
      let employeesTotal: Number = employeesCollection.length;
      let ticketsData: HTMLDivElement = indexData.querySelector('#tickets-data');
      let ticketsCollection: HTMLCollection = ticketsData.getElementsByTagName('article');
      let ticketsTotal: Number = ticketsCollection.length;

      let userName: String = findUser();
      let userDepartment: String = findDepartment(findUser());
      /* Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      function clearTickets(container: HTMLDivElement, status: String | 'pending' | 'assigned' | 'resolved' | 'deleted' | 'everything') {
        container.innerHTML = '';
        container.className = '';
        container.className = `${status}-tickets`;
      }

      /* Last ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      clearTickets(ticketsMain, status);

      switch (page) {
        case 'colleague-main':
          /* Leave it in this order ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
          var selectedColleague: String = indexSidebar.querySelector('.active-colleague .text').textContent;
          colleagueHeader.textContent = `${selectedColleague}`;
          var activeColleague: String = indexMain.querySelector('#colleague-name').textContent;

          for (let i = 0; i < ticketsTotal; i++) {
            const ticketInfo: HTMLCollection | any = ticketsCollection[i].children[1];
            let ticketStatus: String = ticketInfo.children[0].textContent.toLowerCase();
            let ticketRating: String = ticketInfo.children[1].textContent;
            let subjectText: String = ticketInfo.children[2].textContent;
            let descriptionText: String = ticketInfo.children[3].textContent;
            let senderName: String = ticketInfo.children[4].textContent;
            let senderDepartment: String = ticketInfo.children[5].textContent;
            let receiverName: String = ticketInfo.children[6].textContent;
            let receiverDepartment: String = ticketInfo.children[7].textContent;
            let dateShort: String = ticketInfo.children[8].textContent;
            let datePending: String = ticketInfo.children[9].textContent;
            let dateAssigned: String = ticketInfo.children[10].textContent;
            let dateResolved: String = ticketInfo.children[11].textContent;
            let noteResolved: String = ticketInfo.children[12].textContent;
            let dateDeleted: String = ticketInfo.children[13].textContent;
            let noteDeleted: String = ticketInfo.children[14].textContent;

            if (receiverName === activeColleague) {
              //--▼ Colleague Main ▼--//
              $(ticketsMain).append(
                `<article class="${ticketStatus}" onClick="$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');">
                  <p class="shortdate">${dateShort}</p>
                  <p class="subject">${subjectText}</p>
                  <p class="sender">${senderName}</p>
                  
                  <div style="display: none">
                    <p class="ticket-status">${ticketStatus}</p>
                    <p class="ticket-rating">${ticketRating}</p>
                    <p class="subject-text">${subjectText}</p>
                    <p class="description-text">${descriptionText}</p>
                    <p class="sender-name">${senderName}</p>
                    <p class="sender-department">${senderDepartment}</p>
                    <p class="receiver-name">${receiverName}</p>
                    <p class="receiver-department">${receiverDepartment}</p>
                    <p class="date-short">${dateShort}</p>
                    <p class="date-pending">${datePending}</p>
                    <p class="date-assigned">${dateAssigned}</p>
                    <p class="date-resolved">${dateResolved}</p>
                    <p class="note-resolved">${noteResolved}</p>
                    <p class="date-deleted">${dateDeleted}</p>
                    <p class="note-deleted">${noteDeleted}</p>
                  </div>
                </article>`
              );
            }
          }
          break;
        case 'coworker-main':
          let activeCoworker: HTMLElement = indexSidebar.querySelector('.active-colleague .text');
          indexMain.querySelector('#coworker-header').innerHTML = `<span class="notification">
                                <h2 style="background: #08870c">${0}</h2>
                              </span>
                              <h1 class="text ${UseValufy.forString(activeCoworker.innerText)}">${activeCoworker.innerText}</h1>`;
          let selectedCoworker: String = document.querySelector('#coworker-header').lastChild.textContent;

          for (let i = 0; i < ticketsTotal; i++) {
            const ticketInfo: HTMLCollection | any = ticketsCollection[i].children[1];
            let ticketStatus: String = ticketInfo.children[0].textContent.toLowerCase();
            let ticketRating: String = ticketInfo.children[1].textContent;
            let subjectText: String = ticketInfo.children[2].textContent;
            let descriptionText: String = ticketInfo.children[3].textContent;
            let senderName: String = ticketInfo.children[4].textContent;
            let senderDepartment: String = ticketInfo.children[5].textContent;
            let receiverName: String = ticketInfo.children[6].textContent;
            let receiverDepartment: String = ticketInfo.children[7].textContent;
            let dateShort: String = ticketInfo.children[8].textContent;
            let datePending: String = ticketInfo.children[9].textContent;
            let dateAssigned: String = ticketInfo.children[10].textContent;
            let dateResolved: String = ticketInfo.children[11].textContent;
            let noteResolved: String = ticketInfo.children[12].textContent;
            let dateDeleted: String = ticketInfo.children[13].textContent;
            let noteDeleted: String = ticketInfo.children[14].textContent;

            let receiverDefault = () => {
              switch (receiverName) {
                case `${undefined}`:
                  return receiverDepartment;
                default:
                  return receiverName;
              }
            };

            if (senderName === selectedCoworker /*&& ticketStatus === status*/) {
              //--▼ Coworker Main ▼--//
              $(ticketsMain).append(
                `<article class="${ticketStatus}" onClick="$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');">
                  <p class="shortdate">${dateShort}</p>
                  <p class="subject">${subjectText}</p>
                  <p class="receiver">${receiverDefault()}</p>
                  
                  <div style="display: none">
                    <p class="ticket-status">${ticketStatus}</p>
                    <p class="ticket-rating">${ticketRating}</p>
                    <p class="subject-text">${subjectText}</p>
                    <p class="description-text">${descriptionText}</p>
                    <p class="sender-name">${senderName}</p>
                    <p class="sender-department">${senderDepartment}</p>
                    <p class="receiver-name">${receiverName}</p>
                    <p class="receiver-department">${receiverDepartment}</p>
                    <p class="date-short">${dateShort}</p>
                    <p class="date-pending">${datePending}</p>
                    <p class="date-assigned">${dateAssigned}</p>
                    <p class="date-resolved">${dateResolved}</p>
                    <p class="note-resolved">${noteResolved}</p>
                    <p class="date-deleted">${dateDeleted}</p>
                    <p class="note-deleted">${noteDeleted}</p>
                  </div>
                </article>`
              );
            }
          }
          break;
        case 'logged-main':
          loggedHeader.innerHTML = `${userName}`;
          for (let i = 0; i < ticketsTotal; i++) {
            const ticketInfo: HTMLCollection | any = ticketsCollection[i].children[1];
            let ticketStatus: String = ticketInfo.children[0].textContent.toLowerCase();
            let ticketRating: String = ticketInfo.children[1].textContent;
            let subjectText: String = ticketInfo.children[2].textContent;
            let descriptionText: String = ticketInfo.children[3].textContent;
            let senderName: String = ticketInfo.children[4].textContent;
            let senderDepartment: String = ticketInfo.children[5].textContent;
            let receiverName: String = ticketInfo.children[6].textContent;
            let receiverDepartment: String = ticketInfo.children[7].textContent;
            let dateShort: String = ticketInfo.children[8].textContent;
            let datePending: String = ticketInfo.children[9].textContent;
            let dateAssigned: String = ticketInfo.children[10].textContent;
            let dateResolved: String = ticketInfo.children[11].textContent;
            let noteResolved: String = ticketInfo.children[12].textContent;
            let dateDeleted: String = ticketInfo.children[13].textContent;
            let noteDeleted: String = ticketInfo.children[14].textContent;

            let receiverDefault = () => {
              switch (receiverName) {
                case `${undefined}`:
                  return receiverDepartment;
                default:
                  return receiverName;
              }
            };

            if (senderName === userName) {
              //--▼ Logged Main ▼--//
              $(ticketsMain).append(
                `<article class="${ticketStatus}" onClick="$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');">
                  <p class="shortdate">${dateShort}</p>
                  <p class="subject">${subjectText}</p>
                  <p class="receiver">${receiverDefault()}</p>
                  
                  <div style="display: none">
                    <p class="ticket-status">${ticketStatus}</p>
                    <p class="ticket-rating">${ticketRating}</p>
                    <p class="subject-text">${subjectText}</p>
                    <p class="description-text">${descriptionText}</p>
                    <p class="sender-name">${senderName}</p>
                    <p class="sender-department">${senderDepartment}</p>
                    <p class="receiver-name">${receiverName}</p>
                    <p class="receiver-department">${receiverDepartment}</p>
                    <p class="date-short">${dateShort}</p>
                    <p class="date-pending">${datePending}</p>
                    <p class="date-assigned">${dateAssigned}</p>
                    <p class="date-resolved">${dateResolved}</p>
                    <p class="note-resolved">${noteResolved}</p>
                    <p class="date-deleted">${dateDeleted}</p>
                    <p class="note-deleted">${noteDeleted}</p>
                  </div>
                </article>`
              );
            }
          }
          break;
        case 'manage-main':
          manageHeader.innerHTML = `${findDepartment(userName)}`;
          for (let i = 0; i < ticketsTotal; i++) {
            const ticketInfo = ticketsCollection[i].children[1];
            let ticketStatus: String = ticketInfo.children[0].textContent.toLowerCase();
            let ticketRating: String = ticketInfo.children[1].textContent;
            let subjectText: String = ticketInfo.children[2].textContent;
            let descriptionText: String = ticketInfo.children[3].textContent;
            let senderName: String = ticketInfo.children[4].textContent;
            let senderDepartment: String = ticketInfo.children[5].textContent;
            let receiverName: String = ticketInfo.children[6].textContent;
            let receiverDepartment: String = ticketInfo.children[7].textContent;
            let dateShort: String = ticketInfo.children[8].textContent;
            let datePending: String = ticketInfo.children[9].textContent;
            let dateAssigned: String = ticketInfo.children[10].textContent;
            let dateResolved: String = ticketInfo.children[11].textContent;
            let noteResolved: String = ticketInfo.children[12].textContent;
            let dateDeleted: String = ticketInfo.children[13].textContent;
            let noteDeleted: String = ticketInfo.children[14].textContent;

            if (userDepartment === receiverDepartment && receiverName === `${undefined}`) {
              //--▼ Manage Main ▼--//
              $(ticketsMain).append(
                `<article class="${ticketStatus}" onClick="$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');">
                  <p class="shortdate">${dateShort}</p>
                  <p class="subject">${subjectText}</p>
                  <p class="sender">${senderName}</p>
                  
                  <div style="display: none">
                    <p class="ticket-status">${ticketStatus}</p>
                    <p class="ticket-rating">${ticketRating}</p>
                    <p class="subject-text">${subjectText}</p>
                    <p class="description-text">${descriptionText}</p>
                    <p class="sender-name">${senderName}</p>
                    <p class="sender-department">${senderDepartment}</p>
                    <p class="receiver-name">${receiverName}</p>
                    <p class="receiver-department">${receiverDepartment}</p>
                    <p class="date-short">${dateShort}</p>
                    <p class="date-pending">${datePending}</p>
                    <p class="date-assigned">${dateAssigned}</p>
                    <p class="date-resolved">${dateResolved}</p>
                    <p class="note-resolved">${noteResolved}</p>
                    <p class="date-deleted">${dateDeleted}</p>
                    <p class="note-deleted">${noteDeleted}</p>
                  </div>
                </article>`
              );
            }
          }
          break;
        case 'user-main':
          ticketsMain.innerHTML = '';
          ticketsMain.className = '';
          ticketsMain.className = `${status}-tickets`;
          userHeader.innerHTML = `${userName}`;
          for (let i = 0; i < ticketsTotal; i++) {
            const ticketInfo = ticketsCollection[i].children[1];
            let ticketStatus: String = ticketInfo.children[0].textContent.toLowerCase();
            let ticketRating: String = ticketInfo.children[1].textContent;
            let subjectText: String = ticketInfo.children[2].textContent;
            let descriptionText: String = ticketInfo.children[3].textContent;
            let senderName: String = ticketInfo.children[4].textContent;
            let senderDepartment: String = ticketInfo.children[5].textContent;
            let receiverName: String = ticketInfo.children[6].textContent;
            let receiverDepartment: String = ticketInfo.children[7].textContent;
            let dateShort: String = ticketInfo.children[8].textContent;
            let datePending: String = ticketInfo.children[9].textContent;
            let dateAssigned: String = ticketInfo.children[10].textContent;
            let dateResolved: String = ticketInfo.children[11].textContent;
            let noteResolved: String = ticketInfo.children[12].textContent;
            let dateDeleted: String = ticketInfo.children[13].textContent;
            let noteDeleted: String = ticketInfo.children[14].textContent;

            if (/*userDepartment === receiverDepartment &&*/ receiverName === userName) {
              //--▼ Manage Main ▼--//
              $(ticketsMain).append(
                `<article class="${ticketStatus}" onClick="$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');">
                  <p class="shortdate">${dateShort}</p>
                  <p class="subject">${subjectText}</p>
                  <p class="sender">${senderName}</p>
                  
                  <div style="display: none">
                    <p class="ticket-status">${ticketStatus}</p>
                    <p class="ticket-rating">${ticketRating}</p>
                    <p class="subject-text">${subjectText}</p>
                    <p class="description-text">${descriptionText}</p>
                    <p class="sender-name">${senderName}</p>
                    <p class="sender-department">${senderDepartment}</p>
                    <p class="receiver-name">${receiverName}</p>
                    <p class="receiver-department">${receiverDepartment}</p>
                    <p class="date-short">${dateShort}</p>
                    <p class="date-pending">${datePending}</p>
                    <p class="date-assigned">${dateAssigned}</p>
                    <p class="date-resolved">${dateResolved}</p>
                    <p class="note-resolved">${noteResolved}</p>
                    <p class="date-deleted">${dateDeleted}</p>
                    <p class="note-deleted">${noteDeleted}</p>
                  </div>
                </article>`
              );
            }
          }
          break;
      }
    }
  }
  export class forSidebar {
    constructor(page: 'coworkers-sidebar' | 'default-sidebar' | 'employees-sidebar') {
      /* First ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ◄ */

      /* Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ◄ */
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');
      let userSelect: HTMLSelectElement = indexBody.querySelector('#user-form select');
      let userTotal: Number = userSelect.getElementsByTagName('option').length;

      const indexHeader: HTMLElement = document.querySelector('#index-header');
      let loggedButton: HTMLElement = indexHeader.querySelector('#logged-tickets button');
      let manageButton: HTMLElement = indexHeader.querySelector('#manage-tickets button');

      const indexMain: HTMLElement = document.querySelector('#index-main');

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');
      let activeEmployee: HTMLSpanElement = indexSidebar.querySelector('#view-employees header .active-colleague');
      let employeesFooter: HTMLSelectElement = indexSidebar.querySelector('#view-employees footer');
      let userHeader: HTMLHeadingElement = indexSidebar.querySelector('#view-employees header span .text');
      let userNotification: HTMLHeadingElement = indexSidebar.querySelector('#view-employees header span .notification');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');

      const indexData: HTMLElement = document.querySelector('#index-data');

      let departmentsData: HTMLDivElement;
      let employeesData: HTMLDivElement;
      let ticketsData: HTMLDivElement;
      let userDepartment: String;
      let userName: String;

      /* Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ◄ */

      /* Events ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Last ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      switch (page) {
        case 'coworkers-sidebar':
          /* Declarations ▼ =-=-=-=-=-=-=-=-=-= ◄ */
          userName = findUser();
          userDepartment = findDepartment(userName);

          let coworkerHeader: HTMLSelectElement = indexSidebar.querySelector('#view-coworkers header');
          let coworkerFooter: HTMLElement = indexSidebar.querySelector('#view-coworkers footer');
          let coworkerButtons: HTMLCollection;
          let departmentSelect: HTMLSelectElement = indexSidebar.querySelector('#department-form select');

          departmentsData = indexData.querySelector('#departments-data');
          employeesData = indexData.querySelector('#employees-data');
          ticketsData = indexData.querySelector('#tickets-data');
          /* Functions ▼ =-=-=-=-=-=-=-=-=-=-=- ◄ */
          let appendCoworker = (coworkerFooter: HTMLElement, nameClass: String, firstName: String, lastName: String) => {
            $(coworkerFooter).append(`<span class="${nameClass}"
                                            onClick="$('.active-colleague').removeClass('active-colleague'); $(this).addClass('active-colleague');">
                                        <h1 class="notification">${countTickets('resolved', `${firstName} ${lastName}`)}</h1>
                                        <h1 class="text">${firstName} ${lastName}</h1>
                                      </span>`);
          };
          let buildCoworkers = (selectedDepartment: String, recall: boolean) => {
            coworkerFooter.innerHTML = '';

            let employeesTotal = employeesData.children.length;
            for (let i = 0; i < employeesTotal; i++) {
              let firstName: String = getData(i, 'first-name');
              let middleName: String = getData(i, 'middle-name');
              /*
              let middleName: String;
              switch (get(i, 'middle-name')) {
                case `${undefined}`:
                  middleName = ' ';
                default:
                  middleName = ` ${get(i, 'middle-name')} `;
              }
              */
              let lastName: String = getData(i, 'last-name');
              let department: String = getData(i, 'department');
              let occupation: String = getData(i, 'occupation');
              let role: String = getData(i, 'role');

              if (UseValufy.forString(department) === `${selectedDepartment}`) {
                var classValue: String = `${firstName.toLowerCase()}-${lastName.toLowerCase()}`;
                var mainHeader: HTMLCollection = indexMain.getElementsByTagName('header');
                var activeName: String;
                if (typeof mainHeader[0] !== `${undefined}`) {
                  activeName = mainHeader[0].lastChild.textContent;
                }
                var indexName: String = `${firstName} ${lastName}`;
                var userName: String = findUser();

                switch (recall) {
                  case true:
                    if (activeName === indexName) {
                      $(coworkerFooter).append(`<span class="${classValue} active-colleague"
                                                      onClick="$('.active-colleague').removeClass('active-colleague'); $(this).addClass('active-colleague');">
                                                  <h1 class="notification">${countTickets('resolved', `${firstName} ${lastName}`)}</h1>
                                                  <h1 class="text">${firstName} ${lastName}</h1>
                                                </span>`);
                    } else {
                      appendCoworker(coworkerFooter, classValue, firstName, lastName);
                    }
                    break;
                  case false:
                    if (userName === indexName) {
                      $(coworkerFooter).append(`<span class="${classValue} active-colleague"
                                                      onClick="$('.active-colleague').removeClass('active-colleague'); $(this).addClass('active-colleague');">
                                                  <h1 class="notification">${countTickets('resolved', `${firstName} ${lastName}`)}</h1>
                                                  <h1 class="text">${firstName} ${lastName}</h1>
                                                </span>`);
                    } else {
                      appendCoworker(coworkerFooter, classValue, firstName, lastName);
                    }
                    break;
                }
              }
            }
          };
          let buildDepartments = (userDepartment: String) => {
            departmentSelect.innerHTML = '';

            let departmentsTotal = departmentsData.children.length;
            for (let i = 0; i < departmentsTotal; i++) {
              let department: String = `${departmentsData.children[i].id}`;
              let option = document.createElement('option');
              option.value = UseValufy.forString(department);
              option.textContent = UseCapify.forString(' ', department);
              if (userDepartment === UseCapify.forString(' ', department)) {
                option.selected = true;
              } else {
                option.selected = false;
              }
              departmentSelect.append(option);
            }
            buildCoworkers(departmentSelect.selectedOptions[0].value, false);
          };
          buildDepartments(findDepartment(findUser()));

          coworkerButtons = coworkerFooter.getElementsByTagName('span');
          let recall = (coworkerButtons: HTMLCollection) => {
            $(coworkerButtons).on('click', () => {
              manageButton.className = '';
              loggedButton.className = '';
              indexSidebar.style.display = 'none';
              new GetEvent.forPage('coworker-main', GetPath.forHTML('main'));
            });
          };
          /* Events ▼ =-=-=-=-=-=-=-=-=-=-=- ◄ */
          $(departmentSelect).on('change', () => {
            buildCoworkers(departmentSelect.selectedOptions[0].value, true);

            var coworkerButtons: HTMLCollection = coworkerFooter.getElementsByTagName('span');
            recall(coworkerButtons);
          });
          /* Last ▼ =-=-=-=-=-=-=-=-=-=-=- ◄ */

          recall(coworkerButtons);
          break;
        case 'default-sidebar':
          break;
        case 'employees-sidebar':
          /* First ▼ =-=-=-=-=-=-=-=-=-=-=- ◄ */

          /* Function ▼ =-=-=-=-=-=-=-=-=-=-=- ◄ */
          let buildEmployees = () => {
            userHeader.textContent = `${findUser()}`;
            userNotification.textContent = `${countTickets('assigned', findUser())}`;

            userDepartment = findDepartment(findUser());
            employeesFooter.innerHTML = '';

            employeesData = indexData.querySelector('#employees-data');
            let employeesTotal: Number = employeesData.getElementsByTagName('article').length;
            for (let i = 0; i < employeesTotal; i++) {
              let firstName: String = getData(i, 'first-name');
              let middleName: String = getData(i, 'middle-name');
              let lastName: String = getData(i, 'last-name');
              let department: String = getData(i, 'department');
              let occupation: String = getData(i, 'occupation');
              let role: String = getData(i, 'role');

              var classValue: String = UseValufy.forString(`${firstName} ${lastName}`);
              if (userDepartment === department) {
                if (`${firstName} ${lastName}` !== `${findUser()}`) {
                  $(employeesFooter).append(`<span class="${classValue}"
                                                  onClick="$('.active-colleague').removeClass('active-colleague'); $(this).addClass('active-colleague');">
                                              <h1 class="notification">${countTickets('assigned', `${firstName} ${lastName}`)}</h1>
                                              <h1 class="text">${firstName} ${lastName}</h1>
                                            </span>`);
                }
              }
            }
          };
          let highlightEmployee = () => {
            if (indexMain.querySelector('#index-main #user-name') !== null) {
              indexSidebar.querySelector('#view-employees header span').className = 'active-colleague';
            } else if (indexMain.querySelector('#index-main #colleague-name') !== null) {
              activeEmployee.className = '';
              let colleaguesTotal: Number = employeesFooter.getElementsByTagName('span').length;
              for (let i = 0; i < colleaguesTotal; i++) {
                let colleagueName: String = indexMain.querySelector('#index-main #colleague-name').textContent;
                let colleaguesContainer: HTMLElement = indexSidebar.querySelector('#view-employees footer');
                let colleagues: HTMLCollection = colleaguesContainer.getElementsByTagName('span');
                let liveColleague: String = colleagues[i].querySelector('.text').textContent;
                if (colleagueName === liveColleague) {
                  colleagues[i].querySelector('h1').parentElement.className = 'active-colleague';
                }
              }
            }
          };
          /* Last ▼ =-=-=-=-=-=-=-=-=-=-=- ◄ */
          buildEmployees();
          highlightEmployee();
          break;
      }
    }
  }
  export class forOverlay {
    constructor(
      page:
        | 'colleague-assigned'
        | 'colleague-deleted'
        | 'colleague-resolved'
        | 'coworker-deleted'
        | 'coworker-resolved'
        | 'log-overlay'
        | 'logged-deleted'
        | 'logged-pending'
        | 'manage-deleted'
        | 'manage-pending'
        | 'user-assigned'
        | 'user-deleted'
        | 'user-resolved'
    ) {
      /* First ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ◄ */

      /* Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ◄ */
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');

      const indexHeader: HTMLElement = document.querySelector('#index-header');

      const indexMain: HTMLElement = document.querySelector('#index-main');
      indexMain.style.display = 'none';

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');
      let closeOverlay: HTMLButtonElement = indexOverlay.querySelector('#close-overlay');
      const ticketSubject: HTMLInputElement = indexOverlay.querySelector('#ticket-subject');
      const ticketDescription: HTMLElement = indexOverlay.querySelector('#ticket-description');
      const senderDepartment: HTMLElement = indexOverlay.querySelector('#sender-department');
      const receiverDepartment: HTMLElement = indexOverlay.querySelector('#receiver-department');
      const colleagueName: HTMLElement = indexOverlay.querySelector('#colleague-name');

      const pendingDate: HTMLElement = indexOverlay.querySelector('#pending-date');
      const assignedDate: HTMLElement = indexOverlay.querySelector('#assigned-date');
      const resolvedDate: HTMLElement = indexOverlay.querySelector('#resolved-date');
      const resolvedNote: HTMLElement = indexOverlay.querySelector('#resolved-note');
      const deletedDate: HTMLElement = indexOverlay.querySelector('#deleted-date');
      const deletedNote: HTMLElement = indexOverlay.querySelector('#deleted-note');

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

      let departmentSelect: HTMLSelectElement = indexOverlay.querySelector('#department-form select');
      let colleagueSelect: HTMLSelectElement = indexOverlay.querySelector('#colleague-form select');

      let pendingMark: HTMLDivElement = indexOverlay.querySelector('.pending-mark');
      let assignedMark: HTMLDivElement = indexOverlay.querySelector('.assigned-mark');
      let resolvedMark: HTMLDivElement = indexOverlay.querySelector('.resolved-mark');
      let deletedMark: HTMLDivElement = indexOverlay.querySelector('.deleted-mark');

      let departmentName: HTMLHeadingElement = indexOverlay.querySelector('#department-name h1');

      const indexData: HTMLElement = document.querySelector('#index-data');
      let departmentsData: HTMLDivElement;
      let departmentsTotal: Number;
      let employeesData: HTMLDivElement;
      let ticketsData: HTMLDivElement;
      let userDepartment: String;
      let userName: String;

      /* Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ◄ */

      /* Events ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Last ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      switch (page) {
        case 'colleague-assigned':
          if (findUser() === getTicket('sender-name')) {
            takeButton.className = 'disabled-button';
          } else {
            takeButton.className = '';
          }
          ticketSubject.value = `${getTicket('subject-text')}`;
          ticketDescription.textContent = `${getTicket('description-text')}`;

          senderDepartment.textContent = `${getTicket('sender-department')}`;
          colleagueName.textContent = `${getTicket('sender-name')}`;

          pendingDate.textContent = `${getTicket('date-pending')}`;
          assignedDate.textContent = `${getTicket('date-assigned')}`;
          break;
        case 'colleague-deleted':
          ticketSubject.value = `${getTicket('subject-text')}`;
          ticketDescription.textContent = `${getTicket('description-text')}`;

          senderDepartment.textContent = `${getTicket('sender-department')}`;
          colleagueName.textContent = `${getTicket('sender-name')}`;

          pendingDate.textContent = `${getTicket('date-pending')}`;
          assignedDate.textContent = `${getTicket('date-assigned')}`;
          deletedDate.textContent = `${getTicket('date-deleted')}`;
          deletedNote.textContent = `${getTicket('note-deleted')}`;
          break;
        case 'colleague-resolved':
          ticketSubject.value = `${getTicket('subject-text')}`;
          ticketDescription.textContent = `${getTicket('description-text')}`;

          senderDepartment.textContent = `${getTicket('sender-department')}`;
          colleagueName.textContent = `${getTicket('sender-name')}`;

          pendingDate.textContent = `${getTicket('date-pending')}`;
          assignedDate.textContent = `${getTicket('date-assigned')}`;
          resolvedDate.textContent = `${getTicket('date-resolved')}`;
          resolvedNote.textContent = `${getTicket('note-resolved')}`;
          break;
        case 'coworker-deleted':
          if (`${getTicket('date-assigned')}` === `${undefined}`) {
            colleagueName.style.display = 'none';
            assignedDate.style.display = 'none';
          } else {
            colleagueName.style.display = 'flex';
            assignedDate.style.display = 'flex';
          }

          ticketSubject.value = `${getTicket('subject-text')}`;
          ticketDescription.textContent = `${getTicket('description-text')}`;

          receiverDepartment.textContent = `${getTicket('receiver-department')}`;
          colleagueName.textContent = `${getTicket('receiver-name')}`;

          pendingDate.textContent = `${getTicket('date-pending')}`;
          assignedDate.textContent = `${getTicket('date-assigned')}`;

          deletedDate.textContent = `${getTicket('date-deleted')}`;
          deletedNote.textContent = `${getTicket('note-deleted')}`;
          break;
        case 'coworker-resolved':
          ticketSubject.value = `${getTicket('subject-text')}`;
          ticketDescription.textContent = `${getTicket('description-text')}`;

          receiverDepartment.textContent = `${getTicket('receiver-department')}`;
          colleagueName.textContent = `${getTicket('receiver-name')}`;

          pendingDate.textContent = `${getTicket('date-pending')}`;
          assignedDate.textContent = `${getTicket('date-assigned')}`;
          resolvedDate.textContent = `${getTicket('date-resolved')}`;
          resolvedNote.textContent = `${getTicket('note-resolved')}`;
          break;
        case 'log-overlay':
          pendingDate.textContent = UseDatefy.forToday('Weekday, 00 Month YYYY');

          $(departmentSelect)
            .on('click', () => {
              if (colleagueSelect.length === 1) {
                logButton.className = 'disabled-button';
                assignButton.className = 'disabled-button';
              } else {
                logButton.className = '';
                assignButton.className = '';
              }
            })
            .on('change', () => {
              logButton.parentElement.style.display = 'grid';
              assignButton.parentElement.style.display = 'none';

              pendingMark.style.background = `${GetColor.primaryDark()}`;
              assignedMark.style.background = `${GetColor.primaryMedium()}`;

              if (colleagueSelect.length === 1) {
                logButton.className = 'disabled-button';
                assignButton.className = 'disabled-button';
              } else {
                logButton.className = '';
                assignButton.className = '';
              }

              buildColleagues(departmentSelect.selectedOptions[0].value, 'user');
            });
          buildDepartments(findDepartment(findUser()));
          break;
        case 'logged-deleted':
          ticketSubject.value = `${getTicket('subject-text')}`;
          ticketDescription.textContent = `${getTicket('description-text')}`;

          senderDepartment.textContent = `${getTicket('receiver-department')}`;
          colleagueName.textContent = `${getTicket('receiver-name')}`;

          pendingDate.textContent = `${getTicket('date-pending')}`;
          if (getTicket('receiver-name') === `${undefined}`) {
            colleagueName.style.display = 'none';
            assignedDate.style.display = 'none';
          }

          assignedDate.textContent = `${getTicket('date-assigned')}`;

          deletedDate.textContent = `${getTicket('date-deleted')}`;
          deletedNote.textContent = `${getTicket('note-deleted')}`;
          break;
        case 'logged-pending':
          ticketSubject.value = `${getTicket('subject-text')}`;
          ticketDescription.innerHTML = `${getTicket('description-text')}`;

          pendingDate.textContent = `${getTicket('date-pending')}`;
          $(departmentSelect).on('change', () => {
            buildColleagues(departmentSelect.value, 'user');
          });
          buildDepartments(getTicket('receiver-department'));
          break;
        case 'manage-deleted':
          ticketSubject.value = `${getTicket('subject-text')}`;
          ticketDescription.textContent = `${getTicket('description-text')}`;

          senderDepartment.textContent = `${getTicket('sender-department')}`;
          colleagueName.textContent = `${getTicket('sender-name')}`;

          pendingDate.textContent = `${getTicket('date-pending')}`;
          deletedDate.textContent = `${getTicket('date-deleted')}`;
          deletedNote.textContent = `${getTicket('note-deleted')}`;

          departmentName.textContent = `${findDepartment(findUser())}`;
          break;
        case 'manage-pending':
          if (getTicket('sender-name') === findUser()) {
            claimButton.parentElement.style.display = 'grid';
            claimButton.className = 'disabled-button';
          }

          ticketSubject.value = `${getTicket('subject-text')}`;
          ticketDescription.textContent = `${getTicket('description-text')}`;
          pendingDate.textContent = `${getTicket('date-pending')}`;

          $(departmentSelect).on('change', () => {
            buildColleagues(departmentSelect.value, 'none');
          });
          buildDepartments(findDepartment(findUser()));
          break;
        case 'user-assigned':
          ticketSubject.value = `${getTicket('subject-text')}`;
          ticketDescription.textContent = `${getTicket('description-text')}`;

          senderDepartment.textContent = `${getTicket('sender-department')}`;
          colleagueName.textContent = `${getTicket('sender-name')}`;

          pendingDate.textContent = `${getTicket('date-pending')}`;
          assignedDate.textContent = `${getTicket('date-assigned')}`;
          resolvedDate.style.display = 'none';
          deletedDate.style.display = 'none';
          break;
        case 'user-deleted':
          ticketSubject.value = `${getTicket('subject-text')}`;
          ticketDescription.textContent = `${getTicket('description-text')}`;

          senderDepartment.textContent = `${getTicket('sender-department')}`;
          colleagueName.textContent = `${getTicket('sender-name')}`;

          pendingDate.textContent = `${getTicket('date-pending')}`;
          assignedDate.textContent = `${getTicket('date-assigned')}`;
          deletedDate.textContent = `${getTicket('date-deleted')}`;
          deletedNote.textContent = `${getTicket('note-deleted')}`;
          break;
        case 'user-resolved':
          ticketSubject.value = `${getTicket('subject-text')}`;
          ticketDescription.textContent = `${getTicket('description-text')}`;

          senderDepartment.textContent = `${getTicket('sender-department')}`;
          colleagueName.textContent = `${getTicket('sender-name')}`;

          pendingDate.textContent = `${getTicket('date-pending')}`;
          assignedDate.textContent = `${getTicket('date-assigned')}`;
          resolvedDate.textContent = `${getTicket('date-resolved')}`;
          resolvedNote.textContent = `${getTicket('note-resolved')}`;
          break;
      }
    }
  }

  /* ▼ A=-=-=A ▼ */
  /* ▼ B=-=-=B ▼ */
  function buildColleagues(selectedDepartment: String, filter: 'none' | 'user') {
    const indexMain: HTMLElement = document.querySelector('#index-main');

    const indexOverlay: HTMLElement = document.querySelector('#index-overlay');
    let colleagueSelect: HTMLSelectElement = indexOverlay.querySelector('#colleague-form select');
    colleagueSelect.innerHTML = `<option value="select-colleague" selected disabled>Select Colleague</option>`;

    const employeesData: HTMLDivElement = document.querySelector('#employees-data');
    let employeesTotal: Number = employeesData.children.length;

    switch (filter) {
      case 'none':
        for (let i = 0; i < employeesTotal; i++) {
          let firstName: String = getData(i, 'first-name');
          let middleName: String = getData(i, 'middle-name');
          let lastName: String = getData(i, 'last-name');
          let department: String = getData(i, 'department');
          let occupation: String = getData(i, 'occupation');
          let role: String = getData(i, 'role');

          if (UseValufy.forString(department) === `${selectedDepartment}`) {
            var classValue: String = `${firstName.toLowerCase()}-${lastName.toLowerCase()}`;
            var mainHeader: HTMLCollection = indexMain.getElementsByTagName('header');
            var activeName: String;
            if (typeof mainHeader[0] !== `${undefined}`) {
              activeName = mainHeader[0].lastChild.textContent;
            }
            var indexName: String = `${firstName} ${lastName}`;
            var userName: String = findUser();

            if (userName === indexName) {
              $(colleagueSelect).append(`<option value="${UseValufy.forString(indexName)}" selected>${firstName} ${lastName}</option>`);
            } else {
              $(colleagueSelect).append(`<option value="${UseValufy.forString(indexName)}">${firstName} ${lastName}</option>`);
            }
          }
        }
        break;
      case 'user':
        for (let i = 0; i < employeesTotal; i++) {
          let firstName: String = getData(i, 'first-name');
          let middleName: String = getData(i, 'middle-name');
          let lastName: String = getData(i, 'last-name');
          let department: String = getData(i, 'department');
          let occupation: String = getData(i, 'occupation');
          let role: String = getData(i, 'role');

          if (UseValufy.forString(department) === `${selectedDepartment}`) {
            var classValue: String = `${firstName.toLowerCase()}-${lastName.toLowerCase()}`;
            var mainHeader: HTMLCollection = indexMain.getElementsByTagName('header');
            var activeName: String;
            if (typeof mainHeader[0] !== `${undefined}`) {
              activeName = mainHeader[0].lastChild.textContent;
            }
            var indexName: String = `${firstName} ${lastName}`;
            var userName: String = findUser();
            if (userName !== indexName) {
              $(colleagueSelect).append(`<option value="${UseValufy.forString(indexName)}">${firstName} ${lastName}</option>`);
            }
          }
        }
        break;
    }
  }

  function buildDepartments(userDepartment: String) {
    const indexMain: HTMLElement = document.querySelector('#index-main');

    const indexOverlay: HTMLElement = document.querySelector('#index-overlay');
    let departmentSelect: HTMLSelectElement = indexOverlay.querySelector('#department-form select');
    let colleagueSelect: HTMLSelectElement = indexOverlay.querySelector('#colleague-form select');

    const indexData: HTMLElement = document.querySelector('#index-data');
    let departmentsData = indexData.querySelector('#departments-data');
    departmentSelect.innerHTML = '';
    let departmentsTotal = departmentsData.children.length;
    for (let i = 0; i < departmentsTotal; i++) {
      let department: String = `${departmentsData.children[i].id}`;
      let option = document.createElement('option');
      option.value = UseValufy.forString(department);
      option.textContent = UseCapify.forString(' ', department);

      if (userDepartment === UseCapify.forString(' ', department)) {
        option.selected = true;
      } else {
        option.selected = false;
      }
      departmentSelect.append(option);
    }

    if (indexOverlay.className === 'log-overlay' || indexOverlay.className === 'logged-pending') {
      buildColleagues(departmentSelect.selectedOptions[0].value, 'user');
    } else {
      buildColleagues(departmentSelect.selectedOptions[0].value, 'none');
    }
  }
  /* ▼ C=-=-=C ▼ */
  function countTickets(status: 'pending' | 'assigned' | 'resolved' | 'deleted' | 'everything', employeeName: String) {
    const indexMain: HTMLElement = document.querySelector('#index-main');

    const indexData: HTMLElement = document.querySelector('#index-data');
    let ticketsData: HTMLDivElement = indexData.querySelector('#tickets-data');
    let ticketsCollection: HTMLCollection = ticketsData.getElementsByTagName('article');
    switch (status) {
      case 'pending':
        var pending: number = 0;
        for (let i = 0; i < ticketsCollection.length; i++) {
          var statusInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[0].textContent}`;
          var senderNameInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[4].textContent}`;
          var receiverNameInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[6].textContent}`;

          if (indexMain.className === 'logged-main' || indexMain.className === 'coworker-main') {
            if (senderNameInfo === employeeName) {
              if (statusInfo === 'Pending') {
                pending++;
              }
            }
          } else if (indexMain.className === 'manage-main' || indexMain.className === 'user-main' || indexMain.className === 'colleague-main') {
            if (receiverNameInfo === employeeName) {
              if (statusInfo === 'Pending') {
                pending++;
              }
            }
          }
        }
        return pending;
      case 'assigned':
        var assigned: number = 0;
        for (let i = 0; i < ticketsCollection.length; i++) {
          var statusInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[0].textContent}`;
          var senderNameInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[4].textContent}`;
          var receiverNameInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[6].textContent}`;

          if (indexMain.className === 'logged-main' || indexMain.className === 'coworker-main') {
            if (senderNameInfo === employeeName) {
              if (statusInfo === 'Assigned') {
                assigned++;
              }
            }
          } else if (indexMain.className === 'manage-main' || indexMain.className === 'user-main' || indexMain.className === 'colleague-main') {
            if (receiverNameInfo === employeeName) {
              if (statusInfo === 'Assigned') {
                assigned++;
              }
            }
          }
        }
        return assigned;
      case 'resolved':
        var resolved: number = 0;
        for (let i = 0; i < ticketsCollection.length; i++) {
          var statusInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[0].textContent}`;
          var senderNameInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[4].textContent}`;
          var receiverNameInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[6].textContent}`;

          if (indexMain.className === 'logged-main' || indexMain.className === 'coworker-main') {
            if (senderNameInfo === employeeName) {
              if (statusInfo === 'Resolved') {
                resolved++;
              }
            }
          } else if (indexMain.className === 'manage-main' || indexMain.className === 'user-main' || indexMain.className === 'colleague-main') {
            if (receiverNameInfo === employeeName) {
              if (statusInfo === 'Resolved') {
                resolved++;
              }
            }
          }
        }
        return resolved;
      case 'deleted':
        var deleted: number = 0;
        for (let i = 0; i < ticketsCollection.length; i++) {
          var statusInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[0].textContent}`;
          var senderNameInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[4].textContent}`;
          var receiverNameInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[6].textContent}`;

          if (indexMain.className === 'logged-main' || indexMain.className === 'coworker-main') {
            if (senderNameInfo === employeeName) {
              if (statusInfo === 'Deleted') {
                deleted++;
              }
            }
          } else if (indexMain.className === 'manage-main' || indexMain.className === 'user-main' || indexMain.className === 'colleague-main') {
            if (receiverNameInfo === employeeName) {
              if (statusInfo === 'Deleted') {
                deleted++;
              }
            }
          }
        }
        return deleted;
      case 'everything':
        var everything: number = 0;
        for (let i = 0; i < ticketsCollection.length; i++) {
          var statusInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[0].textContent}`;
          var ratingInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[1].textContent}`;
          var subjectInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[2].textContent}`;
          var descriptionInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[3].textContent}`;
          var senderNameInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[4].textContent}`;
          var senderDepartmentInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[5].textContent}`;
          var receiverNameInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[6].textContent}`;
          var receiverDepartmentInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[7].textContent}`;
          var dateShortInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[8].textContent}`;
          var datePendingInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[9].textContent}`;
          var dateAssignedInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[10].textContent}`;
          var dateResolvedInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[11].textContent}`;
          var noteResolvedInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[12].textContent}`;
          var dateDeletedInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[13].textContent}`;
          var noteDeletedInfo: String | HTMLParagraphElement = `${ticketsData.children[i].children[1].children[14].textContent}`;

          if (indexMain.className === 'logged-main' || indexMain.className === 'coworker-main') {
            if (senderNameInfo === employeeName) {
              everything++;
            }
          } else if (indexMain.className === 'manage-main' || indexMain.className === 'user-main' || indexMain.className === 'colleague-main') {
            if (receiverNameInfo === employeeName) {
              everything++;
            }
          }
        }
        return everything;
    }
  }
  /* ▼ D=-=-=D ▼ */
  /* ▼ E=-=-=E ▼ */
  /* ▼ F=-=-=F ▼ */
  function findDepartment(userName: String) {
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
      if (employeeName === userName) {
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
  function getData(index: number, data: String | 'first-name' | 'middle-name' | 'last-name' | 'department' | 'occupation' | 'role') {
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
  /* ▼ H=-=-=H ▼ */
  /* ▼ I=-=-=I ▼ */
  /* ▼ J=-=-=J ▼ */
  /* ▼ K=-=-=K ▼ */
  /* ▼ L=-=-=L ▼ */
  /* ▼ M=-=-=M ▼ */
  /* ▼ N=-=-=N ▼ */
  /* ▼ O=-=-=O ▼ */
  /* ▼ P=-=-=P ▼ */
  /* ▼ Q=-=-=Q ▼ */
  /* ▼ R=-=-=R ▼ */
  /* ▼ S=-=-=S ▼ */
  /* ▼ T=-=-=T ▼ */
  /* ▼ U=-=-=U ▼ */
  /* ▼ V=-=-=V ▼ */
  /* ▼ W=-=-=W ▼ */
  /* ▼ X=-=-=X ▼ */
  /* ▼ Y=-=-=Y ▼ */
  /* ▼ Z=-=-=Z ▼ */
}
