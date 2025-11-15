import { Routes } from '@angular/router';
import { ListaConteudosComponent } from './components/lista-conteudos/lista-conteudos';
import { ListaCategoriaComponent } from './components/lista-categoria/lista-categoria';
import { DetalhesComponent } from './components/detalhes/detalhes';
import { AvaliacoesComponent } from './components/avaliacoes/avaliacoes';

export const routes: Routes = [
  { path: '', component: ListaConteudosComponent },
  { path: 'categoria/:slug', component: ListaCategoriaComponent },
  { path: 'detalhes/:id', component: DetalhesComponent },
  { path: 'avaliacoes/:id', component: AvaliacoesComponent }
];