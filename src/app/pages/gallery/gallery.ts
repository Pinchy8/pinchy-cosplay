import { Component } from '@angular/core';
import { GALLERY_ITEMS } from '../../shared/site-data';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class GalleryPage {
  protected readonly galleryItems = GALLERY_ITEMS;
}
