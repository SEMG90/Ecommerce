import { Routes } from '@angular/router';
import { LayoutAuthComponent } from './layouts/layout-auth/layout-auth.component';
import { LayoutBlankComponent } from './layouts/layout-blank/layout-blank.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { authGuard } from './core/guards/auth.guard';
import { logedGuard } from './core/guards/loged.guard';
import { ProductsdetailsComponent } from './components/productsdetails/productsdetails.component';

export const routes: Routes = [
    {path:'', component:LayoutAuthComponent, canActivate:[logedGuard], children:[
        {path:'', redirectTo:'login', pathMatch:'full'},
        {path:'login', component:LoginComponent},
        {path:'register', component:RegisterComponent}
    ]},
    {path:'', component:LayoutBlankComponent, canActivate:[authGuard], children:[
        {path:'', redirectTo:'home', pathMatch:'full'},
        {path:'home', component:HomeComponent},
        {path:'cart', component:CartComponent},
        {path:'products', component:ProductComponent},
        {path:'brands', component:BrandsComponent},
        {path:'categories', component:CategoriesComponent},
        {path:'productsdetails', component:ProductsdetailsComponent}
    ]},
    {path:'**', component:NotfoundComponent}
];
