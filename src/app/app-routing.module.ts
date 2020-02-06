import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './pages/home-one/home-one.component';
import { RootComponent } from './components/root/root.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'classic'
  },
  {
      path: 'classic',
      component: RootComponent,
      data: {
          headerLayout: 'classic'
      },
      children: [
          {
              path: '',
              pathMatch: 'full',
              redirectTo: 'home'
          },
          {
              path: 'home',
              component: HomeOneComponent
          },
          // {
          //     path: 'blog',
          //     loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
          // },
          // {
          //     path: 'shop',
          //     loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule)
          // },
          // {
          //     path: 'account',
          //     loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
          // },
          // {
          //     path: 'site',
          //     loadChildren: () => import('./modules/site/site.module').then(m => m.SiteModule)
          // },
          {
              path: '**',
              component: PageNotFoundComponent
          }
      ],
  },
  {
      path: '**',
      redirectTo: 'classic'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
