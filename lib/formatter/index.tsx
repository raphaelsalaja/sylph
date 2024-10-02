const date = (input: Date): string => {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(input);
};

const number = (input: number): string => {
  return new Intl.NumberFormat("en", {
    style: "decimal",
  }).format(input);
};

const time = (value: number, unit: Intl.RelativeTimeFormatUnit): string => {
  return new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  }).format(value, unit);
};

export const formatter = {
  date,
  number,
  time,
};
