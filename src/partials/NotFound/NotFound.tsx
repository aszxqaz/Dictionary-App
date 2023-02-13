import Image from "next/image";
import styles from "./NotFound.module.scss";
import face from "@/assets/icons/face.png";

export const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.face} src={face} alt="Not found" />
      <div className="heading-medium bold mb-25">No Definitions Found</div>
      <div className="paragraph-medium">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </div>
    </div>
  );
};
