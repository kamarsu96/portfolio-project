import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {}

  // Static portfolio data (replace with your real data)
  getProjects(): Observable<any[]> {
    return of([
      {
        id: 1,
        title: 'Portfolio Website',
        description: 'Personal portfolio built with Angular',
      },
      {
        id: 2,
        title: 'Reporting Dashboard',
        description: 'Dynamic reporting system with filters',
      }
    ]);
  }

  getExperience(): Observable<any[]> {
    return of([
      {
        id: 1,
        role: 'Angular Developer',
        company: 'Your Company',
        duration: '2022 - Present'
      }
    ]);
  }

  sendMessage(data: any): Observable<any> {
    console.log('Message sent:', data);
    return of({ success: true });
  }
}