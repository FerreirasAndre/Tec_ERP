package com.Erp.demo.model;

import java.time.LocalDate;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class NotaFiscal {

    @Id
    private Integer idNota;
    private String numeroNota;
    private double valorTotal;
    private LocalDate dataEmissao;
    private String formaPagamento;
    private int idVenda;

    public NotaFiscal() {
    }

    public NotaFiscal(Integer idNota, String numeroNota, double valorTotal, LocalDate dataEmissao, String formaPagamento, int idVenda) {
        this.idNota = idNota;
        this.numeroNota = numeroNota;
        this.valorTotal = valorTotal;
        this.dataEmissao = dataEmissao;
        this.formaPagamento = formaPagamento;
        this.idVenda = idVenda;
    }

    public Integer getIdNota() {
        return idNota;
    }

    public void setIdNota(Integer idNota) {
        this.idNota = idNota;
    }

    public String getNumeroNota() {
        return numeroNota;
    }

    public void setNumeroNota(String numeroNota) {
        this.numeroNota = numeroNota;
    }

    public double getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(double valorTotal) {
        this.valorTotal = valorTotal;
    }

    public LocalDate getDataEmissao() {
        return dataEmissao;
    }

    public void setDataEmissao(LocalDate dataEmissao) {
        this.dataEmissao = dataEmissao;
    }

    public String getFormaPagamento() {
        return formaPagamento;
    }

    public void setFormaPagamento(String formaPagamento) {
        this.formaPagamento = formaPagamento;
    }

    public int getIdVenda() {
        return idVenda;
    }

    public void setIdVenda(int idVenda) {
        this.idVenda = idVenda;
    }
}
