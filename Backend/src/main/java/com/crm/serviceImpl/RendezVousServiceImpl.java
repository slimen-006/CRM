package com.crm.serviceImpl;

import com.crm.exception.NotFoundException;
import com.crm.model.Client;
import com.crm.model.Commercial;
import com.crm.model.RendezVous;
import com.crm.model.User;
import com.crm.repository.ClientRepository;
import com.crm.repository.CommercialRepository;
import com.crm.repository.RendezVousRepository;
import com.crm.service.RendezVousService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RendezVousServiceImpl implements RendezVousService {


     private final RendezVousRepository rendezVousRepository ;
     private final ClientRepository clientRepository;
     private final CommercialRepository commercialRepository ;
    @Override
    public RendezVous create(RendezVous dto ) {
        return rendezVousRepository.save(dto);
    }

    @Override
    public RendezVous save(RendezVous rendezVous, Integer clientId) {
        Client client = clientRepository.findById(clientId)
                .orElseThrow(()-> new IllegalArgumentException("client not foudn"));
        rendezVous.setClient(client);
        return rendezVousRepository.save(rendezVous);
    }

    @Override
    public RendezVous update(Integer id, RendezVous dto) throws NotFoundException {
          RendezVous rendezVous = rendezVousRepository.findById(id)
                  .orElseThrow(()-> new RuntimeException("Rendezz-vous not found by id " + id));
          rendezVous.setDateHeure(dto.getDateHeure());
          rendezVous.setDescription(dto.getDescription());
          rendezVous.setLieu(dto.getLieu());

        return rendezVousRepository.save(rendezVous);
    }

    @Override
    public RendezVous findById(Integer id) throws NotFoundException {
        return rendezVousRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("Rendezz-vous not found by id " + id));
    }

    @Override
    public List<RendezVous> findAll() {
        return rendezVousRepository.findAll();
    }

    @Override
    public void delete(Integer id) throws NotFoundException {
         rendezVousRepository.deleteById(id);
    }


    @Override
    public List<RendezVous> getRendezVousByClientId(Integer clientId) {
        return rendezVousRepository.findByClientId(clientId);
    }

    @Override
    public List<RendezVous> getRendezVousByCommercialId(Integer commercialId) {
        return rendezVousRepository.findByCommercialId(commercialId);
    }

    public List<RendezVous> getRendezVousByClientIdAndCommercialId(Integer clientId, Integer commercialId) {
        return rendezVousRepository.findByClientIdAndCommercialId(clientId, commercialId);
    }

    @Override
    public RendezVous updateStatus(Integer commercialId, Integer rendezVoudId, String status) throws NotFoundException {
        Commercial commercial = commercialRepository.findById(commercialId)
                .orElseThrow(() -> new NotFoundException("Commercial with ID " + commercialId + " not found"));

        RendezVous rendezVous = rendezVousRepository.findById(rendezVoudId)
                .orElseThrow(() -> new NotFoundException("RendezVous with ID " + rendezVoudId + " not found"));

        rendezVous.setCommercial(commercial);
        rendezVous.setStatus(status);
        return rendezVousRepository.save(rendezVous);
    }

    @Override
    public RendezVous updateStatusCommercial(Integer rendezVoudId, String status) throws NotFoundException {
        RendezVous rendezVous = rendezVousRepository.findById(rendezVoudId)
                .orElseThrow(() -> new NotFoundException("RendezVous with ID " + rendezVoudId + " not found"));

        rendezVous.setStatus(status);
        return rendezVousRepository.save(rendezVous);
    }
}
