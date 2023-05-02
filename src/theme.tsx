// https://www.joshwcomeau.com/react/dark-mode/
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const ThemeContext = React.createContext<
  | {
      colorMode: string;
      setColorMode: (colorMode: "dark" | "light") => void;
    }
  | undefined
>(undefined);

function getInitialColorMode() {
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";
  if (hasMediaQueryPreference) {
    return mql.matches ? "dark" : "light";
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return "light";
}

export const ThemeProvider = ({ children }: Props) => {
  const [colorMode, rawSetColorMode] = React.useState(getInitialColorMode);

  const setColorMode = (value: "light" | "dark") => {
    rawSetColorMode(value);
    // Persist it on update
    window.localStorage.setItem("color-mode", value);
  };

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
