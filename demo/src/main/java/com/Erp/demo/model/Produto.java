package com.Erp.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Produto {

    @Id
    private int idProduto;
    private String codigoProduto;
    private String descricao;
    private String categoria;
    private double precoVenda;
    private double custo;
    private int quantidadeEstoque;

    public Produto() {
    }

    public Produto(int idProduto, String codigoProduto, String descricao, String categoria, double precoVenda, double custo, int quantidadeEstoque) {
        this.idProduto = idProduto;
        this.codigoProduto = codigoProduto;
        this.descricao = descricao;
        this.categoria = categoria;
        this.precoVenda = precoVenda;
        this.custo = custo;
        this.quantidadeEstoque = quantidadeEstoque;
    }

    public int getIdProduto() {
        return idProduto;
    }

    public void setIdProduto(int idProduto) {
        this.idProduto = idProduto;
    }

    public String getCodigoProduto() {
        return codigoProduto;
    }

    public void setCodigoProduto(String codigoProduto) {
        this.codigoProduto = codigoProduto;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public double getPrecoVenda() {
        return precoVenda;
    }

    public void setPrecoVenda(double precoVenda) {
        this.precoVenda = precoVenda;
    }

    public double getCusto() {
        return custo;
    }

    public void setCusto(double custo) {
        this.custo = custo;
    }

    public int getQuantidadeEstoque() {
        return quantidadeEstoque;
    }

    public void setQuantidadeEstoque(int quantidadeEstoque) {
        this.quantidadeEstoque = quantidadeEstoque;
    }
}
