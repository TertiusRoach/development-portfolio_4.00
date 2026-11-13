define(["require", "exports", "code/tools/DataUpdate", "code/tools/GetColor"], function (require, exports, DataUpdate_1, GetColor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DeleteOverlay = void 0;
    var DeleteOverlay;
    (function (DeleteOverlay) {
        var initiateEvents = (function () {
            function initiateEvents() {
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var indexMain = document.querySelector('#index-main');
                var ticketsContainer = indexMain.querySelector('#tickets-container');
                var activeTicket = ticketsContainer.querySelector('.active-ticket');
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var closeOverlay = indexOverlay.querySelector('#close-overlay');
                var deleteButton = indexOverlay.querySelector('#delete-ticket button');
                var ticketNote = indexOverlay.querySelector('section #ticket-note');
                var indexData = document.querySelector('#index-data');
                function highlightButton() {
                    deleteButton.className = '';
                    ticketNote.style.border = '';
                }
                $(deleteButton).on('click', function () {
                    if ($(ticketNote).val() === '') {
                        ticketNote.style.border = "2px solid ".concat(GetColor_1.GetColor.deletedDefault());
                    }
                    else if (deleteButton.className !== 'disabled-button') {
                        new DataUpdate_1.DataUpdate.forButton('delete');
                    }
                });
                $(ticketNote)
                    .on('keyup', function () {
                    if ($(ticketNote).val() === '') {
                        deleteButton.className = 'disabled-button';
                    }
                    else {
                        highlightButton();
                    }
                })
                    .on('keydown', function () {
                    if ($(ticketNote).val() === '') {
                        deleteButton.className = 'disabled-button';
                    }
                    else {
                        highlightButton();
                    }
                });
                $(closeOverlay).on('click', function () {
                    closeContainer('index-overlay');
                });
                console.log('--DeleteOverlay.js Loaded');
            }
            return initiateEvents;
        }());
        DeleteOverlay.initiateEvents = initiateEvents;
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
    })(DeleteOverlay = exports.DeleteOverlay || (exports.DeleteOverlay = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/DeleteOverlay.js.map
