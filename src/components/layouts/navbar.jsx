import { Avatar } from "../ui/avatar";
import { Link } from "react-router-dom";
import { Icons } from "../icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { user } from "../../lib/fetch";

export const NavBar = () => {
  const token = document.cookie.split("=")[1];
  const [Info, setInfo] = useState({
    email: "",
    name: "",
    pic: "",
  });

  useEffect(() => {
    if (!token) {
      return;
    }
    const fetcher = async () => {
      const userId = token.split("#")[1];
      const info = await user(userId);
      setInfo(info);
    };

    fetcher();
  }, [token]);

  return (
    <nav className="navbar-wrapper">
      <ul className="navbar-list">
        <Link to={"/products"}>New Drops 🔥</Link>
        <li>
          <Link href="/">
            <Icons.logo className="h-10 w-32" />
          </Link>
        </li>
        {Info.email.length > 0 ? (
          <UserMenu email={Info.email} username={Info.name}>
            <Avatar className="avatar">
              <img src={Info.pic} alt="user" />
            </Avatar>
          </UserMenu>
        ) : (
          <Button to={"/login"}>Login</Button>
        )}
      </ul>
    </nav>
  );
};

const UserMenu = ({ children, email, username }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="dropdown-item">
          <h3 className="email">{email}</h3>
          <p className="text-sm">{username}</p>
        </DropdownMenuItem>
        <Button
          onClick={() => {
            document.cookie = "token=; path=/;";
            window.location.href = "/login";
          }}
          className="w-full"
          variant={"destructive"}
        >
          Logout
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
