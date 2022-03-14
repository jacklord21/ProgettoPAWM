package com.example.PAWM_BackEnd.Repository;

import com.example.PAWM_BackEnd.entita.Prenota;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PrenotaRepository extends CrudRepository<Prenota, Long> {

    List<Prenota> findByUtenteId(long utenteId);
    List<Prenota> findByEventoId(long id);
    Prenota findByUtenteIdAndEventoId(long utenteId, long eventoId);
}
