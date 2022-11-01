import { formatDate } from "../lib/helpers";
import { GithubUser } from "../lib/types";

type Props = {
  user: GithubUser;
};

const AboutUser = ({ user }: Props) => {
  const { avatar_url, name, login: username, bio, created_at } = user;

  const formattedDate = formatDate(created_at);

  return (
    <div>
      <div className="flex gap-5 md:gap-7 items-center">
        <img
          src={avatar_url}
          alt=""
          id="profile-image"
          className="rounded-full"
          width="117px"
        />
        <div>
          <h2
            id="name"
            className="text-text-primary-dark dark:text-text-primary-light md:text-xl"
          >
            {name}
          </h2>
          <p id="username" className="text-primary-main mb-2 text-sm">
            @{username}
          </p>
          <p
            id="joined-at"
            className="text-text-tertiary dark:text-text-primary-light font-normal text-sm"
          >
            Joined {formattedDate}
          </p>
        </div>
      </div>
      <p
        id="bio"
        className="text-text-tertiary dark:text-text-primary-light mt-5"
      >
        {bio}
      </p>
    </div>
  );
};

export default AboutUser;
