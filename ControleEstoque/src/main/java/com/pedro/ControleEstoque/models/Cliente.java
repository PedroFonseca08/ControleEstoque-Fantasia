package com.pedro.ControleEstoque.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = Cliente.TABLE_NAME)
public class Cliente {
    
    public static final String TABLE_NAME = "cliente";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cliente", unique = true)
    private Integer idCliente;

    @Column(name = "cpf_cliente", unique = true, length = 11)
    @NotBlank
    @Size(min = 1, max = 11)
    private String cpf_cliente;

    @Column(name = "nome_cliente", unique = true, length = 100)
    @NotBlank
    @Size(min = 1, max = 100)
    private String nomeCliente;

    @Column(name = "end_cliente", nullable = false, length = 150)
    @NotBlank
    @Size(min = 1, max = 150)
    private String endCliente;

    @Column(name = "tel_cliente", nullable = false, length = 11)
    @NotBlank
    @Size(min = 1, max = 11)
    private String telCliente;

    @Column(name = "cep_cliente", nullable = true, length = 8)
    @Size(min = 0, max = 8)
    private String cepCliente;

    @Column(name = "data_nasc_cliente", nullable = true, length = 10)
    @Size(min = 0, max = 10)
    private String dataNascCliente;

    @Column(name = "rg_cliente", nullable = true, length = 15)
    @Size(min = 0, max = 15)
    private String rgCliente;

    @Column(name = "observacao_cliente", nullable = true, length = 200)
    @Size(min = 0, max = 200)
    private String observacaoCliente;


    public Cliente() {
    }

    public Integer getIdCliente() {
        return this.idCliente;
    }

    public void setIdCliente(Integer idCliente) {
        this.idCliente = idCliente;
    }

    public String getCpf_cliente() {
        return this.cpf_cliente;
    }

    public void setCpf_cliente(String cpf_cliente) {
        this.cpf_cliente = cpf_cliente;
    }

    public String getNomeCliente() {
        return this.nomeCliente;
    }

    public void setNomeCliente(String nomeCliente) {
        this.nomeCliente = nomeCliente;
    }

    public String getEndCliente() {
        return this.endCliente;
    }

    public void setEndCliente(String endCliente) {
        this.endCliente = endCliente;
    }

    public String getTelCliente() {
        return this.telCliente;
    }

    public void setTelCliente(String telCliente) {
        this.telCliente = telCliente;
    }

    public String getCepCliente() {
        return this.cepCliente;
    }

    public void setCepCliente(String cepCliente) {
        this.cepCliente = cepCliente;
    }

    public String getDataNascCliente() {
        return this.dataNascCliente;
    }

    public void setDataNascCliente(String dataNascCliente) {
        this.dataNascCliente = dataNascCliente;
    }

    public String getRgCliente() {
        return this.rgCliente;
    }

    public void setRgCliente(String rgCliente) {
        this.rgCliente = rgCliente;
    }

    public String getObservacaoCliente() {
        return this.observacaoCliente;
    }

    public void setObservacaoCliente(String observacaoCliente) {
        this.observacaoCliente = observacaoCliente;
    }

    public Cliente idCliente(Integer idCliente) {
        setIdCliente(idCliente);
        return this;
    }

    public Cliente cpf_cliente(String cpf_cliente) {
        setCpf_cliente(cpf_cliente);
        return this;
    }

    public Cliente nomeCliente(String nomeCliente) {
        setNomeCliente(nomeCliente);
        return this;
    }

    public Cliente endCliente(String endCliente) {
        setEndCliente(endCliente);
        return this;
    }

    public Cliente telCliente(String telCliente) {
        setTelCliente(telCliente);
        return this;
    }

    public Cliente cepCliente(String cepCliente) {
        setCepCliente(cepCliente);
        return this;
    }

    public Cliente dataNascCliente(String dataNascCliente) {
        setDataNascCliente(dataNascCliente);
        return this;
    }

    public Cliente rgCliente(String rgCliente) {
        setRgCliente(rgCliente);
        return this;
    }

    public Cliente observacaoCliente(String observacaoCliente) {
        setObservacaoCliente(observacaoCliente);
        return this;
    }
}
