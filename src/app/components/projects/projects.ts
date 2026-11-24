
import { Component, inject, computed } from '@angular/core';

import { ProjectCard } from '../project-card/project-card';
import { Project } from '../../models/project';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  readonly languageService = inject(LanguageService);

  readonly projects = computed<readonly Project[]>(
    () => this.languageService.text().projects.items
  );

}
