package com.crm.controller;
import com.crm.exception.NotFoundException;
import com.crm.model.Contrat;
import com.crm.model.Contrat;
import com.crm.service.ContratService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/contrat")
@RequiredArgsConstructor
public class ContratController {
     // private  final ContratService contratService ;
    private final ContratService contratService ;

    @PostMapping("/{clientId}/{commercialId}")
    public Contrat create( @PathVariable Integer clientId , @PathVariable Integer commercialId , @RequestBody Contrat contrat){
        return contratService.save(contrat , clientId , commercialId);
    }
    @PutMapping("/{id}")
    public Contrat update(@PathVariable Integer id, @RequestBody Contrat contrat)
            throws NotFoundException {
        return  contratService.update(id, contrat);
    }

    @GetMapping("/{id}")
    public Contrat findById(@PathVariable Integer id) throws NotFoundException {
        return contratService.findById(id);
    }
    @GetMapping("")
    public List<Contrat> findAll() {
        return contratService.findAll();
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) throws NotFoundException {
        contratService.delete(id);

    }


    // Endpoint pour récupérer les contrats par clientId
    @GetMapping("/client/{clientId}")
    public List<Contrat> getContratsByClientId(@PathVariable Integer clientId) {
        return contratService.getContratsByClientId(clientId);
    }

    // Endpoint pour récupérer les contrats par commercialId
    @GetMapping("/commercial/{commercialId}")
    public List<Contrat> getContratsByCommercialId(@PathVariable Integer commercialId) {
        return contratService.getContratsByCommercialId(commercialId);
    }

 
}
