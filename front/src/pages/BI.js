import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function BI() {
  return (
    <div>
      <h1>BI e Relatórios</h1>
      <nav className="sub-menu">
        <Link to="gerenciais">Relatórios Gerenciais e Operacionais</Link>
        <Link to="dashboards">Dashboards em tempo real</Link>
      </nav>

      <Routes>
        <Route path="gerenciais" element={<p>📌 Tela de Relatórios Gerenciais e Operacionais</p>} />
        <Route path="dashboards" element={<p>📌 Tela de Dashboards em tempo real</p>} />
      </Routes>
    </div>
  );
}

export default BI;
