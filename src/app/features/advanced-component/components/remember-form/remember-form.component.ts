import { CommonModule } from '@angular/common';
import { Component, Input, output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-remember-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './remember-form.component.html',
  styleUrl: './remember-form.component.scss',
})
export class RememberFormComponent {
  @Input() contentTemplate?: TemplateRef<any>;

  form: FormGroup;
  outputSignal = output<boolean>();
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      remember: false,
    });

    this.form.controls['remember'].valueChanges.subscribe((res) => {
      this.outputSignal.emit(this.form.controls['remember'].value);
    });
  }

  onSubmit() {
    // console.log(this.form.value);
    // this.outputSignal.emit(this.form.value);
  }
}
