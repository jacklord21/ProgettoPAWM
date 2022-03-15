package com.example.PAWM_BackEnd.entita;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@SuppressWarnings("unused")
public class Prenota
{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private LocalDate data;
    private int numPartecipanti;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "evento_id", nullable = false)
    private Evento evento;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "utente_id", nullable = false)
    private Utente utente;


    public Prenota() {}

    public Prenota(Utente utente, Evento evento, LocalDate data, int numPartecipanti) {
        this.utente = utente;
        this.evento = evento;
        this.data = data;
        this.numPartecipanti = numPartecipanti;
    }


    public long getId() {
        return id;
    }

    public int getNumPartecipanti() {
        return numPartecipanti;
    }

    public LocalDate getData() {
        return data;
    }

    public void addPartecipanti(int aggiunta){
        this.numPartecipanti += aggiunta;
    }
}
