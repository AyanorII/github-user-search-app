import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { GithubUser } from "../lib/types";
import Button from "./Button";
import Card from "./Card";

type Props = {
  setUser: (user: GithubUser) => void;
};

const SearchUser = ({ setUser }: Props) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = `https://api.github.com/users/${username}`;
    try {
      const response = await axios.get(url);
      const { data } = response;
      setUser(data);
      setError("");
    } catch (err) {
      if (err instanceof AxiosError && err.response?.status === 404) {
        setError("No results");
      }
    }
  };

  return (
    <>
      <Card className="mt-10 relative">
      {error && <span className="lg:hidden text-sm text-error absolute right-3 top-[-1.5rem]">{error}</span>}
        <form
          onSubmit={handleSubmit}
          className="flex items-center w-full gap-3"
        >
          <label htmlFor="search">
            <img src="icon-search.svg" />
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search GitHub username"
            className="flex-grow bg-background-paper-light dark:bg-background-paper-dark dark:text-text-primary-light p-2 outline-none placeholder-shown:text-ellipsis overflow-hidden"
            value={username}
            onChange={handleChange}
          />
          {error && <span className="hidden text-sm text-error">{error}</span>}
          <Button>Search</Button>
        </form>
      </Card>
    </>
  );
};

export default SearchUser;
