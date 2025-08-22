import React, { useState } from "react";

function FormCliente({ enviarParaBack }) {
  const [nome, setNome] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [enderecoId, setEnderecoId] = useState("");

  const handleSubmit = (e) => {
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

    // Monta o objeto para enviar
    const dados = {
      nome,
      cpf_cnpj: cpfCnpj,
      email,
      telefone,
      endereco_id: enderecoId,
    };

    // Chama a função do backend (fetch/axios)
    enviarParaBack(dados);
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
            onChange={(e) => setCpfCnpj(e.target.value.replace(/\D/g, ""))} // só números
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

export default FormCliente;
