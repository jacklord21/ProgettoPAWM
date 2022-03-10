package com.example.PAWM_BackEnd.entita;

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
    private long ora;
    private int numPartecipanti;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "evento_id", nullable = false)
    private Evento evento;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "utente_id", nullable = false)
    private Utente utente;


    public Prenota() {}

    public Prenota(Utente utente, Evento evento, LocalDate data, long ora, int numPartecipanti) {
        this.utente = utente;
        this.evento = evento;
        this.data = data;
        this.ora = ora;
        this.numPartecipanti = numPartecipanti;
    }


    public int getNumPartecipanti() {
        return numPartecipanti;
    }

    public long getOra() {
        return ora;
    }

    public LocalDate getData() {
        return data;
    }
}
