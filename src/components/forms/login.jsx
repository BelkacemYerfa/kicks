import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = document.cookie.split("=")[1];
    if (token) {
      window.location.href = "/";
    }
  }, []);

  const handleSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = {
      email,
      password,
      token: crypto.randomUUID(),
      id: crypto.randomUUID(),
    };
    const res = await fetch(
      "https://675b48e79ce247eb19362d2c.mockapi.io/api/v1/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...user,
          createdAt: new Date().toISOString(),
          token: crypto.randomUUID(),
        }),
      }
    );

    if (res.ok) {
      const data = await res.json();
      document.cookie = `token=${user.token}#${data.id}`;
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="space-y-3 max-w-md w-full">
      <h2 className="text-2xl font-semibold">Login</h2>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          className="border-black"
        />
        <Input
          type="password"
          id="password"
          placeholder="Password"
          className="border-black"
        />
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </div>
  );
};
