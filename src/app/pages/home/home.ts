import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ABOUT_TEXT,
  GALLERY_ITEMS,
  INFO_CARDS,
  InfoCard,
  SOCIAL_LINKS,
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
  protected readonly aboutText = ABOUT_TEXT;
  protected readonly social = SOCIAL_LINKS;
  protected readonly bannerImage = '/assets/images/Banner.jpg';
  protected readonly coverImage = '/assets/images/Cover-Nikki-Small.JPG';

  protected readonly activeCard = signal<InfoCard | null>(null);

  protected openCard(card: InfoCard): void {
    if (card.detailContent?.length || card.faqItems?.length || card.cosplanItems) {
      this.activeCard.set(card);
    }
  }

  protected closeModal(): void {
    this.activeCard.set(null);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeModal();
  }
}
