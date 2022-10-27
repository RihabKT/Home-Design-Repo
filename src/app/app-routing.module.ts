import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhoAreWeFirstComponent } from './who-are-we-first/who-are-we-first.component';
import { WhoAreWeSecondComponent } from './who-are-we-second/who-are-we-second.component';


const routes: Routes = [
  {path:'whoAreWeFirst',component:WhoAreWeFirstComponent },
  {path:'whoAreWeSecond',component:WhoAreWeSecondComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
