import evaluateExpression from "@/utils/math/evaluateExpression.js";

export default function calculate({ operation, result, lastOperation }) {
  try {
    /* !__! When Operation is empty, Number is equal it self */
    if (operation.value.trim() === "") {
      operation.value = result.value + " =";
      return;
    }

    /* !__! If the Operation is a number, treat it as itself !__! */
    if (/^\d+(\.\d+)?$/.test(operation.value.trim())) {
      operation.value += " =";
      return;
    }

    /* !__! If the last character is an operator, add the result value to it !__! */
    if (/[\+\-\*\/]/.test(operation.value.trimEnd().slice(-1))) {
      operation.value += ` ${result.value}`;
    }

    /* !__! Append an equal sign  !__! */
    if (result.value !== "" && !operation.value.includes("=")) {
      operation.value += " =";
    }

    /* !__! Calculate the result !__! */
    result.value = evaluateExpression({ expr: operation.value });

    /* !__! Resetting the last operation !__! */
    lastOperation.value = "";
  } catch (e) {
    console.log(e);
    result.value = "Error";
  }
}
