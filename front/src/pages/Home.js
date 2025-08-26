import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="content-card">
      <h1>🏠 Bem-vindo ao Tec ERP</h1>
      <p>Use o menu lateral ou os botões abaixo para navegar pelos módulos.</p>

      <div className="module-buttons">
        <Link className="btn-blue" to="/Financeiro">Financeiro</Link>
        <Link className="btn-green" to="/Vendas">Vendas</Link>
        <Link className="btn-yellow" to="/Estoque">Estoque</Link>
        <Link className="btn-purple" to="/BI">BI</Link>
        <Link className="btn-red" to="/Clientes">Clientes</Link>
      </div>

      <div className="news-section">
        <h2>📌 Últimas novidades</h2>
        <ul>
          <li>Novo fluxo de caixa integrado ao Dashboard.</li>
          <li>Relatórios gerenciais com dados atualizados.</li>
          <li>Controle de estoque com entrada e saída de produtos.</li>
        </ul>
      </div>
    </div>
  );
}
