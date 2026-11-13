//--|▼| Tools (Import) |▼|--//
import { DataCreate } from 'code/tools/DataCreate';
import { DataErase } from 'code/tools/DataErase';
import { DataRead } from 'code/tools/DataRead';
import { DataUpdate } from 'code/tools/DataUpdate';

import { UseCapify } from 'code/tools/UseCapify';
import { UseDatefy } from 'code/tools/UseDatefy';
import { UseValufy } from 'code/tools/UseValufy';

//--|▼| Events (Import) |▼|--//
import { DefaultBody } from 'code/events/indexBody/defaultBody';

import { DefaultHeader } from 'code/events/indexHeader/DefaultHeader';

import { ColleagueMain } from 'code/events/indexMain/ColleagueMain';
import { CoworkerMain } from 'code/events/indexMain/CoworkerMain';
import { LoggedMain } from 'code/events/indexMain/LoggedMain';
import { ManageMain } from 'code/events/indexMain/ManageMain';
import { UserMain } from 'code/events/indexMain/UserMain';

import { CoworkersSidebar } from 'code/events/indexSidebar/CoworkersSidebar';
import { DefaultSidebar } from 'code/events/indexSidebar/DefaultSidebar';
import { EmployeesSidebar } from 'code/events/indexSidebar/EmployeesSidebar';

import { ColleagueAssigned } from 'code/events/indexOverlay/ColleagueAssigned';
import { ColleagueDeleted } from 'code/events/indexOverlay/ColleagueDeleted';
import { ColleagueResolved } from 'code/events/indexOverlay/ColleagueResolved';
import { CoworkerDeleted } from 'code/events/indexOverlay/CoworkerDeleted';
import { CoworkerResolved } from 'code/events/indexOverlay/CoworkerResolved';
import { DefaultOverlay } from 'code/events/indexOverlay/DefaultOverlay';
import { DeleteOverlay } from 'code/events/indexOverlay/DeleteOverlay';
import { LoggedAssigned } from 'code/events/indexOverlay/LoggedAssigned';
import { LoggedDeleted } from 'code/events/indexOverlay/LoggedDeleted';
import { LoggedPending } from 'code/events/indexOverlay/LoggedPending';
import { LoggedResolved } from 'code/events/indexOverlay/LoggedResolved';
import { LogOverlay } from 'code/events/indexOverlay/LogOverlay';
import { ManageDeleted } from 'code/events/indexOverlay/ManageDeleted';
import { ManagePending } from 'code/events/indexOverlay/ManagePending';
import { ResolveOverlay } from 'code/events/indexOverlay/ResolveOverlay';
import { UserAssigned } from 'code/events/indexOverlay/UserAssigned';
import { UserDeleted } from 'code/events/indexOverlay/UserDeleted';
import { UserResolved } from 'code/events/indexOverlay/UserResolved';

import { DefaultData } from 'code/events/indexData/defaultData';

//--|►| Get Event |◄|--//
export namespace GetEvent {
  export function loadBody(pageName: String | 'default-body') {
    $('#user-form').css('display', 'flex');

    //--► Body <body> ◄--//
    switch (pageName) {
      case 'default-body':
        new DefaultBody.initiateEvents();
        break;
    }
  }
  export function loadHeader(pageName: String | 'default-header') {
    //--► Header <header> ◄--//
    switch (pageName) {
      case 'default-header':
        new DefaultHeader.initiateEvents();
        break;
    }
  }
  export function loadMain(pageName: String | 'logged-main' | 'manage-main' | 'user-main' | 'colleague-main' | 'coworker-main') {
    //--► Main <main> ◄--//
    switch (pageName) {
      case 'logged-main':
        new LoggedMain.initiateEvents();
        break;
      case 'manage-main':
        new ManageMain.initiateEvents();
        break;
      case 'user-main':
        new UserMain.initiateEvents();
        break;
      case 'colleague-main':
        new ColleagueMain.initiateEvents();
        break;
      case 'coworker-main':
        new CoworkerMain.initiateEvents();
        break;
    }
  }
  export function loadSidebar(pageName: String | 'coworkers-sidebar' | 'default-sidebar' | 'employees-sidebar') {
    //--► Sidebar <aside> ◄--//
    switch (pageName) {
      case 'coworkers-sidebar':
        new CoworkersSidebar.initiateEvents();
        break;
      case 'default-sidebar':
        new DefaultSidebar.initiateEvents();
        break;
      case 'employees-sidebar':
        new EmployeesSidebar.initiateEvents();
        break;
    }
  }
  export function loadOverlay(
    pageName:
      | String
      | 'colleague-assigned'
      | 'colleague-deleted'
      | 'colleague-resolved'
      | 'coworker-deleted'
      | 'coworker-resolved'
      | 'default-overlay'
      | 'delete-overlay'
      | 'log-overlay'
      | 'logged-assigned'
      | 'logged-deleted'
      | 'logged-pending'
      | 'logged-resolved'
      | 'manage-deleted'
      | 'manage-pending'
      | 'resolve-overlay'
      | 'user-assigned'
      | 'user-deleted'
      | 'user-resolved'
  ) {
    //--► Overlay <section> ◄--//
    switch (pageName) {
      case 'colleague-assigned':
        new ColleagueAssigned.initiateEvents();
        break;
      case 'colleague-deleted':
        new ColleagueDeleted.initiateEvents();
        break;
      case 'colleague-resolved':
        new ColleagueResolved.initiateEvents();
        break;
      case 'coworker-deleted':
        new CoworkerDeleted.initiateEvents();
        break;
      case 'coworker-resolved':
        new CoworkerResolved.initiateEvents();
        break;
      case 'default-overlay':
        new DefaultOverlay.initiateEvents();
        break;
      case 'delete-overlay':
        new DeleteOverlay.initiateEvents();
        break;
      case 'log-overlay':
        new LogOverlay.initiateEvents();
        break;
      case 'logged-assigned':
        new LoggedAssigned.initiateEvents();
        break;
      case 'logged-deleted':
        new LoggedDeleted.initiateEvents();
        break;
      case 'logged-pending':
        new LoggedPending.initiateEvents();
        break;
      case 'logged-resolved':
        new LoggedResolved.initiateEvents();
        break;
      case 'manage-deleted':
        new ManageDeleted.initiateEvents();
        break;
      case 'manage-pending':
        new ManagePending.initiateEvents();
        break;
      case 'resolve-overlay':
        new ResolveOverlay.initiateEvents();
        break;
      case 'user-assigned':
        new UserAssigned.initiateEvents();
        break;
      case 'user-deleted':
        new UserDeleted.initiateEvents();
        break;
      case 'user-resolved':
        new UserResolved.initiateEvents();
        break;
    }
  }
  export function loadData(pageName: String | 'default-data') {
    //--► Data <iframe> ◄--//
    switch (pageName) {
      case 'default-data':
        new DefaultData.initiateEvents();
    }
  }

  export class forPage {
    constructor(pageName: String, pagePath: String) {
      const folderName = pagePath.split('/')[1];
      const segment = folderName.split('-')[1];

      switch (segment) {
        case 'body':
          $.get(`${pagePath}/${pageName}.html`, function (data) {
            let bodyBlock: HTMLBodyElement = document.querySelector('#index-body');

            bodyBlock.className = '';
            bodyBlock.className = `${pageName}`;
            bodyBlock.style.display = 'grid';

            $(bodyBlock).html(data);
            GetEvent.loadBody(pageName);
          });
          break;
        case 'header':
          $.get(`${pagePath}/${pageName}.html`, function (data) {
            let headerBlock: HTMLElement = document.querySelector('#index-header');
            let overlayBlock: HTMLElement = document.querySelector('#index-overlay');

            headerBlock.className = '';
            headerBlock.className = `${pageName}`;

            $(headerBlock).html(data);
            GetEvent.loadHeader(pageName);
          });
          break;
        case 'main':
          $.get(`${pagePath}/${pageName}.html`, function (data) {
            let mainBlock: HTMLElement = document.querySelector('#index-main');
            let overlayBlock: HTMLElement = document.querySelector('#index-overlay');

            mainBlock.className = '';
            mainBlock.className = `${pageName}`;

            $(mainBlock).html(data);
            GetEvent.loadMain(pageName);
          });
          break;
        case 'sidebar':
          $.get(`${pagePath}/${pageName}.html`, function (data) {
            let sidebarBlock: HTMLElement = document.querySelector('#index-sidebar');
            let overlayBlock: HTMLElement = document.querySelector('#index-overlay');

            sidebarBlock.className = '';
            sidebarBlock.className = `${pageName}`;

            $(sidebarBlock).html(data);
            GetEvent.loadSidebar(pageName);
          });
          break;
        case 'overlay':
          $.get(`${pagePath}/${pageName}.html`, function (data) {
            let overlayBlock: HTMLElement = document.querySelector('#index-overlay');

            overlayBlock.className = '';
            overlayBlock.className = `${pageName}`;

            $(overlayBlock).html(data);
            GetEvent.loadOverlay(pageName);
          });
          break;
        case 'data':
          $.get(`${pagePath}/${pageName}.html`, function (data) {
            let dataBlock: HTMLElement = document.querySelector('#index-data');

            dataBlock.className = '';
            dataBlock.className = `${pageName}`;

            $(dataBlock).html(data);
            GetEvent.loadData(pageName);
          });
      }
    }
  }

  function get(index: number, data: String | 'first-name' | 'middle-name' | 'last-name' | 'department' | 'occupation' | 'role') {
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
}
