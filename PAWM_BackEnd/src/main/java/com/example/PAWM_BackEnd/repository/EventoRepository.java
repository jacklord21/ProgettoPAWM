package com.example.PAWM_BackEnd.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.PAWM_BackEnd.entita.Evento;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface EventoRepository extends CrudRepository<Evento, Long>
{
    List<Evento> findByDataSvolgimentoAfter(LocalDate data);
}
