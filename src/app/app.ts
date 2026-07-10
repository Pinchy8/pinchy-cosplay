import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { ConventionBanner } from './layout/convention-banner/convention-banner';

const CHROMELESS_ROUTES = ['/linktree'];

function isChromeless(url: string): boolean {
  const path = url.split('?')[0].split('#')[0];
  return CHROMELESS_ROUTES.includes(path);
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ConventionBanner],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly router = inject(Router);

  protected readonly showChrome = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => !isChromeless(event.urlAfterRedirects)),
    ),
    { initialValue: !isChromeless(this.router.url) },
  );
}
