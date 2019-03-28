import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';
import { AdicionarContatosComponent } from './adicionar-contatos/adicionar-contatos.component';
import { DetalhesContatosComponent } from './detalhes-contatos/detalhes-contatos.component';
import { EditarContatosComponent } from './editar-contatos/editar-contatos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaContatosComponent,
    AdicionarContatosComponent,
    DetalhesContatosComponent,
    EditarContatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ListaContatosComponent},
      { path: 'cadastrar', component: AdicionarContatosComponent},
      { path: 'detalhes', component: DetalhesContatosComponent},
      { path: 'editar/:idContato', component: EditarContatosComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
