export function getScreenWidth() {
  if (typeof window !== `undefined`) {
    return window.innerWidth;
  }
}

export function isWideScreen() {
  if (typeof window !== `undefined`) {
    const windowWidth = window.innerWidth;
    const mediaQueryL = 1024;

    return windowWidth >= mediaQueryL;
  }
}

export function timeoutThrottlerHandler(timeouts, name, delay, handler) {
  if (!timeouts[name]) {
    timeouts[name] = setTimeout(() => {
      timeouts[name] = null;
      handler();
    }, delay);
  }
}

export function currDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (1+today.getMonth())).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  return year + "-" + month + "-" + day;
}

export function convertMonth(month) {
  switch (month) {
    case 0:
      return "Января";
    case 1:
      return "Февраля";
    case 2:
      return "Марта";
    case 3:
      return "Апреля";
    case 4:
      return "Мая";
    case 5:
      return "Июня";
    case 6:
      return "Июля";
    case 7:
      return "Августа";
    case 8:
      return "Сентября";
    case 9:
      return "Октября";
    case 10:
      return "Ноября";
    case 11:
      return "Декабря";
    default:
      return "Января";
  }
}

export function convertISODate(dateStr) {
  let dateObj = new Date(dateStr);
  let day = dateObj.getDate();
  if (isNaN(day)) {
    day = 1;
  }

  let year = dateObj.getFullYear();
  if (isNaN(year)) {
    year = 2022;
  }
  return (
    day.toString() + " " + convertMonth(dateObj.getMonth()) + " " + year.toString()
  );
}
