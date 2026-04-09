// Utility functions for date operations

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export const getDaysInMonth = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

export const getFirstDayOfMonth = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
};

export const getMonthName = (monthIndex: number): string => {
  const months = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
  ];
  return months[monthIndex];
};

export const getMonthShortName = (monthIndex: number): string => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[monthIndex];
};

export const getDayName = (dayIndex: number): string => {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  return days[dayIndex];
};

export const isToday = (date: Date): boolean => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

export const isInRange = (date: Date, start: Date | null, end: Date | null): boolean => {
  if (!start || !end) return false;
  const [rangeStart, rangeEnd] = start <= end ? [start, end] : [end, start];
  return date >= rangeStart && date <= rangeEnd;
};

export const isWeekend = (dayIndex: number): boolean => {
  // dayIndex from getDay(): 0=Sun, 1=Mon, ..., 6=Sat
  return dayIndex === 0 || dayIndex === 6;
};

export const getCalendarDays = (date: Date): (number | null)[] => {
  const daysInMonth = getDaysInMonth(date);
  const firstDay = getFirstDayOfMonth(date);
  const days: (number | null)[] = [];

  // Add empty cells for days before month starts (adjust for Monday start)
  for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
    days.push(null);
  }

  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return days;
};

export const getDateFromDay = (baseDate: Date, dayNumber: number): Date => {
  return new Date(baseDate.getFullYear(), baseDate.getMonth(), dayNumber);
};

export const addMonths = (date: Date, months: number): Date => {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
};
