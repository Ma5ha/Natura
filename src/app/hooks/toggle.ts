import { useState } from "react";

export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((v) => !v);

  return [value, toggle] as const;
}
