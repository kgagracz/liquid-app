import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartProvider from "./Context/Cart.context";
import SelectedAromasProvider from "./Context/SelectedAromas.context";
import Layout from "./Layout/Layout";
import { routes } from "./routes";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <SelectedAromasProvider>
            <Layout>
              <Routes>
                {routes.map((route) => (
                  <Route path={route.path} element={route.element}></Route>
                ))}
              </Routes>
            </Layout>
          </SelectedAromasProvider>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
