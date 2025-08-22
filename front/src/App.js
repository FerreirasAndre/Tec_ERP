import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarMenu from "./components/SidebarMenu";
import "./App.css";

// Páginas
import Financeiro from "./pages/Financeiro";
import Vendas from "./pages/Vendas";
import Estoque from "./pages/Estoque";
import BI from "./pages/BI";
import Clientes from "./pages/Clientes";

function App() {
  return (
    <Router>
      <div className="app-container">
        <SidebarMenu />
        <main className="main-content">
          <Routes>
            <Route path="/financeiro/*" element={<Financeiro />} />
            <Route path="/vendas/*" element={<Vendas />} />
            <Route path="/estoque/*" element={<Estoque />} />
            <Route path="/bi/*" element={<BI />} />
            <Route path="/clientes" element={<Clientes />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
