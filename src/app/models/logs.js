"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("./shared");
var BaseLog = /** @class */ (function (_super) {
    __extends(BaseLog, _super);
    function BaseLog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BaseLog;
}(shared_1.BaseModel));
exports.BaseLog = BaseLog;
//# sourceMappingURL=logs.js.map