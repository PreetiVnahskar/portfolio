import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, SafeHtmlPipe],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  form = { name: '', email: '', subject: '', message: '' };
  sent = false;
  year = new Date().getFullYear();
 
  links = [
    {
      label: 'Email',
      value: 'preetivansh1998@gmail.com',
      href: 'mailto:preetivansh1998@gmail.com',
      external: false,
      color: 'email',
      iconViewBox: '0 0 24 24',
      iconPath: '<rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" fill="none" stroke="currentColor" stroke-width="1.5"/>'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/preeti-banshkar-308432256',
      href: 'https://linkedin.com/in/preeti-banshkar-308432256',
      external: true,
      color: 'linkedin',
      iconViewBox: '0 0 24 24',
      iconPath: '<path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>'
    },
    {
      label: 'Phone',
      value: '+91 9479752165',
      href: 'tel:+919479752165',
      external: false,
      color: 'phone',
      iconViewBox: '0 0 24 24',
      iconPath: '<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.13 1.19 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" fill="none" stroke="currentColor" stroke-width="1.5"/>'
    },
    {
      label: 'GitHub',
      value: 'github.com/preetibanshkar',
      href: 'https://github.com/PreetiVnahskar',
      external: true,
      color: 'github',
      iconViewBox: '0 0 24 24',
      iconPath: '<path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013.01-.4c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>'
    }
  ];
 
   send() {
    if (!this.form.name || !this.form.email || !this.form.message) return;

    emailjs
      .send(
        'service_jeqbyql',
        'template_udzfsqp',
        {
          name: this.form.name,
          email: this.form.email,
          message: this.form.message,
        },
        'NtnKbmTiEwqAaoGvJ',
      )
      .then((response) => {
        console.log('SUCCESS', response);
        this.sent = true;
      })
      .catch((error) => {
        console.error('FULL ERROR:', error);
        alert('❌ Failed to send email');
      });
  }
}

 

