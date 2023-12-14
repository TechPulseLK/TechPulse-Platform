import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Searchbar from "./searchbar";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Searchbar></Searchbar>
    <h1 className="text-2xl mt-20 font-base text-center p-10">Event cards will display here...</h1>
    <ProductCard></ProductCard>
   </div>
  )
}
