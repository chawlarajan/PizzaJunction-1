'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiPath = 'http://localhost:5000/api/';
var GSTAmount = 5;
var Globals = (function () {
    function Globals() {
        this.generateArray = function (menuItems) {
            var arr = [];
            if (menuItems) {
                Object.keys(menuItems.items).map(function (id) { return arr.push(menuItems.items[id]); });
            }
            return arr;
        };
    }
    Globals.prototype.getGSTAmount = function () {
        return GSTAmount;
    };
    ;
    return Globals;
}());
exports.Globals = Globals;
//# sourceMappingURL=global.js.map