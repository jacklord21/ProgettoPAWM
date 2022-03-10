package com.example.PAWM_BackEnd.repository;

import com.example.PAWM_BackEnd.entita.Prenota;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrenotaRepository extends CrudRepository<Prenota, Long>
{
}
