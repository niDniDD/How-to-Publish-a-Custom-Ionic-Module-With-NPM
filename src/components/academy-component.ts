import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

const HTML_TEMPLATE = `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Ionic Academy
    </ion-title>
  </ion-toolbar>
</ion-header>
 
<ion-content padding>
 
<div class="special-text">Welcome to the special Ionic Academy Module!</div>
  <ion-button full icon-left (click)="leavePage()">
    leave
  Close the Page</ion-button>
</ion-content>
`;

const CSS_STYLE = `
.special-text {
    font-weight: 800;
    font-size: 15pt;
    text-align: center;
    color: #0000FF;
}
`;

@Component({
  selector: 'academy-component',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class AcademyComponent {
  constructor(private navCtrl: NavController) { }

  leavePage() {
    this.navCtrl.goBack();
  }
}