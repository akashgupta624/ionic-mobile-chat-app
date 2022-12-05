import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string;
  @Input() type: string;
  @Input() disabled: boolean = false;
  @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>();

  onClick(): void {
    this.clickEvent.emit();
  }
}
