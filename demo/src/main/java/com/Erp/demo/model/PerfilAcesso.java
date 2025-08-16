package com.Erp.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PerfilAcesso {
	@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)

    private long idPerfil;
    private String nome;
    private String descricao;

public PerfilAcesso(long idPerfil, String nome, String descricao){
this.idPerfil = idPerfil;
this.nome = nome;
this.descricao = descricao;
}

public long getIdPerfil() {
    return idPerfil;
}

public void setIdPerfil(long idPerfil) {
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
