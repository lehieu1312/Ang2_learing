import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'my-tutorial',
    template: `
    <p>hello: {{name}} </p>
    <button [disabled]="voted" (click)="vote(true)">Agree</button>
    <button [disabled]="voted" (click)="vote(false)">DisAgree</button>
    <br>
    result: {{voted}}
    `
})
export class TutorialComponent {
    @Input() name: string;

    @Output() onvote = new EventEmitter<Boolean>();
    public voted: boolean = false;
    
    setName(name: string) {
        this.name = name;
    }
    vote(agree: boolean) {
        this.voted = true;
        this.onvote.emit(agree);

    }

}