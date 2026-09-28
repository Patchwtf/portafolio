import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './components/hero/hero';

@Component({
  selector: 'app-root',
  imports:[Hero],
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
