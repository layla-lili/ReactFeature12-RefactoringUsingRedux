import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../store/action";
import { useHistory, useParams } from "react-router-dom";
import { FormGroup } from "../styles";

function ProductForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { productSlug } = useParams();
  const FonudProduct = useSelector((state) =>
    state.products.find((product) => product.slug === productSlug)
  );

  const [product, setProduct] = useState(
    FonudProduct ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(product);
    FonudProduct
      ? dispatch(updateProduct(product))
      : dispatch(addProduct(product));

    history.push("/products");
  };

  const handleChange = (event) =>
    setProduct({ ...product, [event.target.name]: event.target.value });

  return (
    <FormGroup onSubmit={handleSubmit}>
      <div className="form-group row">
        <h1>{FonudProduct ? "Update" : "Add"} Product</h1>

        <div className="col-sm-10">
          {/* <label className="col-sm-2 col-form-label">Name</label> */}
          <input
            type="text"
            value={product.name}
            onChange={handleChange}
            name="name"
            className="form-control"
            placeholder="Name"
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Price</label>
        <div className="col-sm-10">
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="form-control"
            placeholder="price"
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Description</label>
        <div className="col-sm-10">
          <input
            type="text"
            name="Description"
            onChange={handleChange}
            value={product.Description}
            className="form-control"
            placeholder="Description"
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Image</label>
        <div className="col-sm-10">
          <input
            type="text"
            name="Image"
            onChange={handleChange}
            value={product.Image}
            className="form-control"
            placeholder="Image"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-info float-right">
        {FonudProduct ? "Update" : "ADD"}
      </button>
    </FormGroup>
  );
}

export default ProductForm;
