import "./App.css";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home } from "./components/Home";
import ProviderDetails from "./components/ProviderDetails";
import axios from "axios";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [allProviders, setAllProvides] = useState([]);
  const getAPIsguruProviders = () => {
    axios
      .get("https://api.apis.guru/v2/providers.json")
      .then((res) => {
        const providers = res?.data?.data;

        setAllProvides(providers);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAPIsguruProviders();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home onClose={() => setSidebar(!sidebar)} />}></Route>
        <Route exact path="/details/:name" element={<ProviderDetails />}></Route>
      </Routes>

      {sidebar && <Sidebar sidebar={sidebar} allProviders={allProviders} onClose={() => setSidebar(!sidebar)} />}

      {sidebar && <div className="sidebar-overlay" onClick={() => setSidebar(!sidebar)}></div>}
    </div>
  );
}

export default App;
