package com.example.PAWM_BackEnd.entita;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Utente
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nome;
    private String cognome;
    private LocalDate dataNascita;
    private String email;

    @OneToMany(mappedBy = "utente", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Prenota> prenotazioni;

    public Utente() {
        this.prenotazioni = new HashSet<>();
    }

    public Utente(String nome, String cognome, LocalDate dataNascita, String email) {
        this.nome = nome;
        this.cognome = cognome;
        this.dataNascita = dataNascita;
        this.email = email;
    }

    public String getNome() {
        return this.nome;
    }

    public String getCognome() {
        return this.cognome;
    }

    public LocalDate getDataNascita() {
        return this.dataNascita;
    }

    public String getEmail() {
        return this.email;
    }
}
