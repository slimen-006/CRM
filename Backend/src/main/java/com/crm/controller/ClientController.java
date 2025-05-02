package com.crm.controller;

import com.crm.model.Admin;
import com.crm.model.Client;
import com.crm.service.AdminService;
import com.crm.service.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("api/client")
@RequiredArgsConstructor
public class ClientController {

    private final ClientService adminService ;

    @PostMapping("")
    public ResponseEntity<Client> create(@RequestBody Client dto){
        Client response = adminService.create(dto);
        return new ResponseEntity<Client>(response, HttpStatus.OK);

    }
}
