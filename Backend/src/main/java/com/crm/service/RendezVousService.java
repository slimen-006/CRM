package com.crm.service;

import com.crm.exception.NotFoundException;
import com.crm.model.RendezVous;
import com.crm.model.User;

import java.util.List;

public interface RendezVousService extends BaseService<RendezVous, Integer> {
    RendezVous save(RendezVous rendezVous, Integer clientId);

    List<RendezVous> getRendezVousByClientId(Integer clientId);

    List<RendezVous> getRendezVousByCommercialId(Integer commercialId);

    List<RendezVous> getRendezVousByClientIdAndCommercialId(Integer clientId, Integer commercialId);

    RendezVous updateStatus(Integer commercialId, Integer rendezVoudId, String status) throws NotFoundException;

    RendezVous updateStatusCommercial(Integer rendezVoudId, String status) throws NotFoundException;
}
