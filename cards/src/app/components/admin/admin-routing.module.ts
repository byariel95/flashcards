import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent} from './components/product-form/product-form.component';
import { NavComponent} from './components/nav/nav.component';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { InventaryComponent } from './components/inventary/inventary.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      },
       {
        path: 'products',
        component: ProductsListComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'inventary',
        component: InventaryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
