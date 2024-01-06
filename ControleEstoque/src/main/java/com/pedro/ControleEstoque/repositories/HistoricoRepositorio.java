package com.pedro.ControleEstoque.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pedro.ControleEstoque.models.Historico;

@Repository
public interface HistoricoRepositorio extends JpaRepository<Historico, String>{

    @Query("SELECT h FROM Historico h WHERE h.idCliente = :idCliente")
    List<Historico> findFantasiaByIdCliente(@Param("idCliente") Integer idCliente);

    @Query("SELECT h FROM Historico h WHERE h.idFantasia = :idFantasia")
    Optional<Historico> findByIdFantasia(@Param("idFantasia") Integer idFantasia);

    @Query("DELETE FROM Historico h WHERE h.idFantasia = :idFantasia")
    void deleteFantasiaById(Integer id);

}
