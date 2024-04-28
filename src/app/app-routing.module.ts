import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './core/component/portfolio/portfolio.component';
import { PortfolioFrontComponent } from './themes/component/portfolio-front/portfolio-front.component';
import { PageNotFoundComponent } from './core/component/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'portfolio/senthil', pathMatch: "full" },
  {
    path: 'portfolio/:user', component: PortfolioComponent
  },
  {path: 'portfolio/:user/:page', component: PortfolioComponent},
  {path:'PageNotFoundComponent',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
