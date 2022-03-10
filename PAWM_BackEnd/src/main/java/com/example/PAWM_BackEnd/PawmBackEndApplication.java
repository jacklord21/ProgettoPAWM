package com.example.PAWM_BackEnd;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PawmBackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(PawmBackEndApplication.class, args);
	}

	@Bean
	public CommandLineRunner init() {
		return args -> {
		};
	}

}
