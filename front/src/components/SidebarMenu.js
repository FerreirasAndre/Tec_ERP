import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SidebarMenu() {
  const [sidebarClosed, setSidebarClosed] = useState(false);

  return (
    <aside className={`sidebar ${sidebarClosed ? "closed" : ""}`}>
      <div className="sidebar-header">
        <span className="logo">Tec ERP</span>
        <button
          className="toggle-btn"
          onClick={() => setSidebarClosed(!sidebarClosed)}
        >
          {sidebarClosed ? "➡️" : "⬅️"}
        </button>
      </div>

      <nav>
        <Link to="/">
          <span className="icon">🏠</span>
          <span className="link-text">Home</span>
        </Link>
        <Link to="/Financeiro">
          <span className="icon">💰</span>
          <span className="link-text">Financeiro</span>
        </Link>
        <Link to="/Vendas">
          <span className="icon">🛒</span>
          <span className="link-text">Vendas</span>
        </Link>
        <Link to="/Estoque">
          <span className="icon">📦</span>
          <span className="link-text">Estoque</span>
        </Link>
        <Link to="/Bi">
          <span className="icon">📊</span>
          <span className="link-text">BI</span>
        </Link>
        <Link to="/Clientes">
          <span className="icon">👥</span>
          <span className="link-text">Clientes</span>
        </Link>
      </nav>

      <div className="sidebar-footer">© 2025 Tec ERP</div>
    </aside>
  );
}
