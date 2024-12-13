import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { NavBar } from "./navbar";

export function Layout() {
  return (
    <div className="bg-gray-300 px-5 pt-5 rubik min-h-screen">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
