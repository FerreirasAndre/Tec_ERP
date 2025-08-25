// Fornecedores.js
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Fornecedores() {
  const [fornecedores, setFornecedores] = useState([]);
  const [razaoSocial, setRazaoSocial] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [endereco, setEndereco] = useState("");
  const [contato, setContato] = useState("");

  const baseURL = "http://localhost:8080/fornecedores"; // ajuste conforme seu backend

  // Busca fornecedores ao carregar a página
  useEffect(() => {
    axios.get(baseURL)
      .then(res => setFornecedores(res.data))
      .catch(err => console.error("Erro ao buscar fornecedores:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!razaoSocial) return alert("Informe a razão social.");
    if (!cnpj || (cnpj.length !== 14 && cnpj.length !== 11)) return alert("CNPJ inválido (11 ou 14 dígitos).");
    if (!endereco) return alert("Informe o endereço.");
    if (!contato) return alert("Informe o contato.");

    const novoFornecedor = { razao_social: razaoSocial, cnpj, endereco, contato };

    try {
      const res = await axios.post(baseURL, novoFornecedor);
      setFornecedores([...fornecedores, res.data]); // adiciona fornecedor retornado pelo backend
      setRazaoSocial(""); setCnpj(""); setEndereco(""); setContato("");
    } catch (err) {
      console.error("Erro ao adicionar fornecedor:", err);
      alert("Falha ao adicionar fornecedor.");
    }
  };

  return (
    <div>
      <h2>📌 Fornecedores</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Razão Social:</label>
          <input type="text" value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)} maxLength={100} />
        </div>
        <div>
          <label>CNPJ:</label>
          <input type="text" value={cnpj} onChange={(e) => setCnpj(e.target.value.replace(/\D/g, ""))} maxLength={14} />
        </div>
        <div>
          <label>Endereço:</label>
          <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} maxLength={200} />
        </div>
        <div>
          <label>Contato:</label>
          <input type="text" value={contato} onChange={(e) => setContato(e.target.value)} maxLength={50} />
        </div>
        <button type="submit">Adicionar Fornecedor</button>
      </form>

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
            <tr><td colSpan="4" style={{ textAlign: "center" }}>Nenhum fornecedor cadastrado.</td></tr>
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
