// Добаввление нуля в отображении времени
const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

// Задаем формат отображения времени
export const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours());
  const minutes = castTimeFormat(date.getMinutes());

  return `${hours}:${minutes}`;
};
