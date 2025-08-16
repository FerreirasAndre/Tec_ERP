package com.Erp.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Funcionario {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idFuncionario;
    private String nome;
    private int cpf;
    private String cargo;
    private Double salario;

public Funcionario (long idFuncionario, String nome, int cpf, String cargo, Double salario){
    this.idFuncionario = idFuncionario;
    this.nome = nome;
    this.cpf = cpf;
    this.cargo = cargo;
    this.salario = salario;   
}

public long getIdFuncionario() {
    return idFuncionario;
}

public void setIdFuncionario(long idFuncionario) {
    this.idFuncionario = idFuncionario;
}

public String getNome() {
    return nome;
}

public void setNome(String nome) {
    this.nome = nome;
}

public int getCpf() {
    return cpf;
}

public void setCpf(int cpf) {
    this.cpf = cpf;
}

public String getCargo() {
    return cargo;
}

public void setCargo(String cargo) {
    this.cargo = cargo;
}

public Double getSalario() {
    return salario;
}

public void setSalario(Double salario) {
    this.salario = salario;
}


}
