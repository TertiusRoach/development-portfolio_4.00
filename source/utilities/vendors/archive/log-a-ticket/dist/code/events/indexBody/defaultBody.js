define(["require", "exports", "code/tools/GetEvent", "code/tools/GetPath"], function (require, exports, GetEvent_1, GetPath_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultBody = void 0;
    var DefaultBody;
    (function (DefaultBody) {
        var initiateEvents = (function () {
            function initiateEvents() {
                var indexBody = document.querySelector('#index-body');
                var userSelect = document.querySelector('#user-form select');
                var indexHeader = document.querySelector('#index-header');
                var indexMain = document.querySelector('#index-main');
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var defaultOverlay = document.querySelector('.default-overlay');
                var indexData = document.querySelector('#index-data');
                function findRole(userName) {
                    var employeesData = document.querySelector('.default-data #employees-data');
                    var employeesCollection = employeesData.getElementsByTagName('article');
                    var employeesTotal = employeesData.getElementsByTagName('article').length;
                    for (var i = 0; i < employeesTotal; i++) {
                        var firstName = employeesCollection[i].children[0].textContent;
                        var middleName = employeesCollection[i].children[1].textContent;
                        var lastName = employeesCollection[i].children[2].textContent;
                        var department = employeesCollection[i].children[3].textContent;
                        var occupation = employeesCollection[i].children[4].textContent;
                        var role = employeesCollection[i].children[5].textContent;
                        var email = employeesCollection[i].children[6].textContent;
                        var phone = employeesCollection[i].children[7].textContent;
                        var employeeName = "".concat(firstName, " ").concat(lastName);
                        if (employeeName === userName) {
                            return role.toLowerCase();
                        }
                    }
                }
                function refreshMain(role) {
                    var managerButton = defaultOverlay.parentElement.children[2].children[0].children[0];
                    var employeeButton = defaultOverlay.parentElement.children[2].children[2].children[0];
                    switch (role) {
                        case 'manager':
                            employeeButton.className = '';
                            managerButton.className = 'active-page';
                            new GetEvent_1.GetEvent.forPage('logged-main', GetPath_1.GetPath.forHTML('main'));
                            new GetEvent_1.GetEvent.forPage('coworkers-sidebar', GetPath_1.GetPath.forHTML('sidebar'));
                            break;
                        case 'employee':
                            managerButton.className = '';
                            employeeButton.className = 'active-page';
                            new GetEvent_1.GetEvent.forPage('manage-main', GetPath_1.GetPath.forHTML('main'));
                            new GetEvent_1.GetEvent.forPage('employees-sidebar', GetPath_1.GetPath.forHTML('sidebar'));
                            break;
                    }
                }
                new GetEvent_1.GetEvent.forPage('default-header', GetPath_1.GetPath.forHTML('header'));
                new GetEvent_1.GetEvent.forPage('default-overlay', GetPath_1.GetPath.forHTML('overlay'));
                new GetEvent_1.GetEvent.forPage('default-data', GetPath_1.GetPath.forHTML('data'));
                $(userSelect).on('change', function () {
                    indexSidebar.style.display = 'none';
                    var userName = userSelect.selectedOptions[0].textContent;
                    refreshMain(findRole(userName));
                });
            }
            return initiateEvents;
        }());
        DefaultBody.initiateEvents = initiateEvents;
    })(DefaultBody = exports.DefaultBody || (exports.DefaultBody = {}));
});

//# sourceMappingURL=dist/code/events/indexBody/defaultBody.js.map
