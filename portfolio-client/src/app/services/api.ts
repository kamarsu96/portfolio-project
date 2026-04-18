import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, map } from 'rxjs';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private firestore: Firestore = inject(Firestore);

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any[]> {
    const projectsRef = collection(this.firestore, 'projects');
    return collectionData(projectsRef, { idField: 'id' }) as Observable<any[]>;
  }

  getExperience(): Observable<any[]> {
    const experienceRef = collection(this.firestore, 'experience');
    return collectionData(experienceRef, { idField: 'id' }) as Observable<any[]>;
  }

  sendMessage(data: any): Observable<any> {
    const messagesRef = collection(this.firestore, 'messages');
    return from(addDoc(messagesRef, { ...data, timestamp: new Date() }));
  }
}
