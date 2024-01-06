package com.pedro.ControleEstoque.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pedro.ControleEstoque.models.Cliente;
import com.pedro.ControleEstoque.repositories.ClienteRepositorio;
import com.pedro.ControleEstoque.repositories.HistoricoRepositorio;

@Service
public class ClienteService {
    
    @Autowired
    private ClienteRepositorio clienteRepositorio;

    @Autowired
    private HistoricoRepositorio historicoRepositorio;


    public Cliente findClienteById(Integer id){

        Optional<Cliente> cliente = this.clienteRepositorio.findById(id);

        return cliente.orElseThrow(() -> new RuntimeException(
            "Cliente não encontrado! ID: " + id + " não encontrado"));
    }

    public List<Cliente> findAllClientes(){
        List<Cliente> listaClientes = this.clienteRepositorio.findAll();

        return listaClientes;
    }

    public Cliente createCliente (Cliente cliente){
        cliente.setIdCliente(null);
        cliente = this.clienteRepositorio.save(cliente);

        return cliente;
    }

    public Cliente updateCliente(Cliente cliente){
        Cliente novoCliente = findClienteById(cliente.getIdCliente());
        novoCliente = cliente;

        return this.clienteRepositorio.save(novoCliente);
    }

    public void deleteCliente(Integer id){
        findClienteById(id);
        try {
            this.clienteRepositorio.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException("Não foi possível excluir cliente");
        }
    }
}
