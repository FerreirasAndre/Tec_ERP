package com.Erp.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class LeadOportunidade {
    @Id
    private int idLead;
    private String nome;
    private String email;
    private String origem;
    private String status;

public LeadOportunidade(){
this.idLead = idLead;
this.nome = nome;
this.email = email;
this.origem = origem;
this.status = status;    
}

public int getIdLead() {
    return idLead;
}

public void setIdLead(int idLead) {
    this.idLead = idLead;
}

public String getNome() {
    return nome;
}

public void setNome(String nome) {
    this.nome = nome;
}

public String getEmail() {
    return email;
}

public void setEmail(String email) {
    this.email = email;
}

public String getOrigem() {
    return origem;
}

public void setOrigem(String origem) {
    this.origem = origem;
}

public String getStatus() {
    return status;
}

public void setStatus(String status) {
    this.status = status;
}
}
