import { useContext, useMemo, useState, createContext, useEffect } from 'react';

const Context = createContext({
  prevValue: 0,
  nextValue: "0",
  handleOnclick: null
});

export const calculatorContext = () => {
  const context = useContext(Context);

  return context;
}

export default function index({ children }) {
  const [prevValue, setPrevValue] = useState(0);
  const [nextValue, setNextValue] = useState("0");
  const [op, setOp] = useState(null);
 
  useEffect(() => {}, [op, nextValue, prevValue]);

  const CalculatorOperations = {
    "/": (firstValue, secondValue) => firstValue / secondValue,
    "*": (firstValue, secondValue) => firstValue * secondValue,
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
    "=": (firstValue, secondValue) => secondValue,
  };

  const performOperation = () => {
    let temp = CalculatorOperations[op](
      parseFloat(prevValue),
      parseFloat(nextValue)
    );
    setOp(null);
    setNextValue(String(temp));
    setPrevValue(null);
  };

  const handleNum = (number) => {
    setNextValue(nextValue === "0" ? String(number) : nextValue + number);
  };

  const insertDot = () => {
    if (!/\./.test(nextValue)) {
      setNextValue(nextValue + ".");
    }
  };
  const percentage = () => {
    setNextValue(parseFloat(nextValue) / 100);
    if (prevValue && nextValue === "") {
      setPrevValue(parseFloat(prevValue) / 100);
    }
  };
  const changeSign = () => {
    setNextValue(parseFloat(nextValue) * -1);
  };
  const clearData = () => {
    setNextValue("0");
    setPrevValue(0);
  };

  const handleOnclick = (value) => {
    
    if (Number.isInteger(value)) {
      handleNum(parseInt(value, 10));
    } else if (value in CalculatorOperations) {
      if (op === null) {
        setOp(value);
        setPrevValue(nextValue);
        setNextValue("");
      }
      if (op) {
        setOp(value);
      }
      if (prevValue && op && nextValue) {
        performOperation();
      }
    } else if (value === "c") {
      clearData();
    } else if (value === "\xB1") {
      changeSign();
    } else if (value === ".") {
      insertDot();
    } else if (value === "%") {
      percentage();
    }
  };

  const payload = useMemo(() => ({
    prevValue,
    nextValue,
    op,
    setPrevValue,
    setNextValue,
    setOp,
    performOperation,
    handleNum,
    insertDot,
    percentage,
    changeSign,
    clearData,
    handleOnclick
  }), [
    prevValue,
    nextValue,
    op,
    setPrevValue,
    setNextValue,
    setOp,
    performOperation,
    handleNum,
    insertDot,
    percentage,
    changeSign,
    clearData,
    handleOnclick
  ]);

  return (
    <Context.Provider value={payload}>
      {children}
    </Context.Provider>
  )
}