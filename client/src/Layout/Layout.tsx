import { ReactNode } from "react";
import Sidebar from "../Components/Sidebar";
import "./Layout.modules.scss";

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = (props) => (
  <div className="app">
    <Sidebar />
    <div className="page-content">{props.children}</div>
  </div>
);

export default Layout;
