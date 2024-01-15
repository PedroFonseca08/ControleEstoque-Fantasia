package com.pedro.ControleEstoque.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pedro.ControleEstoque.models.Fantasia;

@Repository
public interface FantasiaRepositorio extends JpaRepository<Fantasia, String>{

    @Query("SELECT f FROM Fantasia f WHERE f.idCliente = :idCliente ORDER BY f.baixaFantasia")
    List<Fantasia> findFantasiaByIdCliente(@Param("idCliente") Integer idCliente);

    @Query("SELECT f FROM Fantasia f ORDER BY f.idCliente")
    List<Fantasia> findAllFantasias();

    @Query("SELECT f FROM Fantasia f WHERE f.idFantasia = :idFantasia")
    Optional<Fantasia> findByIdFantasia(@Param("idFantasia") Integer idFantasia);

    @Modifying
    @Query("DELETE FROM Fantasia f WHERE f.idFantasia = :idFantasia")
    void deleteFantasiaById(@Param("idFantasia") Integer idFantasia);

}
