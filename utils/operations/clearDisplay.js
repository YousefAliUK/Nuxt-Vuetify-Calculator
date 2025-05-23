import clear from "./clear.js";

export default function clearDisplay({ operation, result }) {
  if (operation.value.includes("=")) {
    /* !__! clear everything !__! */
    clear({ result, operation });
  } else {
    /* !__! Clear only the result !__! */
    result.value = "";
  }
}
