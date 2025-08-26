import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>🏠 Bem-vindo ao Tec ERP</h1>
      <p>Use o menu lateral ou os links abaixo para navegar pelos módulos.</p>

      <div>
        <Link to="/Financeiro">Financeiro</Link> |{" "}
        <Link to="/Vendas">Vendas</Link> |{" "}
        <Link to="/Estoque">Estoque</Link> |{" "}
        <Link to="/Bi">BI</Link> |{" "}
        <Link to="/Clientes">Clientes</Link>
      </div>

      <div>
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
