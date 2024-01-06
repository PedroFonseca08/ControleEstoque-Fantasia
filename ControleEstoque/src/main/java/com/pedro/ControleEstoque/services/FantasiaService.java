package com.pedro.ControleEstoque.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pedro.ControleEstoque.models.Historico;
import com.pedro.ControleEstoque.repositories.HistoricoRepositorio;

@Service
public class FantasiaService {
    
    @Autowired
    private HistoricoRepositorio historicoRepositorio;
    
    public Historico findFantatasiaById(Integer id){
        Optional<Historico> fantasia = this.historicoRepositorio.findByIdFantasia(id);

        return fantasia.orElseThrow(() -> new RuntimeException(
            "Cliente não encontrado! ID: " + id + " não encontrado"));
    }

    public List<Historico> findFantasiaByIdCliente(Integer id){

        List<Historico> fantasias = this.historicoRepositorio.findFantasiaByIdCliente(id);

        return fantasias;
    }

    public Historico updadeFantasia(Historico fantasia){
        Historico novaFantasia = findFantatasiaById(fantasia.getIdFantasia());
        novaFantasia = fantasia;

        return this.historicoRepositorio.save(novaFantasia);
    }

    public void deleteFantasia(Integer id){
        findFantatasiaById(id);
        try {
            this.historicoRepositorio.deleteFantasiaById(id);
        } catch (Exception e) {
            throw new RuntimeException("Não foi possível excluir fantasia");
        }
    }
}
