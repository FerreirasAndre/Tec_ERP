import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Financeiro() {
  return (
    <div>
      <h1>Financeiro e Contábil</h1>
      <nav className="sub-menu">
        <Link to="fluxo">Fluxo de Caixa</Link>
        <Link to="relatorios">Demonstrações Contábeis</Link>
      </nav>

      <Routes>
        <Route path="fluxo" element={<p>📌 Tela de Fluxo de Caixa</p>} />
        <Route path="relatorios" element={<p>📌 Relatórios Contábeis</p>} />
      </Routes>
    </div>
  );
}

export default Financeiro;
