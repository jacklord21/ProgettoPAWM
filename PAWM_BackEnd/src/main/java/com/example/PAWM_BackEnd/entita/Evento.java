package com.example.PAWM_BackEnd.entita;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@SuppressWarnings("unused")
public class Evento
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String nome;
    private String descrizione;
    private int numeroPosti;
    private double prezzo;
    private String luogo;

    @OneToMany(mappedBy = "evento", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Prenota> partecipanti;

    public Evento() {
        this.partecipanti = new HashSet<>();
    }

    public Evento(String nome, String descrizione, int numeroPosti, double prezzo, String luogo) {
        this.nome = nome;
        this.descrizione = descrizione;
        this.numeroPosti = numeroPosti;
        this.prezzo = prezzo;
        this.luogo = luogo;
    }


    public String getNome() {
        return this.nome;
    }

    public String getDescrizione() {
        return this.descrizione;
    }

    public int getNumeroPosti() {
        return this.numeroPosti;
    }

    public double getPrezzo() {
        return this.prezzo;
    }

    public String getLuogo() {
        return this.luogo;
    }
}
