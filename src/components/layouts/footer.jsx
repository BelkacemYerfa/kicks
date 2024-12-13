import { Register } from "../forms/register";
import { Icons } from "../icons";

export const Footer = () => {
  return (
    <footer className="bg-blue-500 rounded-4xl py-10 px-14 flex items-center gap-2 rounded-t-3xl mt-14">
      <div className="space-y-5 w-1/2">
        <h3 className="text-white text-4xl uppercase">
          JOIN OUR KICKSPLUS <br />
          CLUB & GET 15% OFF
        </h3>
        <p className="text-xl text-white/80">
          Sign Up for free! join the community
        </p>
        <Register />
      </div>
      <div className="flex items-center justify-center w-1/2">
        <Icons.logo className="h-72 w-96 fill-white" />
      </div>
    </footer>
  );
};
