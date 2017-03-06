"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var tutorial_component_1 = require("./tutorial.component");
var AppComponent = (function () {
    function AppComponent() {
        this.dagree = 0;
        this.ddisagree = 0;
        this.names = ['Nam', 'Ha', 'Thuy', 'Hung', 'Hue'];
    }
    AppComponent.prototype.oneclick = function () {
        console.log("hi!");
    };
    AppComponent.prototype.parentVote = function (agree) {
        if (agree)
            this.dagree++;
        else
            this.ddisagree++;
    };
    AppComponent.prototype.changeName = function () {
        this.tutorialComponent.setName('i going to build');
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(tutorial_component_1.TutorialComponent),
    __metadata("design:type", tutorial_component_1.TutorialComponent)
], AppComponent.prototype, "tutorialComponent", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>Wellcom hieu to tutorial</h1>\n  <input type=\"text\" #textName (keyup)=\"0\" />\n  <button type=\"button\" (click)=\"changeName()\">Change Name</button>\n  Agree number:{{dagree}}   DisAgree number:{{ddisagree}}\n <my-tutorial *ngFor=\"let item of names\" [name]=\"item\" (onvote)=\"parentVote($event)\"></my-tutorial>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map