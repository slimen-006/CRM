package com.crm.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class RendezVous {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;
    private LocalDateTime dateHeure;
    private String lieu;
    private String description;
    private String status;
    @ManyToOne
    @JoinColumn(name = "commercial_id")
    private Commercial commercial;
    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;


}
