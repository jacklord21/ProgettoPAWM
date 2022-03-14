package com.example.PAWM_BackEnd.Repository;

import com.example.PAWM_BackEnd.entita.Evento;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
<<<<<<< HEAD
public interface EventoRepository extends CrudRepository<Evento, Long>{

    Evento findByPartecipantiId(long partecipanteId);
=======
public interface EventoRepository extends CrudRepository<Evento, Long>
{
    List<Evento> findByDataSvolgimentoAfter(LocalDate data);
>>>>>>> b80ae4ecfbace377a889edc986f399525dfa92cf
}
