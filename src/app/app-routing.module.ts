import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReportAssetregisComponent } from './components/report-assetregis/report-assetregis.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: '', component: DefaultComponent,
        children: [
          { path: 'app-report-assetregis', component: ReportAssetregisComponent },
          { path: 'app-dashboard', component: DashboardComponent }
        ]
      },
      { path: 'login', component: LoginComponent }
    ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }