define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UseCapify = void 0;
    var UseCapify;
    (function (UseCapify) {
        function forString(splitAt, text) {
            switch (splitAt) {
                case '-':
                    var splitHyphen = text.split('-');
                    if (splitHyphen.length === 2) {
                        var hyphenFirst = "".concat(splitHyphen[0].charAt(0).toUpperCase() + splitHyphen[0].slice(1));
                        var hyphenSecond = "".concat(splitHyphen[1].charAt(0).toUpperCase() + splitHyphen[1].slice(1));
                        return "".concat(hyphenFirst, " ").concat(hyphenSecond);
                    }
                    else {
                        return "".concat(splitHyphen[0].charAt(0).toUpperCase() + splitHyphen[0].slice(1));
                    }
                case ' ':
                    var splitSpace = text.split(' ');
                    if (splitSpace.length > 1) {
                        var spaceFirst = "".concat(splitSpace[0].charAt(0).toUpperCase() + splitSpace[0].slice(1));
                        var spaceSecond = "".concat(splitSpace[1].charAt(0).toUpperCase() + splitSpace[1].slice(1));
                        return "".concat(spaceFirst, " ").concat(spaceSecond);
                    }
                    else {
                        return "".concat(splitSpace[0].charAt(0).toUpperCase() + splitSpace[0].slice(1));
                    }
            }
        }
        UseCapify.forString = forString;
    })(UseCapify = exports.UseCapify || (exports.UseCapify = {}));
});

//# sourceMappingURL=dist/code/tools/UseCapify.js.map
