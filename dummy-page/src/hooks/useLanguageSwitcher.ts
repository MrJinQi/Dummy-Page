import i18n from "../i18n";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { setLanguage } from "../store/language/languageSlice";
import type { Language } from "../types/language";

export const useLanguage = () => {
  const dispatch = useAppDispatch();

  const language = useAppSelector((state) => state.language.current);

  const changeLanguage = (language: Language) => {
    dispatch(setLanguage(language));

    i18n.changeLanguage(language);

    localStorage.setItem("language", language);
  };

  return {
    language,
    changeLanguage,
  };
};
