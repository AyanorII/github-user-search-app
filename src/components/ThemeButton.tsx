import { capitalize } from "../lib/helpers";
import { ThemeProps } from "../lib/types";

const ThemeButton = ({ theme, toggleTheme }: ThemeProps) => {
  const iconUrl = theme === "light" ? "icon-moon.svg" : "icon-sun.svg";

  return (
    <button
      className="flex justify-between items-center gap-3"
      onClick={() => toggleTheme()}
    >
      <span className="text-text-secondary dark:text-text-primary-light">
        {capitalize(theme)}
      </span>
      <img src={iconUrl} alt="" />
    </button>
  );
};

export default ThemeButton;
