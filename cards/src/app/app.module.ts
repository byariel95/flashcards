import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent} from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { DemoComponent } from './components/demo/demo.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from './components/shared/shared.module';
import { CoreModule} from './components/core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ContactComponent,
    ProductsComponent,
    DemoComponent,
    PageErrorComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
