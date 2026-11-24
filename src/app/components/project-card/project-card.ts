import { Component, input } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {

  readonly project = input.required<Project>();

  readonly githubLabel = input.required<string>();

  readonly demoLabel = input.required<string>();

}
