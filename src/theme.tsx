/**
 * This code is extracted from here https://www.joshwcomeau.com/react/dark-mode/
 * I deleted the parts I'm not using though, since I just want the user theme.
 */
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const ThemeContext = React.createContext<
  | {
      colorMode: string;
    }
  | undefined
>(undefined);

function getInitialColorMode() {
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";

  mql.addEventListener("change", () => {
    // TODO: add code to toggle color in theme context
  });

  if (hasMediaQueryPreference) {
    return mql.matches ? "dark" : "light";
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return "light";
}

export const ThemeProvider = ({ children }: Props) => {
  const [colorMode] = React.useState(getInitialColorMode());

  return (
    <ThemeContext.Provider value={{ colorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
