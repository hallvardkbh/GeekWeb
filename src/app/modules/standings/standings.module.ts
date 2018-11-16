import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandingsComponent } from './standings.component';
import {
  MatTableModule,
  MatCardModule,
  MatTabsModule,
  MatProgressSpinnerModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatTabsModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  declarations: [StandingsComponent]
})
export class StandingsModule {}
