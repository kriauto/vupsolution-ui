import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./component/welcome/welcome.component";
import {HomeComponent} from "./component/home/home.component";
import {EnterpriseComponent} from "./component/enterprise/enterprise.component";
import {FactoryComponent} from "./component/factory/factory.component";
import {ProductionlineComponent} from "./component/productionline/productionline.component";
import {WorkplaceComponent} from "./component/workplace/workplace.component";
import {NoncomplinaceComponent} from "./component/noncomplinace/noncomplinace.component";
import {OperationComponent} from "./component/operation/operation.component";
import {MachineComponent} from "./component/machine/machine.component";
import {SkillComponent} from "./component/skill/skill.component";
import {ClosedayComponent} from "./component/closeday/closeday.component";
import {CalendarComponent} from "./component/calendar/calendar.component";
import {RoleComponent} from "./component/role/role.component";
import {ShiftComponent} from "./component/shift/shift.component";
import {EmployeeComponent} from "./component/employee/employee.component";
import {AssignmentComponent} from "./component/assignment/assignment.component";
import {ClientComponent} from "./component/client/client.component";
import {ProductComponent} from "./component/product/product.component";
import {OrderedComponent} from "./component/ordered/ordered.component";
import {FabricationorderComponent} from "./component/fabricationorder/fabricationorder.component";
import {ProdplanningComponent} from "./component/prodplanning/prodplanning.component";
import {ProddataentryComponent} from "./component/proddataentry/proddataentry.component";
import {ProdsupervisionComponent} from "./component/prodsupervision/prodsupervision.component";
import {QualplanningComponent} from "./component/qualplanning/qualplanning.component";
import {QualdataentryComponent} from "./component/qualdataentry/qualdataentry.component";
import {QualsupervisionComponent} from "./component/qualsupervision/qualsupervision.component";
import {MainplanningComponent} from "./component/mainplanning/mainplanning.component";
import {MaindataentryComponent} from "./component/maindataentry/maindataentry.component";
import {MainsupervisionComponent} from "./component/mainsupervision/mainsupervision.component";
import {ParameterComponent} from "./component/parameter/parameter.component";

const routes: Routes = [
  {path:"parameter", component:ParameterComponent},
  {path:"enterprise", component:EnterpriseComponent},
  {path:"factory", component:FactoryComponent},
  {path:"productionline", component:ProductionlineComponent},
  {path:"workplace", component:WorkplaceComponent},
  {path:"noncompliance", component:NoncomplinaceComponent},
  {path:"operation", component:OperationComponent},
  {path:"machine", component:MachineComponent},
  {path:"skill", component:SkillComponent},
  {path:"closeday", component:ClosedayComponent},
  {path:"calendar", component:CalendarComponent},
  {path:"role", component:RoleComponent},
  {path:"shift", component:ShiftComponent},
  {path:"employee", component:EmployeeComponent},
  {path:"assignment", component:AssignmentComponent},
  {path:"client", component:ClientComponent},
  {path:"product", component:ProductComponent},
  {path:"ordered", component:OrderedComponent},
  {path:"fabricationorder", component:FabricationorderComponent},
  {path:"prodplanning", component:ProdplanningComponent},
  {path:"proddataentry", component:ProddataentryComponent},
  {path:"prodsupervision", component:ProdsupervisionComponent},
  {path:"qualplanning", component:QualplanningComponent},
  {path:"qualdataentry", component:QualdataentryComponent},
  {path:"qualsupervision", component:QualsupervisionComponent},
  {path:"mainplanning", component:MainplanningComponent},
  {path:"maindataentry", component:MaindataentryComponent},
  {path:"mainsupervision", component:MainsupervisionComponent},
  {path:"", component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
