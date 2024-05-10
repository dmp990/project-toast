import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { shelf, handleDismiss } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {shelf.map((item, index) => {
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
