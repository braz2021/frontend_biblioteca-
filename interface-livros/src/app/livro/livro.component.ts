import {Component, OnInit} from "@angular/core";
import {LivroService} from "../service/livro.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ListaLivrosComponent} from "./lista-livros/lista-livros.component";

@Component({
  selector: 'app-formulario-livro',
  templateUrl: "./livro.component.html",
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ListaLivrosComponent
  ],
  standalone: true
})
export class LivroComponent implements OnInit {

  livro: any;
  formLivro!: FormGroup;
  livros: any[] = [];


  constructor(private service: LivroService,
              private formBiuld: FormBuilder) {
  }


  submitForm() {
    // Aqui você pode implementar a lógica para enviar os dados do formulário
    this.service.savlar(this.formLivro.value).subscribe(response => {
      this.livro = response;
      this.carregarLivros()
      this.formLivro.reset()
    })
  }

  ngOnInit(): void {

    this.formLivro = this.formBiuld.group({
      categoria: [null, Validators.required],
      nomeAutor: [null, Validators.required],
      editora: [null, Validators.required],
      versao: [null, Validators.required],
    })

    this.carregarLivros()

  }

  carregarLivros(){
    this.service.getLivros().subscribe(response =>{
      this.livros=response
    })
  }


}
