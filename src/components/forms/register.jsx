import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const Register = () => {
  return (
    <form className="register-wrapper">
      <Input placeholder="enter email" className="footer-input" />
      <Button type="submit">Submit</Button>
    </form>
  );
};
