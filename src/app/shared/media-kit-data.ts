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
    audienceCount: 1004,
    lastUpdated: '2026-07-11',
    gender: [
      { label: 'Women', value: 55.3 },
      { label: 'Men', value: 44.7 },
    ],
    ageRanges: [
      { label: '13–17', value: 3 },
      { label: '18–24', value: 35.4 },
      { label: '25–34', value: 43.2 },
      { label: '35–44', value: 11.5 },
      { label: '45+', value: 6.8 },
    ],
    locations: [
      { label: 'Belgium', value: 19.5 },
      { label: 'United States', value: 15.8 },
      { label: 'United Kingdom', value: 7.2 },
      { label: 'Italy', value: 7.0 },
      { label: 'Brazil', value: 6.7 },
    ],
    showcaseImage: '/assets/images/info1.png',
  },
  tiktok: {
    platform: 'tiktok',
    name: 'TikTok',
    handle: '@pinchy_y',
    url: 'https://tiktok.com/@pinchy_y',
    audienceLabel: 'Followers',
    audienceCount: 1518,
    lastUpdated: '2026-07-11',
    gender: [
      { label: 'Women', value: 59 },
      { label: 'Men', value: 40 },
    ],
    ageRanges: [
      { label: '18–24', value: 33.3 },
      { label: '25–34', value: 58.9 },
      { label: '35–44', value: 5.8 },
      { label: '45+', value: 2 },
    ],
    locations: [
      { label: 'Belgium', value: 45.6 },
      { label: 'Germany', value: 15.1 },
      { label: 'United Kingdom', value: 8.3 },
      { label: 'France', value: 5.0 },
      { label: 'Netherlands', value: 4.8 },
    ],
    showcaseImage: '/assets/images/info5.jpg',
  },
  youtube: {
    platform: 'youtube',
    name: 'YouTube',
    handle: '@Pinchy_y',
    url: 'https://youtube.com/@Pinchy_y',
    audienceLabel: 'Subscribers',
    audienceCount: 380,
    lastUpdated: '2026-07-11',
    gender: [
      { label: 'Women', value: 64.8 },
      { label: 'Men', value: 35.1 },
    ],
    ageRanges: [
      { label: '13–17', value: 7.8 },
      { label: '18–24', value: 6.9 },
      { label: '25–34', value: 39.2 },
      { label: '35–44', value: 29.8 },
      { label: '45+', value: 16.3 },
    ],
    locations: [
      { label: 'Belgium', value: 5.6 },
      { label: 'Brazil', value: 3.3 },
      { label: 'Mexico', value: 2.7 },
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
