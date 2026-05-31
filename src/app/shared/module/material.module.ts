import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

let matArr = [MatCardModule, CommonModule , MatDividerModule,MatButtonModule,MatSnackBarModule,MatDialogModule ,MatIconModule];

@NgModule({
  declarations: [],
  imports: [...matArr],
  exports: [...matArr],
})
export class MaterialModule{}