package com.pedro.ControleEstoque.controllers;

import com.pedro.ControleEstoque.models.ClienteDTO;
import com.pedro.ControleEstoque.models.Fantasia;
import com.pedro.ControleEstoque.services.FantasiaService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import com.pedro.ControleEstoque.models.Cliente;
import com.pedro.ControleEstoque.services.ClienteService;

import java.util.ArrayList;
import java.util.List;

@Controller
public class ClienteController {
    
    @Autowired
    private ClienteService clienteService;

    @Autowired
    private FantasiaService fantasiaService;

    private ModelAndView mv;

    private Integer idClienteFantasia;

    @GetMapping("/{id}")
    public ResponseEntity<ClienteDTO> encontrarPeloId(@PathVariable Integer id) {
        Cliente objCliente = this.clienteService.findClienteById(id);
        List<Fantasia> fantasias = this.fantasiaService.findFantasiaByIdCliente(id);
        idClienteFantasia = id;
        ClienteDTO clienteDTO = new ClienteDTO(objCliente.getNomeCliente(), fantasias);
        clienteDTO.setIdCliente(idClienteFantasia);
        clienteDTO.setCepCliente(objCliente.getCepCliente());
        clienteDTO.setCpfCliente(objCliente.getCpfCliente());
        clienteDTO.setEndCliente(objCliente.getEndCliente());
        clienteDTO.setDataNascCliente(objCliente.getDataNascCliente());
        clienteDTO.setTelCliente(objCliente.getTelCliente());
        clienteDTO.setObservacaoCliente(objCliente.getObservacaoCliente());
        clienteDTO.setRgCliente(objCliente.getRgCliente());
        return ResponseEntity.ok().body(clienteDTO);
    }

    @GetMapping("/fantasias/{id}")
    public ResponseEntity<Fantasia> encontrarFantasiasPeloIdCliente(@PathVariable Integer id) {
        List<Fantasia> fantasias = this.fantasiaService.findFantasiaByIdCliente(id);
        return ResponseEntity.ok().body((Fantasia) fantasias);
    }

    @GetMapping("/principal")
    public ModelAndView list() {
        List<Cliente> clientesAux = this.clienteService.findAllClientesDevendo();
        List<ClienteDTO> clientes = new ArrayList<>();

        for (Cliente aux : clientesAux) {
            ClienteDTO clienteDTO = new ClienteDTO();
            clienteDTO.setIdCliente(aux.getIdCliente());
            clienteDTO.setNomeCliente(aux.getNomeCliente());
            clienteDTO.setCepCliente(aux.getCepCliente());
            clienteDTO.setCpfCliente(aux.getCpfCliente());
            clienteDTO.setEndCliente(aux.getEndCliente());
            clienteDTO.setDataNascCliente(aux.getDataNascCliente());
            clienteDTO.setTelCliente(aux.getTelCliente());
            clienteDTO.setObservacaoCliente(aux.getObservacaoCliente());
            clienteDTO.setRgCliente(aux.getRgCliente());
            clienteDTO.setTemAviso(true);
            clientes.add(clienteDTO);
        }

        clientesAux = this.clienteService.findAllClientesNaoDevendo();
        for (Cliente aux : clientesAux) {
            ClienteDTO clienteDTO = new ClienteDTO();
            clienteDTO.setIdCliente(aux.getIdCliente());
            clienteDTO.setNomeCliente(aux.getNomeCliente());
            clienteDTO.setCepCliente(aux.getCepCliente());
            clienteDTO.setCpfCliente(aux.getCpfCliente());
            clienteDTO.setEndCliente(aux.getEndCliente());
            clienteDTO.setDataNascCliente(aux.getDataNascCliente());
            clienteDTO.setTelCliente(aux.getTelCliente());
            clienteDTO.setObservacaoCliente(aux.getObservacaoCliente());
            clienteDTO.setRgCliente(aux.getRgCliente());
            clientes.add(clienteDTO);
        }

        Cliente cliente = new Cliente();
        Fantasia fantasia = new Fantasia();
        List<Fantasia> fantasias = new ArrayList<>();
        mv = new ModelAndView("principal");
        mv.addObject("clientes", clientes);
        mv.addObject("cliente", cliente);
        mv.addObject("fantasia", fantasia);
        mv.addObject("fantasias", fantasias);
        return mv;
    }

    @PostMapping("/create")
    public ResponseEntity<Integer> criarUsuario(@ModelAttribute @Valid Cliente objCliente) {
        Cliente clienteNovo = this.clienteService.createCliente(objCliente);

        return ResponseEntity.ok().body(clienteNovo.getIdCliente());
    }

    @PostMapping("/update")
    public String updateUsuario(@ModelAttribute @Valid Cliente objCliente) {
        objCliente.setIdCliente(idClienteFantasia);
        this.clienteService.updateCliente(objCliente);

        return "redirect:/principal";
    }

    @GetMapping("/delete/{id}")
    public String deletarUsuario(@PathVariable Integer id) {
        this.clienteService.deleteCliente(id);

        return "redirect:/principal";
    }

    @GetMapping("/verifica")
    public ResponseEntity<String> verificaNomeECpf(
            @RequestParam String nome,
            @RequestParam String cpf) {

        boolean clienteExiste = this.clienteService.verificaNomeECpf(nome, cpf);

        if (clienteExiste) {
            return ResponseEntity.status(401).body("Cliente já existe com esse nome ou CPF");
        } else {
            return ResponseEntity.ok().body("Cliente não existe. Pode continuar.");
        }
    }

    @GetMapping("/verificaEditar")
    public ResponseEntity<String> verificaNomeECpfEditar(
            @RequestParam String nome,
            @RequestParam String cpf) {

        boolean clienteExiste = this.clienteService.verificaNomeECpfEditar(nome, cpf, idClienteFantasia);

        if (clienteExiste) {
            return ResponseEntity.status(401).body("Cliente já existe com esse nome ou CPF");
        } else {
            return ResponseEntity.ok().body("Cliente não existe. Pode continuar.");
        }
    }

    @PostMapping("/createFantasia")
    public ResponseEntity<Integer> createFantasia(@ModelAttribute @Valid Fantasia objFantasia){
        objFantasia.setIdCliente(idClienteFantasia);
        this.fantasiaService.createFantasia(objFantasia);
        return ResponseEntity.ok().body(objFantasia.getIdCliente());
    }

    @GetMapping("/excluirFantasia/{id}")
    public ResponseEntity<Integer> deletarFantasia(@PathVariable Integer id) {
        Fantasia objFantasia = this.fantasiaService.findFantatasiaById(id);
        this.fantasiaService.deleteFantasia(id);
        return ResponseEntity.ok().body(objFantasia.getIdCliente());
    }
    @GetMapping("/atualizar-baixa-fantasia/{id}")
    public ResponseEntity<String> atualizarBaixaFantasia(@PathVariable Integer id) {
        try {
            Fantasia objFantasia = this.fantasiaService.findFantatasiaById(id);
            if(objFantasia.getBaixaFantasia() == null){
                objFantasia.setBaixaFantasia("S");
            }
            else{
                objFantasia.setBaixaFantasia(null);
            }
            this.fantasiaService.updadeFantasia(objFantasia);
            return ResponseEntity.ok("Valor atualizado com sucesso.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Erro ao atualizar o valor no banco de dados.");
        }
    }
}
