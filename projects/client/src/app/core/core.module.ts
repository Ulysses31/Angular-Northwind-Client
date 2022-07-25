import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-routing.module';
// import { MenuBarModule } from './../layout/menubar/menubar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreRoutingModule,
    // MenuBarModule,
  ],
  exports: []
})

export class CoreModule { }
