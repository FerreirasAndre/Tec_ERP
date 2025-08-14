package com.Erp.demo.model;

import java.time.LocalDate;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class TransacaoFinanceira {

    @Id
    private Integer idTransacao;
    private Integer idConta;
    private LocalDate data;
    private double valor;
    private String formaPagamento;

    public TransacaoFinanceira() {
    }

    public TransacaoFinanceira(Integer idTransacao, Integer idConta, LocalDate data, double valor, String formaPagamento) {
        this.idTransacao = idTransacao;
        this.idConta = idConta;
        this.data = data;
        this.valor = valor;
        this.formaPagamento = formaPagamento;
    }

    public Integer getIdTransacao() {
        return idTransacao;
    }

    public void setIdTransacao(Integer idTransacao) {
        this.idTransacao = idTransacao;
    }

    public Integer getIdConta() {
        return idConta;
    }

    public void setIdConta(Integer idConta) {
        this.idConta = idConta;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public String getFormaPagamento() {
        return formaPagamento;
    }

    public void setFormaPagamento(String formaPagamento) {
        this.formaPagamento = formaPagamento;
    }
}
