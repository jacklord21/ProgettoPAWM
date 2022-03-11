package com.example.PAWM_BackEnd.repository;

import com.example.PAWM_BackEnd.entita.Utente;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtenteRepository extends CrudRepository<Utente, Long> {

    Utente findByEmail(String email);
}
