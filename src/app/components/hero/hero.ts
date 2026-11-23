import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  readonly languageService = inject(LanguageService);
  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Patchwtf',
      svg: 'M12 .7C5.7.7.7 5.8.7 12.1c0 5 3.3 9.2 7.8 10.7.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C16.9 4 18 4.3 18 4.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.8c0 .3.2.7.8.6 4.5-1.5 7.8-5.7 7.8-10.7C23.3 5.8 18.3.7 12 .7Z'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jhosbyn-daniel-guill%C3%A9n-ortiz-a0b28a191/',
      svg: 'M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V24h-4V8Zm7 0h3.84v2.19h.05c.53-1.01 1.84-2.07 3.79-2.07 4.05 0 4.8 2.67 4.8 6.14V24h-4v-8.63c0-2.06-.04-4.71-2.87-4.71-2.87 0-3.31 2.24-3.31 4.56V24h-4V8Z'
    },
    {
      name: 'CV',
      url: '../../public/documents/CV_Jhosbyn_Guillen.pdf',
      svg: 'M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6Zm7.5 1.5v4a1.5 1.5 0 0 0 1.5 1.5h4L13.5 3.5ZM9 14H7v-2h2v2Zm4-4H7v-2h6v2Zm4-4H7V4h10v2Z'
    }
  ];
}
