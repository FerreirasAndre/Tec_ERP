package com.Erp.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.time.LocalDate;

@Entity
public class Conta {

    @Id
    private Integer idConta;
    private String descricao;
    private double valor;
    private String tipo;
    private LocalDate data_vencimento;
    private String status;

    public Conta(Integer idConta, String descricao, double valor, String tipo, LocalDate data_vencimento, String status) {
        this.idConta = idConta;
        this.descricao = descricao;
        this.valor = valor;
        this.tipo = tipo;
        this.data_vencimento = data_vencimento;
        this.status = status;
    }

    public Conta() {
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
