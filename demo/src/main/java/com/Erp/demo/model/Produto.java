package com.Erp.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity

public class Produto {
	@Id
	private int idProduto;
	private String descricao;
	private double preco;
	private int estoqueAtual;

public Produto( int idProduto, String descricao, double preco, int estoqueAtual) {
	this.idProduto = idProduto;
	this.descricao = descricao;
	this.preco = preco;
	this.estoqueAtual = estoqueAtual;
}
	
	public int getIdProduto() {
		return idProduto;
	}
	public void setIdProduto(int idProduto) {
		this.idProduto = idProduto;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public double getPreco() {
		return preco;
	}
	public void setPreco(double preco) {
		this.preco = preco;
	}
	public int getEstoqueAtual() {
		return estoqueAtual;
	}
	public void setEstoqueAtual(int estoqueAtual) {
		this.estoqueAtual = estoqueAtual;
	}	

}
