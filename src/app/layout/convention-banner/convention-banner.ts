import { isPlatformBrowser } from '@angular/common';
import { Component, computed, inject, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { Router } from '@angular/router';
import { nextConvention } from '../../shared/conventions-data';

interface CountdownPart {
  value: string;
  label: string;
}

@Component({
  selector: 'app-convention-banner',
  templateUrl: './convention-banner.html',
  styleUrl: './convention-banner.css',
})
export class ConventionBanner implements OnInit, OnDestroy {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private timer?: ReturnType<typeof setInterval>;

  protected readonly event = nextConvention();
  private readonly now = signal(Date.now());

  protected readonly countdownParts = computed<CountdownPart[]>(() => {
    const target = new Date(`${this.event.date}T10:00:00`).getTime();
    const diff = Math.max(0, target - this.now());

    const pad = (n: number) => String(n).padStart(2, '0');
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    return [
      { value: pad(days), label: 'DAYS' },
      { value: pad(hours), label: 'HRS' },
      { value: pad(minutes), label: 'MIN' },
      { value: pad(seconds), label: 'SEC' },
    ];
  });

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.timer = setInterval(() => this.now.set(Date.now()), 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  protected goToConventions(): void {
    this.router.navigateByUrl('/conventions');
  }
}
