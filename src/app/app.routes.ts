import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { GalleryPage } from './pages/gallery/gallery';
import { MediaKitPage } from './pages/media-kit/media-kit';
import { ContactPage } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'Pinchy — Cosplayer & Gamer' },
  { path: 'gallery', component: GalleryPage, title: 'Gallery — Pinchy' },
  { path: 'media-kit', component: MediaKitPage, title: 'Media Kit — Pinchy' },
  { path: 'contact', component: ContactPage, title: 'Contact — Pinchy' },
  { path: '**', redirectTo: '' },
];
