import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonModel } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  registerPatient(formData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/patients/addPatient`, formData);
  }

  searchPatient(cpf: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/patients/${cpf}`);
  }

  updatePatient(person: PersonModel): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/patients/${person.cpf}`, person);
  }

  deletePatient(cpf: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/patients/${cpf}`);
  }

  registerVaccine(formData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/vaccines/addVaccine`, formData)
  }
}
