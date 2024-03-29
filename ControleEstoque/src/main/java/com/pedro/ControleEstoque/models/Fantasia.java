package com.pedro.ControleEstoque.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = Fantasia.TABLE_NAME)
@IdClass(FantasiaId.class)
public class Fantasia {
    
    public static final String TABLE_NAME = "fantasia";

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_fantasia", unique = true)
    private Integer idFantasia;

    @Id
    @Column(name = "id_cliente", nullable = false, updatable = false)
    private Integer idCliente;

    @Column(name = "nome_fantasia", nullable = false, length = 60)
    @NotBlank
    @Size(min = 1, max = 60)
    private String nomeFantasia;

    @Column(name = "baixa_fantasia", nullable = true, length = 1)
    @Size(min = 0, max = 1)
    private String baixaFantasia;

    @Column(name = "tipo_fantasia", nullable = true, length = 1)
    @Size(min = 0, max = 1)
    private String tipoFantasia;

    @Column(name = "data_inicio_fantasia", nullable = true, length = 12)
    @Size(min = 0, max = 12)
    private String dataInicioFantasia;

    @Column(name = "data_fim_fantasia", nullable = true, length = 12)
    @Size(min = 0, max = 12)
    private String dataFimFantasia;
    
    @Column(name = "observacao_fantasia", nullable = true, length = 200)
    @Size(min = 0, max = 200)
    private String observacaoFantasia;


    public Fantasia() {
    }

    public Fantasia(Integer idFantasia, Integer idCliente, String nomeFantasia, String baixaFantasia, String tipoFantasia, String dataInicioFantasia, String dataFimFantasia, String observacaoFantasia) {
        this.idFantasia = idFantasia;
        this.idCliente = idCliente;
        this.nomeFantasia = nomeFantasia;
        this.baixaFantasia = baixaFantasia;
        this.tipoFantasia = tipoFantasia;
        this.dataInicioFantasia = dataInicioFantasia;
        this.dataFimFantasia = dataFimFantasia;
        this.observacaoFantasia = observacaoFantasia;
    }

    public Integer getIdFantasia() {
        return this.idFantasia;
    }

    public void setIdFantasia(Integer idFantasia) {
        this.idFantasia = idFantasia;
    }

    public Integer getIdCliente() {
        return this.idCliente;
    }

    public void setIdCliente(Integer idCliente) {
        this.idCliente = idCliente;
    }

    public String getNomeFantasia() {
        return this.nomeFantasia;
    }

    public void setNomeFantasia(String nomeFantasia) {
        this.nomeFantasia = nomeFantasia;
    }

    public String getBaixaFantasia() {
        return this.baixaFantasia;
    }

    public void setBaixaFantasia(String baixaFantasia) {
        this.baixaFantasia = baixaFantasia;
    }

    public String getTipoFantasia() {
        return this.tipoFantasia;
    }

    public void setTipoFantasia(String tipoFantasia) {
        this.tipoFantasia = tipoFantasia;
    }

    public String getDataInicioFantasia() {
        return this.dataInicioFantasia;
    }

    public void setDataInicioFantasia(String dataInicioFantasia) {
        this.dataInicioFantasia = dataInicioFantasia;
    }

    public String getDataFimFantasia() {
        return this.dataFimFantasia;
    }

    public void setDataFimFantasia(String dataFimFantasia) {
        this.dataFimFantasia = dataFimFantasia;
    }

    public String getObservacaoFantasia() {
        return this.observacaoFantasia;
    }

    public void setObservacaoFantasia(String observacaoFantasia) {
        this.observacaoFantasia = observacaoFantasia;
    }

    public Fantasia idFantasia(Integer idFantasia) {
        setIdFantasia(idFantasia);
        return this;
    }

    public Fantasia idCliente(Integer idCliente) {
        setIdCliente(idCliente);
        return this;
    }

    public Fantasia nomeFantasia(String nomeFantasia) {
        setNomeFantasia(nomeFantasia);
        return this;
    }

    public Fantasia baixaFantasia(String baixaFantasia) {
        setBaixaFantasia(baixaFantasia);
        return this;
    }

    public Fantasia tipoFantasia(String tipoFantasia) {
        setTipoFantasia(tipoFantasia);
        return this;
    }

    public Fantasia dataInicioFantasia(String dataInicioFantasia) {
        setDataInicioFantasia(dataInicioFantasia);
        return this;
    }

    public Fantasia dataFimFantasia(String dataFimFantasia) {
        setDataFimFantasia(dataFimFantasia);
        return this;
    }

    public Fantasia observacaoFantasia(String observacaoFantasia) {
        setObservacaoFantasia(observacaoFantasia);
        return this;
    }
}
