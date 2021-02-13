import { Link } from "react-router-dom";
import { DeleteButtonStyled } from "../../styles";

function UpdateButton(slug) {
  return (
    <Link to={`/products/${slug}/edit`}>
      <DeleteButtonStyled className="btn btn-outline-warning">
        Update
      </DeleteButtonStyled>
    </Link>
  );
}

export default UpdateButton;
