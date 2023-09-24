import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { RegisterComponent } from './components/register/register.component';
import { CartsComponent } from './components/carts/carts.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailesComponent } from './components/product-detailes/product-detailes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuardGuard } from './Guards/auth-guard.guard';
import { ChackoutComponent } from './components/chackout/chackout.component';
import { AllordersComponent } from './components/allorders/allorders.component';

const routes: Routes = [
  {path:'',redirectTo:'register',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuardGuard],component:HomeComponent},
  {path:'products',canActivate:[AuthGuardGuard],component:ProductsComponent},
  {path:'brands',canActivate:[AuthGuardGuard],component:BrandsComponent},
  {path:'cart',canActivate:[AuthGuardGuard],component:CartsComponent},
  {path:'categories',canActivate:[AuthGuardGuard],component:CategoriesComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'allorders',component:AllordersComponent},
  {path:'chackout/:cartId',canActivate:[AuthGuardGuard],component:ChackoutComponent},
  {path:'product/:id',canActivate:[AuthGuardGuard],component:ProductDetailesComponent},
  {path:'setting',loadChildren:()=>import('./setting/setting.module').then((m)=>m.SettingModule)},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
