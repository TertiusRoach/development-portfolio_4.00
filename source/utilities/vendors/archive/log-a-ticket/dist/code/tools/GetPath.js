define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetPath = void 0;
    var GetPath;
    (function (GetPath) {
        function forHTML(path) {
            switch (path) {
                case 'body':
                    return 'html/index-body/';
                case 'header':
                    return 'html/index-header/';
                case 'main':
                    return 'html/index-main/';
                case 'sidebar':
                    return 'html/index-sidebar/';
                case 'overlay':
                    return 'html/index-overlay/';
                case 'data':
                    return 'html/index-data/';
            }
        }
        GetPath.forHTML = forHTML;
    })(GetPath = exports.GetPath || (exports.GetPath = {}));
});

//# sourceMappingURL=dist/code/tools/GetPath.js.map
