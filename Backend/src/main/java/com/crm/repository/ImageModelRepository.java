package com.crm.repository;


import com.crm.model.ImageModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageModelRepository extends JpaRepository<ImageModel, Integer> {

    ImageModel findByUserId(String userId);

}
