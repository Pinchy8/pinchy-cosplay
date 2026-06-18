import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ABOUT_PLACEHOLDER,
  GALLERY_ITEMS,
  INFO_CARDS,
} from '../../shared/site-data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly galleryItems = GALLERY_ITEMS;
  protected readonly infoCards = INFO_CARDS;
  protected readonly aboutText = ABOUT_PLACEHOLDER;
  protected readonly bannerImage = '/assets/images/Banner.jpg';
  protected readonly coverImage = '/assets/images/Cover.jpg';
}
