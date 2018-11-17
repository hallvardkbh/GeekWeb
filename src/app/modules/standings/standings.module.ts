import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandingsComponent } from './standings.component';
import {
  MatTableModule,
  MatCardModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatSortModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  declarations: [StandingsComponent]
})
export class StandingsModule {}
