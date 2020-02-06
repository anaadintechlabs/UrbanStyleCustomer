import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './components/root/root.component';
import { HomeOneComponent } from './pages/home-one/home-one.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';
import { HttpClientModule } from '@angular/common/http';
import { BlockModule } from './modules/blocks/block.module';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    HomeOneComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    HttpClientModule,
    BlockModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
