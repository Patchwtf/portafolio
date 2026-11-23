import { Injectable, signal, computed, effect } from '@angular/core';
import { translations } from '../i18n/translations';


export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

private getInitialLanguage(): Language {
  if (typeof window == 'undefined') {
    return 'es';
  }
  const savedLanguage = localStorage.getItem('language');

  return savedLanguage === 'es' || savedLanguage === 'en' ? savedLanguage : 'es';
}

  readonly language = signal<Language>(this.getInitialLanguage());

  readonly isSpanish = computed(
    () => this.language() === 'es'
  );

  readonly text = computed(
    () => translations[this.language()]
  );

  constructor() {
    effect(() => {
      const currentLanguage = this.language();
      if (typeof window !== 'undefined') {
        document.documentElement.lang = currentLanguage;
      }
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('language', currentLanguage);
      }
    });
  }

  toggleLanguage(): void {
    this.language.update(current =>
      current === 'es' ? 'en' : 'es'
    );
  }

}
