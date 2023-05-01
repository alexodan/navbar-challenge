import style from "./variables.module.scss";

function setColorMode(newValue: "light" | "dark") {
  const root = window.document.documentElement;
  // 1. Update React color-mode state
  // rawSetColorMode(newValue);

  // 2. Update localStorage
  localStorage.setItem("color-mode", newValue);
  // 3. Update each color
  root.style.setProperty(
    "--color-text",
    newValue === "light" ? style.lightText : style.darkText
  );
  root.style.setProperty(
    "--color-background",
    newValue === "light" ? style.lightBackground : style.darkBackground
  );
  root.style.setProperty(
    "--color-primary",
    newValue === "light" ? style.lightPrimary : style.darkPrimary
  );
}
