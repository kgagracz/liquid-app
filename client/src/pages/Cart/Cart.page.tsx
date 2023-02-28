import { useContext } from "react";
import { CartContext, ICartContext } from "../../Context/Cart.context";
import CartItem from "./Components/CartItem/CartItem.component";
import "./Cart.page.modules.scss";
import { getCartValue } from "./Cart.service";
import Button from "../../Components/Button";
import EmptyCart from "./Components/EmptyCart";

const CartPage: React.FC = () => {
  const { cart } = useContext<ICartContext>(CartContext);
  const price = getCartValue(cart);
  return (
    <div className="cart">
      <div className="text-info-block">
        <h1>Koszyk</h1>
        <p>Przy zakupie minimum dwóch sztuk cena za sztukę wynosi 15 złotych</p>
      </div>
      {cart.length ? (
        <section className="cart__module">
          <h2>Ilość przedmiotów ({cart.length})</h2>
          <div className="cart__module__items">
            {cart.map((liquid) => (
              <CartItem liquid={liquid} />
            ))}
          </div>
          <div className="cart__module__summary">
            {cart.length > 1 && (
              <p className="cart__module__summary__promotion">
                Rabat przy zakupie 2 aktywny
              </p>
            )}
            <hr />
            <div className="cart__module__summary--price">
              <p>Łączna kwota</p>
              <div>
                <p className={price.sale !== 0 ? "strikethrough" : ""}>
                  {price.base} zł
                </p>
                {price.sale !== 0 && <p>{price.sale}</p>}
              </div>
            </div>
            <Button text="Zarezerwuj" onClick={() => console.log()} />
          </div>
        </section>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};
export default CartPage;
