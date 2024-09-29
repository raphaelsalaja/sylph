import * as AppleWatchWidgets from "@/components/apple-watch/widgets";

import styles from "./styles.module.css";

export const Calendar = () => {
  const formatter = new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "short",
    day: "2-digit",
  });
  const date = formatter.format(new Date()).replace(",", "").split(" ");

  return (
    <AppleWatchWidgets.Container>
      <div className={styles.widget}>
        <span className={styles.title}>{date[0]}</span>
        <span className={styles.subtitle}>
          {date[1]} {date[2]}
        </span>
      </div>
    </AppleWatchWidgets.Container>
  );
};

export default Calendar;
