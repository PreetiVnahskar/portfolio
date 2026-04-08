import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  form = { name: '', email: '', message: '' };
  sent = false;
  year = new Date().getFullYear();

  links = [
    {
      label: 'Email',
      value: 'preetivansh1998@gmail.com',
      href: 'mailto:preetivansh1998@gmail.com',
      external: false,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>`,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/preeti-banshkar-308432256',
      href: 'https://linkedin.com/in/preeti-banshkar-308432256',
      external: true,
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>`,
    },
    {
      label: 'Phone',
      value: '+91 9479752165',
      href: 'tel:+919479752165',
      external: false,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.13 1.19 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
    },
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
