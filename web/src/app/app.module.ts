import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HealthComponent} from './health/health.component';
// is what we write
import {HttpClientModule} from '@angular/common/http';
import {ConfigServiceComponent} from './config-service/config-service.component';
import {CardComponent} from './card/card.component';
import {ConfigformComponent} from './configform/configform.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,

    HealthComponent,
    ConfigServiceComponent,
    CardComponent,
    ConfigformComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
