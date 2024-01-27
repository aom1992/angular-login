import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { ReportAssetregisComponent } from '../../components/report-assetregis/report-assetregis.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ 
    DashboardComponent,
    DefaultComponent,
    ReportAssetregisComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class DefaultModule { }
