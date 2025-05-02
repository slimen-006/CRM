package com.crm.serviceImpl;

import com.crm.exception.NotFoundException;
import com.crm.model.Client;
import com.crm.repository.ClientRepository;
import com.crm.service.ClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClientServiceImpl  implements ClientService {


    private final ClientRepository clientRepository ;


    @Override
    public Client create(Client dto) {
        return clientRepository.save(dto);
    }

    @Override
    public Client update(Integer integer, Client dto) throws NotFoundException {
        return null;
    }

    @Override
    public Client findById(Integer integer) throws NotFoundException {
        return null;
    }

    @Override
    public List<Client> findAll() {
        return null;
    }

    @Override
    public void delete(Integer integer) throws NotFoundException {

    }
}
