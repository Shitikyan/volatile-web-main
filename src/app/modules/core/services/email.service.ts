import { Injectable } from '@angular/core';
import { environment } from '@env';
import { send, EmailJSResponseStatus } from 'emailjs-com';

@Injectable({ providedIn: 'root' })
export class EmailService {
  private readonly emailServiceID: string = environment.emailServiceID;
  private readonly emailTemplateID: string = environment.emailTemplateID;
  private readonly emailUserID: string = environment.emailUserID;

  public submitEmail(form: any, event: any) {
    send(this.emailServiceID, this.emailTemplateID, form, this.emailUserID)
      .then((response: EmailJSResponseStatus) => {
        console.log(response);
        event.target.reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch((error) => console.log(error));
  }
}
