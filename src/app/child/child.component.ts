import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() item = '';
  @Input() userData: { name: string; email: string } = { name: '', email: '' };
  @Output() updateDataEvent = new EventEmitter<string>();
}
