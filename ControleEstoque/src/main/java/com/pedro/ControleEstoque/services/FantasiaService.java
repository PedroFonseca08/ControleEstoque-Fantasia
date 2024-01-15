package com.pedro.ControleEstoque.services;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
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

    public Fantasia createFantasia(Fantasia fantasia) {
        fantasia.setIdFantasia(null);

        // Tratamento para a data de início
        String dataInicioFantasia = fantasia.getDataInicioFantasia();
        if (dataInicioFantasia != null) {
            dataInicioFantasia = dataInicioFantasia.replace(",", "");
            SimpleDateFormat inputFormat = new SimpleDateFormat("yyyy-MM-dd");
            SimpleDateFormat outputFormat = new SimpleDateFormat("dd/MM/yyyy");
            try {
                Date parsedDate = inputFormat.parse(dataInicioFantasia);
                String formattedDate = outputFormat.format(parsedDate);
                fantasia.setDataInicioFantasia(formattedDate);
            } catch (ParseException e) {
                e.printStackTrace(); // Trate a exceção de análise aqui, se necessário
            }
        }

        // Tratamento para a data de fim
        String dataFimFantasia = fantasia.getDataFimFantasia();
        if (dataFimFantasia != null) {
            dataFimFantasia = dataFimFantasia.replace(",", "");
            SimpleDateFormat inputFormatFim = new SimpleDateFormat("yyyy-MM-dd");
            SimpleDateFormat outputFormatFim = new SimpleDateFormat("dd/MM/yyyy");
            try {
                Date parsedDateFim = inputFormatFim.parse(dataFimFantasia);
                String formattedDateFim = outputFormatFim.format(parsedDateFim);
                fantasia.setDataFimFantasia(formattedDateFim);
            } catch (ParseException e) {
                e.printStackTrace(); // Trate a exceção de análise aqui, se necessário
            }
        }

        fantasia = this.fantasiaRepositorio.save(fantasia);
        return fantasia;
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

    public List<Fantasia> findAllFantasias(){

        List<Fantasia> fantasias = this.fantasiaRepositorio.findAllFantasias();

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
