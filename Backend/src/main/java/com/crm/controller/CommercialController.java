package com.crm.controller;

import com.crm.model.Commercial;
import com.crm.service.CommercialService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/commercial")
@RequiredArgsConstructor
public class CommercialController {

    private final CommercialService commercialService ;

    @PostMapping("")
    public ResponseEntity<Commercial> create(@RequestBody Commercial dto){
        Commercial response = commercialService.create(dto);
        return new ResponseEntity<Commercial>(response, HttpStatus.OK);

    }
}
