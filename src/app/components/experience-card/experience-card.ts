import { Component, input } from '@angular/core';
import {Experience} from '../../models/experience';

@Component({
  imports: [],
  selector: 'app-experience-card',
  styleUrl: './experience-card.scss',
  templateUrl: './experience-card.html',
})
export class ExperienceCard {
  experience = input.required<Experience>();
}
