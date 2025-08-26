import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarMenu from "./components/SidebarMenu";
import "./App.css";

// Páginas
import Home from "./pages/Home";
import Financeiro from "./pages/Financeiro";
import Vendas from "./pages/Vendas";
import Estoque from "./pages/Estoque";
import BI from "./pages/BI";
import Clientes from "./pages/Clientes";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar fixa à esquerda */}
        <SidebarMenu />

        {/* Conteúdo principal + painel direito */}
        <div className="main-container">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Financeiro/*" element={<Financeiro />} />
              <Route path="/Vendas/*" element={<Vendas />} />
              <Route path="/Estoque/*" element={<Estoque />} />
              <Route path="/Bi/*" element={<BI />} />
              <Route path="/Clientes" element={<Clientes />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          {/* Painel direito (opcional) */}
          <aside className="right-panel">
            <h3>⚙️ Opções Rápidas</h3>
            <div className="options-container">
              <button>🔔 Notificações</button>
              <button>⚡ Atalhos</button>
              <button className="btn-primary">➕ Novo Registro</button>
            </div>
          </aside>
        </div>
      </div>
    </Router>
  );
}

export default App;
