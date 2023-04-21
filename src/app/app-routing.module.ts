import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';

const routes: Routes = [
  {path: 'home', component: PokeTableComponent},
  {path: 'pokeDetail', component: PokeDetailComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  //Errores
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
