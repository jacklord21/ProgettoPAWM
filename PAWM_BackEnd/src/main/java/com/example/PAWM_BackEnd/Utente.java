package com.example.PAWM_BackEnd;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;
import java.util.Date;

@Entity
public class Utente {

    @Id
    @GeneratedValue
    private long id;
    private String nome;
    private String cognome;
    private LocalDate dataNascita;

    public String getNome() {
        return nome;
    }

    public String getCognome() {
        return cognome;
    }

    public LocalDate getDataNascita() {
        return dataNascita;
    }

    public String getEmail() {
        return email;
    }

    private String email;

    Utente(){
    }

    public Utente(String nome, String cognome, LocalDate dataNascita, String email) {
        this.nome = nome;
        this.cognome = cognome;
        this.dataNascita = dataNascita;
        this.email = email;
    }
}
