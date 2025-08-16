package com.Erp.demo.model;



import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class LogAuditoria {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idLog;
	private LocalDate dataHora;

public LogAuditoria(long idLog, LocalDate dataHora) {
	this.idLog = idLog;
	this.setDataHora(dataHora);
}

public long getIdLog() {
	return idLog;
}

public void setidLog(long idLog) {
	this.idLog = idLog;
}

public LocalDate getDataHora() {
	return dataHora;
}

public void setDataHora(LocalDate dataHora) {
	this.dataHora = dataHora;
}


}