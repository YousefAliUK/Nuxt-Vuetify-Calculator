export default function append({ char, operation, result, lastOperation }) {
  /* !__! VARIABLES  !__! */
  let equalsPressed = operation.value.includes("=");
  let operationsArray = ["+", "-", "*", "/"];

  /* !__! If we want to start a new operation after a result !__! */
  if (equalsPressed && (!isNaN(char) || char === ".")) {
    operation.value = "";
    result.value = char;
    return;
  }

  /* !__! If we want to add an operator with a result already there !__! */
  if (equalsPressed && isNaN(char)) {
    operation.value = result.value + char;
    result.value = "";
    return;
  }

  /* !__! If we want to add a number !__! */
  if (!isNaN(char) || char === ".") {
    if ((result.value === "0" && char !== ".") || result.value === "") {
      result.value = char;
    } else {
      result.value += char;
    }
  } else {
    let operationWithoutSpaces = operation.value.trim();

    /* !__! If we start with an operator instead of a number !__! */
    if (operationWithoutSpaces === "" && ["+", "-", "*", "/"].includes(char)) {
      operation.value = result.value
        ? result.value + ` ${char} `
        : `0 ${char} `;
      result.value = "";
      return;
    }

    /* !__! If we want to change operators !__! */
    if (
      operationWithoutSpaces !== "" &&
      result.value === "" &&
      operationsArray.includes(char) &&
      operationsArray.includes(operationWithoutSpaces.slice(-1))
    ) {
      operation.value = operationWithoutSpaces.slice(0, -1);
      operation.value += char;
      return;
    }

    /* !__! If we want to add an operator after a result !__! */
    if (result.value !== "" && operation.value !== "") {
      operation.value += ` ${result.value}`;

      result.value = evaluateExpression({ expr: operation.value });

      operation.value = result.value + ` ${char} `;

      lastOperation.value = "";
      result.value = "";
    } else if (result.value !== "") {
      /* !__! If we want to add an operator after a number !__! */
      operation.value = result.value + ` ${char} `;
      result.value = "";
    }
  }
}
