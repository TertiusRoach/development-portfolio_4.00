define(["require", "exports", "code/events/indexBody/defaultBody", "code/events/indexHeader/DefaultHeader", "code/events/indexMain/ColleagueMain", "code/events/indexMain/CoworkerMain", "code/events/indexMain/LoggedMain", "code/events/indexMain/ManageMain", "code/events/indexMain/UserMain", "code/events/indexSidebar/CoworkersSidebar", "code/events/indexSidebar/DefaultSidebar", "code/events/indexSidebar/EmployeesSidebar", "code/events/indexOverlay/ColleagueAssigned", "code/events/indexOverlay/ColleagueDeleted", "code/events/indexOverlay/ColleagueResolved", "code/events/indexOverlay/CoworkerDeleted", "code/events/indexOverlay/CoworkerResolved", "code/events/indexOverlay/DefaultOverlay", "code/events/indexOverlay/DeleteOverlay", "code/events/indexOverlay/LoggedAssigned", "code/events/indexOverlay/LoggedDeleted", "code/events/indexOverlay/LoggedPending", "code/events/indexOverlay/LoggedResolved", "code/events/indexOverlay/LogOverlay", "code/events/indexOverlay/ManageDeleted", "code/events/indexOverlay/ManagePending", "code/events/indexOverlay/ResolveOverlay", "code/events/indexOverlay/UserAssigned", "code/events/indexOverlay/UserDeleted", "code/events/indexOverlay/UserResolved", "code/events/indexData/defaultData"], function (require, exports, defaultBody_1, DefaultHeader_1, ColleagueMain_1, CoworkerMain_1, LoggedMain_1, ManageMain_1, UserMain_1, CoworkersSidebar_1, DefaultSidebar_1, EmployeesSidebar_1, ColleagueAssigned_1, ColleagueDeleted_1, ColleagueResolved_1, CoworkerDeleted_1, CoworkerResolved_1, DefaultOverlay_1, DeleteOverlay_1, LoggedAssigned_1, LoggedDeleted_1, LoggedPending_1, LoggedResolved_1, LogOverlay_1, ManageDeleted_1, ManagePending_1, ResolveOverlay_1, UserAssigned_1, UserDeleted_1, UserResolved_1, defaultData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetEvent = void 0;
    var GetEvent;
    (function (GetEvent) {
        function loadBody(pageName) {
            $('#user-form').css('display', 'flex');
            switch (pageName) {
                case 'default-body':
                    new defaultBody_1.DefaultBody.initiateEvents();
                    break;
            }
        }
        GetEvent.loadBody = loadBody;
        function loadHeader(pageName) {
            switch (pageName) {
                case 'default-header':
                    new DefaultHeader_1.DefaultHeader.initiateEvents();
                    break;
            }
        }
        GetEvent.loadHeader = loadHeader;
        function loadMain(pageName) {
            switch (pageName) {
                case 'logged-main':
                    new LoggedMain_1.LoggedMain.initiateEvents();
                    break;
                case 'manage-main':
                    new ManageMain_1.ManageMain.initiateEvents();
                    break;
                case 'user-main':
                    new UserMain_1.UserMain.initiateEvents();
                    break;
                case 'colleague-main':
                    new ColleagueMain_1.ColleagueMain.initiateEvents();
                    break;
                case 'coworker-main':
                    new CoworkerMain_1.CoworkerMain.initiateEvents();
                    break;
            }
        }
        GetEvent.loadMain = loadMain;
        function loadSidebar(pageName) {
            switch (pageName) {
                case 'coworkers-sidebar':
                    new CoworkersSidebar_1.CoworkersSidebar.initiateEvents();
                    break;
                case 'default-sidebar':
                    new DefaultSidebar_1.DefaultSidebar.initiateEvents();
                    break;
                case 'employees-sidebar':
                    new EmployeesSidebar_1.EmployeesSidebar.initiateEvents();
                    break;
            }
        }
        GetEvent.loadSidebar = loadSidebar;
        function loadOverlay(pageName) {
            switch (pageName) {
                case 'colleague-assigned':
                    new ColleagueAssigned_1.ColleagueAssigned.initiateEvents();
                    break;
                case 'colleague-deleted':
                    new ColleagueDeleted_1.ColleagueDeleted.initiateEvents();
                    break;
                case 'colleague-resolved':
                    new ColleagueResolved_1.ColleagueResolved.initiateEvents();
                    break;
                case 'coworker-deleted':
                    new CoworkerDeleted_1.CoworkerDeleted.initiateEvents();
                    break;
                case 'coworker-resolved':
                    new CoworkerResolved_1.CoworkerResolved.initiateEvents();
                    break;
                case 'default-overlay':
                    new DefaultOverlay_1.DefaultOverlay.initiateEvents();
                    break;
                case 'delete-overlay':
                    new DeleteOverlay_1.DeleteOverlay.initiateEvents();
                    break;
                case 'log-overlay':
                    new LogOverlay_1.LogOverlay.initiateEvents();
                    break;
                case 'logged-assigned':
                    new LoggedAssigned_1.LoggedAssigned.initiateEvents();
                    break;
                case 'logged-deleted':
                    new LoggedDeleted_1.LoggedDeleted.initiateEvents();
                    break;
                case 'logged-pending':
                    new LoggedPending_1.LoggedPending.initiateEvents();
                    break;
                case 'logged-resolved':
                    new LoggedResolved_1.LoggedResolved.initiateEvents();
                    break;
                case 'manage-deleted':
                    new ManageDeleted_1.ManageDeleted.initiateEvents();
                    break;
                case 'manage-pending':
                    new ManagePending_1.ManagePending.initiateEvents();
                    break;
                case 'resolve-overlay':
                    new ResolveOverlay_1.ResolveOverlay.initiateEvents();
                    break;
                case 'user-assigned':
                    new UserAssigned_1.UserAssigned.initiateEvents();
                    break;
                case 'user-deleted':
                    new UserDeleted_1.UserDeleted.initiateEvents();
                    break;
                case 'user-resolved':
                    new UserResolved_1.UserResolved.initiateEvents();
                    break;
            }
        }
        GetEvent.loadOverlay = loadOverlay;
        function loadData(pageName) {
            switch (pageName) {
                case 'default-data':
                    new defaultData_1.DefaultData.initiateEvents();
            }
        }
        GetEvent.loadData = loadData;
        var forPage = (function () {
            function forPage(pageName, pagePath) {
                var folderName = pagePath.split('/')[1];
                var segment = folderName.split('-')[1];
                switch (segment) {
                    case 'body':
                        $.get("".concat(pagePath, "/").concat(pageName, ".html"), function (data) {
                            var bodyBlock = document.querySelector('#index-body');
                            bodyBlock.className = '';
                            bodyBlock.className = "".concat(pageName);
                            bodyBlock.style.display = 'grid';
                            $(bodyBlock).html(data);
                            GetEvent.loadBody(pageName);
                        });
                        break;
                    case 'header':
                        $.get("".concat(pagePath, "/").concat(pageName, ".html"), function (data) {
                            var headerBlock = document.querySelector('#index-header');
                            var overlayBlock = document.querySelector('#index-overlay');
                            headerBlock.className = '';
                            headerBlock.className = "".concat(pageName);
                            $(headerBlock).html(data);
                            GetEvent.loadHeader(pageName);
                        });
                        break;
                    case 'main':
                        $.get("".concat(pagePath, "/").concat(pageName, ".html"), function (data) {
                            var mainBlock = document.querySelector('#index-main');
                            var overlayBlock = document.querySelector('#index-overlay');
                            mainBlock.className = '';
                            mainBlock.className = "".concat(pageName);
                            $(mainBlock).html(data);
                            GetEvent.loadMain(pageName);
                        });
                        break;
                    case 'sidebar':
                        $.get("".concat(pagePath, "/").concat(pageName, ".html"), function (data) {
                            var sidebarBlock = document.querySelector('#index-sidebar');
                            var overlayBlock = document.querySelector('#index-overlay');
                            sidebarBlock.className = '';
                            sidebarBlock.className = "".concat(pageName);
                            $(sidebarBlock).html(data);
                            GetEvent.loadSidebar(pageName);
                        });
                        break;
                    case 'overlay':
                        $.get("".concat(pagePath, "/").concat(pageName, ".html"), function (data) {
                            var overlayBlock = document.querySelector('#index-overlay');
                            overlayBlock.className = '';
                            overlayBlock.className = "".concat(pageName);
                            $(overlayBlock).html(data);
                            GetEvent.loadOverlay(pageName);
                        });
                        break;
                    case 'data':
                        $.get("".concat(pagePath, "/").concat(pageName, ".html"), function (data) {
                            var dataBlock = document.querySelector('#index-data');
                            dataBlock.className = '';
                            dataBlock.className = "".concat(pageName);
                            $(dataBlock).html(data);
                            GetEvent.loadData(pageName);
                        });
                }
            }
            return forPage;
        }());
        GetEvent.forPage = forPage;
        function get(index, data) {
            var employeesData = document.querySelector('#employees-data');
            var employeesCollection = employeesData.getElementsByTagName('article');
            var employeesTotal = employeesData.getElementsByTagName('article').length;
            var firstName = employeesCollection[index].children[0].textContent;
            var middleName = employeesCollection[index].children[1].textContent;
            var lastName = employeesCollection[index].children[2].textContent;
            var department = employeesCollection[index].children[3].textContent;
            var occupation = employeesCollection[index].children[4].textContent;
            var role = employeesCollection[index].children[5].textContent;
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
    })(GetEvent = exports.GetEvent || (exports.GetEvent = {}));
});

//# sourceMappingURL=dist/code/tools/GetEvent.js.map
