import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DemoComponent} from './components/demo.component';
import { DemoRountingModule } from './demo-rounting.module';
import { SharedModule  } from '../shared/shared.module';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    DemoRountingModule,
    SharedModule,
    FormsModule
  ]
})
export class DemoModule { }
