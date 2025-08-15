package com.Erp.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class ContaFinanceira {

    @Id
    private Integer idConta;
    private String descricao;
    private double valor;
    private String tipo;

    public ContaFinanceira(Integer idConta, String descricao, double valor, String tipo) {
        this.idConta = idConta;
        this.descricao = descricao;
        this.valor = valor;
        this.tipo = tipo;
    }

    public ContaFinanceira() {
    }

    public Integer getIdConta() {
        return idConta;
    }
    public void setIdConta(Integer idConta) {
        this.idConta = idConta;
    }
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    public double getValor() {
        return valor;
    }
    public void setValor(double valor) {
        this.valor = valor;
    }
    public String getTipo() {
        return tipo;
    }
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
    public LocalDate getData_vencimento() {
        return data_vencimento;
    }
    public void setData_vencimento(LocalDate data_vencimento) {
        this.data_vencimento = data_vencimento;
    }
}
