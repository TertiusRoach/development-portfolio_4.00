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

//--|►| Default Body |◄|--//
export namespace DefaultBody {
  export class initiateEvents {
    constructor() {
      // Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');
      let userSelect: HTMLSelectElement = document.querySelector('#user-form select');

      const indexHeader: HTMLElement = document.querySelector('#index-header');

      const indexMain: HTMLElement = document.querySelector('#index-main');

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');
      let defaultOverlay: HTMLElement = document.querySelector('.default-overlay');

      const indexData: HTMLElement = document.querySelector('#index-data');
      // Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      function findRole(userName: String) {
        let employeesData: HTMLDivElement = document.querySelector('.default-data #employees-data');
        let employeesCollection: HTMLCollection = employeesData.getElementsByTagName('article');
        let employeesTotal: Number = employeesData.getElementsByTagName('article').length;

        for (let i = 0; i < employeesTotal; i++) {
          let firstName: String = employeesCollection[i].children[0].textContent;
          let middleName: String = employeesCollection[i].children[1].textContent;
          let lastName: String = employeesCollection[i].children[2].textContent;
          let department: String = employeesCollection[i].children[3].textContent;
          let occupation: String = employeesCollection[i].children[4].textContent;
          let role: String = employeesCollection[i].children[5].textContent;
          let email: String = employeesCollection[i].children[6].textContent;
          let phone: String = employeesCollection[i].children[7].textContent;

          let employeeName: String = `${firstName} ${lastName}`;
          if (employeeName === userName) {
            return role.toLowerCase();
          }
        }
      }
      function refreshMain(role: String | 'manager' | 'employee') {
        let managerButton: Element = defaultOverlay.parentElement.children[2].children[0].children[0];
        let employeeButton: Element = defaultOverlay.parentElement.children[2].children[2].children[0];

        switch (role) {
          case 'manager':
            employeeButton.className = '';
            managerButton.className = 'active-page';

            new GetEvent.forPage('logged-main', GetPath.forHTML('main'));
            new GetEvent.forPage('coworkers-sidebar', GetPath.forHTML('sidebar'));
            break;
          case 'employee':
            managerButton.className = '';
            employeeButton.className = 'active-page';

            new GetEvent.forPage('manage-main', GetPath.forHTML('main'));
            new GetEvent.forPage('employees-sidebar', GetPath.forHTML('sidebar'));
            break;
        }
      }

      // Classes ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      new GetEvent.forPage('default-header', GetPath.forHTML('header'));
      new GetEvent.forPage('default-overlay', GetPath.forHTML('overlay'));
      new GetEvent.forPage('default-data', GetPath.forHTML('data'));

      // Events ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      $(userSelect).on('change', () => {
        indexSidebar.style.display = 'none';

        var userName: String = userSelect.selectedOptions[0].textContent;

        refreshMain(findRole(userName));
      });

      // Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      /*--► console.log('--DefaultBody.js Loaded'); ◄--*/
    }
  }
}
