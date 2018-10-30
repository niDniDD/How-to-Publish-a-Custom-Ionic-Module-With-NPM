var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { AcademyComponent } from './components/academy-component';
import { AcademyProvider } from './providers/academy-provider';
import { IonicModule } from '@ionic/angular';
var IonicAcademyModule = /** @class */ (function () {
    function IonicAcademyModule() {
    }
    IonicAcademyModule_1 = IonicAcademyModule;
    IonicAcademyModule.forRoot = function () {
        return {
            ngModule: IonicAcademyModule_1,
            providers: [AcademyProvider]
        };
    };
    var IonicAcademyModule_1;
    IonicAcademyModule = IonicAcademyModule_1 = __decorate([
        NgModule({
            imports: [
                // Only if you use elements like ion-content, ion-xyz...
                IonicModule
            ],
            declarations: [
                // declare all components that your module uses
                AcademyComponent
            ],
            exports: [
                // export the component(s) that you want others to be able to use
                AcademyComponent
            ]
        })
    ], IonicAcademyModule);
    return IonicAcademyModule;
}());
export { IonicAcademyModule };
//# sourceMappingURL=ionic-academy.module.js.map