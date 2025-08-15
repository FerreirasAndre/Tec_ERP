package com.Erp.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class InteracaoCliente {
    @Id
    private int idInteracao;
        private String descricao;
        private String canal;
public InteracaoCliente(int idInteracao, String descricao, String canal){
this.idInteracao = idInteracao;
this.descricao = descricao;
this.canal = canal;
}
public int getIdInteracao() {
    return idInteracao;
}
public void setIdInteracao(int idInteracao) {
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
