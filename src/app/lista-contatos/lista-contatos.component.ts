import { Component, OnInit } from '@angular/core';
import { Contato } from '../models/contato';
import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.sass']
})
export class ListaContatosComponent implements OnInit {

  mensagem = 'Sem Informação';

  constructor(private contatos: ContatoService) { }

  ngOnInit() {}

  listar(){
    return this.contatos.getContatos();
  }

}
