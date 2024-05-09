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

  /* 
                  {
                    id: `${Math.random()}`,
                    variant: variantSelected,
                    message: message,
                  },
  */

  function handleDismiss(index) {
    //console.log("Index to remove is: " + index);
    setShelf((currentShelf) => {
      //console.log("Current State: ", currentShelf);
      /*
      const copyShelf = [];
      for (let i = 0; i < currentShelf.length; i++) {
        const copyItem = {};
        const keys = Object.keys(currentShelf[i]);
        for (let j = 0; j < keys.length; j++) {
          copyItem[keys[j]] = currentShelf[i][keys[j]];
        }
        copyShelf.push(copyItem);
      }
      */
      // const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));
      const copyShelf = JSON.parse(JSON.stringify(currentShelf));
      copyShelf.splice(index, 1);
      //console.log("Changed State: ", copyShelf);
      return copyShelf;
    });
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf shelf={shelf} handleDismiss={handleDismiss} />
      <form
        onSubmit={(event) => {
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
        }}
      >
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
