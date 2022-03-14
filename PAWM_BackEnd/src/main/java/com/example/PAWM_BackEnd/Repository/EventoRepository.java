package com.example.PAWM_BackEnd.Repository;

import com.example.PAWM_BackEnd.entita.Evento;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface EventoRepository extends CrudRepository<Evento, Long>{

    Evento findByPartecipantiId(long partecipanteId);

    List<Evento> findByDataAfter(LocalDate data);
}
