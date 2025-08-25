// Inventario.js
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Inventario() {
  const [produtos, setProdutos] = useState([]);
  const baseURL = "http://localhost:8080/produtos"; // ajuste conforme seu backend

  useEffect(() => {
    axios.get(baseURL)
      .then(res => setProdutos(res.data))
      .catch(err => console.error("Erro ao buscar produtos:", err));
  }, []);

  return (
    <div>
      <h2>📌 Inventário de Produtos</h2>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Preço de Venda</th>
            <th>Custo</th>
            <th>Quantidade em Estoque</th>
          </tr>
        </thead>
        <tbody>
          {produtos.length === 0 ? (
            <tr><td colSpan="6" style={{ textAlign: "center" }}>Nenhum produto cadastrado.</td></tr>
          ) : (
            produtos.map((produto, index) => (
              <tr key={index}>
                <td>{produto.codigo_produto}</td>
                <td>{produto.descricao}</td>
                <td>{produto.categoria}</td>
                <td>{produto.preco_venda.toFixed(2)}</td>
                <td>{produto.custo.toFixed(2)}</td>
                <td>{produto.quantidade_estoque}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
