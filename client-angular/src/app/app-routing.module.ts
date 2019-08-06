import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './screens/admin/admin.component';
import { CategoryComponent } from './screens/category/category.component';
import { CategoryListComponent } from './screens/category/category-list/category-list.component';
import { LoginComponent } from './screens/login/login.component';


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: "category",
        component: CategoryComponent,
        children: [
          {
            path: "",
            component: CategoryListComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
