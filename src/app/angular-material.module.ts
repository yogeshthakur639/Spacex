import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
  ],
  imports: [
    MatFormFieldModule,
    MatRadioModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatFormFieldModule,
    MatRadioModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
