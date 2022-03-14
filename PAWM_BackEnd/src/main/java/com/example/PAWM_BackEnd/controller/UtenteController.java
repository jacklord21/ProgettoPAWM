package com.example.PAWM_BackEnd.controller;


import com.example.PAWM_BackEnd.Repository.UtenteRepository;
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

    @RequestMapping(value = "/login/{email}", method = RequestMethod.GET)
    public Utente login(@PathVariable("email") String email){
        System.out.println("Ho ricevuto: "+email);
        return ur.findByEmail(email);
    }

    @PutMapping(value = "/aggiornaUtente")
    public void aggiornaUtente(@RequestBody Utente utente) {
        System.out.println("Email nuova: " +utente.getEmail());
        if(this.ur.findById(utente.getId()).isPresent()) {
            this.ur.save(utente);
        }
    }

}