import { useState, useCallback } from "react";

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);
  const changeState = useCallback(() => {
    setState((v) => !v);
  }, []);
  return [state, changeState] as const;
};
export default useToggle;
