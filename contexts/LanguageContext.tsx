import { createContext, FC, useReducer, Dispatch, Reducer } from "react";
import { contentEN, contentES } from "./content";

interface InitialStateType {
  language: "EN" | "ES";
  content: any;
}

interface LanguageContextType {
  state: InitialStateType;
  dispatch: Dispatch<any>;
}

const initialState: InitialStateType = {
  language: "ES",
  content: contentES,
};

const LanguageContext = createContext<LanguageContextType>({
  state: initialState,
  dispatch: () => null,
});

const languageReducer = (state: InitialStateType, action: any) => {
  const content = state.language === "EN" ? contentEN : contentES;
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        language: state.language === "ES" ? "EN" : "ES",
        content: content,
      };
    default:
      return state;
  }
};

const initFn: any = () => ({ language: "EN", content: contentEN });

const LanguageProvider: FC = ({ children }: any) => {
  const [state, dispatch] = useReducer<Reducer<any, any>>(
    languageReducer,
    initialState,
    initFn
  );
  return (
    <LanguageContext.Provider value={{ state, dispatch }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
