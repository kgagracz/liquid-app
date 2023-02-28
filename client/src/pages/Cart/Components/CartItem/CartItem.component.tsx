import { CartContext, ICartContext } from "../../../../Context/Cart.context";
import { createLiquidName } from "../../../Home/Components/LiquidBox/LiquidBox.service";
import "./CartItem.modules.scss";
import { useContext } from "react";
import { ReactComponent as TrashBinIcon } from "../../../../Icons/trash_bin.svg";
import { ICartItemProps } from "./CartItem.models";

const CartItem: React.FC<ICartItemProps> = ({ liquid }) => {
  const { removeFromCart } = useContext<ICartContext>(CartContext);
  return (
    <div className="cart-item">
      <div className="column">
        <div className="cart-item__img">obrazek</div>
        <p className="cart-item__title">
          {createLiquidName(liquid.attributes.aromasAndRatios)}
        </p>
      </div>
      <div className="column">
        <p className="cart-item__price">{liquid.attributes.price} zł</p>
        <span
          className="cart-item__delete-icon"
          onClick={() => removeFromCart(liquid.id)}
        >
          <TrashBinIcon />
        </span>
      </div>
    </div>
  );
};

export default CartItem;
