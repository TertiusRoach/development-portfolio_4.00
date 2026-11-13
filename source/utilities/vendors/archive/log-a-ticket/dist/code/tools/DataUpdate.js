define(["require", "exports", "code/tools/GetEvent", "code/tools/GetPath", "code/tools/UseCapify", "code/tools/UseDatefy"], function (require, exports, GetEvent_1, GetPath_1, UseCapify_1, UseDatefy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DataUpdate = void 0;
    var DataUpdate;
    (function (DataUpdate) {
        var forButton = (function () {
            function forButton(type) {
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var indexMain = document.querySelector('#index-main');
                var ticketsContainer = indexMain.querySelector('#tickets-container');
                var activeTicket = ticketsContainer.querySelector('.active-ticket');
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var liveNote = indexOverlay.querySelector('section #ticket-note');
                var liveSubject = indexOverlay.querySelector('#ticket-subject');
                var liveDescription = indexOverlay.querySelector('#ticket-description');
                var liveReceiverName = indexOverlay.querySelector('#colleague-form select');
                var liveReceiverDepartment = indexOverlay.querySelector('#department-form select');
                var indexData = document.querySelector('#index-data');
                var ticketsData = indexData.querySelector('#tickets-data');
                var ticketsCollection = ticketsData.getElementsByTagName('article');
                var ticketsTotal = ticketsCollection.length;
                var departmentsData = indexData.querySelector('#departments-data');
                var departmentsCollection = departmentsData.getElementsByTagName('article');
                var departmentsTotal = departmentsCollection.length;
                var employeesData = indexData.querySelector('#employees-data');
                var employeesCollection = employeesData.getElementsByTagName('article');
                var employeesTotal = employeesCollection.length;
                if (indexOverlay.className !== 'log-overlay') {
                    markTicket();
                    var markedTicket = ticketsData.querySelector('.active-data');
                    var ticketHeader = markedTicket.querySelector('header');
                    var dateDisplay = ticketHeader.getElementsByTagName('p')[0];
                    var subjectDisplay = ticketHeader.getElementsByTagName('p')[1];
                    var receiverDisplay = ticketHeader.getElementsByTagName('p')[2];
                    var ticketFooter = markedTicket.querySelector('footer');
                    var statusInfo = ticketFooter.querySelector('.ticket-status');
                    var ratingInfo = ticketFooter.querySelector('.ticket-rating');
                    var subjectInfo = ticketFooter.querySelector('.subject-text');
                    var descriptionInfo = ticketFooter.querySelector('.description-text');
                    var senderNameInfo = ticketFooter.querySelector('.sender-name');
                    var senderDepartmentInfo = ticketFooter.querySelector('.sender-department');
                    var receiverNameInfo = ticketFooter.querySelector('.receiver-name');
                    var receiverDepartmentInfo = ticketFooter.querySelector('.receiver-department');
                    var dateShortInfo = ticketFooter.querySelector('.date-short');
                    var datePendingInfo = ticketFooter.querySelector('.date-pending');
                    var dateAssignedInfo = ticketFooter.querySelector('.date-assigned');
                    var dateResolvedInfo = ticketFooter.querySelector('.date-resolved');
                    var noteResolvedInfo = ticketFooter.querySelector('.note-resolved');
                    var dateDeletedInfo = ticketFooter.querySelector('.date-deleted');
                    var noteDeletedInfo = ticketFooter.querySelector('.note-deleted');
                }
                switch (type) {
                    case 'assign':
                        if (indexOverlay.className === 'log-overlay') {
                            var status = "".concat(updateData('status', 'Assigned'));
                            var subject = "".concat(updateData('subject', 'Assigned'));
                            var receiverName = "".concat(updateData('receiver', 'Assigned'));
                            var dateShort = "".concat(updateData('date-short', 'Assigned'));
                            $(ticketsData).append("<article class=\"ticket ".concat(status.toLowerCase(), "\">\n                <header>\n                  <p class=\"shortdate\">").concat(dateShort, "</p>\n                  <p class=\"subject\">").concat(subject, "</p>\n                  <p class=\"receiver\">").concat(receiverName, "</p>\n                </header>                  \n                <footer>\n                  <p class=\"ticket-status\">").concat(updateData('status', 'Assigned'), "</p>\n                  <p class=\"ticket-rating\">").concat(updateData('rating', 'Assigned'), "</p>\n                  <p class=\"subject-text\">").concat(updateData('subject', 'Assigned'), "</p>\n                  <p class=\"description-text\">").concat(updateData('description', 'Assigned'), "</p>\n                  <p class=\"sender-name\">").concat(updateData('sender', 'Assigned'), "</p>\n                  <p class=\"sender-department\">").concat(updateData('sender-department', 'Assigned'), "</p>\n                  <p class=\"receiver-name\">").concat(updateData('receiver', 'Assigned'), "</p>\n                  <p class=\"receiver-department\">").concat(updateData('receiver-department', 'Assigned'), "</p>\n                  <p class=\"date-short\">").concat(updateData('date-short', 'Assigned'), "</p>\n                  <p class=\"date-pending\">").concat(updateData('date-pending', 'Assigned'), "</p>\n                  <p class=\"date-assigned\">").concat(updateData('date-assigned', 'Assigned'), "</p>\n                  <p class=\"date-resolved\">").concat(updateData('date-resolved', 'Assigned'), "</p>\n                  <p class=\"note-resolved\">").concat(updateData('resolved-note', 'Assigned'), "</p>\n                  <p class=\"date-deleted\">").concat(updateData('date-deleted', 'Assigned'), "</p>\n                  <p class=\"note-deleted\">").concat(updateData('deleted-note', 'Assigned'), "</p>\n                </footer>\n              </article>"));
                            closeContainer();
                            refreshBlocks();
                        }
                        else {
                            markedTicket.className = 'assigned';
                            statusInfo.textContent = 'Assigned';
                            receiverNameInfo.textContent = "".concat(UseCapify_1.UseCapify.forString('-', liveReceiverName.value));
                            receiverDepartmentInfo.textContent = "".concat(UseCapify_1.UseCapify.forString('-', liveReceiverDepartment.value));
                            dateAssignedInfo.textContent = UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY');
                            closeContainer();
                            refreshBlocks();
                        }
                        break;
                    case 'claim':
                        markedTicket.className = 'assigned';
                        statusInfo.textContent = 'Assigned';
                        receiverNameInfo.textContent = "".concat(UseCapify_1.UseCapify.forString('-', liveReceiverName.value));
                        receiverDepartmentInfo.textContent = "".concat(UseCapify_1.UseCapify.forString('-', liveReceiverDepartment.value));
                        dateAssignedInfo.textContent = UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY');
                        closeContainer();
                        refreshBlocks();
                        console.log('Claim Ticket');
                        break;
                    case 'delete':
                        markedTicket.className = 'deleted';
                        statusInfo.textContent = 'Deleted';
                        dateDeletedInfo.textContent = UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY');
                        noteDeletedInfo.textContent = "".concat($(liveNote).val());
                        closeContainer();
                        refreshBlocks();
                        break;
                    case 'log':
                        var status = "".concat(updateData('status', 'Pending'));
                        var subject = "".concat(updateData('subject', 'Pending'));
                        var dateShort = "".concat(updateData('date-short', 'Pending'));
                        var receiverName = "".concat(updateData('receiver', 'Pending'));
                        var receiverDepartment = "".concat(updateData('receiver-department', 'Pending'));
                        $(ticketsData).append("<article class=\"ticket ".concat(status.toLowerCase(), "\">\n              <header>\n                <p class=\"shortdate\">").concat(dateShort, "</p>\n                <p class=\"subject\">").concat(subject, "</p>\n                <p class=\"receiver\">").concat(receiverDefault(receiverName, receiverDepartment), "</p>\n              </header>                  \n              <footer>\n                <p class=\"ticket-status\">").concat(updateData('status', 'Pending'), "</p>\n                <p class=\"ticket-rating\">").concat(updateData('rating', 'Pending'), "</p>\n                <p class=\"subject-text\">").concat(updateData('subject', 'Pending'), "</p>\n                <p class=\"description-text\">").concat(updateData('description', 'Pending'), "</p>\n                <p class=\"sender-name\">").concat(updateData('sender', 'Pending'), "</p>\n                <p class=\"sender-department\">").concat(updateData('sender-department', 'Pending'), "</p>\n                <p class=\"receiver-name\">").concat(updateData('receiver', 'Pending'), "</p>\n                <p class=\"receiver-department\">").concat(updateData('receiver-department', 'Pending'), "</p>\n                <p class=\"date-short\">").concat(updateData('date-short', 'Pending'), "</p>\n                <p class=\"date-pending\">").concat(updateData('date-pending', 'Pending'), "</p>\n                <p class=\"date-assigned\">").concat(updateData('date-assigned', 'Pending'), "</p>\n                <p class=\"date-resolved\">").concat(updateData('date-resolved', 'Pending'), "</p>\n                <p class=\"note-resolved\">").concat(updateData('resolved-note', 'Pending'), "</p>\n                <p class=\"date-deleted\">").concat(updateData('date-deleted', 'Pending'), "</p>\n                <p class=\"note-deleted\">").concat(updateData('deleted-note', 'Pending'), "</p>\n              </footer>\n            </article>"));
                        refreshBlocks();
                        closeContainer();
                        console.log('Log Ticket');
                        break;
                    case 'move':
                        markedTicket.className = 'pending';
                        statusInfo.textContent = 'Pending';
                        receiverDepartmentInfo.textContent = "".concat(UseCapify_1.UseCapify.forString('-', liveReceiverDepartment.value));
                        descriptionInfo.textContent = "".concat($(liveDescription).val(), "\n          \n          Ticket moved to ").concat(findDepartment(findUser()), " on ").concat(UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY'));
                        datePendingInfo.textContent = UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY');
                        closeContainer();
                        refreshBlocks();
                        break;
                    case 'recycle':
                        markedTicket.className = 'assigned';
                        statusInfo.textContent = 'Assigned';
                        descriptionInfo.textContent = "".concat($(liveDescription).val(), "\n          \n          Ticket recycled by ").concat(findUser(), " on ").concat(UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY'));
                        dateAssignedInfo.textContent = UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY');
                        closeContainer();
                        refreshBlocks();
                        break;
                    case 'resolve':
                        markedTicket.className = 'resolved';
                        statusInfo.textContent = 'Resolved';
                        dateResolvedInfo.textContent = UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY');
                        noteResolvedInfo.textContent = "".concat($(liveNote).val());
                        closeContainer();
                        refreshBlocks();
                        break;
                    case 'restore':
                        markedTicket.className = 'pending';
                        statusInfo.textContent = 'Pending';
                        closeContainer();
                        refreshBlocks();
                        break;
                    case 'save':
                        markedTicket.className = 'pending';
                        statusInfo.textContent = 'Pending';
                        subjectInfo.textContent = "".concat($(liveSubject).val());
                        descriptionInfo.textContent = "".concat($(liveDescription).val());
                        datePendingInfo.textContent = UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY');
                        closeContainer();
                        refreshBlocks();
                        break;
                    case 'take':
                        markedTicket.className = 'assigned';
                        statusInfo.textContent = 'Assigned';
                        receiverDisplay.textContent = "".concat(findUser());
                        receiverNameInfo.textContent = "".concat(findUser());
                        receiverDepartmentInfo.textContent = "".concat(findDepartment(findUser()));
                        descriptionInfo.textContent = "".concat($(liveDescription).val(), "\n          \n          Taken over by ").concat(findUser(), " on ").concat(UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY'));
                        closeContainer();
                        refreshBlocks();
                        break;
                    case 'unlock':
                        markedTicket.className = 'assigned';
                        statusInfo.textContent = 'Assigned';
                        closeContainer();
                        refreshBlocks();
                        break;
                }
            }
            return forButton;
        }());
        DataUpdate.forButton = forButton;
        function updateData(info, status) {
            var indexBody = document.querySelector('#index-body');
            var indexHeader = document.querySelector('#index-header');
            var indexMain = document.querySelector('#index-main');
            var indexSidebar = document.querySelector('#index-sidebar');
            var indexData = document.querySelector('#index-data');
            var employeesContainer = indexData.querySelector('#employees-data');
            var employeesTotal = employeesContainer.children.length;
            var liveStatus;
            var liveRating;
            var liveSubject;
            var liveDescription;
            var liveSenderName;
            var liveSenderDepartment;
            var liveReceiverName;
            var liveReceiverDepartment;
            var liveDateShort;
            var liveDatePending;
            var liveDateAssigned;
            var liveDateResolved;
            var liveNoteResolved;
            var liveDateDeleted;
            var liveNoteDeleted;
            switch (status) {
                case 'Pending':
                    switch (info) {
                        case 'status':
                            liveStatus = "".concat(status);
                            return liveStatus;
                        case 'rating':
                            liveRating = undefined;
                            return liveRating;
                        case 'subject':
                            liveSubject = "".concat($('#ticket-subject').val());
                            return liveSubject;
                        case 'description':
                            liveDescription = "".concat($('#ticket-description').val());
                            return liveDescription;
                        case 'sender':
                            liveSenderName = "".concat(UseCapify_1.UseCapify.forString('-', "".concat($('#user-form select').val())));
                            return liveSenderName;
                        case 'sender-department':
                            var indexData_1 = document.querySelector('#index-data');
                            var employeesContainer_1 = indexData_1.querySelector('#employees-data');
                            var employeesTotal_1 = employeesContainer_1.children.length;
                            liveSenderName = "".concat(UseCapify_1.UseCapify.forString('-', "".concat($('#user-form select').val())));
                            for (var i = 0; i < employeesTotal_1; i++) {
                                if ("".concat(findEmployee(i, 'first-name'), " ").concat(findEmployee(i, 'last-name')) === liveSenderName) {
                                    liveSenderDepartment = findEmployee(i, 'department');
                                    return liveSenderDepartment;
                                }
                            }
                        case 'receiver':
                            var colleagueSelect = document.querySelector('#index-overlay #colleague-form select');
                            switch ('undefined') {
                                case colleagueSelect.value:
                                    liveReceiverName = undefined;
                                    break;
                                default:
                                    liveReceiverName = UseCapify_1.UseCapify.forString('-', colleagueSelect.value);
                            }
                            return;
                        case 'receiver-department':
                            var departmentSelect = document.querySelector('#index-overlay #department-form select');
                            liveReceiverDepartment = UseCapify_1.UseCapify.forString('-', departmentSelect.value);
                            return liveReceiverDepartment;
                        case 'date-short':
                            liveDateShort = UseDatefy_1.UseDatefy.forToday('2000-01-01');
                            return liveDateShort;
                        case 'date-pending':
                            var pendingDate = document.querySelector('#index-overlay #pending-date');
                            liveDatePending = pendingDate.innerText;
                            return liveDatePending;
                        case 'date-assigned':
                            liveDateAssigned = undefined;
                            return liveDateAssigned;
                        case 'date-resolved':
                            liveDateResolved = undefined;
                            return liveDateResolved;
                        case 'resolved-note':
                            liveNoteResolved = undefined;
                            return liveNoteResolved;
                        case 'date-deleted':
                            liveDateDeleted = undefined;
                            return liveDateDeleted;
                        case 'deleted-note':
                            liveNoteDeleted = undefined;
                            return liveNoteDeleted;
                    }
                case 'Assigned':
                    switch (info) {
                        case 'status':
                            liveStatus = "".concat(status);
                            return liveStatus;
                        case 'rating':
                            liveRating = undefined;
                            return liveRating;
                        case 'subject':
                            liveSubject = "".concat($('#ticket-subject').val());
                            return liveSubject;
                        case 'description':
                            liveDescription = "".concat($('#ticket-description').val());
                            return liveDescription;
                        case 'sender':
                            liveSenderName = "".concat(UseCapify_1.UseCapify.forString('-', "".concat($('#user-form select').val())));
                            return liveSenderName;
                        case 'sender-department':
                            liveSenderName = "".concat(UseCapify_1.UseCapify.forString('-', "".concat($('#user-form select').val())));
                            for (var i = 0; i < employeesTotal; i++) {
                                if ("".concat(findEmployee(i, 'first-name'), " ").concat(findEmployee(i, 'last-name')) === liveSenderName) {
                                    liveSenderDepartment = findEmployee(i, 'department');
                                    return liveSenderDepartment;
                                }
                            }
                        case 'receiver':
                            var colleagueSelect = document.querySelector('#index-overlay #ticket-container footer #colleague-form select');
                            switch (colleagueSelect) {
                                case null:
                                    liveReceiverName = undefined;
                                default:
                                    liveReceiverName = UseCapify_1.UseCapify.forString('-', colleagueSelect.value);
                            }
                            return liveReceiverName;
                        case 'receiver-department':
                            var departmentSelect = document.querySelector('#index-overlay #department-form select');
                            liveReceiverDepartment = UseCapify_1.UseCapify.forString('-', departmentSelect.value);
                            return liveReceiverDepartment;
                        case 'date-short':
                            liveDateShort = UseDatefy_1.UseDatefy.forToday('2000-01-01');
                            return liveDateShort;
                        case 'date-pending':
                            var pendingDate = document.querySelector('#index-overlay #pending-date');
                            liveDatePending = pendingDate.innerText;
                            return liveDatePending;
                        case 'date-assigned':
                            var assignedDate = document.querySelector('#index-overlay #assigned-date');
                            liveDateAssigned = assignedDate.innerText;
                            return liveDateAssigned;
                        case 'date-resolved':
                            liveDateResolved = undefined;
                            return liveDateResolved;
                        case 'resolved-note':
                            liveNoteResolved = undefined;
                            return liveNoteResolved;
                        case 'date-deleted':
                            liveDateDeleted = undefined;
                            return liveDateDeleted;
                        case 'deleted-note':
                            liveNoteDeleted = undefined;
                            return liveNoteDeleted;
                    }
                case 'Resolved':
                    break;
                case 'Deleted':
                    break;
            }
        }
        function closeContainer() {
            var indexHeader = document.querySelector('#index-header');
            var indexMain = document.querySelector('#index-main');
            var indexOverlay = document.querySelector('#index-overlay');
            var logAticket = indexHeader.querySelector('#log-a-ticket button');
            indexOverlay.className = 'default-overlay';
            indexOverlay.style.display = 'none';
            indexMain.style.display = 'grid';
            indexOverlay.innerHTML = '';
            logAticket.className = '';
        }
        function findDepartment(employeeName) {
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
                var employeeName_1 = "".concat(firstName, " ").concat(lastName);
                if (employeeName_1 === employeeName_1) {
                    return department;
                }
            }
        }
        function findEmployee(index, data) {
            var employeesData = document.querySelector('#employees-data');
            var employeesCollection = employeesData.getElementsByTagName('article');
            var employeesTotal = employeesData.getElementsByTagName('article').length;
            var firstName = employeesCollection[index].children[0].textContent;
            var middleName = employeesCollection[index].children[1].textContent;
            var lastName = employeesCollection[index].children[2].textContent;
            var department = employeesCollection[index].children[3].textContent;
            var occupation = employeesCollection[index].children[4].textContent;
            var role = employeesCollection[index].children[5].textContent;
            switch (data) {
                case 'first-name':
                    return firstName;
                case 'middle-name':
                    return middleName;
                case 'last-name':
                    return lastName;
                case 'department':
                    return department;
                case 'occupation':
                    return occupation;
                case 'role':
                    return role;
            }
        }
        function findUser() {
            var indexBody = document.querySelector('#index-body');
            var userSelect = indexBody.querySelector('#user-form select');
            var userIndex = userSelect.selectedIndex;
            var userName = userSelect.children[userIndex].textContent;
            return "".concat(userName);
        }
        function activeTicket(info) {
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
        function activeData(info) { }
        function markTicket() {
            var indexData = document.querySelector('#index-data');
            var ticketsData = indexData.querySelector('#tickets-data');
            var ticketsCollection = ticketsData.getElementsByTagName('article');
            for (var i = 0; i < ticketsCollection.length; i++) {
                var booleanArray = [];
                var status = "".concat(ticketsData.children[i].children[1].children[0].textContent);
                if (status.toLowerCase() === activeTicket('ticket-status')) {
                    booleanArray.push(true);
                }
                else {
                    booleanArray.push(false);
                }
                var rating = "".concat(ticketsData.children[i].children[1].children[1].textContent);
                if (rating === activeTicket('ticket-rating')) {
                    booleanArray.push(true);
                }
                else {
                    booleanArray.push(false);
                }
                var subject = "".concat(ticketsData.children[i].children[1].children[2].textContent);
                if (subject === activeTicket('subject-text')) {
                    booleanArray.push(true);
                }
                else {
                    booleanArray.push(false);
                }
                var description = "".concat(ticketsData.children[i].children[1].children[3].textContent);
                if (description === activeTicket('description-text')) {
                    booleanArray.push(true);
                }
                else {
                    booleanArray.push(false);
                }
                var senderName = "".concat(ticketsData.children[i].children[1].children[4].textContent);
                if (senderName === activeTicket('sender-name')) {
                    booleanArray.push(true);
                }
                else {
                    booleanArray.push(false);
                }
                var senderDepartment = "".concat(ticketsData.children[i].children[1].children[5].textContent);
                if (senderDepartment === activeTicket('sender-department')) {
                    booleanArray.push(true);
                }
                else {
                    booleanArray.push(false);
                }
                var receiverName = "".concat(ticketsData.children[i].children[1].children[6].textContent);
                if (receiverName === activeTicket('receiver-name')) {
                    booleanArray.push(true);
                }
                else {
                    booleanArray.push(false);
                }
                var receiverDepartment = "".concat(ticketsData.children[i].children[1].children[7].textContent);
                if (receiverDepartment === activeTicket('receiver-department')) {
                    booleanArray.push(true);
                }
                else {
                    booleanArray.push(false);
                }
                var dateShort = "".concat(ticketsData.children[i].children[1].children[8].textContent);
                if (dateShort === activeTicket('date-short')) {
                    booleanArray.push(true);
                }
                else {
                    booleanArray.push(false);
                }
                var datePending = "".concat(ticketsData.children[i].children[1].children[9].textContent);
                if (datePending === activeTicket('date-pending')) {
                    booleanArray.push(true);
                }
                else {
                    booleanArray.push(false);
                }
                var dateAssigned = "".concat(ticketsData.children[i].children[1].children[10].textContent);
                if (dateAssigned === activeTicket('date-assigned')) {
                    booleanArray.push(true);
                }
                else {
                    booleanArray.push(false);
                }
                var dateResolved = "".concat(ticketsData.children[i].children[1].children[11].textContent);
                if (dateResolved === activeTicket('date-resolved')) {
                    booleanArray.push(true);
                }
                else {
                    booleanArray.push(false);
                }
                var noteResolved = "".concat(ticketsData.children[i].children[1].children[12].textContent);
                if (noteResolved === activeTicket('note-resolved')) {
                    booleanArray.push(true);
                }
                else {
                    booleanArray.push(false);
                }
                var dateDeleted = "".concat(ticketsData.children[i].children[1].children[13].textContent);
                if (dateDeleted === activeTicket('date-deleted')) {
                    booleanArray.push(true);
                }
                else {
                    booleanArray.push(false);
                }
                var noteDeleted = "".concat(ticketsData.children[i].children[1].children[14].textContent);
                if (noteDeleted === activeTicket('note-deleted')) {
                    booleanArray.push(true);
                }
                else {
                    booleanArray.push(false);
                }
                var countBoolean = booleanArray.filter(Boolean).length;
                if (countBoolean === 15) {
                    var status_1 = ticketsData.children[i].className;
                    ticketsData.children[i].className = "".concat(status_1, " active-data");
                    break;
                }
            }
        }
        function receiverDefault(receiverName, receiverDepartment) {
            switch (receiverName) {
                case "".concat(undefined):
                    return receiverDepartment;
                default:
                    return receiverName;
            }
        }
        function refreshBlocks() {
            var indexMain = document.querySelector('#index-main');
            var mainClass = indexMain.className;
            var indexData = document.querySelector('#index-data');
            var ticketsData = indexData.querySelector('#tickets-data');
            var ticketsCollection = ticketsData.getElementsByTagName('article');
            new GetEvent_1.GetEvent.forPage('default-header', GetPath_1.GetPath.forHTML('header'));
            switch (mainClass) {
                case 'colleague-main':
                    new GetEvent_1.GetEvent.forPage('colleague-main', GetPath_1.GetPath.forHTML('main'));
                    new GetEvent_1.GetEvent.forPage('employees-sidebar', GetPath_1.GetPath.forHTML('sidebar'));
                    break;
                case 'logged-main':
                    new GetEvent_1.GetEvent.forPage('logged-main', GetPath_1.GetPath.forHTML('main'));
                    new GetEvent_1.GetEvent.forPage('coworkers-sidebar', GetPath_1.GetPath.forHTML('sidebar'));
                    break;
                case 'manage-main':
                    new GetEvent_1.GetEvent.forPage('manage-main', GetPath_1.GetPath.forHTML('main'));
                    new GetEvent_1.GetEvent.forPage('employees-sidebar', GetPath_1.GetPath.forHTML('sidebar'));
                    break;
                case 'user-main':
                    new GetEvent_1.GetEvent.forPage('user-main', GetPath_1.GetPath.forHTML('main'));
                    new GetEvent_1.GetEvent.forPage('employees-sidebar', GetPath_1.GetPath.forHTML('sidebar'));
                    break;
            }
        }
    })(DataUpdate = exports.DataUpdate || (exports.DataUpdate = {}));
});

//# sourceMappingURL=dist/code/tools/DataUpdate.js.map
