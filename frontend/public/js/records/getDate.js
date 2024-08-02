export function getMonthly() {
  let date = (new Date().getMonth() + 1).toString();

  if (date.length == 1) {
    date = "0" + date;
  }

  return date
}

export function getYear() {
  return new Date().getFullYear()
}