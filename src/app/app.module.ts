import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { LastpositionComponent } from './component/lastposition/lastposition.component';
import { HistoricalComponent } from './component/historical/historical.component';
import { VirtualzoneComponent } from './component/virtualzone/virtualzone.component';
import { AuthenticationService } from "./service/authentication.service";
import { NgbModal, NgbModalConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TokenInterceptor } from "./interceptor/tokeninterceptor";
import { MenuComponent } from './component/menu/menu.component';
import { EnterpriseComponent } from './component/enterprise/enterprise.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    LastpositionComponent,
    HistoricalComponent,
    VirtualzoneComponent,
    MenuComponent,
    EnterpriseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AppRouting

  ],
  exports: [],
  providers: [AuthenticationService,
              {
               provide: HTTP_INTERCEPTORS,
               useClass: TokenInterceptor,
               multi: true
              },NgbModalConfig, NgbModal
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
