export interface ConventionEvent {
  name: string;
  /** Convention start date — always shown, regardless of confirmation status. */
  date: string;
  /** Convention end date, or null for a single-day event. */
  dateEnd: string | null;
  location: string;
  confirmed: boolean;
  link: string;
  /**
   * Specific days she plans to attend — need not be consecutive or span
   * the full convention. Only shown once `confirmed` is true. Max 5 days.
   */
  attendingDates?: string[];
}

export interface ConventionCard {
  name: string;
  day: string;
  month: string;
  location: string;
  dateRange: string;
  isMultiDay: boolean;
  attendingDays: string | null;
  link: string;
  confirmed: boolean;
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const MAX_ATTENDING_DATES = 5;

export const CONVENTIONS: ConventionEvent[] = [
  {
    name: 'Elftopia',
    date: '2026-08-08',
    dateEnd: '2026-08-09',
    location: 'Belgium',
    confirmed: true,
    link: 'https://www.elftopia.be',
    attendingDates: ['2026-08-08'],
  },
  {
    name: 'Gamescom',
    date: '2026-08-26',
    dateEnd: '2026-08-30',
    location: 'Germany',
    confirmed: true,
    link: 'https://www.gamescom.global',
    attendingDates: ['2026-08-27'],
  },
  {
    name: 'Made in Asia',
    date: '2026-10-17',
    dateEnd: '2026-10-18',
    location: 'Belgium',
    confirmed: false,
    link: 'https://www.madeinasia.be',
    attendingDates: [],
  },
  {
    name: 'FACTS',
    date: '2026-10-31',
    dateEnd: '2026-11-01',
    location: 'Belgium',
    confirmed: false,
    link: 'https://www.facts.be/en/',
    attendingDates: [],
  },
];

export function sortedConventions(): ConventionEvent[] {
  return [...CONVENTIONS].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
}

// An event is over once its last day has fully passed.
export function isConventionOver(event: ConventionEvent, referenceDate: Date = new Date()): boolean {
  const lastDay = event.dateEnd ?? event.date;
  const endOfLastDay = new Date(`${lastDay}T23:59:59.999`);
  return referenceDate.getTime() > endOfLastDay.getTime();
}

export function nextConvention(referenceDate: Date = new Date()): ConventionEvent | null {
  const upcoming = sortedConventions().filter(
    (event) => event.confirmed && !isConventionOver(event, referenceDate),
  );
  return upcoming[0] ?? null;
}

// The day to count down to: the first day actually attending. */
export function countdownTargetDate(event: ConventionEvent): string {
  if (!event.attendingDates?.length) {
    return event.date;
  }
  return [...event.attendingDates].sort()[0];
}

function formatDay(date: Date): string {
  return `${MONTHS[date.getMonth()].slice(0, 3)} ${date.getDate()}`;
}

function isNextCalendarDay(a: Date, b: Date): boolean {
  return b.getTime() - a.getTime() === 86400000;
}

function formatDateRange(event: ConventionEvent): string {
  const start = new Date(`${event.date}T00:00:00`);
  if (!event.dateEnd) {
    return formatDay(start);
  }
  const end = new Date(`${event.dateEnd}T00:00:00`);
  if (start.getMonth() === end.getMonth()) {
    return `${MONTHS[start.getMonth()].slice(0, 3)} ${start.getDate()}–${end.getDate()}`;
  }
  return `${formatDay(start)} – ${formatDay(end)}`;
}

/** Groups consecutive dates together (e.g. Oct 17–18) and separates gaps with a comma. */
function formatAttendingDates(attendingDates: string[]): string {
  const sorted = [...attendingDates]
    .slice(0, MAX_ATTENDING_DATES)
    .sort()
    .map((iso) => new Date(`${iso}T00:00:00`));

  const groups: Date[][] = [];
  for (const date of sorted) {
    const currentGroup = groups[groups.length - 1];
    const previousDate = currentGroup?.[currentGroup.length - 1];
    if (previousDate && isNextCalendarDay(previousDate, date)) {
      currentGroup.push(date);
    } else {
      groups.push([date]);
    }
  }

  return groups
    .map((group) =>
      group.length === 1
        ? formatDay(group[0])
        : `${formatDay(group[0])}–${group[group.length - 1].getDate()}`,
    )
    .join(', ');
}

export function toConventionCard(event: ConventionEvent): ConventionCard {
  const start = new Date(`${event.date}T00:00:00`);
  return {
    name: event.name,
    day: String(start.getDate()).padStart(2, '0'),
    month: MONTHS[start.getMonth()].slice(0, 3).toUpperCase(),
    location: event.location,
    dateRange: formatDateRange(event),
    isMultiDay: !!event.dateEnd,
    attendingDays:
      event.confirmed && event.attendingDates?.length
        ? formatAttendingDates(event.attendingDates)
        : null,
    link: event.link,
    confirmed: event.confirmed,
  };
}
