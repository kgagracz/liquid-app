import React from "react";
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import { router } from "./routes";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
}

export default App;
