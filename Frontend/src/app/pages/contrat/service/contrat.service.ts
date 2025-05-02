import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  private baseUrl = 'http://localhost:8081/api/contrat'; 
  constructor(private http: HttpClient) { }
  create(contrat: any , clientId:number , commercialId:number): Observable<any> {
    const url = `${this.baseUrl}/${clientId}/${commercialId}`;
    return this.http.post<any>(url, contrat);
  }

  update(id: number, contrat: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<any>(url, contrat);
  }

  findById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<any>(url);
  }

  findAll(): Observable<any[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<any[]>(url);
  }

  delete(id: number): any { // pas boolean, ton backend retourne une ResponseEntity<String>
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }

  findByClientId(clientId: string): Observable<any[]> {
    const url = `${this.baseUrl}/client/${clientId}`;
    return this.http.get<any[]>(url);
  }

  findByCommercialId(commercialId: string): Observable<any[]> {
    const url = `${this.baseUrl}/commercial/${commercialId}`;
    return this.http.get<any[]>(url);
  }

  getRendezVousByClientId(clientId: string): Observable<any[]> {
    const url = `${this.baseUrl}/filter?clientId=${clientId}`; 
    return this.http.get<any[]>(url);
  }

  updateStatus(commercialId: number, rendezVousId: number, status: string) {
    const url = `${this.baseUrl}/updateStatus/${commercialId}/${rendezVousId}/${status}`;
    return this.http.put(url, {});
  }

  updateStatusCommercial(rendezVousId: number, status: string) {
    const url = `${this.baseUrl}/updateStatus/${rendezVousId}/${status}`; 
    return this.http.put(url, {}); 
  }



}