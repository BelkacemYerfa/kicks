import { Header } from "../components/home/header";
import { Products } from "../components/home/products";

export default function Home() {
  return (
    <div className="space-y-10">
      <Header />
      <Products />
    </div>
  );
}
