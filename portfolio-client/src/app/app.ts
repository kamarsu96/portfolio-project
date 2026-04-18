import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-client');

  ngOnInit() {
    // Dynamic import to avoid SSR issues if any (standard practice, though this is CSR)
    import('aos').then(AOS => {
      AOS.init({
        duration: 800,
        once: true,
        mirror: false,
        offset: 100
      });
    });
  }
}
