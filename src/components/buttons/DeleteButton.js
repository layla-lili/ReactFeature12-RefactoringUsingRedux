// Styling
import { DeleteButtonStyled } from "../../styles";
import { deleteProduct } from "../../store/action";
import { useDispatch } from "react-redux";
const DeleteButton = (props) => {
  const dispatch = useDispatch();

  return (
    <DeleteButtonStyled
      className="btn btn-outline-danger"
      onClick={() => dispatch(deleteProduct(props.productId))}
    >
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;