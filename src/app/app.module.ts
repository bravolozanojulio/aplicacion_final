import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HighchartsChartModule } from "highcharts-angular";
import { APP_BASE_HREF} from '@angular/common';

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AppRoutingModule } from "./app-routing.module";
import { Grafico01Component } from './grafico01/grafico01.component';
import { DatosService } from './datos.service';
import { Grafico02Component } from './grafico02/grafico02.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    Grafico01Component,
    Grafico02Component,
  ],
  bootstrap: [AppComponent],
  providers: [DatosService, {provide:APP_BASE_HREF, useValue: '/jbravo'}]
})
export class AppModule {}
