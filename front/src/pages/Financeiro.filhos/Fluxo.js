import React, { useState } from "react";

export default function Fluxo({ fluxos, setFluxos }) {
  const [idConta, setIdConta] = useState("");
  const [data, setData] = useState("");
  const [valor, setValor] = useState("");
  const [formaPagamento, setFormaPagamento] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validações básicas
    if (!idConta) {
      alert("Informe o ID da conta.");
      return;
    }
    if (!data) {
      alert("Informe a data.");
      return;
    }
    if (!valor || isNaN(valor)) {
      alert("Informe um valor válido.");
      return;
    }
    if (!formaPagamento) {
      alert("Informe a forma de pagamento.");
      return;
    }

    const novoFluxo = {
      id_conta: idConta,
      data,
      valor: parseFloat(valor),
      forma_pagamento: formaPagamento,
    };

    setFluxos([...fluxos, novoFluxo]);

    // Limpa campos
    setIdConta("");
    setData("");
    setValor("");
    setFormaPagamento("");
  };

  return (
    <div>
      <h2>📌 Fluxo de Caixa</h2>

      {/* Formulário */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div>
          <label>ID Conta:</label>
          <input
            type="text"
            value={idConta}
            onChange={(e) => setIdConta(e.target.value)}
          />
        </div>

        <div>
          <label>Data:</label>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>

        <div>
          <label>Valor:</label>
          <input
            type="number"
            step="0.01"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </div>

        <div>
          <label>Forma de Pagamento:</label>
          <input
            type="text"
            value={formaPagamento}
            onChange={(e) => setFormaPagamento(e.target.value)}
          />
        </div>

        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
