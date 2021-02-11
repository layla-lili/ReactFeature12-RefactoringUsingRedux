// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";


const ProductList = () => {
  const products = useSelector((state) => state.products);
 
  const [query, setQuery] = useState("");
 

  const productList = products
  .filter((product) => product.name.toLowerCase().includes(query))
  .map((product) => <ProductItem key={product.id} product={product} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </div>
  );
};

export default ProductList;
