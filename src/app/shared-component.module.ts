import { NgModule } from '@angular/core';
import { BaseboardNavigationComponent } from './baseboard-navigation/baseboard-navigation.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    MatInputModule, 
    MatFormFieldModule, 
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    BaseboardNavigationComponent
  ],
  exports: [
    BaseboardNavigationComponent, 
    MatInputModule, 
    MatFormFieldModule, 
    FormsModule
  ]
})
export class SharedComponentModule { }