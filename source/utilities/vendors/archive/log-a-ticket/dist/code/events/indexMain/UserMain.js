define(["require", "exports", "code/tools/DataRead", "code/tools/GetColor", "code/tools/GetEvent", "code/tools/GetPath"], function (require, exports, DataRead_1, GetColor_1, GetEvent_1, GetPath_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserMain = void 0;
    var UserMain;
    (function (UserMain) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new DataRead_1.DataRead.forMain('user-main', 'assigned');
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var indexMain = document.querySelector('#index-main');
                var ticketsMain = indexMain.querySelector('#tickets-container');
                var ticketMain = ticketsMain.getElementsByTagName('article');
                var openEmployees = indexMain.querySelector('#open-employees');
                var assignedTab = indexMain.querySelector('#assigned-tab');
                var resolvedTab = indexMain.querySelector('#resolved-tab');
                var deletedTab = indexMain.querySelector('#deleted-tab');
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var indexData = document.querySelector('#index-data');
                function countTickets(tab) {
                    var ticketsNotification = indexMain.querySelector('#user-notification h2');
                    var ticketsContainer = indexMain.querySelector('#tickets-container');
                    switch (tab) {
                        case 'pending':
                            var pendingTotal = ticketsContainer.getElementsByClassName('pending').length;
                            ticketsNotification.style.background = "".concat(GetColor_1.GetColor.pendingDefault());
                            ticketsNotification.textContent = "".concat(pendingTotal);
                            break;
                        case 'assigned':
                            var assignedTotal = ticketsContainer.getElementsByClassName('assigned').length;
                            ticketsNotification.style.background = "".concat(GetColor_1.GetColor.assignedDefault());
                            ticketsNotification.textContent = "".concat(assignedTotal);
                            break;
                        case 'resolved':
                            var resolvedTotal = ticketsContainer.getElementsByClassName('resolved').length;
                            ticketsNotification.style.background = "".concat(GetColor_1.GetColor.resolvedDefault());
                            ticketsNotification.textContent = "".concat(resolvedTotal);
                            break;
                        case 'deleted':
                            var deletedTotal = ticketsContainer.getElementsByClassName('deleted').length;
                            ticketsNotification.style.background = "".concat(GetColor_1.GetColor.deletedDefault());
                            ticketsNotification.textContent = "".concat(deletedTotal);
                            break;
                        case 'everything':
                            var everythingTotal = ticketsContainer.getElementsByTagName('article').length;
                            ticketsNotification.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                            ticketsNotification.textContent = "".concat(everythingTotal);
                            break;
                        case 'active':
                            var activeTab = ticketsContainer.classList[0];
                            var activeStatus = activeTab.split('-')[0];
                            var activeTotal = ticketsContainer.getElementsByClassName("".concat(activeStatus)).length;
                            var backgroundColor = void 0;
                            if (activeStatus === 'pending') {
                                backgroundColor = GetColor_1.GetColor.pendingDefault();
                            }
                            else if (activeStatus === 'assigned') {
                                backgroundColor = GetColor_1.GetColor.assignedDefault();
                            }
                            else if (activeStatus === 'resolved') {
                                backgroundColor = GetColor_1.GetColor.resolvedDefault();
                            }
                            else if (activeStatus === 'deleted') {
                                backgroundColor = GetColor_1.GetColor.deletedDefault();
                            }
                            else if (activeStatus === 'everything') {
                                backgroundColor = GetColor_1.GetColor.primaryDark();
                            }
                            ticketsNotification.style.background = "".concat(backgroundColor);
                            ticketsNotification.textContent = "".concat(activeTotal);
                            break;
                    }
                }
                $(assignedTab)
                    .on('click', function () {
                    ticketsMain.className = 'assigned-tickets';
                })
                    .on('mouseenter', function () {
                    countTickets('assigned');
                })
                    .on('mouseleave', function () {
                    countTickets('active');
                });
                $(resolvedTab)
                    .on('click', function () {
                    ticketsMain.className = 'resolved-tickets';
                })
                    .on('mouseenter', function () {
                    countTickets('resolved');
                })
                    .on('mouseleave', function () {
                    countTickets('active');
                });
                $(deletedTab)
                    .on('click', function () {
                    ticketsMain.className = 'deleted-tickets';
                })
                    .on('mouseenter', function () {
                    countTickets('deleted');
                })
                    .on('mouseleave', function () {
                    countTickets('active');
                });
                $(ticketMain).on('click', function () {
                    var activeTicket = document.querySelector('.active-ticket');
                    var activeStatus = activeTicket.classList[0];
                    new GetEvent_1.GetEvent.forPage("user-".concat(activeStatus), GetPath_1.GetPath.forHTML('overlay'));
                    indexOverlay.style.display = 'grid';
                });
                $(openEmployees).on('click', function () {
                    indexSidebar.style.display = 'grid';
                });
                countTickets('active');
            }
            return initiateEvents;
        }());
        UserMain.initiateEvents = initiateEvents;
    })(UserMain = exports.UserMain || (exports.UserMain = {}));
});

//# sourceMappingURL=dist/code/events/indexMain/UserMain.js.map
