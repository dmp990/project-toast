import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ shelf, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {shelf.map((item) => {
        return (
          <li className={styles.toastWrapper} key={item.id}>
            <Toast
              handleDismiss={handleDismiss}
              index={index}
              variantSelected={item.variant}
            >
              {item.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
