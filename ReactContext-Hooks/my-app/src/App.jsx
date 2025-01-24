import React from "react";
import ThemeToggler from "./components/ThemeToggler";
import { useTheme } from "./context/ThemeProvider";

const App = () => {
  const { theme, themeStyles } = useTheme();

  return (
    <div style={{ ...themeStyles[theme], minHeight: "100vh", padding: "20px" }}>
      <h1>React Context Example</h1>
      <ThemeToggler />
    </div>
  );
};

export default App;
