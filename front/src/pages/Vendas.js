import React, { useState } from "react";

export default function Notas() {
  const [notas, setNotas] = useState([]);
  const [numeroNota, setNumeroNota] = useState("");
  const [dataEmissao, setDataEmissao] = useState("");
  const [valorTotal, setValorTotal] = useState("");
  const [idVenda, setIdVenda] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validações básicas
    if (!numeroNota) {
      alert("Informe o número da nota.");
      return;
    }
    if (!dataEmissao) {
      alert("Informe a data de emissão.");
      return;
    }
    if (!valorTotal || isNaN(valorTotal) || valorTotal <= 0) {
      alert("Valor total inválido.");
      return;
    }
    if (!idVenda) {
      alert("Informe o ID da venda.");
      return;
    }

    const novaNota = {
      numero_nota: numeroNota,
      data_emissao: dataEmissao,
      valor_total: parseFloat(valorTotal),
      id_venda: idVenda,
    };

    setNotas([...notas, novaNota]);

    // Limpa campos do formulário
    setNumeroNota("");
    setDataEmissao("");
    setValorTotal("");
    setIdVenda("");
  };

  return (
    <div>
      <h2>📌 Emissão de Pedidos e Notas</h2>

      {/* Formulário */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div>
          <label>Número da Nota:</label>
          <input
            type="text"
            value={numeroNota}
            onChange={(e) => setNumeroNota(e.target.value)}
          />
        </div>

        <div>
          <label>Data de Emissão:</label>
          <input
            type="date"
            value={dataEmissao}
            onChange={(e) => setDataEmissao(e.target.value)}
          />
        </div>

        <div>
          <label>Valor Total:</label>
          <input
            type="number"
            step="0.01"
            value={valorTotal}
            onChange={(e) => setValorTotal(e.target.value)}
          />
        </div>

        <div>
          <label>ID da Venda:</label>
          <input
            type="text"
            value={idVenda}
            onChange={(e) => setIdVenda(e.target.value)}
          />
        </div>

        <button type="submit">Emitir Nota</button>
      </form>

      {/* Tabela de consulta */}
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Número Nota</th>
            <th>Data Emissão</th>
            <th>Valor Total</th>
            <th>ID Venda</th>
          </tr>
        </thead>
        <tbody>
          {notas.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                Nenhuma nota emitida.
              </td>
            </tr>
          ) : (
            notas.map((nota, index) => (
              <tr key={index}>
                <td>{nota.numero_nota}</td>
                <td>{nota.data_emissao}</td>
                <td>{nota.valor_total.toFixed(2)}</td>
                <td>{nota.id_venda}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
