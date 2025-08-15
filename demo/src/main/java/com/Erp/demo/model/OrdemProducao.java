package com.Erp.demo.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class OrdemProducao {
	@Id
	private Integer idOrdem;
	private LocalDate dataInicio;
	private LocalDate dataFim;
	private int quantidadeProduzir;
	
public OrdemProducao(Integer idOrdem, LocalDate dataInicio, LocalDate dataFim, int quantidadeProduzir) {
	this.idOrdem = idOrdem;
	this.dataInicio = dataInicio;
	this.dataFim = dataFim;
	this.quantidadeProduzir = quantidadeProduzir;
	
}

public Integer getidOrdem() {
	return idOrdem;
}

public void setidOrdem(Integer idOrdem) {
	this.idOrdem = idOrdem;
}


public LocalDate getDataInicio() {
	return dataInicio;
}

public void setDataInicio(LocalDate dataInicio) {
	this.dataInicio = dataInicio;
}

public LocalDate getDataFim() {
	return dataFim;
}

public void setDataFim(LocalDate dataFim) {
	this.dataFim = dataFim;
}

public int getQuantidadeProduzir() {
	return quantidadeProduzir;
}

public void setQuantidadeProduzir(int quantidadeProduzir) {
	this.quantidadeProduzir = quantidadeProduzir;
}
}
