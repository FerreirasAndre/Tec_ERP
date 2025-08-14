package com.Erp.demo.model;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;

@Entity
public class UsuarioSistema {

    @Id
    private Integer idUsuario;

    private String nomeUsuario;
    private String senha;
    private String email;

    public UsuarioSistema() {
    }

    public UsuarioSistema(Integer idUsuario, String nomeUsuario, String senha, String email) {
        this.idUsuario = idUsuario;
        this.nomeUsuario = nomeUsuario;
        this.senha = senha;
        this.email = email;
    }

    public Integer getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Integer idUsuario) {
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
