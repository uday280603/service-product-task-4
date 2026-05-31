import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root',
})
export class SanckBarService {
  constructor(private _snackbar: MatSnackBar) {}

  openSnackbar(msg: string) {
    this._snackbar.open(msg, 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000,
    });
  }
}
