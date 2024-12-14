import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect } from "react";

export const Login = () => {
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
    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    if (password.length < 8) {
      alert("Password should be at least 8 characters long");
      return;
    }

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
      window.location.href = "/";
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="login-main-wrapper">
      <h2 className="login-title">Login</h2>
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
