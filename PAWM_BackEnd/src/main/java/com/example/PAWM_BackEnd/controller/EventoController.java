package com.example.PAWM_BackEnd.controller;

import com.example.PAWM_BackEnd.Repository.EventoRepository;
import com.example.PAWM_BackEnd.Repository.PrenotaRepository;
import com.example.PAWM_BackEnd.entita.Evento;
import com.example.PAWM_BackEnd.entita.Prenota;
import com.example.PAWM_BackEnd.entita.Utente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin()
public class EventoController
{
    @Autowired
    private EventoRepository er;

    @Autowired
    private PrenotaRepository pr;

    @GetMapping("/eventi")
    public List<Evento> getDisponibili() {
        return new ArrayList<>(this.er.findByDataAfter(LocalDate.now()));
    }


    @PostMapping(value = "/eventi")
    public List<Integer> getPostiRimanenti(@RequestBody List<Evento> eventi) {
        return eventi.stream().map(this::getPostiDisponibiliOf).collect(Collectors.toList());
    }

    @RequestMapping(value = "/listaEventiPrenotati/{utenteId}", method = RequestMethod.GET)
    public Collection<Evento> getEventi(@PathVariable("utenteId") long utenteId){
        System.out.println("Ecco l'id che ho ricevuto: "+utenteId);
        return this.pr.findByUtenteId(utenteId).stream()
                .map(p -> this.er.findByPartecipantiId(p.getId()))
                .collect(Collectors.toList());
    }

    @RequestMapping(value = "/getPrenotazione/{eventoId}/{utenteId}", method = RequestMethod.GET)
    public Prenota getPrenotazione(@PathVariable("eventoId") long eventoId, @PathVariable("utenteId") long utenteId){
        System.out.println("Ecco l'id evento: "+eventoId+" utente: "+utenteId);
        return this.pr.findByUtenteIdAndEventoId(utenteId, eventoId);
    }

    @PutMapping("/cancellaPrenotazione")
    public void cancellaPrenotazione(@RequestBody long prenotazioneId) {
        System.out.println("Ho ricevuto la prenotazione: "+prenotazioneId);
        this.pr.deleteById(prenotazioneId);
    }

    private int getPostiDisponibiliOf(Evento e) {
        return e.getNumeroPosti() - (
                this.pr.findByEventoId(e.getId()).stream()
                        .map(Prenota::getNumPartecipanti)
                        .reduce(0, Integer::sum));
    }

    public void eliminaPrenotazioni(Utente utente){
        this.pr.deleteAll(this.pr.findByUtenteId(utente.getId()));
    }
}
