export const banLengthOptions = [
  {
    value: { banLengthInTimeStamp: 86400000, banLength: '1d' },
    label: '1 день',
  },
  {
    value: { banLengthInTimeStamp: 259200000, banLength: '3d' },
    label: '3 дня',
  },
  {
    value: { banLengthInTimeStamp: 604800000, banLength: '7d' },
    label: '7 дней',
  },
  {
    value: { banLengthInTimeStamp: 1209600000, banLength: '14d' },
    label: '14 дней',
  },
  {
    value: { banLengthInTimeStamp: 2592000000, banLength: '30d' },
    label: '30 дней',
  },
  {
    value: { banLengthInTimeStamp: 90061000000, banLength: '0' },
    label: 'Пермбан',
  },
]
