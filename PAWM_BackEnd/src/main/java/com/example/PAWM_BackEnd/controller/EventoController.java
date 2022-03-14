package com.example.PAWM_BackEnd.controller;

import com.example.PAWM_BackEnd.Repository.EventoRepository;
import com.example.PAWM_BackEnd.Repository.PrenotaRepository;
import com.example.PAWM_BackEnd.entita.Evento;
import com.example.PAWM_BackEnd.entita.Prenota;
import com.example.PAWM_BackEnd.entita.Utente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

<<<<<<< HEAD
import java.util.Collection;
=======
import java.time.LocalDate;
import java.util.ArrayList;
>>>>>>> b80ae4ecfbace377a889edc986f399525dfa92cf
import java.util.List;

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
        return new ArrayList<>(this.er.findByDataSvolgimentoAfter(LocalDate.now()));
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
}
