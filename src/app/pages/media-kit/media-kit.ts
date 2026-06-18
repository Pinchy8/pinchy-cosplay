import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../shared/site-data';

@Component({
  selector: 'app-media-kit',
  templateUrl: './media-kit.html',
  styleUrl: './media-kit.css',
})
export class MediaKitPage {
  protected readonly social = SOCIAL_LINKS;
}
