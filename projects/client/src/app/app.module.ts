import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	declarations: [AppComponent],
	imports: [CoreModule, AppRoutingModule, MatCardModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}

