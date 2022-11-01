import ThemeButton from "./ThemeButton";
import { ThemeProps } from '../lib/types';

const Header = (themeProps: ThemeProps) => {
  return (
    <header className="flex justify-between pt-10">
      <h1 className="text-3xl text-text-primary-dark dark:text-text-primary-light">
        devfinder
      </h1>
      <ThemeButton {...themeProps} />
    </header>
  );
};

export default Header;
