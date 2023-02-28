import { ReactNode } from "react";
import Sidebar from "../Components/Sidebar";
import "./Layout.modules.scss";
import Cart from "../Components/Cart";

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = (props) => {
  return (
    <div className="app">
      <Sidebar />
      <Cart />
      <div className="page-content">{props.children}</div>
    </div>
  );
};

export default Layout;
