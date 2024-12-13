import { Avatar } from "../ui/avatar";
import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
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
      console.log(info);
    };

    fetcher();
  }, [token]);

  return (
    <nav className="px-3 py-5 bg-white w-full text-sm rounded-xl">
      <ul className="flex items-center justify-between">
        <Link to={"/products"}>New Drops 🔥</Link>
        <li>
          <Link href="/">
            <Icons.logo className="h-10 w-32" />
          </Link>
        </li>
        <li className="flex items-center gap-3">
          <Search className="size-6" />
          {Info.email.length > 0 ? (
            <UserMenu email={Info.email} username={Info.name}>
              <Avatar className="rounded-full size-6">
                <img src={Info.pic} alt="user" />
              </Avatar>
            </UserMenu>
          ) : (
            <Button to={"/login"}>Login</Button>
          )}
        </li>
      </ul>
    </nav>
  );
};

const UserMenu = ({ children, email, username }) => {
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="flex flex-col items-start gap-1">
          <h3 className="text-base font-medium">{email}</h3>
          <p className="text-sm">{username}</p>
        </DropdownMenuItem>
        <Button
          onClick={() => {
            document.cookie = "token=; path=/;";
            navigate("/login");
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
