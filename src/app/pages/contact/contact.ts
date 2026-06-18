import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../shared/site-data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactPage {
  protected readonly social = SOCIAL_LINKS;
}
