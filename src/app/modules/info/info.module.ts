import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [InfoComponent]
})
export class InfoModule {}
