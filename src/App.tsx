import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";
import SearchUser from "./components/SearchUser";
import UserInfo from "./components/UserInfo";
import { GithubUser, Theme } from "./lib/types";

function App() {
  const [theme, setTheme] = useState<Theme>("light");
  const [user, setUser] = useState<GithubUser | null>(null);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleUser = (user: GithubUser) => {
    setUser(user);
  };

  return (
    <div className={`App ${theme}`}>
      <main className="bg-background-main-light bg-background-main-light dark:bg-background-main-dark min-w-screen min-h-screen">
        <Container>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <SearchUser setUser={handleUser} />
          {user && <UserInfo user={user} />}
        </Container>
      </main>
    </div>
  );
}

export default App;
