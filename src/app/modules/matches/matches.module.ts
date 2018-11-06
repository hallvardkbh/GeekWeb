import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';
import {
  MatTableModule,
  MatCardModule,
  MatExpansionModule
} from '@angular/material';
@NgModule({
  imports: [CommonModule],
  declarations: [MatchesComponent]
})
export class MatchesModule {}
