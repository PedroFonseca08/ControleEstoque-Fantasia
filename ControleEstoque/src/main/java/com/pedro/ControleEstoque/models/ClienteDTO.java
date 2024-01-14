package com.pedro.ControleEstoque.models;

import java.util.List;

public class ClienteDTO {

    private Integer idCliente;
    private String nomeCliente;
    private String cpfCliente;
    private String endCliente;
    private String telCliente;
    private String cepCliente;
    private String dataNascCliente;
    private String rgCliente;
    private String observacaoCliente;
    private List<Fantasia> fantasias;
    private Boolean temAviso;

    public ClienteDTO(){

    }

    public ClienteDTO(String nomeCliente, List<Fantasia> fantasias) {
        this.nomeCliente = nomeCliente;
        this.fantasias = fantasias;
    }

    public Integer getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(Integer idCliente) {
        this.idCliente = idCliente;
    }

    public String getNomeCliente() {
        return nomeCliente;
    }

    public void setNomeCliente(String nomeCliente) {
        this.nomeCliente = nomeCliente;
    }

    public List<Fantasia> getFantasias() {
        return fantasias;
    }

    public void setFantasias(List<Fantasia> fantasias) {
        this.fantasias = fantasias;
    }

    public String getCpfCliente() {
        return cpfCliente;
    }

    public void setCpfCliente(String cpfCliente) {
        this.cpfCliente = cpfCliente;
    }

    public String getEndCliente() {
        return endCliente;
    }

    public void setEndCliente(String endCliente) {
        this.endCliente = endCliente;
    }

    public String getTelCliente() {
        return telCliente;
    }

    public void setTelCliente(String telCliente) {
        this.telCliente = telCliente;
    }

    public String getCepCliente() {
        return cepCliente;
    }

    public void setCepCliente(String cepCliente) {
        this.cepCliente = cepCliente;
    }

    public String getDataNascCliente() {
        return dataNascCliente;
    }

    public void setDataNascCliente(String dataNascCliente) {
        this.dataNascCliente = dataNascCliente;
    }

    public String getRgCliente() {
        return rgCliente;
    }

    public void setRgCliente(String rgCliente) {
        this.rgCliente = rgCliente;
    }

    public String getObservacaoCliente() {
        return observacaoCliente;
    }

    public void setObservacaoCliente(String observacaoCliente) {
        this.observacaoCliente = observacaoCliente;
    }

    public Boolean getTemAviso() {
        return temAviso;
    }

    public void setTemAviso(Boolean temAviso) {
        this.temAviso = temAviso;
    }
}