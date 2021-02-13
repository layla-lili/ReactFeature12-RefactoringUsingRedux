//ACTION TYPE
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";

export const deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    payload: { productId }, // similar to {productId: productId}
  };
};

export const addProduct = (newProduct) => {
  return {
    type: ADD_PRODUCT,
    payload: { newProduct }, // similar to {productId: productId}
  };
};
