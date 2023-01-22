import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { ACTION } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class HelpersService {

  constructor(private snackbar: MatSnackBar) {
  }

  openSnackBar(message: string, action?: string, config?: MatSnackBarConfig) {
    if (!config || !config.duration) {
      config = { ...config, duration: ACTION.duration };
    }

    if (!action) {
      action = ACTION.ok;
    }

    return this.snackbar.open(message, action, config);
  }
}
