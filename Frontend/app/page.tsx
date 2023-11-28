import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
   <div>
    <h1 className="text-4xl font-medium text-center p-10">Home Page</h1>
    <ProductCard></ProductCard>
   </div>
  )
}
