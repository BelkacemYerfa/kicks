import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const Register = () => {
  return (
    <form className="flex items-center gap-2">
      <Input
        placeholder="enter email"
        className="focus:ring-0 placeholder:text-white max-w-xs"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
