import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Estoque() {
  return (
    <div>
      <h1>Estoque e Logística</h1>
      <nav className="sub-menu">
        <Link to="inventario">Controle de Inventário</Link>
        <Link to="produtos">Entrada e saída de Produtos</Link>
        <Link to="fornecedores">Controle de Fornecedores</Link>
      </nav>

      <Routes>
        <Route path="inventario" element={<p>📌 Tela de Inventário</p>} />
        <Route path="produtos" element={<p>📌 Tela de Entrada e Saída</p>} />
        <Route path="fornecedores" element={<p>📌 Tela de Fornecedores</p>} />
      </Routes>
    </div>
  );
}

export default Estoque;
