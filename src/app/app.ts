import { Component, signal } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
import { LanguageToggle } from './components/language-toggle/language-toggle';
import { ExperienceComponent } from './components/experience/experience';
import { Projects } from './components/projects/projects';

@Component({
  selector: 'app-root',
  imports:[Hero, Navbar, LanguageToggle, ExperienceComponent, Projects],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})

export class App {
  // protected readonly title = signal('portfolio');
}
