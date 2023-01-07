import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

function useTheme() {
  const themeContextValue = useContext(ThemeContext);

  return themeContextValue;
}

export default useTheme;