// for testing form, the first thing that we need to check is that the form is created and initialized with the formcontrols.
// after that we should test the validators

import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should make the name control required', () => {
    let control = component.form.get('name');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });
});
