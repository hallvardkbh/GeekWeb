import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';
import {
  MatTableModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatIconModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  declarations: [MatchesComponent]
})
export class MatchesModule {}
