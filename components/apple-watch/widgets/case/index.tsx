import Image from "next/image";
import watchcase from "./case.png";
import styles from "./styles.module.css";

export const Case = () => {
  return (
    <div className={styles.case}>
      <Image src={watchcase} alt="apple watch case" unoptimized />
    </div>
  );
};
