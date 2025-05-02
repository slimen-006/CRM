package com.crm.serviceImpl;

import com.crm.exception.NotFoundException;
import com.crm.model.Admin;
import com.crm.repository.AdminRepository;
import com.crm.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class AdminServiceImpl  implements AdminService{

    private final AdminRepository adminRepository ;

    public Admin save(Admin entity) {
        return this.adminRepository.save(entity);
    }

    @Override
    public Admin create(Admin dto) {
        return save(dto);
    }

    @Override
    public Admin update(Integer id, Admin dto) throws NotFoundException {
        // TODO Auto-generated method stub
        return null;
    }
    @Override
    public Admin findById(Integer id) throws NotFoundException {
        // TODO Auto-generated method stub
        return null;
    }
    @Override
    public List<Admin> findAll() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void delete(Integer id) throws NotFoundException {
        // TODO Auto-generated method stub

    }

}
