define(["require", "exports", "code/tools/DataRead", "code/tools/GetColor", "code/tools/GetEvent", "code/tools/GetPath", "code/tools/UseDatefy"], function (require, exports, DataRead_1, GetColor_1, GetEvent_1, GetPath_1, UseDatefy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserAssigned = void 0;
    var UserAssigned;
    (function (UserAssigned) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new DataRead_1.DataRead.forOverlay('user-assigned');
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var logButton = indexHeader.querySelector('#log-a-ticket button');
                var indexMain = document.querySelector('#index-main');
                indexMain.style.display = 'none';
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var closeOverlay = indexOverlay.querySelector('#close-overlay');
                var deleteButton = indexOverlay.querySelector('#delete-ticket button');
                var resolveButton = indexOverlay.querySelector('#resolve-ticket button');
                var datePending = indexOverlay.querySelector('#pending-date');
                var dateAssigned = indexOverlay.querySelector('#assigned-date');
                var dateResolved = indexOverlay.querySelector('#resolved-date');
                var dateDeleted = indexOverlay.querySelector('#deleted-date');
                var assignedMark = indexOverlay.querySelector('.assigned-mark');
                var resolvedMark = indexOverlay.querySelector('.resolved-mark');
                var deletedMark = indexOverlay.querySelector('.deleted-mark');
                var indexData = document.querySelector('#index-data');
                $(resolveButton)
                    .on('click', function () {
                    if (resolveButton.className !== 'disabled-button') {
                        new GetEvent_1.GetEvent.forPage('resolve-overlay', GetPath_1.GetPath.forHTML('overlay'));
                    }
                })
                    .on('mouseenter', function () {
                    resolveButton.style.color = "".concat(GetColor_1.GetColor.resolvedDefault());
                    assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                    resolvedMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                    dateResolved.style.display = 'flex';
                    dateResolved.className = '';
                    dateResolved.textContent = "".concat(UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY'));
                })
                    .on('mouseleave', function () {
                    resolveButton.style.color = '';
                    assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                    resolvedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                    dateResolved.className = 'disabled-text';
                    dateResolved.textContent = "".concat(undefined);
                    dateResolved.style.display = 'none';
                });
                $(deleteButton)
                    .on('click', function () {
                    new GetEvent_1.GetEvent.forPage('delete-overlay', GetPath_1.GetPath.forHTML('overlay'));
                })
                    .on('mouseenter', function () {
                    assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                    deleteButton.parentElement.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                    dateDeleted.className = '';
                    dateDeleted.textContent = "".concat(UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY'));
                    dateDeleted.style.display = 'flex';
                })
                    .on('mouseleave', function () {
                    assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                    deleteButton.parentElement.style.background = '';
                    dateDeleted.style.display = 'none';
                    dateDeleted.className = 'disabled-text';
                    dateDeleted.textContent = "".concat(undefined);
                });
                $(closeOverlay).on('click', function () {
                    closeContainer('index-overlay');
                });
                console.log('--UserAssigned.js Loaded');
            }
            return initiateEvents;
        }());
        UserAssigned.initiateEvents = initiateEvents;
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
    })(UserAssigned = exports.UserAssigned || (exports.UserAssigned = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/UserAssigned.js.map
