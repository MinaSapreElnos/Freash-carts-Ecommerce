import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CartsComponent } from './components/carts/carts.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailesComponent } from './components/product-detailes/product-detailes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SearshPipe } from './pipes/searsh.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ChackoutComponent } from './components/chackout/chackout.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { AddheaderInterceptor } from './addheader.interceptor';
import { using } from 'rxjs';
import { ConcatPipe } from './concat.pipe';
import { SettingModule } from './setting/setting.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingscreenInterceptor } from './loadingscreen.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    CartsComponent,
    ProductsComponent,
    BrandsComponent,
    NotFoundComponent,
    CategoriesComponent,
    NavbarComponent,
    FooterComponent,
    ProductDetailesComponent,
    SearshPipe,
    ChackoutComponent,
    AllordersComponent,
    ConcatPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    FormsModule,
    SettingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule 
  ],
  providers: [
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AddheaderInterceptor,
    multi:true
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:LoadingscreenInterceptor,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
