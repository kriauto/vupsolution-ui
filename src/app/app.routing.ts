import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './component/welcome/welcome.component';
import { LastpositionComponent } from './component/lastposition/lastposition.component';
import { HistoricalComponent } from './component/historical/historical.component';
import { VirtualzoneComponent } from './component/virtualzone/virtualzone.component';
import { EnterpriseComponent } from "./component/enterprise/enterprise.component";

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'enterprise', component: EnterpriseComponent },
  { path: 'lastposition', component: LastpositionComponent },
  { path: 'historical', component: HistoricalComponent },
  { path: 'virtualzone', component: VirtualzoneComponent },
  { path: 'welcome', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
