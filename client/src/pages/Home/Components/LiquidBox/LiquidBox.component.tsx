import Button from "../../../../Components/Button";
import { CartContext, ICartContext } from "../../../../Context/Cart.context";
import { ILiquid } from "../../../../Models/Liquid.models";
import AromasRatioChart from "../AromasRatioChart";
import "./LiquidBox.modules.scss";
import { createLiquidName } from "./LiquidBox.service";
import { useContext } from "react";

export interface ILiquidBoxProps {
  liquid: ILiquid;
}

const LiquidBox: React.FC<ILiquidBoxProps> = ({ liquid }) => {
  const { nicotineStrength, sizeInMl, base, price, description } =
    liquid.attributes;
  const { addToCart } = useContext<ICartContext>(CartContext);

  return (
    <div className="liquid-box">
      <div className="liquid-box__column">
        <div className="liquid-box__head">
          <h2 className="liquid-box__head--title">
            {createLiquidName(liquid.attributes.aromasAndRatios)}
          </h2>
          <div>
            <ul className="liquid-box__head__details">
              <li className="liquid-box__details--item">
                {nicotineStrength} mg/ml
              </li>
              <li className="liquid-box__details--item">{sizeInMl} ml</li>
              <li className="liquid-box__details--item">
                PG/VG {base.vgPgRatio}
              </li>
            </ul>
          </div>
          <hr />
        </div>
        <div className="liquid-box__info">
          <p className="liquid-box__info--price">{price} zł</p>
          <Button text="Zarezerwuj" onClick={() => addToCart(liquid)} />
        </div>
      </div>
      <div className="liquid-box__column">
        <AromasRatioChart aromasAndRatios={liquid.attributes.aromasAndRatios} />
        <p className="liquid-box__description">{description}</p>
      </div>
    </div>
  );
};
export default LiquidBox;
