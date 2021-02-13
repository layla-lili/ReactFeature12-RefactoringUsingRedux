import productsData from "../products.js";
import { DELETE_PRODUCT, ADD_PRODUCT } from "./action";
import { slugify } from "slugify";

const initialState = {
  products: productsData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const slug = slugify(action.payload.newProduct.name, { lower: true });
      action.payload.newProduct.slug = slug;
      action.payload.newProduct.id =
        state.products[state.products.length - 1].id + 1;
      return {
        ...state,
        products: [...state.products, action.payload.newProduct],
      };

    case DELETE_PRODUCT:
      const productToKeep = state.products.filter(
        (product) => product.id !== action.payload.productId
      );
      return {
        ...state,
        products: productToKeep, //copy all of the old state, and only manipulate the part we want to manipulate.
      };

    default:
      return state;
  }
};

export default reducer;
