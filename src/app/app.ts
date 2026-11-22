import { Component, signal } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
import { LanguageToggle } from './components/language-toggle/language-toggle';

@Component({
  selector: 'app-root',
  imports:[Hero, Navbar, LanguageToggle],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})

// @Component({
//   imports: [RouterOutlet],
//   selector: 'app-root',
//   styleUrl: './app.scss',
//   templateUrl: './app.html',
// })

export class App {
  // protected readonly title = signal('portfolio');
}
