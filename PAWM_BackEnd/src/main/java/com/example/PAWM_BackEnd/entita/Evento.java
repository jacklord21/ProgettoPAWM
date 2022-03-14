package com.example.PAWM_BackEnd.entita;

<<<<<<< HEAD
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
=======
>>>>>>> b80ae4ecfbace377a889edc986f399525dfa92cf
import org.apache.tomcat.jni.Local;

import javax.persistence.*;
import java.time.LocalDate;
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
<<<<<<< HEAD
    private LocalDate data;
    private String urlImg;
=======
    private LocalDate dataSvolgimento;
>>>>>>> b80ae4ecfbace377a889edc986f399525dfa92cf

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToMany(mappedBy = "evento", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Prenota> partecipanti;

    public Evento() {
        this.partecipanti = new HashSet<>();
    }

<<<<<<< HEAD
    public Evento(String nome, String descrizione, int numeroPosti, double prezzo, String luogo, LocalDate data) {
=======
    public Evento(String nome, String descrizione, int numeroPosti, double prezzo, String luogo, LocalDate dataSvolgimento) {
>>>>>>> b80ae4ecfbace377a889edc986f399525dfa92cf
        this.nome = nome;
        this.descrizione = descrizione;
        this.numeroPosti = numeroPosti;
        this.prezzo = prezzo;
        this.luogo = luogo;
<<<<<<< HEAD
        this.data = data;
=======
        this.dataSvolgimento = dataSvolgimento;
>>>>>>> b80ae4ecfbace377a889edc986f399525dfa92cf
    }

    public long getId() {
        return id;
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

<<<<<<< HEAD
    public LocalDate getData() {
        return data;
    }

    public String getUrlImg() {
        return urlImg;
=======
    public LocalDate getDataSvolgimento() {
        return this.dataSvolgimento;
>>>>>>> b80ae4ecfbace377a889edc986f399525dfa92cf
    }
}
