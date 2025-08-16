package com.Erp.demo.model;

import java.time.LocalDate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class NotaFiscal {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idNota;
    private String numeroNota;
    private double valorTotal;
    private LocalDate dataEmissao;
    private String formaPagamento;
    private long idVenda;

    public NotaFiscal() {
    }

    public NotaFiscal(long idNota, String numeroNota, double valorTotal, LocalDate dataEmissao, String formaPagamento, long idVenda) {
        this.idNota = idNota;
        this.numeroNota = numeroNota;
        this.valorTotal = valorTotal;
        this.dataEmissao = dataEmissao;
        this.formaPagamento = formaPagamento;
        this.idVenda = idVenda;
    }

    public long getIdNota() {
        return idNota;
    }

    public void setIdNota(long idNota) {
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

    public long getIdVenda() {
        return idVenda;
    }

    public void setIdVenda(long idVenda) {
        this.idVenda = idVenda;
    }
}
