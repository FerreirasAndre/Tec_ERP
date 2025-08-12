package com.Erp.demo.model;

import jakarta.persistence.Id;

public class Cliente {
    @Id
    private String idCliente;
    private String nome;
    private String cpfCnpj;
    private String email;
}
