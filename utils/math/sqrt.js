export default function sqrt({ result, operation, lastOperation }) {
  /* !__! If there is no number to root !__! */
  if (!result.value) return;

  /* !__! If the number is negative | Prevents square root of negative number !__! */
  if (result.value < 0) {
    result.value = "Error";
    return;
  }

  /* !__! VARIABLES !__! */
  let newOperation = `√(${lastOperation.value || result.value})`;

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
  result.value = Math.sqrt(result.value);
  lastOperation.value = newOperation;
}
