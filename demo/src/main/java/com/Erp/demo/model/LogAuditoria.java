package com.Erp.demo.model;



import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class LogAuditoria {
	@Id
	private Integer idLog;
	private LocalDate dataHora;

public LogAuditoria(Integer idLog, LocalDate dataHora) {
	this.idLog = idLog;
	this.setDataHora(dataHora);
}

public Integer getidLog() {
	return idLog;
}

public void setidLog(Integer idLog) {
	this.idLog = idLog;
}

public LocalDate getDataHora() {
	return dataHora;
}

public void setDataHora(LocalDate dataHora) {
	this.dataHora = dataHora;
}


}