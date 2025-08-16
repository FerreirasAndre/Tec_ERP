package com.Erp.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UsuarioSistema {
	@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)

    private long idUsuario;
    private String nomeUsuario;
    private String senha;
    private String email;

public UsuarioSistema(long idUsuario, String nomeUsuario, String email, String senha){
this.idUsuario = idUsuario;
this.nomeUsuario = nomeUsuario;
this.senha = senha;
this.email = email;
}

public long getIdUsuario() {
    return idUsuario;
}

public void setIdUsuario(long idUsuario) {
    this.idUsuario = idUsuario;
}

public String getNomeUsuario() {
    return nomeUsuario;
}

public void setNomeUsuario(String nomeUsuario) {
    this.nomeUsuario = nomeUsuario;
}

public String getSenha() {
    return senha;
}

public void setSenha(String senha) {
    this.senha = senha;
}

public String getEmail() {
    return email;
}

public void setEmail(String email) {
    this.email = email;
}
}