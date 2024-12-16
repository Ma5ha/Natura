import { useReducer } from "react";

type State<T> = (
  | {
      isMultiSelect?: false;
      value: T;
    }
  | { isMultiSelect?: true; value: T[] }
) & {
  currentValue: T[];
  isOpen: boolean;
  placeholder?: string;
};

const initialState: State<any> = {
  currentValue: [],
  value: undefined,
  isOpen: false,
  placeholder: "",
};

type Action<T> = { type: "SELECT"; payload?: T } | { type: "TOGGLE" };

const DEFAULT = <T>(state: State<T>) => ({
  ...state,
  value: state.value || state.placeholder,
});

const reducerMap = {
  TOGGLE: <T>(state: State<T>) => ({
    ...state,
    isOpen: !state.isOpen,
  }),
  SELECT: <T>(state: State<T>, payload: T) => {
    const currentValue = state.currentValue.includes(payload)
      ? state.currentValue.filter((i) => i !== payload)
      : [...((state.isMultiSelect && state.currentValue) || []), payload];

    return DEFAULT<T>({
      ...state,
      isOpen: false,
      currentValue,
      value: currentValue.join(" "),
    } as State<T>);
  },
};

const selectReducer = <T>(
  state: State<T> = initialState as State<T>,
  action: Action<T>
) => {
  if (!reducerMap[action?.type]) return DEFAULT(state) as State<T>;

  return reducerMap[action.type](
    state,
    (action as unknown as { payload?: T }).payload
  ) as State<T>;
};

const useSelectReducer = <T>(intState?: Partial<State<T>>) => {
  const resolveState = DEFAULT({ ...initialState, ...intState });

  const [state, dispatch] = useReducer<typeof selectReducer>(
    selectReducer,
    resolveState
  );
  const addItem = (item: T) => dispatch({ type: "SELECT", payload: item });
  const toggle = () => dispatch({ type: "TOGGLE" });
  const isSelected = (item: T) => state.currentValue.includes(item);
  return {
    addItem,
    toggle,
    isSelected,
    state: state as State<T>,
  };
};

export default useSelectReducer;
