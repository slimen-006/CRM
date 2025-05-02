package com.crm.service;

import com.crm.exception.NotFoundException;

import java.util.List;




public interface BaseService<T , ID> {
    T create(T dto);
    T update(ID id, T dto) throws NotFoundException;
    T findById(ID id) throws NotFoundException;
    List<T> findAll();
    void delete(ID id) throws NotFoundException;

}
