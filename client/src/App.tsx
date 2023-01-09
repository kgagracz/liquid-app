import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartProvider from "./Context/Cart.context";
import Layout from "./Layout/Layout";
import { routes } from "./routes";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <Layout>
            <Routes>
              {routes.map((route) => (
                <Route path={route.path} element={route.element}></Route>
              ))}
            </Routes>
          </Layout>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
