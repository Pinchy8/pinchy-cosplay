import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { GalleryPage } from './pages/gallery/gallery';
import { MediaKitPage } from './pages/media-kit/media-kit';
import { ContactPage } from './pages/contact/contact';
import { LinktreePage } from './pages/linktree/linktree';
import { ConventionsPage } from './pages/conventions/conventions';

export const routes: Routes = [
  { path: '', component: Home, title: 'Pinchy ☆ Cosplayer' },
  { path: 'gallery', component: GalleryPage, title: 'Gallery — Pinchy' },
  { path: 'media-kit', component: MediaKitPage, title: 'Media Kit — Pinchy' },
  { path: 'conventions', component: ConventionsPage, title: 'Conventions — Pinchy' },
  { path: 'contact', component: ContactPage, title: 'Contact — Pinchy' },
  { path: 'linktree', component: LinktreePage, title: 'Pinchy ☆ Links' },
  { path: '**', redirectTo: '' },
];
