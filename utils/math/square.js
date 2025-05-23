export default function square({ result, operation, lastOperation }) {
  /* !__! If there is no number to square !__! */
  if (!result.value) return;

  /* !__! VARIABLES !__! */
  let newOperation = `sqr(${lastOperation.value || result.value})`;

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
  result.value = Math.pow(result.value, 2);
  lastOperation.value = newOperation;
}
