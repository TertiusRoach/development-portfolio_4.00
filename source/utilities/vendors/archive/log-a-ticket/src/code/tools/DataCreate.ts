//--|▼| Tools (Import) |▼|--//
import { GetArray } from 'code/tools/GetArray';
import { GetColor } from 'code/tools/GetColor';
import { GetElement } from 'code/tools/GetElement';
import { GetEvent } from 'code/tools/GetEvent';
import { GetPath } from 'code/tools/GetPath';

import { UseCapify } from 'code/tools/UseCapify';
import { UseDatefy } from 'code/tools/UseDatefy';
import { UseValufy } from 'code/tools/UseValufy';

//--|►| DataCreate (Tool) |◄|--//
export namespace DataCreate {
  export class forBlock {
    constructor(container: 'departments' | 'employees' | 'tickets') {
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');

      const indexHeader: HTMLElement = document.querySelector('#index-header');

      const indexMain: HTMLElement = document.querySelector('#index-main');

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');

      const indexData: HTMLElement = document.querySelector('#index-data');
      let departmentsContainer: HTMLDivElement = document.querySelector('#departments-data');
      let employeesContainer: HTMLDivElement = document.querySelector('#employees-data');
      let ticketsContainer: HTMLDivElement = document.querySelector('#tickets-data');

      switch (container) {
        case 'departments':
          departmentsContainer.innerHTML = '';

          let activeDepartment: String = userDepartment();
          let departmentsTotal: Number = GetArray.departments().length;
          for (let i = 0; i < departmentsTotal; i++) {
            const GetDepartment = GetArray.departments()[i];
            let departmentName: String = GetDepartment.department;
            let employeesTotal: Number = GetArray.departments()[i].employeesTotal;

            $(departmentsContainer).append(`<article id="${departmentName.toLowerCase()}">
                                            </article>`);
          }

          //--► console.log(departmentsContainer); ◄--//
          break;
        case 'employees':
          employeesContainer.innerHTML = '';

          let employeesTotal: Number = GetArray.employees().length;
          for (let i = 0; i < employeesTotal; i++) {
            //--▼ Defining a const first avoids undefined browser errors ▼--//
            const GetEmployees = GetArray.employees()[i];
            let firstName: String = GetEmployees.firstName;
            let middleName: String | undefined = GetEmployees.middleName;
            let lastName: String = GetEmployees.lastName;
            let department: String = GetEmployees.department;
            let occupation: String | undefined = GetEmployees.occupation;
            let role: String | 'Manager' | 'Employee' = GetEmployees.role;
            let email: String | undefined = GetEmployees.email;
            let phone: Number | undefined = GetEmployees.phone;

            let nameDefault = (name: String | undefined) => {
              switch (name) {
                case undefined:
                  return 'undefined';
                default:
                  return name;
              }
            };

            $('#employees-data').append(
              `<article
              id="${
                firstName.toLowerCase() +
                '-' +
                nameDefault(middleName).toLowerCase() +
                '-' +
                lastName.toLowerCase() +
                '-' +
                UseValufy.forString(`${department}`) +
                '-' +
                UseValufy.forString(`${occupation}`) +
                '-' +
                role.toLowerCase()
              }">
                <p class="first-name">${firstName}</p>
                <p class="middle-name">${middleName}</p>
                <p class="last-name">${lastName}</p>
                <p class="department">${department}</p>
                <p class="occupation">${occupation}</p>
                <p class="role">${role}</p>
                <p class="email">${email}</p>
                <p class="phone">${phone}</p>
              </article>`
            );
          }
          //--► console.log(employeesContainer); ◄--//
          break;
        case 'tickets':
          ticketsContainer.innerHTML = '';

          let ticketsTotal: Number = GetArray.tickets().length;
          for (let i = 0; i < ticketsTotal; i++) {
            //--▼ Defining a const first avoids undefined browser errors ▼--//
            const GetTickets = GetArray.tickets()[i];
            let ticketStatus: String = GetTickets.ticketStatus;
            let ticketRating: Number = GetTickets.ticketRating;
            let subjectText: String = GetTickets.subjectText;
            let descriptionText: String = GetTickets.descriptionText;
            let senderName: String = GetTickets.senderName;
            let senderDepartment: String = GetTickets.senderDepartment;
            let receiverName: String = GetTickets.receiverName;
            let receiverDepartment: String = GetTickets.receiverDepartment;
            let dateShort: String = GetTickets.dateShort;
            let datePending: String = GetTickets.datePending;
            let dateAssigned: String = GetTickets.dateAssigned;
            let dateResolved: String = GetTickets.dateResolved;
            let noteResolved: String = GetTickets.noteResolved;
            let dateDeleted: String = GetTickets.dateDeleted;
            let noteDeleted: String = GetTickets.noteDeleted;

            let receiverDefault = () => {
              switch (receiverName) {
                case `${undefined}`:
                  return receiverDepartment;
                default:
                  return receiverName;
              }
            };

            $('#tickets-data').append(
              `<article class="${ticketStatus.toLowerCase()}">
                <header>
                  <p class="shortdate">${dateShort}</p>
                  <p class="subject">${subjectText}</p>
                  <p class="receiver">${receiverDefault()}</p>
                </header>                  
                <footer>
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
                </footer>
              </article>`
            );
          }
          //--► console.log(ticketsContainer); ◄--//
          break;
      }
    }
  }

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
  function findUser() {
    const indexBody: HTMLBodyElement = document.querySelector('#index-body');
    let userSelect: HTMLSelectElement = indexBody.querySelector('#user-form select');
    let userIndex: number = userSelect.selectedIndex;
    let userName: String = userSelect.children[userIndex].textContent;
    return `${userName}`;
  }
  function userDepartment() {
    const employeesData: HTMLDivElement = document.querySelector('#employees-data');
    let employeesCollection: HTMLCollection = employeesData.getElementsByTagName('article');
    let employeesTotal: Number = employeesData.getElementsByTagName('article').length;
    let userSelect: HTMLSelectElement = document.querySelector('#user-form select');
    let userName: String = userSelect.selectedOptions[0].textContent;

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
}
