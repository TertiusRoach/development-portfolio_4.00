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

//--|►| Default Header |◄|--//
export namespace DefaultHeader {
  export class initiateEvents {
    constructor() {
      /* First ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ◄ */

      /* Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');

      const indexHeader: HTMLElement = document.querySelector('#index-header');
      let loggedButton: HTMLElement = indexHeader.querySelector('#logged-tickets button');
      let logButton: HTMLElement = indexHeader.querySelector('#log-a-ticket button');
      let manageButton: HTMLElement = indexHeader.querySelector('#manage-tickets button');

      const indexMain: HTMLElement = document.querySelector('#index-main');
      switch (indexMain.className) {
        case 'logged-main':
          manageButton.className = '';
          loggedButton.className = 'active-page';
          break;
        case 'manage-main':
          loggedButton.className = '';
          manageButton.className = 'active-page';
          break;
      }

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');

      const indexData: HTMLElement = document.querySelector('#index-data');

      /* Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Classes ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Events ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      $(loggedButton).on('click', () => {
        manageButton.className = '';
        loggedButton.className = 'active-page';
        new GetEvent.forPage('logged-main', GetPath.forHTML('main'));
        new GetEvent.forPage('coworkers-sidebar', GetPath.forHTML('sidebar'));
      });
      $(logButton).on('click', () => {
        logButton.className = 'active-page';
        indexOverlay.style.display = 'grid';
        new GetEvent.forPage('log-overlay', GetPath.forHTML('overlay'));
      });
      $(manageButton).on('click', () => {
        loggedButton.className = '';
        manageButton.className = 'active-page';
        new GetEvent.forPage('manage-main', GetPath.forHTML('main'));
        new GetEvent.forPage('employees-sidebar', GetPath.forHTML('sidebar'));
      });

      /* Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /*--► console.log('--DefaultHeader.js Loaded'); ◄--*/
    }
  }
}
