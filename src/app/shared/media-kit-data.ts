export type MediaPlatform = 'instagram' | 'tiktok' | 'youtube';

export interface DemographicSlice {
  label: string;
  value: number;
}

export interface PlatformInsights {
  platform: MediaPlatform;
  name: string;
  handle: string;
  url: string;
  audienceLabel: 'Followers' | 'Subscribers';
  audienceCount: number;
  lastUpdated: string;
  gender: DemographicSlice[];
  ageRanges: DemographicSlice[];
  locations: DemographicSlice[];
  showcaseImage: string;
}

export const MEDIA_KIT_INSIGHTS: Record<MediaPlatform, PlatformInsights> = {
  instagram: {
    platform: 'instagram',
    name: 'Instagram',
    handle: '@pinchy_y',
    url: 'https://instagram.com/pinchy_y',
    audienceLabel: 'Followers',
    audienceCount: 980,
    lastUpdated: '2026-06-18',
    gender: [
      { label: 'Women', value: 55.9 },
      { label: 'Men', value: 44.1 },
    ],
    ageRanges: [
      { label: '13–17', value: 2.7 },
      { label: '18–24', value: 35.6 },
      { label: '25–34', value: 43 },
      { label: '35–44', value: 11.5 },
      { label: '45+', value: 7.2 },
    ],
    locations: [
      { label: 'Belgium', value: 19.3 },
      { label: 'United States', value: 16 },
      { label: 'United Kingdom', value: 7.3 },
      { label: 'Italy', value: 6.9 },
      { label: 'Brazil', value: 6.6 },
    ],
    showcaseImage: '/assets/images/info1.png',
  },
  tiktok: {
    platform: 'tiktok',
    name: 'TikTok',
    handle: '@pinchy_y',
    url: 'https://tiktok.com/@pinchy_y',
    audienceLabel: 'Followers',
    audienceCount: 1240,
    lastUpdated: '2026-06-18',
    gender: [
      { label: 'Women', value: 62.4 },
      { label: 'Men', value: 37.6 },
    ],
    ageRanges: [
      { label: '13–17', value: 8.2 },
      { label: '18–24', value: 48.5 },
      { label: '25–34', value: 32.1 },
      { label: '35–44', value: 8.4 },
      { label: '45+', value: 2.8 },
    ],
    locations: [
      { label: 'Belgium', value: 22.1 },
      { label: 'United States', value: 18.4 },
      { label: 'France', value: 9.2 },
      { label: 'Netherlands', value: 7.8 },
      { label: 'Germany', value: 6.5 },
    ],
    showcaseImage: '/assets/images/info5.jpg',
  },
  youtube: {
    platform: 'youtube',
    name: 'YouTube',
    handle: '@Pinchy_y',
    url: 'https://youtube.com/@Pinchy_y',
    audienceLabel: 'Subscribers',
    audienceCount: 156,
    lastUpdated: '2026-06-18',
    gender: [
      { label: 'Women', value: 51.2 },
      { label: 'Men', value: 48.8 },
    ],
    ageRanges: [
      { label: '13–17', value: 4.1 },
      { label: '18–24', value: 28.3 },
      { label: '25–34', value: 38.7 },
      { label: '35–44', value: 18.6 },
      { label: '45+', value: 10.3 },
    ],
    locations: [
      { label: 'Belgium', value: 24.5 },
      { label: 'United States', value: 14.2 },
      { label: 'United Kingdom', value: 9.8 },
      { label: 'Canada', value: 6.1 },
      { label: 'Australia', value: 5.4 },
    ],
    showcaseImage: '/assets/images/info7.jpg',
  },
};

export const MEDIA_PLATFORMS: MediaPlatform[] = ['instagram', 'tiktok', 'youtube'];

export function formatMediaKitDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function genderDonutGradient(slices: DemographicSlice[]): string {
  const colors = ['var(--color-bg-green)', 'var(--color-olive)'];
  let cursor = 0;
  const stops = slices.map((slice, index) => {
    const start = cursor;
    cursor += slice.value;
    return `${colors[index % colors.length]} ${start}% ${cursor}%`;
  });
  return `conic-gradient(${stops.join(', ')})`;
}
