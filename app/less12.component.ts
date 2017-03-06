import {Component} from '@angular/core';


@Component({
    selector:'my-ngclass',
    template:`
    <h2>{{title}}</h2>
    <p [ngClass]="{classone:cone,classtwo:ctwo}">this is class ng style</p>
    <button (click)="toggle()"> click </button>
    `,
    styles:[
        `
        .classone{
            color:red;
        }
        .classtwo{
            color:gray;
        }
        `
    ]
})
export class lessmuoihaiComponent{
public cone:boolean=true;
public ctwo:boolean=false;
toggle(){
    this.cone=!this.cone;
}
}