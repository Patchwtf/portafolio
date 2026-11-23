import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly languageService = inject(LanguageService);
}
