import { Component, OnInit, Input, forwardRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

import { RadioModel } from './radio-model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(()=> RadioComponent), multi: true }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioModel[]

  value: any

  onChange: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value:any) {
    this.value = value
    this.onChange(this.value)
  }

  writeValue(obj: any) {
    this.value = obj
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}

}
