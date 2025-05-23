export default function percent({ result, operation }) {
  /* !__! If there is no number to calculate the percentage of !__! */
  if (!result.value) return;

  /* !__! VARIABLES !__! */
  let currentValue = parseFloat(result.value);
  let newValue = currentValue / 100;

  /* !__! Update the results display !__! */
  result.value = newValue.toString();

  /* !__! Update the operation string !__! */
  if (operation.value && !operation.value.includes("=")) {
    operation.value = operation.value.replace(/[\d.]+$/, newValue.toString());
  } else {
    operation.value = newValue.toString();
  }
}
