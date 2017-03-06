"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var lessmuoihaiComponent = (function () {
    function lessmuoihaiComponent() {
        this.cone = true;
        this.ctwo = false;
    }
    lessmuoihaiComponent.prototype.toggle = function () {
        this.cone = !this.cone;
    };
    return lessmuoihaiComponent;
}());
lessmuoihaiComponent = __decorate([
    core_1.Component({
        selector: 'my-ngclass',
        template: "\n    <h2>{{title}}</h2>\n    <p [ngClass]=\"{classone:cone,classtwo:ctwo}\">this is class ng style</p>\n    <button (click)=\"toggle()\"> click </button>\n    ",
        styles: [
            "\n        .classone{\n            color:red;\n        }\n        .classtwo{\n            color:gray;\n        }\n        "
        ]
    })
], lessmuoihaiComponent);
exports.lessmuoihaiComponent = lessmuoihaiComponent;
//# sourceMappingURL=less12.component.js.map