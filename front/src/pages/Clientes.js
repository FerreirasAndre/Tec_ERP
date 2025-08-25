import React, { useState } from "react";
import axios from "axios";

export default function FormCliente() {
  const [nome, setNome] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [enderecoId, setEnderecoId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validações simples
    if (!nome || nome.length > 100) {
      alert("Nome inválido (máx 100 caracteres)");
      return;
    }

    if (!cpfCnpj || (cpfCnpj.length !== 11 && cpfCnpj.length !== 14)) {
      alert("CPF/CNPJ inválido (11 ou 14 dígitos)");
      return;
    }

    if (!email || email.length > 100) {
      alert("Email inválido (máx 100 caracteres)");
      return;
    }

    if (!telefone || telefone.length > 15) {
      alert("Telefone inválido (máx 15 caracteres)");
      return;
    }

    if (!enderecoId) {
      alert("Escolha um endereço válido");
      return;
    }

    const dados = {
      nome,
      cpf_cnpj: cpfCnpj,
      email,
      telefone,
      endereco_id: parseInt(enderecoId, 10),
    };

    try {
      await axios.post("http://localhost:8080/clientes", dados);
      alert("Cliente cadastrado com sucesso!");
      // Limpa os campos
      setNome("");
      setCpfCnpj("");
      setEmail("");
      setTelefone("");
      setEnderecoId("");
    } catch (err) {
      console.error("Erro ao cadastrar cliente:", err);
      alert("Falha ao cadastrar cliente. Veja o console para detalhes.");
    }
  };

  return (
    <div>
      <h1>Clientes</h1> 
      <p>📌 Cadastro e acesso às informações de clientes</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            maxLength={100}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div>
          <label>CPF/CNPJ:</label>
          <input
            type="text"
            value={cpfCnpj}
            maxLength={14}
            onChange={(e) => setCpfCnpj(e.target.value.replace(/\D/g, ""))}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            maxLength={100}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Telefone:</label>
          <input
            type="text"
            value={telefone}
            maxLength={15}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>

        <div>
          <label>Endereço (ID):</label>
          <input
            type="number"
            value={enderecoId}
            onChange={(e) => setEnderecoId(e.target.value)}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
