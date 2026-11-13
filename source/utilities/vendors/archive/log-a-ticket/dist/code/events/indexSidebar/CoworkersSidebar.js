define(["require", "exports", "code/tools/DataRead"], function (require, exports, DataRead_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CoworkersSidebar = void 0;
    var CoworkersSidebar;
    (function (CoworkersSidebar) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new DataRead_1.DataRead.forSidebar('coworkers-sidebar');
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var loggedButton = indexHeader.querySelector('#logged-tickets button');
                var manageButton = indexHeader.querySelector('#manage-tickets button');
                var indexMain = document.querySelector('#index-main');
                var indexSidebar = document.querySelector('#index-sidebar');
                var closeCoworkers = document.querySelector('#close-coworkers');
                var departmentSelect = document.querySelector('#department-form select');
                var indexOverlay = document.querySelector('#index-overlay');
                var indexData = document.querySelector('#index-data');
                $(closeCoworkers).on('click', function () {
                    indexSidebar.style.display = 'none';
                });
            }
            return initiateEvents;
        }());
        CoworkersSidebar.initiateEvents = initiateEvents;
    })(CoworkersSidebar = exports.CoworkersSidebar || (exports.CoworkersSidebar = {}));
});

//# sourceMappingURL=dist/code/events/indexSidebar/CoworkersSidebar.js.map
