package com.crm.serviceImpl;

import com.crm.exception.NotFoundException;
import com.crm.model.Commercial;
import com.crm.repository.CommercialRepository;
import com.crm.service.CommercialService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommercialServiceImpl  implements CommercialService  {

    private final CommercialRepository commercialRepository;
    @Override
    public Commercial create(Commercial dto) {
        return commercialRepository.save(dto);
    }

    @Override
    public Commercial update(Integer integer, Commercial dto) throws NotFoundException {
        return null;
    }

    @Override
    public Commercial findById(Integer integer) throws NotFoundException {
        return null;
    }

    @Override
    public List<Commercial> findAll() {
        return null;
    }

    @Override
    public void delete(Integer integer) throws NotFoundException {

    }
}
