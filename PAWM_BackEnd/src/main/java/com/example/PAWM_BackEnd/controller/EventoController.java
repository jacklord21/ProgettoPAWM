package com.example.PAWM_BackEnd.controller;

import com.example.PAWM_BackEnd.entita.Evento;
import com.example.PAWM_BackEnd.repository.EventoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin()
public class EventoController
{
    @Autowired
    private EventoRepository er;

    @GetMapping("/eventi")
    public List<Evento> getDisponibili() {
        return new ArrayList<>(this.er.findByDataSvolgimentoAfter(LocalDate.now()));
    }

}
