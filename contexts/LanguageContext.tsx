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
  language: "EN",
  content: contentEN,
};

const LanguageContext = createContext<LanguageContextType>({
  state: initialState,
  dispatch: () => null,
});

const languageReducer = (state: InitialStateType, action: any) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        language: state.language === "EN" ? "ES" : "EN",
        content: state.language === "EN" ? contentEN : contentES,
      };
    default:
      return state;
  }
};

const LanguageProvider: FC = ({ children }: any) => {
  const [state, dispatch] = useReducer<Reducer<any, any>>(
    languageReducer,
    initialState
  );
  return (
    <LanguageContext.Provider value={{ state, dispatch }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
