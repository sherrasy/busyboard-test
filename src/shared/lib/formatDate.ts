import dayjs from 'dayjs';

export const formatDate = (
  date: string | Date,
  format = 'DD.MM.YYYY',
): string => {
  return dayjs(date).format(format);
};

export const formatTime = (date: string | Date): string => {
  return dayjs(date).format('HH:mm');
};

export const formatDateTime = (date: string | Date): string => {
  return dayjs(date).format('DD.MM.YYYY HH:mm');
};

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};
