// * IMPORTS
import { ref } from "vue";
import {
  append,
  calculate,
  clear,
  clearDisplay,
  backspace,
  square,
  sqrt,
  percent,
  inverse,
  negate,
} from "@/utils";

export default function useCalculator() {
  // Variables
  const operation = ref("");
  const result = ref("0");
  let lastOperation = ref("");
  const buttonsLayout = ref([
    [
      { label: "%", value: "%", action: "percent", color: "functions" },
      { label: "CE", value: "ce", action: "clearDisplay", color: "functions" },
      { label: "C", value: "clear", action: "clear", color: "functions" },
      {
        label: "⌫",
        value: "backspace",
        action: "backspace",
        color: "functions",
      },
    ],
    [
      {
        label:
          '<span style="font-size: 70%; vertical-align: 0.7ex;">1</span><i>/</i><span style="font-size: 100%; vertical-align: -0.3ex;">𝑥</span>',
        value: "reciprocal",
        action: "inverse",
        color: "functions",
      },
      { label: "𝑥²", value: "square", action: "square", color: "functions" },
      {
        label: "²√𝑥",
        value: "sqrt",
        action: "sqrt",
        color: "functions",
      },
      { label: "÷", value: "/", action: "append", color: "functions" },
    ],
    [
      { label: "7", value: "7", action: "append" },
      { label: "8", value: "8", action: "append" },
      { label: "9", value: "9", action: "append" },
      { label: "⨉", value: "*", action: "append", color: "functions" },
    ],
    [
      { label: "4", value: "4", action: "append" },
      { label: "5", value: "5", action: "append" },
      { label: "6", value: "6", action: "append" },
      { label: "−", value: "-", action: "append", color: "functions" },
    ],
    [
      { label: "1", value: "1", action: "append" },
      { label: "2", value: "2", action: "append" },
      { label: "3", value: "3", action: "append" },
      { label: "+", value: "+", action: "append", color: "functions" },
    ],
    [
      {
        label:
          '<span style="font-size: 70%; vertical-align: 0.7ex;">+</span><i>/</i><span style="font-size: 70%; vertical-align: -0.3ex;">-</span>',
        value: "negate",
        action: "negate",
      },
      { label: "0", value: "0", action: "append" },
      { label: ".", value: ".", action: "append" },
      {
        label: "=",
        value: "=",
        action: "calculate",
        color: "equals",
        hoverEqual: true,
      },
    ],
  ]);

  const handleClick = (button) => {
    switch (button.action) {
      case "append":
        append({ char: button.value, operation, result, lastOperation });
        break;
      case "clear":
        clear({ operation, result });
        break;
      case "clearDisplay":
        clearDisplay({ operation, result });
        break;
      case "backspace":
        backspace({ operation, result });
        break;
      case "calculate":
        calculate({ operation, result, lastOperation });
        break;
      case "negate":
        negate({ result });
        break;
      case "sqrt":
        sqrt({ result, operation, lastOperation });
        break;
      case "square":
        square({ result, operation, lastOperation });
        break;
      case "percent":
        percent({ result, operation });
        break;
      case "inverse":
        inverse({ result, operation, lastOperation });
        break;
    }
  };

  return {
    operation,
    result,
    buttonsLayout,
    handleClick,
  };
}
