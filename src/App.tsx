import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";
import SearchUser from "./components/SearchUser";
import { Theme } from "./lib/types";

function App() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`App ${theme}`}>
      <main className="bg-background-main-light bg-background-main-light dark:bg-background-main-dark min-w-screen min-h-screen">
        <Container>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <SearchUser />
        </Container>
      </main>
    </div>
  );
}

export default App;
