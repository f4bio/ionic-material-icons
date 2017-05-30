"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaterialIcon = (function () {
    function MaterialIcon(el) {
        this.el = el;
    }
    Object.defineProperty(MaterialIcon.prototype, "mdName", {
        set: function (val) {
            this.el.nativeElement.innerHTML = val;
        },
        enumerable: true,
        configurable: true
    });
    return MaterialIcon;
}());
MaterialIcon.decorators = [
    { type: core_1.Directive, args: [{
                selector: "ion-icon[md-name]"
            },] },
];
/** @nocollapse */
MaterialIcon.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
MaterialIcon.propDecorators = {
    'mdName': [{ type: core_1.Input, args: ["md-name",] },],
};
exports.MaterialIcon = MaterialIcon;
//# sourceMappingURL=material-icon.directive.js.map