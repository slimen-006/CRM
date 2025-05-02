package com.crm.controller;

import com.crm.exception.NotFoundException;
import com.crm.model.RendezVous;
import com.crm.model.User;
import com.crm.service.RendezVousService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/rendezVous")
@RequiredArgsConstructor
public class RendezVousController {

    private final RendezVousService rendezVousService;
    @PostMapping("/{clientId}")
    public RendezVous create( @PathVariable Integer clientId , @RequestBody RendezVous rendezVous ){
        return rendezVousService.save(rendezVous , clientId);
    }
    @PutMapping("/{id}")
    public RendezVous update(@PathVariable Integer id, @RequestBody RendezVous rendezVous)
            throws NotFoundException {
        return  rendezVousService.update(id, rendezVous);
    }


    @PutMapping("/updateStatus/{commercialId}/{rendezVoudId}/{status}")
    public RendezVous update(@PathVariable Integer commercialId, @PathVariable Integer rendezVoudId, @PathVariable String status)
            throws NotFoundException {
        return  rendezVousService.updateStatus(commercialId, rendezVoudId , status);
    }

    @PutMapping("/updateStatus/{rendezVoudId}/{status}")
    public RendezVous updateStatusCommercial(@PathVariable Integer rendezVoudId, @PathVariable String status)
            throws NotFoundException {
        return  rendezVousService.updateStatusCommercial(rendezVoudId , status);
    }

    @GetMapping("/{id}")
    public RendezVous findById(@PathVariable Integer id) throws NotFoundException {
        return rendezVousService.findById(id);
    }
    @GetMapping("")
    public List<RendezVous> findAll() {
        return rendezVousService.findAll();
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) throws NotFoundException {

        rendezVousService.delete(id);
    }

    // Endpoint pour récupérer les rendez-vous par clientId
    @GetMapping("/client/{clientId}")
    public List<RendezVous> getRendezVousByClientId(@PathVariable Integer clientId) {
        return rendezVousService.getRendezVousByClientId(clientId);
    }
    // Endpoint pour récupérer les rendez-vous par commercialId
    @GetMapping("/commercial/{commercialId}")
    public List<RendezVous> getRendezVousByCommercialId(@PathVariable Integer commercialId) {
        return rendezVousService.getRendezVousByCommercialId(commercialId);
    }
    // Endpoint pour récupérer les rendez-vous par clientId et commercialId
    @GetMapping("/filter")
    public List<RendezVous> getRendezVousByClientAndCommercial(@RequestParam Integer clientId, @RequestParam Integer commercialId) {
        return rendezVousService.getRendezVousByClientIdAndCommercialId(clientId, commercialId);
    }
}
