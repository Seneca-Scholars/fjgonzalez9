import React from "react";
import { useTheme } from "../context/ThemeProvider";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggler;
