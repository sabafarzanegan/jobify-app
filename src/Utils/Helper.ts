import { Theme } from "../Feature/Theme/themeSlice";

export const ApplyTheme = (theme: Theme) => {
  const root = window.document.documentElement;
  root.classList.remove("dark", "light");
  if (theme === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches
      ? "dark"
      : "light";
    root.classList.add(systemTheme);
    return;
  }
  root.classList.add(theme);
};
