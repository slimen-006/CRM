package com.crm.serviceImpl;

import com.crm.exception.NotFoundException;
import com.crm.model.Client;
import com.crm.model.Commercial;
import com.crm.model.Contrat;
import com.crm.repository.ClientRepository;
import com.crm.repository.CommercialRepository;
import com.crm.repository.ContratRepository;
import com.crm.service.ContratService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ContratServiceImpl  implements ContratService {

     private final ContratRepository contratRepository ;
     private final ClientRepository clientRepository ;
     private final CommercialRepository commercialRepository ;
    @Override
    public Contrat create(Contrat dto) {
        return contratRepository.save(dto);
    }
    @Override
    public Contrat save(Contrat contrat, Integer clientId, Integer commercialId) {
        Client client = clientRepository.findById(clientId).orElseThrow();
        Commercial commercial = commercialRepository.findById(commercialId).orElseThrow();
        contrat.setDateCreation(LocalDate.now());
        contrat.setClient(client);
        contrat.setCommercial(commercial);
        return contratRepository.save(contrat);
    }

    @Override
    public List<Contrat> findByStatut(String statut, Integer commercialId) {
        return contratRepository.findByStatutAndCommercialId(statut , commercialId);
    }

    @Override
    public Contrat update(Integer id, Contrat dto) throws NotFoundException {
        Contrat contrat =  contratRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("Contrat not found by id"));
        // Mise à jour des champs si les valeurs sont non nulles
        contrat.setDateDebut(dto.getDateDebut() != null ? dto.getDateDebut() : contrat.getDateDebut());
        contrat.setDateFin(dto.getDateFin() != null ? dto.getDateFin() : contrat.getDateFin());
        contrat.setMontant(dto.getMontant() != null ? dto.getMontant() : contrat.getMontant());
        contrat.setStatut(dto.getStatut() != null ? dto.getStatut() : contrat.getStatut());
        contrat.setTypeContrat(dto.getTypeContrat() != null ? dto.getTypeContrat() : contrat.getTypeContrat());
        contrat.setDescription(dto.getDescription() != null ? dto.getDescription() : contrat.getDescription());
        return contratRepository.save(contrat);
    }

    @Override
    public Contrat findById(Integer id) throws NotFoundException {
        return contratRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("Contrat not found by id"));
    }

    @Override
    public List<Contrat> findAll() {
        return contratRepository.findAll();
    }

    @Override
    public void delete(Integer id) throws NotFoundException {
      contratRepository.deleteById(id);
    }

    @Override
    // Méthode pour récupérer les contrats par clientId
    public List<Contrat> getContratsByClientId(Integer clientId) {
        return contratRepository.findByClientId(clientId);
    }
    @Override
    // Méthode pour récupérer les contrats par commercialId
    public List<Contrat> getContratsByCommercialId(Integer commercialId) {
        return contratRepository.findByCommercialId(commercialId);
    }


}
