package com.Erp.demo.model;

import com.google.appengine.repackaged.org.joda.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ContaFinanceira {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idConta;
    private String descricao;
    private double valor;
    private String tipo;
	private LocalDate dataVencimento;

    public ContaFinanceira(long idConta, String descricao, double valor, String tipo, LocalDate dataVencimento) {
        this.idConta = idConta;
        this.descricao = descricao;
        this.valor = valor;
        this.tipo = tipo;
        this.dataVencimento = dataVencimento;
    }

    public ContaFinanceira() {
    }

    public long getIdConta() {
        return idConta;
    }
    public void setIdConta(long idConta) {
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
		return dataVencimento;
    }
    public void setData_vencimento(LocalDate data_vencimento) {
        this.dataVencimento = data_vencimento;
    }
}
