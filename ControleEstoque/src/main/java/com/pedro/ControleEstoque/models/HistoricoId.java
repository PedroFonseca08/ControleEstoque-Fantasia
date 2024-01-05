package com.pedro.ControleEstoque.models;

import java.io.Serializable;
import java.util.Objects;

public class HistoricoId implements Serializable{

    private Integer idFantasia;
    private Integer idCliente;


    public HistoricoId() {
    }

    public HistoricoId(Integer idFantasia, Integer idCliente) {
        this.idFantasia = idFantasia;
        this.idCliente = idCliente;
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

    public HistoricoId idFantasia(Integer idFantasia) {
        setIdFantasia(idFantasia);
        return this;
    }

    public HistoricoId idCliente(Integer idCliente) {
        setIdCliente(idCliente);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof HistoricoId)) {
            return false;
        }
        HistoricoId historicoId = (HistoricoId) o;
        return Objects.equals(idFantasia, historicoId.idFantasia) && Objects.equals(idCliente, historicoId.idCliente);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idFantasia, idCliente);
    }

    @Override
    public String toString() {
        return "{" +
            " idFantasia='" + getIdFantasia() + "'" +
            ", idCliente='" + getIdCliente() + "'" +
            "}";
    }    
}
