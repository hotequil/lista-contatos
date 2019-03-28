import { Component, OnInit } from '@angular/core';
import { Contato } from '../models/contato';
import { ContatoService } from '../services/contato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-contatos',
  templateUrl: './adicionar-contatos.component.html',
  styleUrls: ['./adicionar-contatos.component.sass']
})
export class AdicionarContatosComponent implements OnInit {

  contato: any = {
    tipo: null
  };

  constructor(private contatoService: ContatoService, private router: Router) { }

  ngOnInit() {
  }

  enviarFormulario() {
    const { nome, telefone, email, tipo } = this.contato;
    let contato = new Contato(null, nome, telefone, email, tipo);
    this.contatoService.salvarContatos(contato);
    this.router.navigate(['/'])
  }

}
