import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SOCIAL_LINKS } from '../../shared/site-data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly social = SOCIAL_LINKS;
}
