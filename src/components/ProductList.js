// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BiPlusCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProductList = () => {
  const products = useSelector((state) => state.products);

  const [query, setQuery] = useState("");

  const productList = products
    .filter((product) => product.name.toLowerCase().includes(query))
    .map((product) => <ProductItem key={product.id} product={product} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <Link to="/products/new">
        <BiPlusCircle
          size="3rem"
          color="#d29200"
          style={{ padding: "2px", marginLeft: "50%", marginRight: "50%" }}
        ></BiPlusCircle>
      </Link>
      <ListWrapper>{productList}</ListWrapper>
    </div>
  );
};

export default ProductList;
