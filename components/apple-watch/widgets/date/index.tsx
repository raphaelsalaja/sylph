import styles from "./styles.module.css";

const WidgetDate = () => {
  const formatter = new Intl.DateTimeFormat("en", {
    weekday: "short",
    month: "short",
    day: "2-digit",
  });
  const date = formatter
    .format(new Date())
    .replace(",", "")
    .split(" ")
    .map((item) => item.toUpperCase());
  return (
    <div className="absolute top-[24px] left-[16px] mt-0">
      <div className={styles.date}>
        <span className={styles.part}>{date[0]}</span>
        <span className={styles.part}>{date[2]}</span>
        <span className={styles.part}>{date[1]}</span>
      </div>
    </div>
  );
};

const WidgetTime = () => {
  return (
    <div className="absolute top-[17px] right-[8px] mt-0">
      <div className="h-[96px] w-[96px] rounded-full bg-white-a6" />
    </div>
  );
};

export { WidgetDate as Date, WidgetTime as Time };
