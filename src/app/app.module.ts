import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { HomeComponent } from './component/home/home.component';
import { CommonInterceptor } from "./interceptor/commonInterceptor";
import { VariableGlobals } from "./common/variableGlobals";
import { EnterpriseComponent } from './component/enterprise/enterprise.component';
import { FactoryComponent } from './component/factory/factory.component';
import { ProductionlineComponent } from './component/productionline/productionline.component';
import { WorkplaceComponent } from './component/workplace/workplace.component';
import { NoncomplinaceComponent } from './component/noncomplinace/noncomplinace.component';
import { OperationComponent } from './component/operation/operation.component';
import { MachineComponent } from './component/machine/machine.component';
import { SkillComponent } from './component/skill/skill.component';
import { ClosedayComponent } from './component/closeday/closeday.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { RoleComponent } from './component/role/role.component';
import { ShiftComponent } from './component/shift/shift.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { AssignmentComponent } from './component/assignment/assignment.component';
import { ClientComponent } from './component/client/client.component';
import { ProductComponent } from './component/product/product.component';
import { OrderedComponent } from './component/ordered/ordered.component';
import { FabricationorderComponent } from './component/fabricationorder/fabricationorder.component';
import { ProdplanningComponent } from './component/prodplanning/prodplanning.component';
import { ProddataentryComponent } from './component/proddataentry/proddataentry.component';
import { ProdsupervisionComponent } from './component/prodsupervision/prodsupervision.component';
import { QualplanningComponent } from './component/qualplanning/qualplanning.component';
import { QualdataentryComponent } from './component/qualdataentry/qualdataentry.component';
import { QualsupervisionComponent } from './component/qualsupervision/qualsupervision.component';
import { MainplanningComponent } from './component/mainplanning/mainplanning.component';
import { MaindataentryComponent } from './component/maindataentry/maindataentry.component';
import { MainsupervisionComponent } from './component/mainsupervision/mainsupervision.component'


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    EnterpriseComponent,
    FactoryComponent,
    ProductionlineComponent,
    WorkplaceComponent,
    NoncomplinaceComponent,
    OperationComponent,
    MachineComponent,
    SkillComponent,
    ClosedayComponent,
    CalendarComponent,
    RoleComponent,
    ShiftComponent,
    EmployeeComponent,
    AssignmentComponent,
    ClientComponent,
    ProductComponent,
    OrderedComponent,
    FabricationorderComponent,
    ProdplanningComponent,
    ProddataentryComponent,
    ProdsupervisionComponent,
    QualplanningComponent,
    QualdataentryComponent,
    QualsupervisionComponent,
    MainplanningComponent,
    MaindataentryComponent,
    MainsupervisionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true}, VariableGlobals],
  bootstrap: [AppComponent]
})
export class AppModule { }
