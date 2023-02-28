import "./Aroma.modules.scss";

interface IAromaProps {
  flavour?: string;
  producent?: string;
}

const Aroma: React.FC<IAromaProps> = ({ flavour, producent }) => {
  return (
    <div className="aroma">
      {flavour && <p>{flavour}</p>}
      {producent && <p>{producent}</p>}
    </div>
  );
};

export default Aroma;
