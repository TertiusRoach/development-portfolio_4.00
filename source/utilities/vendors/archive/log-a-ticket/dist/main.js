define(["require", "exports", "code/tools/GetEvent", "code/tools/GetPath"], function (require, exports, GetEvent_1, GetPath_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Start = void 0;
    var Start;
    (function (Start) {
        var indexBody = document.querySelector('#index-body');
        var indexHeader = document.querySelector('#index-header');
        var indexMain = document.querySelector('#index-main');
        var indexSidebar = document.querySelector('#index-sidebar');
        var indexOverlay = document.querySelector('#index-overlay');
        var indexData = document.querySelector('#index-data');
        new GetEvent_1.GetEvent.forPage('default-body', GetPath_1.GetPath.forHTML('body'));
    })(Start = exports.Start || (exports.Start = {}));
});

//# sourceMappingURL=dist/main.js.map
