define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UseValufy = void 0;
    var UseValufy;
    (function (UseValufy) {
        function forString(text) {
            var arrayString = text.split(' ');
            var arrayTotal = arrayString.length;
            switch (arrayTotal) {
                case 1:
                    return "".concat(arrayString[0].toLowerCase());
                case 2:
                    return "".concat(arrayString[0].toLowerCase(), "-").concat(arrayString[1].toLowerCase());
                case 3:
                    return "".concat(arrayString[0].toLowerCase(), "-").concat(arrayString[1].toLowerCase(), "-").concat(arrayString[2].toLowerCase());
                case 4:
                    return "".concat(arrayString[0].toLowerCase(), "-").concat(arrayString[1].toLowerCase(), "-").concat(arrayString[2].toLowerCase(), "-").concat(arrayString[3].toLowerCase());
                case 5:
                    return "".concat(arrayString[0].toLowerCase(), "-").concat(arrayString[1].toLowerCase(), "-").concat(arrayString[2].toLowerCase(), "-").concat(arrayString[3].toLowerCase(), "-").concat(arrayString[4].toLowerCase());
            }
        }
        UseValufy.forString = forString;
    })(UseValufy = exports.UseValufy || (exports.UseValufy = {}));
});

//# sourceMappingURL=dist/code/tools/UseValufy.js.map
