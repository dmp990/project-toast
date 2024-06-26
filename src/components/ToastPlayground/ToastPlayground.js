import React from "react";

import Button from "../Button";
import Toast from "../Toast";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground({ defaultVariant = "notice" }) {
  const [message, setMessage] = React.useState("");
  const [variantSelected, setVariantSelected] = React.useState(defaultVariant);
  const [shelf, setShelf] = React.useState([]);

  function handleDismiss(index) {
    setShelf((currentShelf) => {
      const copyShelf = JSON.parse(JSON.stringify(currentShelf));
      copyShelf.splice(index, 1);
      return copyShelf;
    });
  }

  function AddToastToShelf(event) {
    event.preventDefault();
    setShelf([
      ...shelf,
      {
        id: `${Math.random()}`,
        variant: variantSelected,
        message: message,
      },
    ]);
    setMessage("");
    setVariantSelected(defaultVariant);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf shelf={shelf} handleDismiss={handleDismiss} />
      <form onSubmit={AddToastToShelf}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => {
                const id = `variant-${option}`;
                return (
                  <label key={id} htmlFor={id}>
                    <input
                      id={id}
                      type="radio"
                      name="variant"
                      value={option}
                      checked={variantSelected === option}
                      onChange={(event) => {
                        setVariantSelected(event.target.value);
                      }}
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
