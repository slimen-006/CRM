package com.crm.repository;

import com.crm.model.RendezVous;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RendezVousRepository extends JpaRepository<RendezVous , Integer> {
        // Méthode pour filtrer par clientId
        List<RendezVous> findByClientId(Integer clientId);
        // Méthode pour filtrer par commercialId
        List<RendezVous> findByCommercialId(Integer commercialId);
        // Méthode pour filtrer par clientId et commercialId
        List<RendezVous> findByClientIdAndCommercialId(Integer clientId, Integer commercialId);

}
