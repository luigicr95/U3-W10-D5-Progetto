import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedPage } from './completed/completed.page';
import { TodosPage } from './todos/todos.page';

const routes: Routes = [
  {
    path: 'todos',
    component: TodosPage,
  },
  {
    path: 'completed',
    component: CompletedPage,
  },
  {
    path: '',
    pathMatch: 'full',
    component: TodosPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
