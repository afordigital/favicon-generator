import { useState } from "react";
import "./App.css";
import Layout from "./layouts/Layout";
import { Bicycle } from "./assets/icons/Bicycle";

function App() {
  const [icon, setIcon] = useState("Bicycle");

  return (
    <Layout>
      <p>Hola</p>
      <Bicycle strokeWidth={1} />
    </Layout>
  );
}

export default App;
