package com.pedro.ControleEstoque.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pedro.ControleEstoque.models.Cliente;
import com.pedro.ControleEstoque.services.ClienteService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/cliente")
@Validated
public class ClienteController {
    
    @Autowired
    private ClienteService clienteService;

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> encontrarPeloId(@PathVariable Integer id) {
        Cliente objCliente = this.clienteService.findClienteById(id);

        return ResponseEntity.ok().body(objCliente);
    }

    @PostMapping
    public ResponseEntity<Cliente> criarUsuario(@Valid @RequestBody Cliente objCliente) {
        this.clienteService.createCliente(objCliente);

        return ResponseEntity.ok(objCliente);
    }
}
