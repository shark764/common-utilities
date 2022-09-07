export type DateTimeFormat =
  | 'calendarDate'
  | 'date'
  | 'dateTime'
  | 'shortDate'
  | 'shortDateTime'
  | 'shortTime'
  | 'time';

export type UserHourMode = '12h' | '24h';

export type UserDateMode = 'dmy' | 'mdy' | 'ymd';

export interface CommlandAccount {
  timezone?: string;
}

export interface CommlandUser {
  timezone?: string;
  ui_flags?: {
    twelve_hours_mode?: boolean;
    date_format?: UserDateMode;
  };
}
