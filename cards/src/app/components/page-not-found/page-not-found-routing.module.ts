import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { PageErrorComponent } from './components/page-error/page-error.component';

const routes: Routes = [
  {
    path: '',
    component: PageErrorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class PageNotFoundRoutingModule {}