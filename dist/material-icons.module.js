"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_icon_directive_1 = require("./material-icon.directive");
var MaterialIconsModule = (function () {
    function MaterialIconsModule() {
    }
    return MaterialIconsModule;
}());
MaterialIconsModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [material_icon_directive_1.MaterialIcon],
                exports: [material_icon_directive_1.MaterialIcon]
            },] },
];
/** @nocollapse */
MaterialIconsModule.ctorParameters = function () { return []; };
exports.MaterialIconsModule = MaterialIconsModule;
//# sourceMappingURL=material-icons.module.js.map