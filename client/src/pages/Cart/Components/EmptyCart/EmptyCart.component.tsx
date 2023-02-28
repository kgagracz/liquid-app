import Button from "../../../../Components/Button";
import "./EmptyCart.modules.scss";
import { ReactComponent as HappyCart } from "../../../../Icons/happy_cart.svg";
import { useNavigate } from "react-router-dom";
const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="empty-cart">
      <h2>Twój koszyk jest pusty</h2>
      <HappyCart />
      <p>Nie możesz się zdecydować?</p>
      <p>Zerknij co mamy do zaoferowania!</p>
      <Button text="Sprawdź" onClick={() => navigate("/")} />
    </div>
  );
};

export default EmptyCart;
