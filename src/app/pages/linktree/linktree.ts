import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DISCOUNT_CODES } from '../../shared/linktree-data';

@Component({
  selector: 'app-linktree',
  imports: [RouterLink],
  templateUrl: './linktree.html',
  styleUrl: './linktree.css',
})
export class LinktreePage {
  protected readonly discountCodes = DISCOUNT_CODES;
  protected readonly avatarImage = 'assets/images/Cover-Nikki-Small.JPG';
}
