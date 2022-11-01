import { GithubUser } from "../lib/types";
import Card from "./Card";

type Props = {
  user: GithubUser;
};

const UserStats = ({ user }: Props) => {
  const { public_repos, following, followers } = user;

  return (
    <div className="grid grid-cols-3 gap-3 mt-5">
      <Card darker className="text-center">
        <h3 className="text-xs sm:text-sm font-normal text-text-tertiary dark:text-text-primary-light mb-3">
          Repos
        </h3>
        <span className="font-bold text-lg mt-3 dark:text-text-primary-light">
          {public_repos}
        </span>
      </Card>
      <Card
        darker
        className="bg-background-main-light dark:bg-background-main-dark text-center"
      >
        <h3 className="text-xs sm:text-sm font-normal text-text-tertiary dark:text-text-primary-light mb-3">
          Following
        </h3>
        <span className="font-bold text-lg mt-3 dark:text-text-primary-light">
          {following}
        </span>
      </Card>
      <Card
        darker
        className="bg-background-main-light dark:bg-background-main-dark text-center"
      >
        <h3 className="text-xs sm:text-sm font-normal text-text-tertiary dark:text-text-primary-light mb-3">
          Followers
        </h3>
        <span className="font-bold text-lg mt-3 dark:text-text-primary-light">
          {followers}
        </span>
      </Card>
    </div>
  );
};

export default UserStats;
