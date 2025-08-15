package com.Erp.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class PerfilAcesso {
    @Id
    private int idPerfil;
    private String nome;
    private String descricao;

public PerfilAcesso(int idPerfil, String nome, String descricao){
this.idPerfil = idPerfil;
this.nome = nome;
this.descricao = descricao;
}

public int getIdPerfil() {
    return idPerfil;
}

public void setIdPerfil(int idPerfil) {
    this.idPerfil = idPerfil;
}

public String getNome() {
    return nome;
}

public void setNome(String nome) {
    this.nome = nome;
}

public String getDescricao() {
    return descricao;
}

public void setDescricao(String descricao) {
    this.descricao = descricao;
}

}
