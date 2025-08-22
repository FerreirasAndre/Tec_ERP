import React, { useState } from "react";

export default function Fornecedores() {
  const [fornecedores, setFornecedores] = useState([]);
  const [razaoSocial, setRazaoSocial] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [endereco, setEndereco] = useState("");
  const [contato, setContato] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validações básicas
    if (!razaoSocial) {
      alert("Informe a razão social.");
      return;
    }
    if (!cnpj || (cnpj.length !== 14 && cnpj.length !== 11)) {
      alert("CNPJ inválido (11 ou 14 dígitos).");
      return;
    }
    if (!endereco) {
      alert("Informe o endereço.");
      return;
    }
    if (!contato) {
      alert("Informe o contato.");
      return;
    }

    const novoFornecedor = {
      razao_social: razaoSocial,
      cnpj,
      endereco,
      contato,
    };

    setFornecedores([...fornecedores, novoFornecedor]);

    // Limpa os campos do formulário
    setRazaoSocial("");
    setCnpj("");
    setEndereco("");
    setContato("");
  };

  return (
    <div>
      <h2>📌 Fornecedores</h2>

      {/* Formulário de cadastro */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div>
          <label>Razão Social:</label>
          <input
            type="text"
            value={razaoSocial}
            onChange={(e) => setRazaoSocial(e.target.value)}
            maxLength={100}
          />
        </div>

        <div>
          <label>CNPJ:</label>
          <input
            type="text"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value.replace(/\D/g, ""))}
            maxLength={14}
          />
        </div>

        <div>
          <label>Endereço:</label>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            maxLength={200}
          />
        </div>

        <div>
          <label>Contato:</label>
          <input
            type="text"
            value={contato}
            onChange={(e) => setContato(e.target.value)}
            maxLength={50}
          />
        </div>

        <button type="submit">Adicionar Fornecedor</button>
      </form>

      {/* Tabela de consulta */}
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Razão Social</th>
            <th>CNPJ</th>
            <th>Endereço</th>
            <th>Contato</th>
          </tr>
        </thead>
        <tbody>
          {fornecedores.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                Nenhum fornecedor cadastrado.
              </td>
            </tr>
          ) : (
            fornecedores.map((f, index) => (
              <tr key={index}>
                <td>{f.razao_social}</td>
                <td>{f.cnpj}</td>
                <td>{f.endereco}</td>
                <td>{f.contato}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
