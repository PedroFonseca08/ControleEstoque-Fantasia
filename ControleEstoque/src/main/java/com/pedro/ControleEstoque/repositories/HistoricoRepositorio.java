package com.pedro.ControleEstoque.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pedro.ControleEstoque.models.Historico;

@Repository
public interface HistoricoRepositorio extends JpaRepository<Historico, String>{
    
}
