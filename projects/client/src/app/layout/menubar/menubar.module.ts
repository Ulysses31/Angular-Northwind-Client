import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MenuBarComponent } from './menubar.component';

@NgModule({
  declarations: [MenuBarComponent],
  imports: [SharedModule],
  exports: [MenuBarComponent]
})
export class MenuBarModule {}
