import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AnimationComponent } from './components/animation/animation.component';
import { BlankpageComponent } from './components/blankpage/blankpage.component';
import { BorderComponent } from './components/border/border.component';
import { ButtonComponent } from './components/button/button.component';
import { CardsComponent } from './components/cards/cards.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ColorComponent } from './components/color/color.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { HomeComponent } from './components/home/home.component';
import { OtherComponent } from './components/other/other.component';
import { TablesComponent } from './components/tables/tables.component';
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AnimationComponent,
    BlankpageComponent,
    BorderComponent,
    ButtonComponent,
    CardsComponent,
    ChartsComponent,
    ColorComponent,
    ErrorpageComponent,
    HomeComponent,
    OtherComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule, APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
