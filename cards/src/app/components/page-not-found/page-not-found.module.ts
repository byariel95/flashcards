import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageErrorComponent} from './components/page-error/page-error.component';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';


@NgModule({
  declarations: [
    PageErrorComponent
  ],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule

  ]
})
export class PageNotFoundModule { }
