import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label: string;
  @Input() type = 'text'; // set default type be text
  @Input() id: string;
  @Input() value: string = '';
  @Input() maxLength: string = '100';
  @Output() inputText: EventEmitter<string>= new EventEmitter<string>();

  @Output() input: EventEmitter<string>= new EventEmitter<string>();
  focused: boolean;

  onBlur(event: any) {
     this.value = event.target.value;
     this.inputText.emit(this.value);

    if (!this.value) {
      this.focused = false;
    }
  }

  onInput(value: string): void {
    this.input.emit(this.value);
  }
}
