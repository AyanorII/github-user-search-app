import { GithubUser } from "../lib/types";

type Props = {
  user: GithubUser;
};

const UserInfoFooter = ({ user }: Props) => {
  const { location, blog, twitter_username, company } = user;

  return (
    <ul className="grid lg:grid-cols-2 mt-7 gap-2">
      <ListItem icon="icon-location.svg">{location}</ListItem>
      <ListItem icon="icon-website.svg">
        <a
          href={blog}
          className="underline underline-offset-8 decoration-primary-main"
        >
          {blog}
        </a>
      </ListItem>
      <ListItem
        icon="icon-twitter.svg"
        className={
          twitter_username ? "" : "text-text-tertiary dark:text-text-tertiary"
        }
      >
        {twitter_username}
      </ListItem>
      <ListItem icon="icon-company.svg">{company || "Not available"}</ListItem>
    </ul>
  );
};

export default UserInfoFooter;

type ListItemProps = {
  icon: string;
  children: React.ReactElement | string | null;
  className?: string;
};

const ListItem = ({ icon, children, className }: ListItemProps) => {
  return (
    <li
      className={`grid grid-cols-[20px_1fr] gap-3 items-center text-text-secondary dark:text-text-primary-light ${className}`}
    >
      <img src={icon} />
      {children || "Not available"}
    </li>
  );
};
