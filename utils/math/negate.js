export default function negate({ result }) {
  /* !__! If there is no number to negate !__! */
  if (!result.value) return;

  /* !__! Negate the number !__! */
  result.value = -result.value;
}
