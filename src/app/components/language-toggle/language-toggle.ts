import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  imports: [],
  selector: 'app-language-toggle',
  styleUrl: './language-toggle.scss',
  templateUrl: './language-toggle.html',
})
export class LanguageToggle {
  readonly languageService = inject(LanguageService);
}
