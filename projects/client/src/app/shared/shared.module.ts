import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorelibModule } from 'corelib';

@NgModule({
  imports: [
    CommonModule,
    CorelibModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    CorelibModule
  ]
})
export class SharedModule {}
