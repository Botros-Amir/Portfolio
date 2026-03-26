import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form = { name: '', email: '', subject: '', message: '' };
  submitted = signal(false);

  onSubmit() {
    // Wire up to your backend / EmailJS / Formspree here
    console.log('Form submitted:', this.form);
    this.submitted.set(true);
  }
}
