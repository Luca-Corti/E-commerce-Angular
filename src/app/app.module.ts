import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Route } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselBasic } from './carousel-basic/carousel-basic.component';
import { FooterComponent } from './footer/footer.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';



const routes:Route[]=[
    {
      path:'',
      component:HomepageComponent
    },
    {
      path:"cart",
      component: CartComponent
    },
    {
      path:"product/:id",
      component: ProductDetailComponent,
    },
    {
      path:"**",
      component:PageNotFoundComponent
    }

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    CartComponent,
    NgbdCarouselBasic,
    ProductDetailComponent,
    FooterComponent,
    CheckoutComponent,
    FormComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes), NgbModule, ReactiveFormsModule],
  providers: [],
  exports: [NgbdCarouselBasic],
  bootstrap: [AppComponent]
})
export class AppModule { }

