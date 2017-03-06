import { Component, ViewChild } from '@angular/core';
import { TutorialComponent } from './tutorial.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>Wellcom hieu to tutorial</h1>
  <input type="text" #textName (keyup)="0" />
  <button type="button" (click)="changeName()">Change Name</button>
  Agree number:{{dagree}}   DisAgree number:{{ddisagree}}
 <my-tutorial *ngFor="let item of names" [name]="item" (onvote)="parentVote($event)"></my-tutorial>
  `
})
export class AppComponent {
  public dagree: number = 0;
  public ddisagree: number = 0;
  public names = ['Nam', 'Ha', 'Thuy', 'Hung', 'Hue']

  @ViewChild(TutorialComponent)
  private tutorialComponent: TutorialComponent;
  
  oneclick() {
    console.log("hi!");
  }
  parentVote(agree: boolean) {
    if (agree) this.dagree++;
    else this.ddisagree++;
  }
  changeName(){
        this.tutorialComponent.setName('i going to build');
    }
}
