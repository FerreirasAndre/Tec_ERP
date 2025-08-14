package com.Erp.demo.model;

public class Departamento {
    private int idDepartamento;
    private String nome;
    private String localizacao;

public Departamento(int idDepartamento, String nome, String locaizacao){
    this.idDepartamento = idDepartamento;
    this.nome = nome;
    this.localizacao = locaizacao;
}

public int getIdDepartamento() {
    return idDepartamento;
}

public void setIdDepartamento(int idDepartamento) {
    this.idDepartamento = idDepartamento;
}

public String getNome() {
    return nome;
}

public void setNome(String nome) {
    this.nome = nome;
}

public String getLocalizacao() {
    return localizacao;
}

public void setLocalizacao(String localizacao) {
    this.localizacao = localizacao;
}

}
