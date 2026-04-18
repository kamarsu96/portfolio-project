import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent implements OnInit {
  private apiService = inject(ApiService);
  experience = signal<any[]>([]);
  isLoading = signal(true);

  ngOnInit() {
    this.apiService.getExperience().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
           this.experience.set(data);
        } else {
           this.setFallbackExperience();
        }
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error fetching experience', err);
        this.setFallbackExperience();
        this.isLoading.set(false);
      }
    });
  }

  private setFallbackExperience() {
    this.experience.set([
      {
        role: "Front-End Developer | Software Engineer",
        company: "Finsol Consultancy",
        duration: "July 2022 — Present",
        isCurrent: true,
        description: [
          "Developing scalable enterprise web applications, mentoring junior developers, and optimizing UI performance."
        ]
      }
    ]);
  }
}
