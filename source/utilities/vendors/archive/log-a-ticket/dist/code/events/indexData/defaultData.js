define(["require", "exports", "code/tools/DataCreate"], function (require, exports, DataCreate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultData = void 0;
    var DefaultData;
    (function (DefaultData) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new DataCreate_1.DataCreate.forBlock('departments');
                new DataCreate_1.DataCreate.forBlock('employees');
                new DataCreate_1.DataCreate.forBlock('tickets');
            }
            return initiateEvents;
        }());
        DefaultData.initiateEvents = initiateEvents;
    })(DefaultData = exports.DefaultData || (exports.DefaultData = {}));
});

//# sourceMappingURL=dist/code/events/indexData/defaultData.js.map
