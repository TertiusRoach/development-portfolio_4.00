define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UseDatefy = void 0;
    var UseDatefy;
    (function (UseDatefy) {
        function forToday(format) {
            var presentDate = Date();
            var monthDay = presentDate.split(' ')[2];
            var weekdayEN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var weekdagAF = ['Sondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrydag', 'Saterdag'];
            var weekday = weekdayEN[new Date().getDay()];
            var weekdag = weekdagAF[new Date().getDay()];
            var monthEN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var maandAF = ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'];
            var month = monthEN[new Date().getMonth()];
            var maand = maandAF[new Date().getMonth()];
            var monthNumber = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
            var monthNumerical = monthNumber[new Date().getMonth()];
            var year = presentDate.split(' ')[3];
            switch (format) {
                case '2000-01-01':
                    return "".concat(year, "-").concat(monthNumerical, "-").concat(monthDay);
                case 'Weekday, 00 Month YYYY':
                    return "".concat(weekday, ", ").concat(monthDay, " ").concat(month, " ").concat(year);
                case '00 Weekday, Month YYYY':
                    return "".concat(monthDay, " ").concat(weekday, ", ").concat(month, " ").concat(year);
                default:
                    return 'No function for selected format';
            }
        }
        UseDatefy.forToday = forToday;
    })(UseDatefy = exports.UseDatefy || (exports.UseDatefy = {}));
});

//# sourceMappingURL=dist/code/tools/UseDatefy.js.map
