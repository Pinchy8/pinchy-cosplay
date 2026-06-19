import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { GALLERY_ITEMS, GalleryItem } from '../../shared/site-data';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class GalleryPage implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private mediaQuery?: MediaQueryList;
  private readonly onMediaChange = (event: MediaQueryListEvent): void => {
    this.isDesktop.set(event.matches);
    if (!event.matches) {
      this.selectedItem.set(null);
    }
  };

  protected readonly galleryItems = GALLERY_ITEMS;
  protected readonly isDesktop = signal(false);
  protected readonly selectedItem = signal<GalleryItem | null>(null);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.mediaQuery = window.matchMedia('(min-width: 769px)');
    this.isDesktop.set(this.mediaQuery.matches);
    this.mediaQuery.addEventListener('change', this.onMediaChange);
  }

  ngOnDestroy(): void {
    this.mediaQuery?.removeEventListener('change', this.onMediaChange);
  }

  protected openLightbox(item: GalleryItem): void {
    if (!this.isDesktop()) {
      return;
    }
    this.selectedItem.set(item);
  }

  protected closeLightbox(): void {
    this.selectedItem.set(null);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeLightbox();
  }
}
