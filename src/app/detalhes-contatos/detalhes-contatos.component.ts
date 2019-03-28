import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../services/contato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-contatos',
  templateUrl: './detalhes-contatos.component.html',
  styleUrls: ['./detalhes-contatos.component.sass']
})
export class DetalhesContatosComponent implements OnInit {

  constructor(private contatos: ContatoService, private router: Router, private service: ContatoService) { }

  ngOnInit() {
  }

  listar(){
    return this.contatos.getContatos();
  }

  excluirContato(contatoId){
    this.service.excluirPorId(contatoId);
  }

}
