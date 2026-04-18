import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  isSubmitting = false;
  submitMessage = '';
  isSuccess = false;
  showPopup = false;

  constructor(private apiService: ApiService) {}

  sendMessage() {
    this.isSubmitting = true;
    this.submitMessage = '';
    
    this.apiService.sendMessage(this.formData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.isSuccess = true;
        this.showPopup = true; // Show popup on success
        this.submitMessage = 'Message sent successfully!';
        this.formData = { name: '', email: '', message: '' }; // Reset form
      },
      error: (error) => {
        this.isSubmitting = false;
        this.isSuccess = false;
        this.submitMessage = 'Failed to send message. Please try again.';
        console.error('Submission error', error);
      }
    });
  }

  closePopup() {
    this.showPopup = false;
  }
}
