package com.pedro.ControleEstoque.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pedro.ControleEstoque.models.Cliente;
import com.pedro.ControleEstoque.repositories.ClienteRepositorio;
import com.pedro.ControleEstoque.repositories.FantasiaRepositorio;

@Service
public class ClienteService {
    
    @Autowired
    private ClienteRepositorio clienteRepositorio;

    @Autowired
    private FantasiaRepositorio fantasiaRepositorio;


    public Cliente findClienteById(Integer id){

        Optional<Cliente> cliente = this.clienteRepositorio.findById(id);

        return cliente.orElseThrow(() -> new RuntimeException(
            "Cliente não encontrado! ID: " + id + " não encontrado"));
    }

    public List<Cliente> findAllClientesDevendo(){

        return this.clienteRepositorio.findAllClientesDevendo();
    }

    public List<Cliente> findAllClientesNaoDevendo(){

        return this.clienteRepositorio.findAllClientesNaoDevendo();
    }
    public Cliente createCliente(Cliente cliente) {
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

    public boolean verificaNomeECpf(String nome, String cpf) {
        Optional<Cliente> cliente = clienteRepositorio.findByNomeAndCpf(nome, cpf);
        return cliente.isPresent();
    }

    public boolean verificaNomeECpfEditar(String nome, String cpf, Integer idCliente) {
        Optional<Cliente> cliente = clienteRepositorio.findByNomeAndCpfEditar(nome, cpf, idCliente);
        return cliente.isPresent();
    }
}
