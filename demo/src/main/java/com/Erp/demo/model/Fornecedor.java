package com.Erp.demo.model;

import jakarta.persistence.Id;

public class Fornecedor {

    @Id
    private Integer idFornecedor;
    private String nome;
    private String cpf;

    public String getCpf() {
        return cpf;
    }
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    public Integer getIdFornecedor() {
        return idFornecedor;
    }
    public void setIdFornecedor(Integer idFornecedor) {
        this.idFornecedor = idFornecedor;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    public Fornecedor (Integer idFornecedor, String nome, String cpf){
        this.idFornecedor = idFornecedor;
        this.nome = nome;
        this.cpf = cpf;

    }
    
    public Fornecedor(){

    }
    
}