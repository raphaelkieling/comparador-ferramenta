import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './screens/admin/admin.component';
import { CategoryComponent } from './screens/category/category.component';
import { CategoryListComponent } from './screens/category/category-list/category-list.component';
import { LoginComponent } from './screens/login/login.component';
import { CategorySaveComponent } from './screens/category/category-save/category-save.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { BrandComponent } from './screens/brand/brand.component';
import { BrandListComponent } from './screens/brand/brand-list/brand-list.component';
import { BrandSaveComponent } from './screens/brand/brand-save/brand-save.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:
      'admin',
    component: AdminComponent,
    children: [
      {
        path: 'me',
        component: ProfileComponent
      },
      {
        path: 'brand',
        component: BrandComponent,
        children: [
          {
            path: '',
            component: BrandListComponent
          },
          {
            path: 'save',
            component: BrandSaveComponent
          }
        ]
      },
      {
        path: 'category',
        component: CategoryComponent,
        children: [
          {
            path: '',
            component: CategoryListComponent
          },
          {
            path: 'save',
            component: CategorySaveComponent
          }
        ]
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
