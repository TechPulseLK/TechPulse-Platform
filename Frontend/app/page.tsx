import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <h1 className="text-4xl mt-20 font-medium text-center p-10">Home Page</h1>
    <ProductCard></ProductCard>
   </div>
  )
}
