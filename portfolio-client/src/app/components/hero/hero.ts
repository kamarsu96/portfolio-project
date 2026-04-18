import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {
  showResumeMenu = false;

  constructor(public router: Router) {}

  toggleResumeMenu() {
    this.showResumeMenu = !this.showResumeMenu;
  }

  navigateToProjects() {
    this.router.navigate(['/projects']);
  }
}
