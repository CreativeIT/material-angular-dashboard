import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-employer-form',
  styleUrls: ['./employer-form.component.scss'],
  templateUrl: 'employer-form.component.html',
})
export class EmployerFormComponent {
  @HostBinding('class.employer-form') private readonly employerForm = true;
}
