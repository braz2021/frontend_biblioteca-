import {Component, Input, OnInit} from '@angular/core';
import {LivroService} from "../../service/livro.service";
import {NgForOf} from "@angular/common";
import {resolve} from "@angular/compiler-cli";

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnInit{
 @Input()livros: any[] = [];

 constructor(private service: LivroService) {
  }

  ngOnInit(): void {
  }

  deletar(id:any) {
    this.service.detelar(id).subscribe(resolve =>{
      this.carregarLivros()
    })
  }


  carregarLivros(){
    this.service.getLivros().subscribe(response =>{
      this.livros=response
    })
  }
}
