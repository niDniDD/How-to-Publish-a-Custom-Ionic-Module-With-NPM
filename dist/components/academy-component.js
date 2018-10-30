var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var HTML_TEMPLATE = "\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Ionic Academy\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n \n<div class=\"special-text\">Welcome to the special Ionic Academy Module!</div>\n  <ion-button full icon-left (click)=\"leavePage()\">\n    leave\n  Close the Page</ion-button>\n</ion-content>\n";
var CSS_STYLE = "\n.special-text {\n    font-weight: 800;\n    font-size: 15pt;\n    text-align: center;\n    color: #0000FF;\n}\n";
var AcademyComponent = /** @class */ (function () {
    function AcademyComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AcademyComponent.prototype.leavePage = function () {
        this.navCtrl.goBack();
    };
    AcademyComponent = __decorate([
        Component({
            selector: 'academy-component',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE]
        }),
        __metadata("design:paramtypes", [NavController])
    ], AcademyComponent);
    return AcademyComponent;
}());
export { AcademyComponent };
//# sourceMappingURL=academy-component.js.map