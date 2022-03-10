package com.example.PAWM_BackEnd.controller;

import com.example.PAWM_BackEnd.entita.Evento;
import com.example.PAWM_BackEnd.repository.EventoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
@CrossOrigin()
public class EventoController
{
    @Autowired
    private EventoRepository er;

    @GetMapping("/eventi")
    public List<Evento> getAll() {
        return StreamSupport.stream(this.er.findAll().spliterator(), false).collect(Collectors.toList());
    }

}
