define(["require", "exports", "code/tools/GetEvent", "code/tools/GetPath"], function (require, exports, GetEvent_1, GetPath_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultHeader = void 0;
    var DefaultHeader;
    (function (DefaultHeader) {
        var initiateEvents = (function () {
            function initiateEvents() {
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var loggedButton = indexHeader.querySelector('#logged-tickets button');
                var logButton = indexHeader.querySelector('#log-a-ticket button');
                var manageButton = indexHeader.querySelector('#manage-tickets button');
                var indexMain = document.querySelector('#index-main');
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
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var indexData = document.querySelector('#index-data');
                $(loggedButton).on('click', function () {
                    manageButton.className = '';
                    loggedButton.className = 'active-page';
                    new GetEvent_1.GetEvent.forPage('logged-main', GetPath_1.GetPath.forHTML('main'));
                    new GetEvent_1.GetEvent.forPage('coworkers-sidebar', GetPath_1.GetPath.forHTML('sidebar'));
                });
                $(logButton).on('click', function () {
                    logButton.className = 'active-page';
                    indexOverlay.style.display = 'grid';
                    new GetEvent_1.GetEvent.forPage('log-overlay', GetPath_1.GetPath.forHTML('overlay'));
                });
                $(manageButton).on('click', function () {
                    loggedButton.className = '';
                    manageButton.className = 'active-page';
                    new GetEvent_1.GetEvent.forPage('manage-main', GetPath_1.GetPath.forHTML('main'));
                    new GetEvent_1.GetEvent.forPage('employees-sidebar', GetPath_1.GetPath.forHTML('sidebar'));
                });
            }
            return initiateEvents;
        }());
        DefaultHeader.initiateEvents = initiateEvents;
    })(DefaultHeader = exports.DefaultHeader || (exports.DefaultHeader = {}));
});

//# sourceMappingURL=dist/code/events/indexHeader/DefaultHeader.js.map
