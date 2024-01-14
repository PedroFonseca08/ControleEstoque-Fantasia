package com.pedro.ControleEstoque.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pedro.ControleEstoque.models.Fantasia;
import com.pedro.ControleEstoque.repositories.FantasiaRepositorio;
import org.springframework.transaction.annotation.Transactional;

@Service
public class FantasiaService {
    
    @Autowired
    private FantasiaRepositorio fantasiaRepositorio;

    public Fantasia createFantasia(Fantasia fantasia){
        fantasia.setIdFantasia(null);
        fantasia = this.fantasiaRepositorio.save(fantasia);
        return  fantasia;
    }

    public Fantasia findFantatasiaById(Integer id){
        Optional<Fantasia> fantasia = this.fantasiaRepositorio.findByIdFantasia(id);

        return fantasia.orElseThrow(() -> new RuntimeException(
            "Cliente não encontrado! ID: " + id + " não encontrado"));
    }

    public List<Fantasia> findFantasiaByIdCliente(Integer id){

        List<Fantasia> fantasias = this.fantasiaRepositorio.findFantasiaByIdCliente(id);

        return fantasias;
    }

    public Fantasia updadeFantasia(Fantasia fantasia){
        Fantasia novaFantasia = findFantatasiaById(fantasia.getIdFantasia());
        novaFantasia = fantasia;

        return this.fantasiaRepositorio.save(novaFantasia);
    }

    @Transactional
    public void deleteFantasia(Integer idFantasia) {
        try {
            // Lógica para excluir a fantasia pelo ID
            fantasiaRepositorio.deleteFantasiaById(idFantasia);
        } catch (Exception e) {
            throw new RuntimeException("Não foi possível excluir fantasia", e);
        }
    }
}
