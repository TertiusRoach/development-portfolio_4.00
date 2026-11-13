define(["require", "exports", "code/tools/DataRead", "code/tools/DataUpdate", "code/tools/GetColor", "code/tools/UseDatefy"], function (require, exports, DataRead_1, DataUpdate_1, GetColor_1, UseDatefy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogOverlay = void 0;
    var LogOverlay;
    (function (LogOverlay) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new DataRead_1.DataRead.forOverlay('log-overlay');
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var activeButton = indexHeader.querySelector('.active-page');
                var indexMain = document.querySelector('#index-main');
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var closeOverlay = indexOverlay.querySelector('#close-overlay');
                var mainButtons = '[id*="-ticket"] button';
                var ticketSubject = indexOverlay.querySelector('#ticket-subject');
                var ticketDescription = indexOverlay.querySelector('#ticket-description');
                var departmentSelect = indexOverlay.querySelector('#department-form select');
                var colleagueSelect = indexOverlay.querySelector('#colleague-form select');
                var pendingMark = indexOverlay.querySelector('.pending-mark');
                var assignedMark = indexOverlay.querySelector('.assigned-mark');
                var pendingDate = indexOverlay.querySelector('#pending-date');
                var assignedDate = indexOverlay.querySelector('#assigned-date');
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
                var indexData = document.querySelector('#index-data');
                function checkState(button) {
                    var subjectJQ = "".concat($('#ticket-subject').val());
                    var descriptionJQ = "".concat($('#ticket-description').val());
                    switch (button) {
                        case 'log-ticket':
                            if (colleagueSelect.length === 1) {
                                logButton.className = 'disabled-button';
                                assignButton.className = 'disabled-button';
                                pendingDate.className = 'disabled-text';
                                assignedDate.className = 'disabled-text';
                            }
                            else if (subjectJQ === '' || descriptionJQ === '') {
                                logButton.className = 'disabled-button';
                                assignButton.className = 'disabled-button';
                                pendingDate.className = 'disabled-text';
                                assignedDate.className = 'disabled-text';
                            }
                            else if (subjectJQ !== '' && descriptionJQ === '') {
                                logButton.className = 'disabled-button';
                                assignButton.className = 'disabled-button';
                                pendingDate.className = 'disabled-text';
                                assignedDate.className = 'disabled-text';
                            }
                            else if (subjectJQ === '' && descriptionJQ !== '') {
                                logButton.className = 'disabled-button';
                                assignButton.className = 'disabled-button';
                                pendingDate.className = 'disabled-text';
                                assignedDate.className = 'disabled-text';
                            }
                            else if (colleagueSelect.value === 'select-colleague') {
                                logButton.className = '';
                                assignButton.className = 'disabled-button';
                                pendingDate.className = '';
                                assignedDate.className = 'disabled-text';
                            }
                            else if (colleagueSelect.value !== 'select-colleague') {
                                assignedDate.innerText = UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY');
                            }
                            else {
                                logButton.className = '';
                                assignButton.className = '';
                                pendingDate.className = '';
                                assignedDate.className = '';
                            }
                            break;
                    }
                }
                function toggleButton(colleague) {
                    if (colleague !== 'select-colleague') {
                        logButton.parentElement.style.display = 'none';
                        assignButton.parentElement.style.display = 'grid';
                        pendingMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                        assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                    }
                }
                $(logButton)
                    .on('click', function () {
                    if (logButton.className !== 'disabled-button') {
                        new DataUpdate_1.DataUpdate.forButton('log');
                    }
                })
                    .on('mouseenter', function () {
                    if (logButton.className !== 'disabled-button') {
                        logButton.style.color = "".concat(GetColor_1.GetColor.pendingDefault());
                    }
                    else {
                        logButton.style.color = '';
                    }
                })
                    .on('mouseleave', function () {
                    logButton.style.color = '';
                });
                $(assignButton)
                    .on('click', function () {
                    if (assignButton.className !== 'disabled-button') {
                        new DataUpdate_1.DataUpdate.forButton('assign');
                    }
                })
                    .on('mouseenter', function () {
                    if (assignButton.className !== 'disabled-button') {
                        assignButton.style.color = "".concat(GetColor_1.GetColor.primaryLight());
                    }
                    else {
                        assignButton.style.color = '';
                    }
                })
                    .on('mouseleave', function () {
                    assignButton.style.color = '';
                });
                $(departmentSelect)
                    .on('change', function () {
                    assignedDate.innerText = undefined;
                    assignedDate.style.display = 'none';
                })
                    .on('click', function () {
                    if (colleagueSelect.length === 1) {
                        logButton.className = 'disabled-button';
                        assignButton.className = 'disabled-button';
                        toggleButton(colleagueSelect.value);
                    }
                    else {
                        checkState('log-ticket');
                        toggleButton(colleagueSelect.value);
                    }
                });
                $(colleagueSelect)
                    .on('change', function () {
                    assignedDate.innerText = UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY');
                    assignedDate.style.display = 'grid';
                    assignedDate.className = '';
                    assignButton.className = '';
                    checkState('log-ticket');
                    toggleButton(colleagueSelect.value);
                })
                    .on('click', function () {
                    if (colleagueSelect.length === 1) {
                        logButton.className = 'disabled-button';
                        assignButton.className = 'disabled-button';
                    }
                    else {
                        checkState('log-ticket');
                        toggleButton(colleagueSelect.value);
                    }
                });
                $(ticketSubject)
                    .on('keydown', function () {
                    var subjectJQ = "".concat($('#ticket-subject').val());
                    var descriptionJQ = "".concat($('#ticket-description').val());
                    if (subjectJQ === '' || descriptionJQ === '') {
                        logButton.className = 'disabled-button';
                        assignButton.className = 'disabled-button';
                        pendingDate.className = 'disabled-text';
                        assignedDate.className = 'disabled-text';
                    }
                    else {
                        checkState('log-ticket');
                        toggleButton(colleagueSelect.value);
                    }
                })
                    .on('keyup', function () {
                    var subjectJQ = "".concat($('#ticket-subject').val());
                    var descriptionJQ = "".concat($('#ticket-description').val());
                    if (subjectJQ !== '' || descriptionJQ !== '') {
                        if (colleagueSelect.value === 'select-colleague') {
                            logButton.className = '';
                            pendingDate.className = '';
                        }
                        else {
                            logButton.className = '';
                            pendingDate.className = '';
                            assignButton.className = '';
                            assignedDate.className = '';
                        }
                        checkState('log-ticket');
                        toggleButton(colleagueSelect.value);
                    }
                    else if (colleagueSelect.length === 1) {
                        logButton.className = 'disabled-button';
                        assignButton.className = 'disabled-button';
                        checkState('log-ticket');
                        toggleButton(colleagueSelect.value);
                    }
                    else {
                        checkState('log-ticket');
                        toggleButton(colleagueSelect.value);
                    }
                    if ($(ticketSubject).val() === '') {
                        ticketSubject.style.border = "2px solid ".concat(GetColor_1.GetColor.secondaryDark());
                    }
                    else {
                        ticketSubject.style.border = '';
                    }
                });
                $(ticketDescription)
                    .on('keydown', function () {
                    var subjectJQ = "".concat($('#ticket-subject').val());
                    var descriptionJQ = "".concat($('#ticket-description').val());
                    if (subjectJQ === '' || descriptionJQ === '') {
                        logButton.className = 'disabled-button';
                        assignButton.className = 'disabled-button';
                        pendingDate.className = 'disabled-text';
                        assignedDate.className = 'disabled-text';
                    }
                    else {
                        checkState('log-ticket');
                        toggleButton(colleagueSelect.value);
                    }
                    if ($(ticketDescription).val() === '') {
                        ticketDescription.style.border = '';
                    }
                })
                    .on('keyup', function () {
                    var subjectJQ = "".concat($('#ticket-subject').val());
                    var descriptionJQ = "".concat($('#ticket-description').val());
                    if (subjectJQ !== '' || descriptionJQ !== '') {
                        if (colleagueSelect.value === 'select-colleague') {
                            logButton.className = '';
                            pendingDate.className = '';
                        }
                        else {
                            logButton.className = '';
                            pendingDate.className = '';
                            assignButton.className = '';
                            assignedDate.className = '';
                        }
                        checkState('log-ticket');
                        toggleButton(colleagueSelect.value);
                    }
                    else if (colleagueSelect.length === 1) {
                        logButton.className = 'disabled-button';
                        assignButton.className = 'disabled-button';
                        checkState('log-ticket');
                        toggleButton(colleagueSelect.value);
                    }
                    else {
                        checkState('log-ticket');
                        toggleButton(colleagueSelect.value);
                    }
                    if ($(ticketDescription).val() === '') {
                        ticketDescription.style.border = "2px solid ".concat(GetColor_1.GetColor.secondaryDark());
                    }
                    else {
                        ticketDescription.style.border = '';
                    }
                });
                $(closeOverlay).on('click', function () {
                    closeContainer('index-overlay');
                    indexMain.style.display = 'grid';
                });
                $(mainButtons).on('click', function () {
                    if ($(ticketSubject).val() === '') {
                        ticketSubject.style.border = "2px solid ".concat(GetColor_1.GetColor.secondaryDark());
                    }
                    else {
                        ticketSubject.style.border = '';
                    }
                    if ($(ticketDescription).val() === '') {
                        ticketDescription.style.border = "2px solid ".concat(GetColor_1.GetColor.secondaryDark());
                    }
                    else {
                        ticketDescription.style.border = '';
                    }
                });
                checkState('log-ticket');
                console.log('--LogOverlay.js Loaded');
            }
            return initiateEvents;
        }());
        LogOverlay.initiateEvents = initiateEvents;
        function closeContainer(block) {
            var indexHeader = document.querySelector('#index-header');
            var logAticket = indexHeader.querySelector('#log-a-ticket button');
            var container = document.querySelector("#".concat(block));
            var page = block.split('-')[1];
            logAticket.className = '';
            container.style.display = 'none';
            container.innerHTML = '';
            container.className = "default-".concat(page);
        }
    })(LogOverlay = exports.LogOverlay || (exports.LogOverlay = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/LogOverlay.js.map
