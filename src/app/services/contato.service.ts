import { Injectable } from '@angular/core';

import { Contato } from '../models/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  contatos: Contato[] = [];

  constructor() {

    this.contatos.push(new Contato(1,
                                  'Theo Victors',
                                  47987654321,
                                  'theo@theo.com',
                                  ['Amigo da Família']));
    this.contatos.push(new Contato(2,
                                  'João Paulo Hotequil',
                                  47987654321,
                                  'joao@joao.com',
                                  ['Aluno da Apex']));
  }

  getContatos(){
    return this.contatos;
  }

  getContatosPorId(idContato){
    for(let index = 0; index < this.contatos.length; index++){
      if(idContato == this.contatos[index].id){
        return this.contatos[index];
      }
    }
  }

  excluirPorId(idContato){
    for(let index = 0; index < this.contatos.length; index++){
      if(idContato == this.contatos[index].id){
        this.contatos.splice(index, 1);
        break;
      }
    }
  }

  salvarContatos(contato){
    let id = (this.contatos.length + 1);
    contato.id = id;
    this.contatos.push(contato);
  }

  editarContato(contato) {
    for(let i = 0; i < this.contatos.length; i++) {
      if (contato.id == this.contatos[i].id) {
        this.contatos[i] = contato;
      }
    }
  }

}

