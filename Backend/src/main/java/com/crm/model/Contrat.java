package com.crm.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Contrat {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id ;
    private LocalDate dateDebut;
    private LocalDate dateFin;
    private BigDecimal montant;
    private String statut;
    private String typeContrat;
    private String description;
    private LocalDate dateCreation;
    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;
    @ManyToOne
    @JoinColumn(name = "commercial_id")
    private Commercial commercial;
}
