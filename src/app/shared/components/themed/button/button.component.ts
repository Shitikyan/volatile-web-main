import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() iconPos: string = 'left';
  @Input() icon: string;
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() style: any;
  @Input() styleClass: string;
  @Input() badgeClass: string;
  @Input() type: string;
  @Input() class: string;
  @Input() submit: boolean;
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
