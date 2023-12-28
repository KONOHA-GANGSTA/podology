import { useCallback, useEffect, useReducer } from "react";

export const useElementWasInView = (refs) => {
  const DEFAULT_PAGE_STATE = {};
  refs.forEach((element, index) => {
    DEFAULT_PAGE_STATE[`s${index}`] = false;
  });

  const reducer = useCallback((state, action) => {
    let index = 0;
    for (let el of refs) {
      if (el.current === action.type.target) {
        return { ...state, [`s${index}`]: action.payload };
      }
      ++index;
    }
    return state;
  });

  const [pageState, dispatch] = useReducer(reducer, DEFAULT_PAGE_STATE);

  const callback = useCallback((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio) {
        dispatch({ type: entry, payload: true });
      }
    });
  });

  const observer = new IntersectionObserver(callback);
  useEffect(() => {
    refs.forEach((el) => {
      observer.observe(el.current);
    });
  }, []);

  return pageState;
};
