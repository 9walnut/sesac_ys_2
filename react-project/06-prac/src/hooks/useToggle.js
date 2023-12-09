import { useState } from "react";
// toggle 기능이 자주 쓰이는데, true일 경우 false
// false일 경우, true
export default function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
}
