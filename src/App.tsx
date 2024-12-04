import { useState } from "react";
import "./App.css";
import Layout from "./layouts/Layout";
import { Bicycle } from "./assets/icons/Bicycle";
import { HomeIcon } from "./assets/icons/Home";
import { SearchIcon } from "./assets/icons/Search";
import { SettingsIcon } from "./assets/icons/Settings";

// Mapeo de iconos
const iconsMap = {
  Bicycle: Bicycle,
  Home: HomeIcon,
  Search: SearchIcon,
  Settings: SettingsIcon
};

function App() {
  const [icon, setIcon] = useState<keyof typeof iconsMap>("Bicycle");

  const IconComponent = iconsMap[icon];


  return (
    <Layout>
      <IconComponent strokeWidth={1} width={50} height={50} />
      <div className="flex gap-4">
        <button onClick={() => setIcon("Home")}>Home Icon</button>
        <button onClick={() => setIcon("Search")}>Search Icon</button>
        <button onClick={() => setIcon("Bicycle")}>Bicycle Icon</button>
        <button onClick={() => setIcon("Settings")}>Settings Icon</button>
      </div>
    </Layout>
  );
}

export default App;
