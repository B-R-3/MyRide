import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moto } from '../../models/moto.model';

@Injectable({
  providedIn: 'root'
})
export class MotoService {
  private apiUrl = 'http://localhost:8080/api/motos';

  constructor(private http: HttpClient) {}

  getMotos(): Observable<Moto[]> {
    return this.http.get<Moto[]>(this.apiUrl);
  }

  getMoto(id: number): Observable<Moto> {
    return this.http.get<Moto>(`${this.apiUrl}/${id}`);
  }

  createMoto(moto: Moto): Observable<Moto> {
    return this.http.post<Moto>(this.apiUrl, moto);
  }

  updateMoto(id: number, moto: Moto): Observable<Moto> {
    return this.http.put<Moto>(`${this.apiUrl}/${id}`, moto);
  }

  deleteMoto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
