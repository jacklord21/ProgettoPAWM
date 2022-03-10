package com.example.PAWM_BackEnd.controller;


import com.example.PAWM_BackEnd.repository.UtenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.PAWM_BackEnd.entita.Utente;

@RestController
@CrossOrigin()
public class UtenteController
{
    @Autowired
    private UtenteRepository ur;

    @PutMapping("/registrazione")
    public void add(@RequestBody Utente utente) {
        this.ur.save(utente);
    }

    @GetMapping("/dashboard")
    public Utente getByEmail(String email) {
        System.out.println("EMAIL: " + email);
        return this.ur.findByEmail(email);
    }
/*    @GetMapping("/utente")
    public List<Utente> getAll() {
        return StreamSupport.stream(this.ur.findAll().spliterator(), false).collect(Collectors.toList());
    }*/

}