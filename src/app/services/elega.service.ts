import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElegaService {
  urlElegaLocal = environment.urlElegaLocal;// enlace de app local
  urlElegaRemota = environment.urlElegaRemota;// enlace de app remota

  constructor(private httpClient: HttpClient) { }
}
