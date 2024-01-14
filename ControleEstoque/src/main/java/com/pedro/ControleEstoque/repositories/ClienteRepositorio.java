package com.pedro.ControleEstoque.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pedro.ControleEstoque.models.Cliente;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClienteRepositorio extends JpaRepository<Cliente, Integer> {

    @Query("SELECT c FROM Cliente c JOIN Fantasia f ON c.idCliente = f.idCliente WHERE f.baixaFantasia IS NULL GROUP BY c.idCliente ORDER BY c.nomeCliente")
    List<Cliente> findAllClientesDevendo();
    @Query("SELECT c FROM Cliente c WHERE c.idCliente NOT IN (SELECT c.idCliente FROM Cliente c JOIN Fantasia f ON c.idCliente = f.idCliente WHERE f.baixaFantasia IS NULL GROUP BY c.idCliente) ORDER BY c.nomeCliente")
    List<Cliente> findAllClientesNaoDevendo();

    @Query("SELECT c FROM Cliente c WHERE c.nomeCliente = :nomeCliente OR c.cpfCliente = :cpfCliente")
    Optional<Cliente> findByNomeAndCpf(@Param("nomeCliente") String nomeCliente, @Param("cpfCliente") String cpfCliente);

    @Query("SELECT c FROM Cliente c WHERE (c.nomeCliente = :nomeCliente OR c.cpfCliente = :cpfCliente) AND (c.idCliente != :idCliente)")
    Optional<Cliente> findByNomeAndCpfEditar(@Param("nomeCliente") String nomeCliente, @Param("cpfCliente") String cpfCliente, @Param("idCliente") Integer idCliente);
}
