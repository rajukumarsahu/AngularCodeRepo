import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GmailComponent } from './components/gmail/gmail.component';
import { HomeComponent } from './components/home/home.component';
 
const routes: Routes = [
  {
    path:"sendemails",
    component:GmailComponent,
    pathMatch:"full"
  },
  {
  path:'',
  component:HomeComponent,
  pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
