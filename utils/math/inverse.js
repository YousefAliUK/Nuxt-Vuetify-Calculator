export default function inverse({ result, operation, lastOperation }) {
  /* !__! If there is no number to invert !__! */
  if (!result.value) return;

  /* !__! If the number is 0 | Prevents devision by zero !__! */
  if (result.value === "0") {
    result.value = "Error";
    return;
  }

  /* !__! VARIABLES !__! */
  let newOperation = `1/(${lastOperation.value || result.value})`;

  /* !__! Update the operation string !__! */
  if (operation.value && !operation.value.includes("=")) {
    let lastIndex = operation.value.lastIndexOf(lastOperation.value);

    /* !__! Update the operation string if the last operation was available !__! */
    if (lastIndex !== -1) {
      operation.value =
        operation.value.substring(0, lastIndex) +
        newOperation +
        operation.value.substring(lastIndex + lastOperation.value.length);
    } else {
      /* !__! Add the new operation if the last operation was not available !__! */
      operation.value += ` ${newOperation}`;
    }
  } else {
    /* !__! Set the new operation if there was no previous operation !__! */
    operation.value = newOperation;
  }

  /* !__! Calculate the new result !__! */
  result.value = 1 / parseFloat(result.value);
  lastOperation.value = newOperation;
}
