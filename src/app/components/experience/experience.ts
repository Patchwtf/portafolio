
import { Component, inject, computed } from '@angular/core';

import { ExperienceCard } from '../experience-card/experience-card';
import { Experience } from '../../models/experience';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-experience',
  imports: [ExperienceCard],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent {

  readonly languageService = inject(LanguageService);

  readonly experiences = computed<Experience[]>(() =>
    this.languageService.text().experience.items.map(item => ({
      ...item,
      activities: [...item.activities],
      technologies: [...item.technologies]
    }))
  );

}
