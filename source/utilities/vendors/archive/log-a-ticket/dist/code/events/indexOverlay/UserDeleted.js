define(["require", "exports", "code/tools/DataRead", "code/tools/DataUpdate", "code/tools/GetColor"], function (require, exports, DataRead_1, DataUpdate_1, GetColor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserDeleted = void 0;
    var UserDeleted;
    (function (UserDeleted) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new DataRead_1.DataRead.forOverlay('user-deleted');
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var logButton = indexHeader.querySelector('#log-a-ticket button');
                var indexMain = document.querySelector('#index-main');
                indexMain.style.display = 'none';
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var closeOverlay = indexOverlay.querySelector('#close-overlay');
                var recycleButton = indexOverlay.querySelector('#recycle-ticket button');
                var dateDeleted = indexOverlay.querySelector('#deleted-date');
                var noteDeleted = indexOverlay.querySelector('#deleted-note');
                var assignedMark = indexOverlay.querySelector('.assigned-mark');
                var deletedMark = indexOverlay.querySelector('.deleted-mark');
                var indexData = document.querySelector('#index-data');
                $(recycleButton)
                    .on('click', function () {
                    new DataUpdate_1.DataUpdate.forButton('recycle');
                })
                    .on('mouseenter', function () {
                    recycleButton.style.color = "".concat(GetColor_1.GetColor.assignedDefault());
                    assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                    deletedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                    dateDeleted.className = 'disabled-text';
                    noteDeleted.className = 'disabled-text';
                    dateDeleted.style.display = 'none';
                    noteDeleted.style.display = 'none';
                    dateDeleted.textContent = "".concat(undefined);
                    noteDeleted.textContent = "".concat(undefined);
                })
                    .on('mouseleave', function () {
                    recycleButton.style.color = '';
                    assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                    deletedMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                    dateDeleted.className = '';
                    noteDeleted.className = '';
                    dateDeleted.style.display = 'flex';
                    noteDeleted.style.display = 'flex';
                    dateDeleted.textContent = "".concat(getTicket('date-deleted'));
                    noteDeleted.textContent = "".concat(getTicket('note-deleted'));
                });
                $(closeOverlay).on('click', function () {
                    closeContainer('index-overlay');
                });
                console.log('--UserDeleted.js Loaded');
            }
            return initiateEvents;
        }());
        UserDeleted.initiateEvents = initiateEvents;
        function closeContainer(block) {
            var indexMain = document.querySelector('#index-main');
            var ticketsMain = indexMain.querySelector('#tickets-container');
            var activeTicket = ticketsMain.querySelector('.active-ticket');
            var container = document.querySelector("#".concat(block));
            container.innerHTML = '';
            container.className = '';
            container.style.display = 'none';
            container.className = "default-".concat(block.split('-')[1]);
            activeTicket.className = activeTicket.classList[0];
            indexMain.style.display = 'grid';
        }
        function getTicket(info) {
            var activeTicket = document.querySelector('#index-main #tickets-container .active-ticket');
            switch (info) {
                case 'ticket-status':
                    var ticketStatus = activeTicket.children[3].children[0].innerHTML;
                    return ticketStatus;
                case 'ticket-rating':
                    var ticketRating = activeTicket.children[3].children[1].innerHTML;
                    return ticketRating;
                case 'subject-text':
                    var subjectText = activeTicket.children[3].children[2].innerHTML;
                    return subjectText;
                case 'description-text':
                    var descriptionText = activeTicket.children[3].children[3].innerHTML;
                    return descriptionText;
                case 'sender-name':
                    var senderName = activeTicket.children[3].children[4].innerHTML;
                    return senderName;
                case 'sender-department':
                    var senderDepartment = activeTicket.children[3].children[5].innerHTML;
                    return senderDepartment;
                case 'receiver-name':
                    var receiverName = activeTicket.children[3].children[6].innerHTML;
                    return receiverName;
                case 'receiver-department':
                    var receiverDepartment = activeTicket.children[3].children[7].innerHTML;
                    return receiverDepartment;
                case 'date-short':
                    var dateShort = activeTicket.children[3].children[8].innerHTML;
                    return dateShort;
                case 'date-pending':
                    var datePending = activeTicket.children[3].children[9].innerHTML;
                    return datePending;
                case 'date-assigned':
                    var dateAssigned = activeTicket.children[3].children[10].innerHTML;
                    return dateAssigned;
                case 'date-resolved':
                    var dateResolved = activeTicket.children[3].children[11].innerHTML;
                    return dateResolved;
                case 'note-resolved':
                    var noteResolved = activeTicket.children[3].children[12].innerHTML;
                    return noteResolved;
                case 'date-deleted':
                    var dateDeleted = activeTicket.children[3].children[13].innerHTML;
                    return dateDeleted;
                case 'note-deleted':
                    var noteDeleted = activeTicket.children[3].children[14].innerHTML;
                    return noteDeleted;
            }
        }
    })(UserDeleted = exports.UserDeleted || (exports.UserDeleted = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/UserDeleted.js.map
