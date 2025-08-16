package com.Erp.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Departamento {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idDepartamento;
    private String nome;
    private String localizacao;

public Departamento(long idDepartamento, String nome, String locaizacao){
    this.idDepartamento = idDepartamento;
    this.nome = nome;
    this.localizacao = locaizacao;
}

public long getIdDepartamento() {
    return idDepartamento;
}

public void setIdDepartamento(long idDepartamento) {
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
