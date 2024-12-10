import { useState } from "react";

export function useHistoryState<T>(initialState: T) {
  const [state, setState] = useState<T>(initialState);
  const [history, setHistory] = useState<T[]>([]);
  const [future, setFuture] = useState<T[]>([]);

  const set = (newState: T) => {
    setHistory((prev) => [...prev, state]);
    setFuture([]);
    setState(newState);
  };

  const undo = () => {
    if (history.length > 0) {
      const previousState = history[history.length - 1];
      setFuture((prev) => [state, ...prev]);
      setHistory((prev) => prev.slice(0, -1));
      setState(previousState);
    }
  };

  const redo = () => {
    if (future.length > 0) {
      const nextState = future[0];
      setHistory((prev) => [...prev, state]);
      setFuture((prev) => prev.slice(1));
      setState(nextState);
    }
  };

  const canUndo = history.length > 0;
  const canRedo = future.length > 0;

  return [state, set, { undo, redo, canUndo, canRedo }] as const;
}
