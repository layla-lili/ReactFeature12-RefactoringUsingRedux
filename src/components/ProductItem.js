// Components
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";

import UpdateButton from "./buttons/UpdateButton";
import { ProductWrapper } from "../styles";

const ProductItem = ({ product }) => {
  // const product = props.product;
  // const setProduct = props.setProduct;

  return (
    <ProductWrapper>
      <Link to={`/products/${product.slug}`}>
        <img alt={product.name} src={product.image} />
      </Link>

      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButton productId={product.id} />
      <UpdateButton slug={product.slug} />
    </ProductWrapper>
  );
};

export default ProductItem;
