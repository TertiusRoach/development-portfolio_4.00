define(["require", "exports", "code/tools/GetArray", "code/tools/GetEvent", "code/tools/GetPath"], function (require, exports, GetArray_1, GetEvent_1, GetPath_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultOverlay = void 0;
    var DefaultOverlay;
    (function (DefaultOverlay) {
        var initiateEvents = (function () {
            function initiateEvents() {
                var indexBody = document.querySelector('#index-body');
                var preloader = indexBody.querySelector('#preloader');
                var userForm = indexBody.querySelector('#user-form select');
                var indexHeader = document.querySelector('#index-header');
                var indexMain = document.querySelector('#index-main');
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var defaultOverlay = document.querySelector('.default-overlay');
                var managerButton = document.querySelector('#manager-tickets button');
                var employeeButton = document.querySelector('#employee-tickets button');
                var indexData = document.querySelector('#index-data');
                function buildEmployees(userName) {
                    userForm.innerHTML = '';
                    var employeesTotal = GetArray_1.GetArray.employees().length;
                    for (var i = 0; i < employeesTotal; i++) {
                        var employeeName = "".concat(GetArray_1.GetArray.employees()[i].firstName, " ").concat(GetArray_1.GetArray.employees()[i].lastName);
                        var employeeValue = "".concat(GetArray_1.GetArray.employees()[i].firstName.toLowerCase(), "-").concat(GetArray_1.GetArray.employees()[i].lastName.toLowerCase());
                        if (employeeName === userName) {
                            $('#user-form select').append("<option value=\"".concat(employeeValue, "\" selected>").concat(userName, "</option>"));
                        }
                        else if (employeeName !== userName) {
                            $('#user-form select').append("<option value=\"".concat(employeeValue, "\">").concat(employeeName, "</option>"));
                        }
                    }
                }
                function closeContainer() {
                    defaultOverlay.innerHTML = '';
                    userForm.style.display = 'flex';
                    defaultOverlay.style.display = 'none';
                }
                function highlightButton(button) {
                    var managerButton = defaultOverlay.parentElement.children[2].children[0].children[0];
                    var employeeButton = defaultOverlay.parentElement.children[2].children[2].children[0];
                    switch (button) {
                        case 'manager-button':
                            managerButton.className = 'active-page';
                            employeeButton.className = '';
                            break;
                        case 'employee-button':
                            managerButton.className = '';
                            employeeButton.className = 'active-page';
                            break;
                    }
                }
                function selectUser(role) {
                    var managersArray = [];
                    var employeesArray = [];
                    for (var i = 0; i < GetArray_1.GetArray.employees().length; i++) {
                        switch (GetArray_1.GetArray.employees()[i].role) {
                            case 'Manager':
                                managersArray.push("".concat(GetArray_1.GetArray.employees()[i].firstName, " ").concat(GetArray_1.GetArray.employees()[i].lastName));
                                break;
                            case 'Employee':
                                employeesArray.push("".concat(GetArray_1.GetArray.employees()[i].firstName, " ").concat(GetArray_1.GetArray.employees()[i].lastName));
                                break;
                        }
                    }
                    var userIndex;
                    var userSelected;
                    switch (role) {
                        case 'Manager':
                            userIndex = Math.floor(Math.random() * managersArray.length);
                            userSelected = managersArray[userIndex];
                            break;
                        case 'Employee':
                            userIndex = Math.floor(Math.random() * employeesArray.length);
                            userSelected = employeesArray[userIndex];
                            break;
                    }
                    return userSelected;
                }
                $(managerButton)
                    .on('mouseenter', function () {
                    new GetEvent_1.GetEvent.forPage('logged-main', GetPath_1.GetPath.forHTML('main'));
                    new GetEvent_1.GetEvent.forPage('coworkers-sidebar', GetPath_1.GetPath.forHTML('sidebar'));
                    buildEmployees(selectUser('Manager'));
                    highlightButton('manager-button');
                })
                    .on('click', function () {
                    indexHeader.style.display = 'grid';
                    indexMain.style.display = 'grid';
                    indexSidebar.style.display = 'none';
                    closeContainer();
                });
                $(employeeButton)
                    .on('mouseenter', function () {
                    new GetEvent_1.GetEvent.forPage('manage-main', GetPath_1.GetPath.forHTML('main'));
                    new GetEvent_1.GetEvent.forPage('employees-sidebar', GetPath_1.GetPath.forHTML('sidebar'));
                    buildEmployees(selectUser('Employee'));
                    highlightButton('employee-button');
                })
                    .on('click', function () {
                    indexHeader.style.display = 'grid';
                    indexMain.style.display = 'grid';
                    indexSidebar.style.display = 'none';
                    closeContainer();
                });
                indexOverlay.style.display = 'grid';
                userForm.style.display = 'none';
                preloader.style.display = 'none';
            }
            return initiateEvents;
        }());
        DefaultOverlay.initiateEvents = initiateEvents;
    })(DefaultOverlay = exports.DefaultOverlay || (exports.DefaultOverlay = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/DefaultOverlay.js.map
