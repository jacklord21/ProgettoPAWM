package com.example.PAWM_BackEnd;

import com.example.PAWM_BackEnd.Repository.UtenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:8100")
public class UtenteController {

    @Autowired
    private UtenteRepository ut;

    @PutMapping("/registrazione")
    public void registrazione(@RequestBody Utente utente){
        System.out.println(utente.getEmail());
        ut.save(utente);
    }

    @RequestMapping(value = "/login/{email}", method = RequestMethod.GET)
    public Utente login(@PathVariable("email") String email){
        System.out.println("Ho ricevuto: "+email);
        return ut.findByEmail(email);
    }

}
