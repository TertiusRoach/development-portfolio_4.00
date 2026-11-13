define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CloseView = void 0;
    var CloseView;
    (function (CloseView) {
        function initiateCode(containerJS) {
            var activeTicketJS = document.querySelector('.active-ticket');
            var clearContainer = function () {
                containerJS.innerHTML = '';
                containerJS.className = '';
                containerJS.style.display = 'none';
                containerJS.className = 'default-overlay';
                activeTicketJS.classList.remove('active-ticket');
            };
            $('#close-overlay').on('click', function () {
                clearContainer();
            });
            $('#overlay-background').on('click', function () {
                clearContainer();
            });
        }
        CloseView.initiateCode = initiateCode;
    })(CloseView = exports.CloseView || (exports.CloseView = {}));
});

//# sourceMappingURL=dist/code/tools/~Sort Out/CloseView.js.map
