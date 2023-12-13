import Link from "next/link";
import ProductCard from "./components/ProductCard";
import NavBar from "./NavBar";

export default function Home() {
  return (
   <div>
    <NavBar></NavBar>
    <h1 className="text-4xl mt-20 font-medium text-center p-10">Home Page</h1>
    <ProductCard></ProductCard>
   </div>
  )
}
