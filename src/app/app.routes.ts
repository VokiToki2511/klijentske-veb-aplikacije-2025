import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent }    from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent }   from './search/search.component';
import { OrderComponent }    from './order/order.component';
import { CartComponent }     from './cart/cart.component';
import { UserComponent }     from './user/user.component';
import { ReviewComponent }   from './review/review.component';

export const routes: Routes = [
{ path: '',           component: HomeComponent },
{ path: 'login',      component: LoginComponent },
{ path: 'register',   component: RegisterComponent },
{ path: 'search',     component: SearchComponent },
{ path: 'order/:id',  component: OrderComponent },
{ path: 'cart',       component: CartComponent },
{ path: 'user',       component: UserComponent },
{ path: 'review',     component: ReviewComponent },
{ path: '**',         redirectTo: '' }
];
