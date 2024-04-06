import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private apiUrl = 'http://localhost:3000/livros';

  constructor(private http: HttpClient) {
  }


  getLivros() {
    return this.http.get<any>(this.apiUrl)
  }


  savlar(livros: any) {
    return this.http.post(this.apiUrl, livros )
  }


  detelar(id: any) {
    return this.http.delete(this.apiUrl + "/" + id)
  }


  pesquisaByAutor(autor: string){
    return this.http.get<any>(this.apiUrl +"?nomeAutor="+ autor)
  }

}
