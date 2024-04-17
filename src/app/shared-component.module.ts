import { NgModule } from '@angular/core';
import { BaseboardNavigationComponent } from './baseboard-navigation/baseboard-navigation.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  imports: [
    MatInputModule, 
    MatFormFieldModule, 
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  declarations: [
    BaseboardNavigationComponent, DialogComponent
  ],
  exports: [
    BaseboardNavigationComponent, 
    MatInputModule, 
    MatFormFieldModule, 
    FormsModule,
    DialogComponent
  ]
})
export class SharedComponentModule { }