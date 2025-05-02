package com.crm.service;

import com.crm.model.Contrat;

import java.util.List;

public interface ContratService  extends BaseService<Contrat, Integer> {


    List<Contrat> getContratsByClientId(Integer clientId);

    List<Contrat> getContratsByCommercialId(Integer commercialId);

    Contrat save(Contrat contrat, Integer clientId, Integer commercialId);

    List<Contrat> findByStatut(String statut , Integer commercialId);
}
