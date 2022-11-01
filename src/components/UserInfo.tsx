import { GithubUser } from "../lib/types";
import AboutUser from "./AboutUser";
import Card from "./Card";
import UserInfoFooter from "./UserInfoFooter";
import UserStats from "./UserStats";

type Props = {
  user: GithubUser;
};

const UserInfo = ({ user }: Props) => {
  return (
    <Card className="p-5 mt-5 md:p-10">
      <AboutUser user={user} />
      <UserStats user={user} />
      <UserInfoFooter user={user} />
    </Card>
  );
};

export default UserInfo;
