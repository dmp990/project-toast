import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variantSelected, handleDismiss, index, children }) {
  const Icon = ICONS_BY_VARIANT[variantSelected];

  return (
    <div className={`${styles.toast} ${styles[variantSelected]}`}>
      <div className={styles.iconContainer}>
        {}
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variantSelected} - </VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
        onClick={() => {
          handleDismiss(index);
        }}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
