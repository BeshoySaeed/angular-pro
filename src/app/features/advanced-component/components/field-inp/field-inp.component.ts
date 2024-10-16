import { Component, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-field-inp',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './field-inp.component.html',
  styleUrl: './field-inp.component.scss',
})
export class FieldInpComponent {
  form: FormGroup;
  outputSignal = output();
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      text: '',
    });
  }

  onSubmit() {
    // console.log(this.form.value);
    this.outputSignal.emit(this.form.value);
  }
}
