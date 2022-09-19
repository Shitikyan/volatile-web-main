import { Component, OnInit } from '@angular/core';
import { EmailService } from '@modules/core/services/email.service';
import { Validators } from '@volatile-solutions/ng-core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  public firstName: string;
  public email: string;
  public phone: string;
  public company: string;
  public subject: string;
  public message: string;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {}

  get validator() {
    return Validators;
  }

  private getEmailForm() {
    const emailForm = {
      name: this.firstName,
      email: this.email,
      phone: this.phone,
      company: this.company,
      subject: this.subject,
      message: this.message,
    };
    return emailForm;
  }

  submit(form: any, e: Event) {
    e.preventDefault();
    const emailForm = this.getEmailForm();
    if(form.valid) this.emailService.submitEmail(emailForm, e);
  }
}
