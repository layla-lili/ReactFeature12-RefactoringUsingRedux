import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/action";
import { useHistory } from "react-router-dom";
import { FormGroup, productForm } from "../styles";

function ProductForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    Description: "",
    Image: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(product);
    dispatch(addProduct(product));
    history.push("/products");
  };
  const handleChange = (event) =>
    setProduct({ ...product, [event.target.name]: event.target.value });

  return (
    <FormGroup onSubmit={handleSubmit}>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
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
        Add
      </button>
    </FormGroup>
  );
}

export default ProductForm;
