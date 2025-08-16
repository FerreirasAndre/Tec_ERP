package com.Erp.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class InteracaoCliente {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

    private long idInteracao;
    private String descricao;
    private String canal;
public InteracaoCliente(long idInteracao, String descricao, String canal){
this.idInteracao = idInteracao;
this.descricao = descricao;
this.canal = canal;
}
public long getIdInteracao() {
    return idInteracao;
}
public void setIdInteracao(long idInteracao) {
    this.idInteracao = idInteracao;
}
public String getDescricao() {
    return descricao;
}
public void setDescricao(String descricao) {
    this.descricao = descricao;
}
public String getCanal() {
    return canal;
}
public void setCanal(String canal) {
    this.canal = canal;
}

}
