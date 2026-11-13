define(["require", "exports", "code/tools/DataRead", "code/tools/GetEvent", "code/tools/GetPath"], function (require, exports, DataRead_1, GetEvent_1, GetPath_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EmployeesSidebar = void 0;
    var EmployeesSidebar;
    (function (EmployeesSidebar) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new DataRead_1.DataRead.forSidebar('employees-sidebar');
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var loggedButton = indexHeader.querySelector('#logged-tickets button');
                var manageButton = indexHeader.querySelector('#manage-tickets button');
                var indexMain = document.querySelector('#index-main');
                var indexSidebar = document.querySelector('#index-sidebar');
                var closeEmployees = indexSidebar.querySelector('#close-employees');
                var activeColleague = indexSidebar.querySelector('.active-colleague');
                var userButton = indexSidebar.querySelector('#view-employees header span');
                var employeeHeader = indexSidebar.querySelector('#view-employees header');
                var employeeFooter = indexSidebar.querySelector('#view-employees footer');
                var employeeButtons = employeeFooter.getElementsByTagName('span');
                var indexOverlay = document.querySelector('#index-overlay');
                var indexData = document.querySelector('#index-data');
                $(employeeHeader).on('click', function () {
                    indexSidebar.style.display = 'none';
                    new GetEvent_1.GetEvent.forPage('user-main', GetPath_1.GetPath.forHTML('main'));
                });
                $(employeeButtons).on('click', function () {
                    manageButton.className = '';
                    loggedButton.className = '';
                    indexSidebar.style.display = 'none';
                    new GetEvent_1.GetEvent.forPage('colleague-main', GetPath_1.GetPath.forHTML('main'));
                });
                $(closeEmployees).on('click', function () {
                    indexSidebar.style.display = 'none';
                });
            }
            return initiateEvents;
        }());
        EmployeesSidebar.initiateEvents = initiateEvents;
    })(EmployeesSidebar = exports.EmployeesSidebar || (exports.EmployeesSidebar = {}));
});

//# sourceMappingURL=dist/code/events/indexSidebar/EmployeesSidebar.js.map
