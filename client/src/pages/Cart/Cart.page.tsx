import { useContext } from "react";
import { CartContext, ICartContext } from "../../Context/Cart.context";
import CartItem from "./Components/CartItem.component";
import "./Cart.page.modules.scss";
import { getCartValue } from "./Cart.service";
import Button from "../../Components/Button";

const CartPage: React.FC = () => {
  const { cart } = useContext<ICartContext>(CartContext);
  return (
    <div className="cart">
      <div className="text-info-block">
        <h1>Koszyk</h1>
        <p>Przy zakupie minimum dwóch sztuk cena za sztukę wynosi 15 złotych</p>
      </div>
      <section className="cart__module">
        <h2>Ilość przedmiotów ({cart.length})</h2>
        <div className="cart__module__items">
          {cart.map((liquid) => (
            <CartItem liquid={liquid} />
          ))}
        </div>
        <div className="cart__module__summary">
          <p>Rabat przy zakupie 2</p>
          <hr />
          <div className="cart__module__summary--price">
            <p>Łączna kwota</p>
            <p>{getCartValue(cart)} zł</p>
          </div>
          <Button text="Zarezerwuj" onClick={() => console.log()} />
        </div>
      </section>
    </div>
  );
};
export default CartPage;
