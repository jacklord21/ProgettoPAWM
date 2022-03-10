package com.example.PAWM_BackEnd.Repository;

import com.example.PAWM_BackEnd.Utente;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtenteRepository extends CrudRepository<Utente, Long> {

    Utente findByEmail(String email);
}
