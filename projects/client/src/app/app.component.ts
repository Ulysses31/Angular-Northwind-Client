import { Component } from '@angular/core';
import { MtStyleManager } from 'corelib';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Northwind Client';

	constructor(private styleManager: MtStyleManager) {
		const theme = localStorage.getItem('theme');
		if (theme) {
			styleManager.setStyle('', theme);
		} else {
			this.styleManager.setStyle(
				'',
				'https://material2-docs-dev.firebaseapp.com/deeppurple-amber.css'
			);
			localStorage.setItem(
				'theme',
				'https://material2-docs-dev.firebaseapp.com/deeppurple-amber.css'
			);
      localStorage.setItem('themeSelected', '1');
		}
	}
}
