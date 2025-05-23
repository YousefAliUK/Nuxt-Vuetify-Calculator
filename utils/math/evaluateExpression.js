export default function evaluateExpression({ expr }) {
  console.log("Original Expression:", expr);

  // Tokenize the input
  const tokenize = (input) => {
    const tokens = [];
    let i = 0;

    while (i < input.length) {
      const char = input[i];

      // Skip whitespace
      if (/\s/.test(char)) {
        i++;
        continue;
      }

      // Handle numbers (including decimals)
      if (/\d|\./.test(char)) {
        let numStr = "";
        while (i < input.length && /\d|\./.test(input[i])) {
          numStr += input[i];
          i++;
        }
        tokens.push({ type: "number", value: parseFloat(numStr) });
        continue;
      }

      // Handle operators (+, -, *, /)
      if (/[\+\-\*\/]/.test(char)) {
        // Handle unary minus (e.g., -2)
        if (char === "-" && (i === 0 || /[\+\-\*\/\(]/.test(input[i - 1]))) {
          tokens.push({ type: "unary", value: "negate" });
        } else {
          tokens.push({ type: "operator", value: char });
        }
        i++;
        continue;
      }

      // Handle functions (sqr, √)
      if (char === "s" && input.slice(i, i + 3) === "sqr") {
        tokens.push({ type: "function", value: "sqr" });
        i += 3;
        continue;
      }
      if (char === "√") {
        tokens.push({ type: "function", value: "√" });
        i++;
        continue;
      }

      // Handle parentheses
      if (char === "(" || char === ")") {
        tokens.push({ type: "paren", value: char });
        i++;
        continue;
      }

      // Handle unknown characters
      throw new Error(`Unknown character: ${char}`);
    }

    return tokens;
  };

  // Parse and evaluate the tokens
  const parse = (tokens) => {
    let i = 0;

    const parseExpression = () => {
      let left = parseTerm();

      while (
        i < tokens.length &&
        tokens[i].type === "operator" &&
        /[\+\-]/.test(tokens[i].value)
      ) {
        const operator = tokens[i].value;
        i++;
        const right = parseTerm();
        left = operator === "+" ? left + right : left - right;
      }

      return left;
    };

    const parseTerm = () => {
      let left = parseFactor();

      while (
        i < tokens.length &&
        tokens[i].type === "operator" &&
        /[\*\/]/.test(tokens[i].value)
      ) {
        const operator = tokens[i].value;
        i++;
        const right = parseFactor();
        left = operator === "*" ? left * right : left / right;
      }

      return left;
    };

    const parseFactor = () => {
      // Handle unary minus (e.g., -2)
      if (tokens[i].type === "unary" && tokens[i].value === "negate") {
        i++;
        return -parseFactor();
      }

      if (tokens[i].type === "number") {
        return tokens[i++].value;
      }

      if (tokens[i].type === "function") {
        const func = tokens[i].value;
        i++;

        if (tokens[i].type !== "paren" || tokens[i].value !== "(") {
          throw new Error("Expected '(' after function");
        }
        i++;

        const arg = parseExpression();

        if (tokens[i].type !== "paren" || tokens[i].value !== ")") {
          throw new Error("Expected ')' after function argument");
        }
        i++;

        if (func === "sqr") {
          return Math.pow(arg, 2);
        }
        if (func === "√") {
          return Math.sqrt(arg);
        }
      }

      if (tokens[i].type === "paren" && tokens[i].value === "(") {
        i++;
        const value = parseExpression();
        if (tokens[i].type !== "paren" || tokens[i].value !== ")") {
          throw new Error("Expected ')'");
        }
        i++;
        return value;
      }

      throw new Error("Unexpected token");
    };

    return parseExpression();
  };

  try {
    // Remove the "=" sign and any trailing whitespace
    let sanitizedExpr = expr.replace(/=\s*$/, "").trim();

    // Tokenize the expression
    const tokens = tokenize(sanitizedExpr);

    // Parse and evaluate the tokens
    const result = parse(tokens);

    console.log("Result:", result);
    return result;
  } catch (e) {
    console.error("Evaluation Error:", e);
    return "Error";
  }
}
