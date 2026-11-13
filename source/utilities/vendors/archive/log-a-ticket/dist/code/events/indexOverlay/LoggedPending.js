define(["require", "exports", "code/tools/DataRead", "code/tools/DataUpdate", "code/tools/GetColor", "code/tools/GetEvent", "code/tools/GetPath", "code/tools/UseCapify", "code/tools/UseDatefy"], function (require, exports, DataRead_1, DataUpdate_1, GetColor_1, GetEvent_1, GetPath_1, UseCapify_1, UseDatefy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoggedPending = void 0;
    var LoggedPending;
    (function (LoggedPending) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new DataRead_1.DataRead.forOverlay('logged-pending');
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var logAticket = indexHeader.querySelector('#log-a-ticket button');
                var indexMain = document.querySelector('#index-main');
                var ticketsContainer = indexMain.querySelector('#tickets-container');
                var activeTicket = ticketsContainer.querySelector('.active-ticket');
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var closeOverlay = indexOverlay.querySelector('#close-overlay');
                var departmentSelect = indexOverlay.querySelector('#department-form select');
                var colleagueSelect = indexOverlay.querySelector('#colleague-form select');
                var ticketSubject = indexOverlay.querySelector('#ticket-subject');
                var ticketDescription = indexOverlay.querySelector('#ticket-description');
                var assignButton = indexOverlay.querySelector('#assign-ticket button');
                var claimButton = indexOverlay.querySelector('#claim-ticket button');
                var deleteButton = indexOverlay.querySelector('#delete-ticket button');
                var logButton = indexOverlay.querySelector('#log-ticket button');
                var moveButton = indexOverlay.querySelector('#move-ticket button');
                var recycleButton = indexOverlay.querySelector('#recycle-ticket button');
                var restoreButton = indexOverlay.querySelector('#restore-ticket button');
                var saveButton = indexOverlay.querySelector('#save-ticket button');
                var takeButton = indexOverlay.querySelector('#take-ticket button');
                var unlockButton = indexOverlay.querySelector('#unlock-ticket button');
                var pendingMark = indexOverlay.querySelector('.pending-mark');
                var assignedMark = indexOverlay.querySelector('.assigned-mark');
                var deletedMark = indexOverlay.querySelector('.deleted-mark');
                var pendingDate = indexOverlay.querySelector('#pending-date');
                var assignedDate = indexOverlay.querySelector('#assigned-date');
                var deletedDate = indexOverlay.querySelector('#deleted-date');
                var indexData = document.querySelector('#index-data');
                function closeContainer(block) {
                    var container = document.querySelector("#".concat(block));
                    container.innerHTML = '';
                    container.className = '';
                    container.className = "default-".concat(block.split('-')[1]);
                    container.style.display = 'none';
                    var status = activeTicket.classList[0];
                    activeTicket.className = "".concat(status);
                    indexMain.style.display = 'grid';
                }
                function toggleButton() {
                    var activeTicket = ticketsContainer.querySelector('.active-ticket');
                    var ticketStatus = activeTicket.children[3].children[0].innerHTML;
                    var ticketRating = activeTicket.children[3].children[1].innerHTML;
                    var subjectText = activeTicket.children[3].children[2].innerHTML;
                    var descriptionText = activeTicket.children[3].children[3].innerHTML;
                    var senderName = activeTicket.children[3].children[4].innerHTML;
                    var senderDepartment = activeTicket.children[3].children[5].innerHTML;
                    var receiverName = activeTicket.children[3].children[6].innerHTML;
                    var receiverDepartment = activeTicket.children[3].children[7].innerHTML;
                    var dateShort = activeTicket.children[3].children[8].innerHTML;
                    var datePending = activeTicket.children[3].children[9].innerHTML;
                    var dateAssigned = activeTicket.children[3].children[10].innerHTML;
                    var dateResolved = activeTicket.children[3].children[11].innerHTML;
                    var noteResolved = activeTicket.children[3].children[12].innerHTML;
                    var dateDeleted = activeTicket.children[3].children[13].innerHTML;
                    var noteDeleted = activeTicket.children[3].children[14].innerHTML;
                    var liveReceiverDepartment = "".concat(UseCapify_1.UseCapify.forString('-', "".concat($(departmentSelect).val())));
                    if (colleagueSelect.getElementsByTagName('option').length === 1) {
                        assignButton.parentElement.style.display = 'none';
                        deleteButton.parentElement.style.display = 'grid';
                        moveButton.parentElement.style.display = 'none';
                        saveButton.parentElement.style.display = 'none';
                        assignButton.className = 'disabled-button';
                        deleteButton.className = '';
                        moveButton.className = 'disabled-button';
                        saveButton.className = 'disabled-button';
                    }
                    else if (colleagueSelect.value !== 'select-colleague') {
                        assignedDate.textContent = "".concat(UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY'));
                        assignButton.parentElement.style.display = 'grid';
                        deleteButton.parentElement.style.display = 'none';
                        moveButton.parentElement.style.display = 'none';
                        saveButton.parentElement.style.display = 'none';
                        assignButton.className = '';
                        deleteButton.className = 'disabled-button';
                        moveButton.className = 'disabled-button';
                        saveButton.className = 'disabled-button';
                        pendingMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                        deletedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                        assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                        assignedDate.className = '';
                    }
                    else if (liveReceiverDepartment !== receiverDepartment) {
                        assignButton.parentElement.style.display = 'none';
                        deleteButton.parentElement.style.display = 'none';
                        moveButton.parentElement.style.display = 'grid';
                        saveButton.parentElement.style.display = 'none';
                        assignButton.className = 'disabled-button';
                        deleteButton.className = 'disabled-button';
                        moveButton.className = '';
                        saveButton.className = 'disabled-button';
                        if (colleagueSelect.value === 'select-colleague') {
                            pendingMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                            assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                            deletedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                        }
                        else {
                            pendingMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                            assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                            deletedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                        }
                    }
                    else if (subjectText !== "".concat($(ticketSubject).val()) || descriptionText !== "".concat($(ticketDescription).val())) {
                        assignButton.parentElement.style.display = 'none';
                        deleteButton.parentElement.style.display = 'none';
                        moveButton.parentElement.style.display = 'none';
                        saveButton.parentElement.style.display = 'grid';
                        assignButton.className = 'disabled-button';
                        deleteButton.className = 'disabled-button';
                        moveButton.className = 'disabled-button';
                        saveButton.className = '';
                        saveButton.className = '';
                    }
                    else if (colleagueSelect.value === 'select-colleague') {
                        pendingMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                        assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                        deletedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                        assignedDate.textContent = undefined;
                        assignButton.parentElement.style.display = 'none';
                        deleteButton.parentElement.style.display = 'grid';
                        moveButton.parentElement.style.display = 'none';
                        saveButton.parentElement.style.display = 'none';
                        assignButton.className = 'disabled-button';
                        deleteButton.className = '';
                        moveButton.className = 'disabled-button';
                        saveButton.className = 'disabled-button';
                    }
                }
                $(assignButton)
                    .on('click', function () {
                    if (assignButton.className !== 'disabled-button') {
                        new DataUpdate_1.DataUpdate.forButton('assign');
                    }
                })
                    .on('mouseenter', function () {
                    assignButton.style.color = "".concat(GetColor_1.GetColor.primaryLight());
                    assignedDate.style.display = 'grid';
                })
                    .on('mouseleave', function () {
                    assignButton.style.color = '';
                    assignedDate.style.display = 'none';
                });
                $(deleteButton)
                    .on('click', function () {
                    if (deleteButton.className !== 'disabled-button') {
                        new GetEvent_1.GetEvent.forPage('delete-overlay', GetPath_1.GetPath.forHTML('overlay'));
                    }
                })
                    .on('mouseenter', function () {
                    deletedMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                    pendingMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                    assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                    deleteButton.style.color = "".concat(GetColor_1.GetColor.deletedDefault());
                    deletedDate.textContent = UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY');
                    deletedDate.style.display = 'grid';
                    deletedDate.className = '';
                })
                    .on('mouseleave', function () {
                    pendingMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                    assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                    deletedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                    deleteButton.style.color = '';
                    deletedDate.style.display = 'none';
                    deletedDate.textContent = 'undefined';
                    deletedDate.className = 'disabled-text';
                });
                $(moveButton)
                    .on('click', function () {
                    if (moveButton.className !== 'disabled-button') {
                        new DataUpdate_1.DataUpdate.forButton('move');
                    }
                })
                    .on('mouseenter', function () {
                    moveButton.style.color = "".concat(GetColor_1.GetColor.pendingDefault());
                })
                    .on('mouseleave', function () {
                    moveButton.style.color = '';
                });
                $(saveButton)
                    .on('click', function () {
                    if (saveButton.className !== 'disabled-button') {
                        new DataUpdate_1.DataUpdate.forButton('save');
                    }
                })
                    .on('mouseenter', function () {
                    saveButton.style.color = "".concat(GetColor_1.GetColor.secondaryDark());
                })
                    .on('mouseleave', function () {
                    saveButton.style.color = '';
                });
                $(ticketSubject)
                    .on('keydown', function () { })
                    .on('keyup', function () {
                    toggleButton();
                });
                $(ticketDescription)
                    .on('keydown', function () { })
                    .on('keyup', function () {
                    toggleButton();
                });
                $(departmentSelect).on('click', function () {
                    toggleButton();
                });
                $(colleagueSelect).on('click', function () {
                    toggleButton();
                });
                $(closeOverlay).on('click', function () {
                    closeContainer('index-overlay');
                });
            }
            return initiateEvents;
        }());
        LoggedPending.initiateEvents = initiateEvents;
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
    })(LoggedPending = exports.LoggedPending || (exports.LoggedPending = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/LoggedPending.js.map
