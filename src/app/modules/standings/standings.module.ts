import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandingsComponent } from './standings.component';
import { MatTableModule, MatCardModule } from '@angular/material';
@NgModule({
  imports: [CommonModule, MatTableModule, MatCardModule],
  declarations: [StandingsComponent]
})
export class StandingsModule {}
