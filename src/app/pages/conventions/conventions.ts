import { Component } from '@angular/core';
import { ConventionCard, sortedConventions, toConventionCard } from '../../shared/conventions-data';

@Component({
  selector: 'app-conventions',
  templateUrl: './conventions.html',
  styleUrl: './conventions.css',
})
export class ConventionsPage {
  protected readonly conventions: ConventionCard[] = sortedConventions().map(toConventionCard);
}
