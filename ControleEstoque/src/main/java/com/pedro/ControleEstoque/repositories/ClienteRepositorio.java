package com.pedro.ControleEstoque.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pedro.ControleEstoque.models.Cliente;

@Repository
public interface ClienteRepositorio extends JpaRepository<Cliente, Integer> {
    
}
