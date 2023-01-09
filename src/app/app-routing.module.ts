import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  //define router animation direction
  { path: '', component: HomeComponent, data: { animation: 'isLeft' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'isRight' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
