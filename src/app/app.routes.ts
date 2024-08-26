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

export const routes: Routes = [
    {path:'', component:LayoutAuthComponent, children:[
        {path:'', redirectTo:'login', pathMatch:'full'},
        {path:'login', component:LoginComponent},
        {path:'register', component:RegisterComponent}
    ]},
    {path:'', component:LayoutBlankComponent, children:[
        {path:'', redirectTo:'home', pathMatch:'full'},
        {path:'home', component:HomeComponent},
        {path:'cart', component:CartComponent},
        {path:'products', component:ProductComponent},
        {path:'brands', component:BrandsComponent},
        {path:'categories', component:CategoriesComponent}
    ]},
    {path:'**', component:NotfoundComponent}
];
