import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input()
  public libelle = '';
  @Input()
  public type = 'button';
  @Input()
  public icon = null;
  @Input()
  public mdlType = 'raised';
  @Input()
  public mdlColor = '';
  @Input()
  public disabled = false;
  @Output()
  public clicked = new EventEmitter<any>();

  constructor() { }

  onclicked($event): void {
    this.clicked.emit('clicked');
  }

}
