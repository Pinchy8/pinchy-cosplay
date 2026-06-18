import { DecimalPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import {
  formatMediaKitDate,
  genderDonutGradient,
  MEDIA_KIT_INSIGHTS,
  MEDIA_PLATFORMS,
  MediaPlatform,
} from '../../shared/media-kit-data';

@Component({
  selector: 'app-media-kit',
  imports: [DecimalPipe],
  templateUrl: './media-kit.html',
  styleUrl: './media-kit.css',
})
export class MediaKitPage {
  protected readonly platforms = MEDIA_PLATFORMS;
  protected readonly insights = MEDIA_KIT_INSIGHTS;
  protected readonly formatDate = formatMediaKitDate;
  protected readonly genderDonutGradient = genderDonutGradient;

  protected readonly selectedPlatform = signal<MediaPlatform>('instagram');

  protected readonly activeInsights = computed(
    () => this.insights[this.selectedPlatform()],
  );

  protected selectPlatform(platform: MediaPlatform): void {
    this.selectedPlatform.set(platform);
  }

  protected genderColor(index: number): string {
    return index === 0 ? 'var(--color-bg-green)' : 'var(--color-olive)';
  }
}
