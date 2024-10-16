import { Component, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-remember-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './remember-form.component.html',
  styleUrl: './remember-form.component.scss',
})
export class RememberFormComponent {
  form: FormGroup;
  outputSignal = output();
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      remember: false,
    });
  }

  onSubmit() {
    // console.log(this.form.value);
    this.outputSignal.emit(this.form.value);
  }
}
