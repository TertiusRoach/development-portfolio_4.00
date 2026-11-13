define(["require", "exports", "code/tools/DataRead", "code/tools/DataUpdate", "code/tools/GetColor", "code/tools/UseDatefy", "code/tools/UseValufy"], function (require, exports, DataRead_1, DataUpdate_1, GetColor_1, UseDatefy_1, UseValufy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ManagePending = void 0;
    var ManagePending;
    (function (ManagePending) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new DataRead_1.DataRead.forOverlay('manage-pending');
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var logButton = indexHeader.querySelector('#log-a-ticket button');
                var indexMain = document.querySelector('#index-main');
                indexMain.style.display = 'none';
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var closeOverlay = indexOverlay.querySelector('#close-overlay');
                var assignButton = indexOverlay.querySelector('#assign-ticket button');
                var claimButton = indexOverlay.querySelector('#claim-ticket button');
                var deleteButton = indexOverlay.querySelector('#delete-ticket button');
                var moveButton = indexOverlay.querySelector('#move-ticket button');
                var saveButton = indexOverlay.querySelector('#save-ticket button');
                var departmentSelect = indexOverlay.querySelector('#department-form select');
                var colleagueSelect = indexOverlay.querySelector('#colleague-form select');
                var ticketSubject = indexOverlay.querySelector('#ticket-subject');
                var ticketDescription = indexOverlay.querySelector('#ticket-description');
                var datePending = indexOverlay.querySelector('#pending-date');
                var dateAssigned = indexOverlay.querySelector('#assigned-date');
                var dateDeleted = indexOverlay.querySelector('#deleted-date');
                var pendingMark = indexOverlay.querySelector('.pending-mark');
                var assignedMark = indexOverlay.querySelector('.assigned-mark');
                var indexData = document.querySelector('#index-data');
                function toggleDates() {
                    var selectedIndex = colleagueSelect.selectedOptions[0].value;
                    if (selectedIndex === 'select-colleague') {
                        dateAssigned.textContent = 'undefined';
                        dateAssigned.className = 'disabled-text';
                        pendingMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                        assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                        dateDeleted.textContent = 'undefined';
                        dateDeleted.className = 'disabled-text';
                    }
                    else {
                        dateAssigned.textContent = "".concat(UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY'));
                        dateAssigned.className = '';
                        pendingMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                        assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                        dateDeleted.textContent = 'undefined';
                        dateDeleted.className = 'disabled-text';
                    }
                    if (dateAssigned.textContent === 'undefined' || dateAssigned.textContent === 'undefined') {
                        dateAssigned.style.display = 'none';
                        dateDeleted.style.display = 'none';
                    }
                    else if (dateAssigned.textContent !== 'undefined') {
                        dateAssigned.style.display = 'none';
                        dateDeleted.style.display = 'none';
                    }
                    else if (dateDeleted.textContent !== 'undefined') {
                        dateAssigned.style.display = 'none';
                        dateDeleted.style.display = 'flex';
                    }
                }
                function toggleButton() {
                    if (colleagueSelect.value === UseValufy_1.UseValufy.forString(findUser())) {
                        assignButton.parentElement.style.display = 'none';
                        assignButton.className = 'disabled-button';
                        claimButton.parentElement.style.display = 'grid';
                        claimButton.className = '';
                        moveButton.parentElement.style.display = 'none';
                        moveButton.className = 'disabled-button';
                    }
                    else if (colleagueSelect.value === 'select-colleague') {
                        assignButton.parentElement.style.display = 'none';
                        assignButton.className = 'disabled-button';
                        claimButton.parentElement.style.display = 'none';
                        claimButton.className = 'disabled-button';
                        moveButton.parentElement.style.display = 'grid';
                        moveButton.className = '';
                    }
                    else if (colleagueSelect.value !== 'select-colleague') {
                        assignButton.parentElement.style.display = 'grid';
                        assignButton.className = '';
                        claimButton.parentElement.style.display = 'none';
                        claimButton.className = 'disabled-button';
                        moveButton.parentElement.style.display = 'none';
                        moveButton.className = 'disabled-button';
                    }
                }
                $(assignButton)
                    .on('click', function () {
                    new DataUpdate_1.DataUpdate.forButton('assign');
                })
                    .on('mouseenter', function () {
                    if (assignButton.className !== 'disabled-button') {
                        dateAssigned.style.display = 'flex';
                        assignButton.style.color = "".concat(GetColor_1.GetColor.primaryLight());
                    }
                    else {
                        dateAssigned.style.display = 'none';
                        assignButton.style.color = '';
                    }
                })
                    .on('mouseleave', function () {
                    dateAssigned.style.display = 'none';
                    assignButton.style.color = '';
                });
                $(claimButton)
                    .on('click', function () {
                    if (claimButton.className !== 'disabled-button') {
                        new DataUpdate_1.DataUpdate.forButton('claim');
                    }
                })
                    .on('mouseenter', function () {
                    if (claimButton.className !== 'disabled-button') {
                        dateAssigned.style.display = 'flex';
                        claimButton.style.color = "".concat(GetColor_1.GetColor.primaryLight());
                    }
                    else {
                        dateAssigned.style.display = 'none';
                        claimButton.style.color = '';
                    }
                })
                    .on('mouseleave', function () {
                    dateAssigned.style.display = 'none';
                    claimButton.style.color = '';
                });
                $(deleteButton)
                    .on('click', function () {
                    new DataUpdate_1.DataUpdate.forButton('assign');
                })
                    .on('mouseenter', function () {
                    if (deleteButton.className !== 'disabled-button') {
                        dateAssigned.style.display = 'none';
                        dateAssigned.textContent = 'undefined';
                        dateAssigned.className = 'disabled-text';
                        dateDeleted.style.display = 'flex';
                        dateDeleted.textContent = "".concat(UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY'));
                        dateDeleted.className = '';
                        deleteButton.parentElement.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                        pendingMark.style.background = '';
                        assignedMark.style.background = '';
                    }
                })
                    .on('mouseleave', function () {
                    if (deleteButton.className !== 'disabled-button') {
                        if (colleagueSelect.value !== 'select-colleague') {
                            dateAssigned.style.display = 'none';
                            dateAssigned.textContent = "".concat(UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY'));
                            dateAssigned.className = '';
                            dateDeleted.style.display = 'none';
                            dateDeleted.textContent = 'undefined';
                            dateDeleted.className = 'disabled-text';
                            pendingMark.style.background = '';
                            assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                        }
                        else {
                            dateAssigned.style.display = 'none';
                            dateAssigned.textContent = 'undefined';
                            dateAssigned.className = 'disabled-text';
                            dateDeleted.style.display = 'none';
                            dateDeleted.textContent = 'undefined';
                            dateDeleted.className = 'disabled-text';
                            pendingMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                            assignedMark.style.background = '';
                        }
                        deleteButton.parentElement.style.background = '';
                    }
                });
                $(moveButton)
                    .on('click', function () {
                    new DataUpdate_1.DataUpdate.forButton('move');
                })
                    .on('mouseenter', function () {
                    if (assignButton.className !== 'disabled-button') {
                        dateAssigned.style.display = 'flex';
                        assignButton.style.color = "".concat(GetColor_1.GetColor.primaryLight());
                    }
                    else {
                        dateAssigned.style.display = 'none';
                        assignButton.style.color = '';
                    }
                })
                    .on('mouseleave', function () {
                    dateAssigned.style.display = 'none';
                    assignButton.style.color = '';
                });
                $(departmentSelect)
                    .on('click', function () {
                    if (colleagueSelect.value !== UseValufy_1.UseValufy.forString(findUser())) {
                        deleteButton.className = 'disabled-button';
                        deleteButton.parentElement.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                    }
                    else {
                        deleteButton.className = '';
                        deleteButton.parentElement.style.background = '';
                    }
                    toggleDates();
                })
                    .on('change', function () {
                    toggleButton();
                });
                $(colleagueSelect)
                    .on('click', function () {
                    if (colleagueSelect.value === 'select-colleague') {
                        claimButton.className = 'disabled-button';
                    }
                    else if (colleagueSelect.value !== UseValufy_1.UseValufy.forString(findUser())) {
                        deleteButton.className = 'disabled-button';
                        deleteButton.parentElement.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                    }
                    else {
                        deleteButton.className = '';
                        deleteButton.parentElement.style.background = '';
                    }
                    toggleDates();
                })
                    .on('change', function () {
                    toggleButton();
                });
                $(dateAssigned).on('change', function () {
                    toggleDates();
                });
                $(dateDeleted).on('change', function () {
                    toggleDates();
                });
                $(closeOverlay).on('click', function () {
                    closeContainer('index-overlay');
                });
                toggleDates();
                console.log('--ManagePending.js Loaded');
            }
            return initiateEvents;
        }());
        ManagePending.initiateEvents = initiateEvents;
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
        function findUser() {
            var indexBody = document.querySelector('#index-body');
            var userSelect = indexBody.querySelector('#user-form select');
            var userIndex = userSelect.selectedIndex;
            var userName = userSelect.children[userIndex].textContent;
            return "".concat(userName);
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
    })(ManagePending = exports.ManagePending || (exports.ManagePending = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/ManagePending.js.map
