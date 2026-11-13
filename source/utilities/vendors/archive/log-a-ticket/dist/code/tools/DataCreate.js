define(["require", "exports", "code/tools/GetArray", "code/tools/UseValufy"], function (require, exports, GetArray_1, UseValufy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DataCreate = void 0;
    var DataCreate;
    (function (DataCreate) {
        var forBlock = (function () {
            function forBlock(container) {
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var indexMain = document.querySelector('#index-main');
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var indexData = document.querySelector('#index-data');
                var departmentsContainer = document.querySelector('#departments-data');
                var employeesContainer = document.querySelector('#employees-data');
                var ticketsContainer = document.querySelector('#tickets-data');
                switch (container) {
                    case 'departments':
                        departmentsContainer.innerHTML = '';
                        var activeDepartment = userDepartment();
                        var departmentsTotal = GetArray_1.GetArray.departments().length;
                        for (var i = 0; i < departmentsTotal; i++) {
                            var GetDepartment = GetArray_1.GetArray.departments()[i];
                            var departmentName = GetDepartment.department;
                            var employeesTotal_1 = GetArray_1.GetArray.departments()[i].employeesTotal;
                            $(departmentsContainer).append("<article id=\"".concat(departmentName.toLowerCase(), "\">\n                                            </article>"));
                        }
                        break;
                    case 'employees':
                        employeesContainer.innerHTML = '';
                        var employeesTotal = GetArray_1.GetArray.employees().length;
                        for (var i = 0; i < employeesTotal; i++) {
                            var GetEmployees = GetArray_1.GetArray.employees()[i];
                            var firstName = GetEmployees.firstName;
                            var middleName = GetEmployees.middleName;
                            var lastName = GetEmployees.lastName;
                            var department = GetEmployees.department;
                            var occupation = GetEmployees.occupation;
                            var role = GetEmployees.role;
                            var email = GetEmployees.email;
                            var phone = GetEmployees.phone;
                            var nameDefault = function (name) {
                                switch (name) {
                                    case undefined:
                                        return 'undefined';
                                    default:
                                        return name;
                                }
                            };
                            $('#employees-data').append("<article\n              id=\"".concat(firstName.toLowerCase() +
                                '-' +
                                nameDefault(middleName).toLowerCase() +
                                '-' +
                                lastName.toLowerCase() +
                                '-' +
                                UseValufy_1.UseValufy.forString("".concat(department)) +
                                '-' +
                                UseValufy_1.UseValufy.forString("".concat(occupation)) +
                                '-' +
                                role.toLowerCase(), "\">\n                <p class=\"first-name\">").concat(firstName, "</p>\n                <p class=\"middle-name\">").concat(middleName, "</p>\n                <p class=\"last-name\">").concat(lastName, "</p>\n                <p class=\"department\">").concat(department, "</p>\n                <p class=\"occupation\">").concat(occupation, "</p>\n                <p class=\"role\">").concat(role, "</p>\n                <p class=\"email\">").concat(email, "</p>\n                <p class=\"phone\">").concat(phone, "</p>\n              </article>"));
                        }
                        break;
                    case 'tickets':
                        ticketsContainer.innerHTML = '';
                        var ticketsTotal = GetArray_1.GetArray.tickets().length;
                        var _loop_1 = function (i) {
                            var GetTickets = GetArray_1.GetArray.tickets()[i];
                            var ticketStatus = GetTickets.ticketStatus;
                            var ticketRating = GetTickets.ticketRating;
                            var subjectText = GetTickets.subjectText;
                            var descriptionText = GetTickets.descriptionText;
                            var senderName = GetTickets.senderName;
                            var senderDepartment = GetTickets.senderDepartment;
                            var receiverName = GetTickets.receiverName;
                            var receiverDepartment = GetTickets.receiverDepartment;
                            var dateShort = GetTickets.dateShort;
                            var datePending = GetTickets.datePending;
                            var dateAssigned = GetTickets.dateAssigned;
                            var dateResolved = GetTickets.dateResolved;
                            var noteResolved = GetTickets.noteResolved;
                            var dateDeleted = GetTickets.dateDeleted;
                            var noteDeleted = GetTickets.noteDeleted;
                            var receiverDefault = function () {
                                switch (receiverName) {
                                    case "".concat(undefined):
                                        return receiverDepartment;
                                    default:
                                        return receiverName;
                                }
                            };
                            $('#tickets-data').append("<article class=\"".concat(ticketStatus.toLowerCase(), "\">\n                <header>\n                  <p class=\"shortdate\">").concat(dateShort, "</p>\n                  <p class=\"subject\">").concat(subjectText, "</p>\n                  <p class=\"receiver\">").concat(receiverDefault(), "</p>\n                </header>                  \n                <footer>\n                  <p class=\"ticket-status\">").concat(ticketStatus, "</p>\n                  <p class=\"ticket-rating\">").concat(ticketRating, "</p>\n                  <p class=\"subject-text\">").concat(subjectText, "</p>\n                  <p class=\"description-text\">").concat(descriptionText, "</p>\n                  <p class=\"sender-name\">").concat(senderName, "</p>\n                  <p class=\"sender-department\">").concat(senderDepartment, "</p>\n                  <p class=\"receiver-name\">").concat(receiverName, "</p>\n                  <p class=\"receiver-department\">").concat(receiverDepartment, "</p>\n                  <p class=\"date-short\">").concat(dateShort, "</p>\n                  <p class=\"date-pending\">").concat(datePending, "</p>\n                  <p class=\"date-assigned\">").concat(dateAssigned, "</p>\n                  <p class=\"date-resolved\">").concat(dateResolved, "</p>\n                  <p class=\"note-resolved\">").concat(noteResolved, "</p>\n                  <p class=\"date-deleted\">").concat(dateDeleted, "</p>\n                  <p class=\"note-deleted\">").concat(noteDeleted, "</p>\n                </footer>\n              </article>"));
                        };
                        for (var i = 0; i < ticketsTotal; i++) {
                            _loop_1(i);
                        }
                        break;
                }
            }
            return forBlock;
        }());
        DataCreate.forBlock = forBlock;
        function findDepartment(userName) {
            var employeesData = document.querySelector('#employees-data');
            var employeesCollection = employeesData.getElementsByTagName('article');
            var employeesTotal = employeesData.getElementsByTagName('article').length;
            for (var i = 0; i < employeesTotal; i++) {
                var firstName = employeesCollection[i].children[0].textContent;
                var middleName = employeesCollection[i].children[1].textContent;
                var lastName = employeesCollection[i].children[2].textContent;
                var department = employeesCollection[i].children[3].textContent;
                var occupation = employeesCollection[i].children[4].textContent;
                var role = employeesCollection[i].children[5].textContent;
                var employeeName = "".concat(firstName, " ").concat(lastName);
                if (employeeName === userName) {
                    return department;
                }
            }
        }
        function findUser() {
            var indexBody = document.querySelector('#index-body');
            var userSelect = indexBody.querySelector('#user-form select');
            var userIndex = userSelect.selectedIndex;
            var userName = userSelect.children[userIndex].textContent;
            return "".concat(userName);
        }
        function userDepartment() {
            var employeesData = document.querySelector('#employees-data');
            var employeesCollection = employeesData.getElementsByTagName('article');
            var employeesTotal = employeesData.getElementsByTagName('article').length;
            var userSelect = document.querySelector('#user-form select');
            var userName = userSelect.selectedOptions[0].textContent;
            for (var i = 0; i < employeesTotal; i++) {
                var firstName = employeesCollection[i].children[0].textContent;
                var middleName = employeesCollection[i].children[1].textContent;
                var lastName = employeesCollection[i].children[2].textContent;
                var department = employeesCollection[i].children[3].textContent;
                var occupation = employeesCollection[i].children[4].textContent;
                var role = employeesCollection[i].children[5].textContent;
                var employeeName = "".concat(firstName, " ").concat(lastName);
                if (employeeName === userName) {
                    return department;
                }
            }
        }
    })(DataCreate = exports.DataCreate || (exports.DataCreate = {}));
});

//# sourceMappingURL=dist/code/tools/DataCreate.js.map
