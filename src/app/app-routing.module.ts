import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
  {
    path :'contacts',
    component : ContactsComponent
  },
  {
    path :'forms',
    component : FormsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
