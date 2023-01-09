import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/Cart.context";
import { ReactComponent as CartIcon } from "../../Icons/cart.svg";
import "./Cart.modules.scss";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div className="cart-icon">
      <span>{cart.length}</span>
      <CartIcon onClick={() => navigate("/koszyk")} />
    </div>
  );
};

export default Cart;
