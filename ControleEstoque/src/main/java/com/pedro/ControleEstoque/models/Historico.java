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
@Table(name = Historico.TABLE_NAME)
@IdClass(HistoricoId.class)
public class Historico {
    
    public static final String TABLE_NAME = "historico";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_fantasia", unique = true)
    private Integer idFantasia;

    @Id
    @Column(name = "id_cliente", nullable = false, updatable = false)
    private Integer idCliente;

    @Column(name = "nome_fantasia", length = 60)
    @NotBlank
    @Size(min = 1, max = 60)
    private String nomeFantasia;

    @Column(name = "baixa_fantasia", nullable = true, length = 1)
    @Size(min = 0, max = 1)
    private String baixaFantasia;

    @Column(name = "tipo_fantasia", nullable = true, length = 1)
    @Size(min = 0, max = 1)
    private String tipoFantasia;

    @Column(name = "data_inicio_fantasia", nullable = true, length = 10)
    @Size(min = 0, max = 10)
    private String dataInicioFantasia;

    @Column(name = "data_fim_fantasia", nullable = true, length = 10)
    @Size(min = 0, max = 10)
    private String dataFimFantasia;
    
    @Column(name = "observacao_fantasia", nullable = true, length = 200)
    @Size(min = 0, max = 200)
    private String observacaoFantasia;
}
