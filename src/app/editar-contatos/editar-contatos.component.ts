import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-editar-contatos',
  templateUrl: './editar-contatos.component.html',
  styleUrls: ['./editar-contatos.component.sass']
})
export class EditarContatosComponent implements OnInit {

  contato: any = {
    tipo: null
  };

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private service: ContatoService) { }

  ngOnInit() {
    let idContato = this.activatedRoute.snapshot.paramMap.get("idContato");
    this.contato = this.service.getContatosPorId(idContato);
  }

  salvarContato() {
    this.service.editarContato(this.contato);
    this.router.navigate(['/detalhes']);
  }

}
