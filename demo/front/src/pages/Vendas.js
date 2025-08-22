import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Vendas() {
  return (
    <div>
      <h1>Vendas e Faturamento</h1>
      <nav className="sub-menu">
        <Link to="notas">Emissão de pedidos e notas fiscais</Link>
        <Link to="tabelas">Tabelas de preço e promoções</Link>
      </nav>

      <Routes>
        <Route path="notas" element={<p>📌 Tela de Emissão de Pedidos e Notas</p>} />
        <Route path="tabelas" element={<p>📌 Tela de Tabelas e Promoções</p>} />
      </Routes>
    </div>
  );
}

export default Vendas;
