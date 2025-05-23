export default function backspace({ operation, result }) {
  /* !__! If there is no number to delete !__! */
  if (!result.value) return;

  /* !__! Changing the result !__! */
  if (!operation.value.includes("=")) result.value = result.value.slice(0, -1);
}
