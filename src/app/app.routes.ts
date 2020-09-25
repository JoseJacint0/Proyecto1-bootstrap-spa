import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { BorderComponent } from './components/border/border.component';
import { AnimationComponent } from './components/animation/animation.component';
import { OtherComponent } from './components/other/other.component';
import { ChartsComponent } from './components/charts/charts.component';
import { TablesComponent } from './components/tables/tables.component';
import { HomeComponent } from './components/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { ColorComponent } from './components/color/color.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { BlankpageComponent } from './components/blankpage/blankpage.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'boton', component: ButtonComponent },
  { path: 'tarjeta', component: CardsComponent },
  { path: 'color', component: ColorComponent },
  { path: 'borde', component: BorderComponent },
  { path: 'animacion', component: AnimationComponent },
  { path: 'otros', component: OtherComponent },
  { path: 'error', component: ErrorpageComponent },
  { path: 'blanco', component: BlankpageComponent },
  { path: 'grafico', component: ChartsComponent },
  { path: 'tabla', component: TablesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
